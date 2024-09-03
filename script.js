const features = [
    "It is a lactose fermenter, which means it can ferment lactose to produce acid.",
    "commonly found in the lower intestine of warm-blooded organisms.",
    "Some strains of this bacterium can cause serious food poisoning."
];

let currentFeatureIndex = 0;

function nextFeature() {
    const featureElement = document.getElementById("feature");
    featureElement.style.opacity = 0;

    setTimeout(() => {
        featureElement.innerText = features[currentFeatureIndex];
        featureElement.style.opacity = 1;
        currentFeatureIndex++;
        
        if (currentFeatureIndex >= features.length) {
            document.getElementById("next-feature").style.display = "none";
            document.getElementById("show-question").classList.remove("hidden");
        }
    }, 1000);
}

function showQuestion() {
    document.getElementById("story-container").classList.add("hidden");
    document.getElementById("question-container").classList.remove("hidden");
    document.getElementById("question").innerText = "What is the Gram stain reaction of this bacterium?";
}

function checkAnswer(selectedOption) {
    const correctAnswer = "Gram-negative";
    const resultElement = document.getElementById("result");

    if (selectedOption.innerText === correctAnswer) {
        resultElement.innerText = "Correct!";
        resultElement.style.color = "green";
    } else {
        resultElement.innerText = "Wrong! The correct answer is: " + correctAnswer;
        resultElement.style.color = "red";
    }

    document.getElementById("result").classList.remove("hidden");
    document.getElementById("show-details").classList.remove("hidden");
}

function showDetails() {
    document.getElementById("question-container").classList.add("hidden");
    document.getElementById("result").classList.add("hidden");
    document.getElementById("show-details").classList.add("hidden");
    document.getElementById("details-container").classList.remove("hidden");
}

window.onload = function() {
    nextFeature();
};