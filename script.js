const questionBank = {
    // ... [Keep all question data same as before] ...
};

let currentStandard = "";
let currentStep = 0;
let scores = [];
let businessContext = "";

const setupSection = document.getElementById('setup-section');
const quizSection = document.getElementById('quiz-section');
const resultsSection = document.getElementById('results-section');
const standardSelect = document.getElementById('standard-select');
const startBtn = document.getElementById('start-btn');
const warningDiv = document.getElementById('standard-warning');

// Prominent Warning Logic
standardSelect.addEventListener('change', (e) => {
    if (e.target.value === '27701') {
        warningDiv.innerHTML = `
            <div class="warning-box">
                <strong>Auditor's Note: Prerequisite Required</strong>
                ISO 27701 is an extension to ISO 27001. You cannot achieve certification for Privacy Information Management without a valid Information Security Management System (ISMS) already in place or being implemented simultaneously.
            </div>`;
        warningDiv.classList.remove('hidden');
    } else {
        warningDiv.classList.add('hidden');
    }
});

startBtn.addEventListener('click', () => {
    businessContext = document.getElementById('business-context').value;
    if (!businessContext) {
        alert("Please provide a little business context to help us tailor the results.");
        return;
    }
    currentStandard = standardSelect.value;
    setupSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    showQuestion();
});

function showQuestion() {
    const questions = questionBank[currentStandard];
    const q = questions[currentStep];
    document.getElementById('pillar-title').innerText = q.p;
    document.getElementById('question-text').innerText = q.q;
    const progress = (currentStep / questions.length) * 100;
    document.getElementById('progress-bar').style.width = progress + "%";
}

function handleAnswer(score) {
    scores.push(score);
    if (currentStep < questionBank[currentStandard].length - 1) {
        currentStep++;
        showQuestion();
    } else {
        calculateResults();
    }
}

function switchTab(view) {
    document.getElementById('snapshot-view').classList.toggle('hidden', view !== 'snapshot');
    document.getElementById('summary-view').classList.toggle('hidden', view !== 'summary');
    document.getElementById('tab-snapshot').classList.toggle('active', view === 'snapshot');
    document.getElementById('tab-summary').classList.toggle('active', view === 'summary');
}

function calculateResults() {
    quizSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    
    let totalScore = 0;
    let maxPossible = 0;
    const questions = questionBank[currentStandard];

    questions.forEach((q, i) => {
        const weight = q.critical ? 2.5 : 1;
        totalScore += (scores[i] * weight);
        maxPossible += (2 * weight);
    });

    const ratio = totalScore / maxPossible;
    let color = "red-bg";
    let statusText = "<strong>Status: Red.</strong> Significant gaps identified. High-priority development of management strategy and formal evidence is required.";
    
    if (ratio > 0.8) { 
        color = "green-bg"; 
        statusText = "<strong>Status: Green.</strong> Strong foundations identified. You appear ready for professional verification and a formal gap analysis."; 
    }
    else if (ratio > 0.45) { 
        color = "amber-bg"; 
        statusText = "<strong>Status: Amber.</strong> Progress noted, however, critical gaps in formal documentation or management strategy remain."; 
    }

    document.getElementById('traffic-light-indicator').className = `light ${color}`;
    document.getElementById('snapshot-text').innerHTML = `<p>${statusText}</p>`;

    // Executive Summary construction
    let summaryHtml = `<h3>Full Breakdown: ISO ${currentStandard}</h3>`;
    
    // Ensure the warning is also at the top of the summary report
    if (currentStandard === "27701") {
        summaryHtml += `
            <div class="disclaimer-box" style="background:#e8f4fd; color:#0c5460; border-color:#bee5eb;">
                <strong>Prerequisite Requirement:</strong> This assessment assumes an existing ISO 27001 framework. Boo Consulting can help you implement both standards in tandem.
            </div>`;
    }

    let emailSummary = `Context: ${businessContext}%0A%0ASummary for ISO ${currentStandard}:%0A`;

    questions.forEach((q, index) => {
        const score = scores[index];
        const status = score === 2 ? "✓ Strong" : score === 1 ? "⚠ Partial" : "✗ Gap";
        
        summaryHtml += `
            <div class="summary-item">
                <h4>${q.c}: ${q.p}</h4>
                <p><strong>Result:</strong> ${status}</p>
                <div class="insight-note"><strong>How Boo Consulting Will Help You:</strong> ${q.r}</div>
            </div>
        `;
        emailSummary += `- ${q.c} (${q.p}): ${status}%0A`;
    });

    document.getElementById('executive-summary-content').innerHTML = summaryHtml;

    const mailSubject = `ISO Gap Analysis: ${businessContext}`;
    const mailBody = `Hello Boo Consulting,%0A%0AI have completed a self-assessment for ISO ${currentStandard}.%0A%0A${emailSummary}%0A*PRIVACY NOTE: This data was processed locally and is only shared via this email. This is an outline for discussion, not a formal audit report.*%0A%0APlease contact me to discuss a professional roadmap.`;
    document.getElementById('email-link').href = `mailto:enquiries@booconsulting.co.uk?subject=${encodeURIComponent(mailSubject)}&body=${mailBody}`;
}
