function gradeQuiz() {

    let score = 0;
    let total = 5;

    // Q1 (Fill in blank)
    let q1 = document.getElementById("q1").value.trim().toLowerCase();

    if (q1 === "") {
        showResult("q1-result", false, "Please enter an answer");
    } else if (q1.includes("hypertext transfer protocol")) {
        score++;
        showResult("q1-result", true, "Correct");
    } else {
        showResult("q1-result", false, "Correct answer: Hypertext Transfer Protocol");
    }

    // Q2
    let q2 = document.querySelector('input[name="q2"]:checked');
    if (!q2) {
        showResult("q2-result", false, "Please select an answer");
    } else if (q2.value === "b") {
        score++;
        showResult("q2-result", true, "Correct");
    } else {
        showResult("q2-result", false, "Correct answer: HTTPS");
    }

    // Q3
    let q3 = document.querySelector('input[name="q3"]:checked');
    if (!q3) {
        showResult("q3-result", false, "Please select an answer");
    } else if (q3.value === "b") {
        score++;
        showResult("q3-result", true, "Correct");
    } else {
        showResult("q3-result", false, "Correct answer: Request-response");
    }

    // Q4
    let q4 = document.querySelector('input[name="q4"]:checked');
    if (!q4) {
        showResult("q4-result", false, "Please select an answer");
    } else if (q4.value === "c") {
        score++;
        showResult("q4-result", true, "Correct");
    } else {
        showResult("q4-result", false, "Correct answer: HTTP/2");
    }

    // Q5 (multi-select)
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let values = Array.from(checkboxes).map(cb => cb.value);

    if (values.length === 0) {
        showResult("q5-result", false, "Please select at least one option");
    } else if (values.includes("multiplexing") && values.includes("binary") && values.length === 2) {
        score++;
        showResult("q5-result", true, "Correct");
    } else {
        showResult("q5-result", false, "Correct answers: Multiplexing, Binary framing");
    }

    // Final result
    let passFail = score >= 3 ? "PASS" : "FAIL";

    document.getElementById("results").innerHTML = `
        <h2 style="color:${passFail === "PASS" ? 'green' : 'red'}">${passFail}</h2>
        <p><strong>Score:</strong> ${score}/${total}</p>
    `;
}


/* ===============================
   DISPLAY RESULT FUNCTION
================================ */

function showResult(id, correct, message) {
    let element = document.getElementById(id);
    element.textContent = message;
    element.style.color = correct ? "green" : "red";
}


/* ===============================
   RESET FUNCTION
================================ */

function resetQuiz() {

    // Clear final results
    document.getElementById("results").innerHTML = "";

    // Clear per-question results
    document.querySelectorAll("p[id$='-result']").forEach(p => {
        p.textContent = "";
    });

    // Clear text input
    document.getElementById("q1").value = "";

    // Uncheck radio buttons
    document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);

    // Uncheck checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(c => c.checked = false);
}