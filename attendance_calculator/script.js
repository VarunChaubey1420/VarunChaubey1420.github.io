let total = 0;
let attended = 0;

// Load from localStorage
window.onload = function () {
    let data = JSON.parse(localStorage.getItem("attendance"));

    if (data) {
        total = data.total;
        attended = data.attended;
        updateDisplay();
    }
};

function saveData() {
    localStorage.setItem("attendance", JSON.stringify({ total, attended }));
}

function setInitial() {
    total = parseInt(document.getElementById("totalLectures").value) || 0;
    attended = parseInt(document.getElementById("attendedLectures").value) || 0;

    saveData();
    updateDisplay();
}

function updateAttendance() {
    let todayTotal = parseInt(document.getElementById("todayLectures").value) || 0;
    let todayAttended = parseInt(document.getElementById("todayAttended").value) || 0;

    total += todayTotal;
    attended += todayAttended;

    saveData();
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("total").innerText = total;
    document.getElementById("attended").innerText = attended;

    let percentage = total === 0 ? 0 : ((attended / total) * 100).toFixed(2);
    document.getElementById("percentage").innerText = percentage + "%";

    // Progress bar
    document.getElementById("progress").style.width = percentage + "%";

    // Status
    let status = document.getElementById("status");
    if (percentage >= 75) {
        status.innerText = "✅ Safe zone (Above 75%)";
        status.style.color = "lightgreen";
    } else {
        status.innerText = "⚠️ Low attendance (Below 75%)";
        status.style.color = "orange";
    }

    // Bunk calculator
    let bunk = document.getElementById("bunk");

    let maxBunk = Math.floor(attended / 0.75 - total);

    if (maxBunk > 0) {
        bunk.innerText = `😎 You can bunk ${maxBunk} classes`;
    } else {
        let need = Math.ceil((0.75 * total - attended) / (1 - 0.75));
        bunk.innerText = `📚 Attend next ${need} classes to reach 75%`;
    }
}