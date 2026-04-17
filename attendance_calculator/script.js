let total = 0;
let attended = 0;

// 🔄 Load from localStorage on start
window.onload = function () {
    let data = JSON.parse(localStorage.getItem("attendance"));

    if (data) {
        total = data.total || 0;
        attended = data.attended || 0;
    }

    updateDisplay();
};

// 💾 Save data
function saveData() {
    localStorage.setItem("attendance", JSON.stringify({
        total: total,
        attended: attended
    }));
}

// 🔔 Toast notification
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}



// ➕ Daily update
function updateAttendance() {
    let todayTotal = parseInt(document.getElementById("todayLectures").value) || 0;
    let todayAttended = parseInt(document.getElementById("todayAttended").value) || 0;

    total += todayTotal;
    attended += todayAttended;

    saveData();
    updateDisplay();
    showToast("Updated successfully ✅");

    // 🧹 Clear inputs after update
    document.getElementById("todayLectures").value = "";
    document.getElementById("todayAttended").value = "";
}

// 🧠 Update UI
function updateDisplay() {
    document.getElementById("total").innerText = total;
    document.getElementById("attended").innerText = attended;

    let percentage = total === 0 ? 0 : ((attended / total) * 100).toFixed(2);
    document.getElementById("percentage").innerText = percentage + "%";

    // 📊 Progress bar
    document.getElementById("progress").style.width = percentage + "%";

    // 🎯 Status
    let status = document.getElementById("status");
    if (percentage >= 75) {
        status.innerText = "✅ Safe zone (Above 75%)";
        status.style.color = "lightgreen";
    } else {
        status.innerText = "⚠️ Low attendance (Below 75%)";
        status.style.color = "orange";
    }

    // 😎 Bunk calculator
    let bunk = document.getElementById("bunk");

    let maxBunk = Math.floor(attended / 0.75 - total);

    if (maxBunk > 0) {
        bunk.innerText = `😎 You can bunk ${maxBunk} classes`;
    } else {
        let need = Math.ceil((0.75 * total - attended) / (1 - 0.75));
        bunk.innerText = `📚 Attend next ${need} classes to reach 75%`;
    }
}

// 🧹 Reset everything
function resetData() {
    if (confirm("Are you sure you want to reset?")) {
        localStorage.removeItem("attendance");
        total = 0;
        attended = 0;

        updateDisplay();
        showToast("Data reset 🧹");
    }
}

// 🔀 Switch screens (app UI)
function showScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");
}

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
        .then(() => console.log("Service Worker Registered"));
}
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;

    console.log("Install available");
});