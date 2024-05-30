let scores = {
    A: 0,
    B: 0
};

function updateScore(team) {
    document.getElementById(`team${team}Score`).textContent = scores[team];
}

function increaseScore(team) {
    scores[team]++;
    updateScore(team);
}

function decreaseScore(team) {
    if (scores[team] > 0) {
        scores[team]--;
        updateScore(team);
    }
}

function setScore(team) {
    let newScore = prompt("Yeni gol sayısını girin:");
    if (newScore !== null) {
        newScore = parseInt(newScore, 10);
        if (!isNaN(newScore) && newScore >= 0) {
            scores[team] = newScore;
            updateScore(team);
        } else {
            alert("Geçersiz değer. Lütfen bir sayı girin.");
        }
    }
}

function changeTeamName(team) {
    let newName = prompt("Yeni takım ismini girin:");
    if (newName !== null && newName.trim() !== "") {
        document.getElementById(`team${team}Name`).textContent = newName.trim();
    } else {
        alert("Geçersiz isim. Lütfen geçerli bir isim girin.");
    }
}