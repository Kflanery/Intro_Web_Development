function gradeQuiz() {

    let score = 0;

    // Q1
    let q1 = document.getElementById("q1").value.toLowerCase();
    if (q1.includes("hypertext transfer protocol")) {
        score++;
        showResult("q1-result", true, "Correct");
    } else {
        showResult("q1-result", false, "Correct answer: Hypertext Transfer Protocol");
    }

    // Q2
    let q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "b") {
        score++;
        showResult("q2-result", true, "Correct");
    } else {
        showResult("q2-result", false, "Correct answer: HTTPS");
    }

    // Q3
    let q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === "b") {
        score++;
        showResult("q3-result", true, "Correct");
    } else {
        showResult("q3-result", false, "Correct answer: Request-response");
    }

    // Q4
    let q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === "c") {
        score++;
        showResult("q4-result", true, "Correct");
    } else {
        showResult("q4-result", false, "Correct answer: HTTP/2");
    }

    // Q5
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let values = Array.from(checkboxes).map(cb => cb.value);

    if (values.includes("multiplexing") && values.includes("binary") && values.length === 2) {
        score++;
        showResult("q5-result", true, "Correct");
    } else {
        showResult("q5-result", false, "Correct answers: Multiplexing, Binary framing");
    }

    let resultText = `Score: ${score}/5`;
    let passFail = score >= 3 ? "PASS" : "FAIL";

    document.getElementById("results").innerHTML = `
        <h2 style="color:${score >= 3 ? 'green' : 'red'}">${passFail}</h2>
        <p>${resultText}</p>
    `;
}

function showResult(id, correct, message) {
    let element = document.getElementById(id);
    element.textContent = message;
    element.style.color = correct ? "green" : "red";
}

function resetQuiz() {
    document.getElementById("results").innerHTML = "";
    document.querySelectorAll("p[id$='-result']").forEach(p => p.textContent = "");
}