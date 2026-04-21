const questionBank = {
    "9001": [
        { p: "Strategy", q: "Do you have a clear, written plan outlining your business goals and customer satisfaction commitment?" },
        { p: "Customers", q: "Do you have a formal process to verify you can meet customer requirements before accepting work?" },
        { p: "Suppliers", q: "Do you regularly evaluate your key suppliers to ensure they meet your quality standards?" },
        { p: "Operations", q: "Do you use standard checklists or procedures for your most critical daily tasks?" },
        { p: "Improvement", q: "When mistakes happen, do you have a way to find the root cause and stop it from recurring?" }
    ],
    "42001": [
        { p: "AI Governance", q: "Do you maintain a list (inventory) of all AI systems currently used in your business?" },
        { p: "Risk", q: "Have you assessed the potential bias or ethical risks associated with your AI tools?" },
        { p: "Data", q: "Do you have strict controls over what data is being fed into external AI models?" }
    ]
};

let currentStandard = "";
let currentStep = 0;
let scores = [];

const setupSection = document.getElementById('setup-section');
const quizSection = document.getElementById('quiz-section');
const resultsSection = document.getElementById('results-section');
const standardSelect = document.getElementById('standard-select');

// Handle UI changes for specific standards
standardSelect.addEventListener('change', (e) => {
    const aiContext = document.getElementById('ai-context');
    aiContext.classList.toggle('hidden', e.target.value !== '42001');
});

document.getElementById('start-btn').addEventListener('click', () => {
    currentStandard = standardSelect.value;
    
    // Privacy Logic: Check for 27001
    if (currentStandard === "27701") {
        alert("Note: ISO 27701 is an extension. You must have ISO 27001 in place or be implementing it simultaneously.");
    }

    setupSection.classList.add('hidden');
    quizSection.classList.remove('hidden');
    showQuestion();
});

function showQuestion() {
    const questions = questionBank[currentStandard] || questionBank["9001"];
    const q = questions[currentStep];
    document.getElementById('pillar-title').innerText = q.p;
    document.getElementById('question-text').innerText = q.q;
    
    const progress = ((currentStep) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = progress + "%";
}

function handleAnswer(score) {
    scores.push(score);
    const questions = questionBank[currentStandard] || questionBank["9001"];
    
    if (currentStep < questions.length - 1) {
        currentStep++;
        showQuestion();
    } else {
        calculateResults();
    }
}

function calculateResults() {
    quizSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
    
    const total = scores.reduce((a, b) => a + b, 0);
    const max = scores.length * 2;
    const ratio = total / max;

    let resultColor = "red-bg";
    let text = "<strong>Status: Red.</strong> You appear to be operating on 'tribal knowledge.' This creates risk and makes scaling difficult. We recommend a structured gap analysis.";

    if (ratio > 0.8) {
        resultColor = "green-bg";
        text = "<strong>Status: Green.</strong> You have strong foundations in place. You are likely ready for a formal pre-audit or certification push.";
    } else if (ratio > 0.4) {
        resultColor = "amber-bg";
        text = "<strong>Status: Amber.</strong> You have the basics, but there are gaps in your formal evidence. Most SMEs fall into this category before partnering with us.";
    }

    document.getElementById('traffic-light-indicator').className = `light ${resultColor}`;
    document.getElementById('results-content').innerHTML = `<p>${text}</p>`;
    
    // Set up email link
    const mailSubject = `ISO ${currentStandard} Gap Analysis Results`;
    const mailBody = `Hello Boo Consulting, I have completed the online gap analysis for ISO ${currentStandard}. My result was ${resultColor.split('-')[0].toUpperCase()}. I would like to discuss a roadmap.`;
    document.getElementById('email-link').href = `mailto:info@booconsulting.co.uk?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
}
