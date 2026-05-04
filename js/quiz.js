console.log("quiz.js loaded");

/* ===============================
   MAIN QUIZ FUNCTION
================================ */
function gradeQuiz() {

    let score = 0;
    let total = 5;

    // Q1 (text)
    let q1 = document.getElementById("q1").value.trim().toLowerCase();

    if (q1 === "") {
        showResult("q1-result", false, "Please enter an answer");
    } else if (q1.includes("hypertext transfer protocol") || q1.includes("http")) {
        score++;
        showResult("q1-result", true, "Correct");
    } else {
        showResult("q1-result", false, "Correct answer: Hypertext Transfer Protocol");
    }

    // Q2 (HTTPS)
    let q2 = document.querySelector('input[name="q2"]:checked');

    if (!q2) {
        showResult("q2-result", false, "Please select an answer");
    } else if (q2.value === "HTTPS") {
        score++;
        showResult("q2-result", true, "Correct");
    } else {
        showResult("q2-result", false, "Correct answer: HTTPS");
    }

    // Q3 (Request-response)
    let q3 = document.querySelector('input[name="q3"]:checked');

    if (!q3) {
        showResult("q3-result", false, "Please select an answer");
    } else if (q3.value === "request") {
        score++;
        showResult("q3-result", true, "Correct");
    } else {
        showResult("q3-result", false, "Correct answer: Request-response");
    }

    // Q4 (HTTP/2)
    let q4 = document.querySelector('input[name="q4"]:checked');

    if (!q4) {
        showResult("q4-result", false, "Please select an answer");
    } else if (q4.value === "http2") {
        score++;
        showResult("q4-result", true, "Correct");
    } else {
        showResult("q4-result", false, "Correct answer: HTTP/2");
    }

    // Q5 (checkbox)
    let checkboxes = document.querySelectorAll('input[name="q5"]:checked');
    let values = Array.from(checkboxes).map(cb => cb.value);

    if (values.length === 0) {
        showResult("q5-result", false, "Please select at least one option");
    } else if (
        values.includes("multiplexing") &&
        values.includes("binary") &&
        values.length === 2
    ) {
        score++;
        showResult("q5-result", true, "Correct");
    } else {
        showResult("q5-result", false, "Correct answers: Multiplexing, Binary framing");
    }

    // Final result
    let passFail = score >= 3 ? "PASS" : "FAIL";

    document.getElementById("results").innerHTML = `
        <h2 style="color:${passFail === "PASS" ? "green" : "red"}">
            ${passFail}
        </h2>
        <p><strong>Score:</strong> ${score}/${total}</p>
    `;
}



function showResult(id, correct, message) {
    const element = document.getElementById(id);

    if (!element) return;

    element.textContent = message;
    element.style.color = correct ? "green" : "red";
}


/* ===============================
   RESET QUIZ
================================ */
function resetQuiz() {

    document.getElementById("results").innerHTML = "";

    document.querySelectorAll("p[id$='-result']").forEach(p => {
        p.textContent = "";
    });

    document.getElementById("q1").value = "";

    document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
    document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
}