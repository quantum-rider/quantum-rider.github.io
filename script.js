function addRecommendation() {
    let input = document.getElementById("recommend_input").value;
    if (input) {
        let recommendations = document.getElementById("recommendations");
        let newRecommendation = document.createElement("div");
        newRecommendation.className = "recommendation";
        newRecommendation.innerText = `"${input}"`;
        recommendations.appendChild(newRecommendation);
        document.getElementById("recommend_input").value = "";
        
        // Show confirmation popup
        showPopup(true);
    }
}

function showPopup(show) {
    let popup = document.getElementById("popup");
    if (show) {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}
