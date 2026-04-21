const questionBank = {
    "9001": [
        { p: "Strategy", q: "Do you have a clear, written plan outlining your business goals and customer satisfaction commitment?" },
        { p: "Customers", q: "Do you have a formal process to verify you can meet customer requirements before accepting work?" },
        { p: "Suppliers", q: "Do you regularly evaluate your key suppliers to ensure they meet your quality standards?" },
        { p: "Operations", q: "Do you use standard checklists or procedures for your most critical daily tasks?" },
        { p: "Improvement", q: "When mistakes happen, do you have a way to find the root cause and stop it from recurring?" }
    ],
    "27001": [
        { p: "Security Assets", q: "Do you have a central list of all hardware, software, and data locations used by the business?" },
        { p: "Access Control", q: "Do you have a formal process for granting (and revoking) staff access to sensitive systems?" },
        { p: "Risk Management", q: "Have you identified the specific 'cyber threats' your business faces and how you plan to mitigate them?" },
        { p: "Incident Response", q: "If you were hacked today, is there a written plan detailing exactly who does what to recover?" },
        { p: "Physical Security", q: "Are your office and server locations physically secured against unauthorised entry?" }
    ],
    "27701": [
        { p: "Data Mapping", q: "Do you know exactly what 'Personal Identifiable Information' (PII) you hold and where it travels?" },
        { p: "Privacy by Design", q: "When you start a new project, do you formally assess the privacy impact on the individuals involved?" },
        { p: "Subject Rights", q: "Do you have a clear procedure for handling 'Subject Access Requests' within the legal timeframe?" },
        { p: "Third Parties", q: "Do you have data processing agreements in place with every supplier that handles your data?" }
    ],
    "14001": [
        { p: "Environmental Impact", q: "Have you identified which parts of your business (waste, energy, travel) have the biggest impact on the planet?" },
        { p: "Legal Compliance", q: "Do you maintain a list of the environmental laws and regulations that apply specifically to your industry?" },
        { p: "Emergency Readiness", q: "Do you have procedures in place to prevent and respond to environmental accidents (like spills or leaks)?" },
        { p: "Objectives", q: "Does the business have measurable targets for reducing its carbon footprint or waste output?" }
    ],
    "42001": [
        { p: "AI Governance", q: "Do you maintain a list (inventory) of all AI systems currently used in your business?" },
        { p: "Ethical Risk", q: "Have you assessed potential bias or 'hallucination' risks associated with the AI tools you use?" },
        { p: "Data Integrity", q: "Do you have strict controls over what proprietary data is being fed into external AI models?" },
        { p: "Human Oversight", q: "Is there a clear process for a human to review and override AI-generated outputs?" }
    ]
};

let currentStandard = "";
let currentStep = 0;
let scores = [];

const setupSection = document.getElementById('setup-section');
const quizSection = document.getElementById('quiz-section');
const resultsSection = document.getElementById('results-section');
const standardSelect = document.getElementById('standard-select');
const aiModelSelect = document.getElementById('ai-model-select');

standardSelect.addEventListener('change', (e) => {
    const aiContext = document.getElementById('ai-context');
    aiContext.classList.toggle('hidden', e.target.value !== '42001');
});

aiModelSelect.addEventListener('change', (e) => {
    const customContainer = document.getElementById('custom-ai-container');
    customContainer.classList.toggle('hidden', e.target.value !== 'custom');
});

document.getElementById('start-btn').addEventListener('click', () => {
    currentStandard = standardSelect.value;
    if (currentStandard === "27701") {
        alert("Note: ISO 27701 is an extension. You must have ISO 27001 in place or be implementing it simultaneously.");
    }
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
    const questions = questionBank[currentStandard];
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
    
    // Updated Email logic
    const mailSubject = `ISO ${currentStandard} Gap Analysis Results`;
    const mailBody = `Hello Boo Consulting, I have completed the online gap analysis for ISO ${currentStandard}. My result was ${resultColor.split('-')[0].toUpperCase()}. I would like to discuss a roadmap.`;
    document.getElementById('email-link').href = `mailto:enquiries@booconsulting.co.uk?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
}
