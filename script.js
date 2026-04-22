const questionBank = {
    "9001": [
        { p: "Management System", q: "Have you identified the 'interested parties' whose needs impact your quality goals?" },
        { p: "Leadership", q: "Does senior management actively promote a culture of quality and provide required resources?" },
        { p: "Planning", q: "Do you have measurable quality objectives aligned with your business strategy?" },
        { p: "Support", q: "Is there a formal process to ensure employees have required training for their roles?" },
        { p: "Performance", q: "Do you regularly perform internal audits to ensure quality processes work as intended?" },
        { p: "Operational Controls", q: "Do you have clear procedures for checking services/products meet requirements before delivery?" },
        { p: "Customer Focus", q: "Do you have a structured method for acting on customer feedback and complaints?" },
        { p: "Suppliers", q: "Do you evaluate and monitor the performance of external providers?" },
        { p: "Evidence", q: "Are critical records stored in a way that makes them easily retrievable for audits?" },
        { p: "Improvement", q: "When a mistake occurs, is there a process to identify the root cause?" }
    ],
    "27001": [
        { p: "Management System", q: "Do you have a defined 'Scope' stating which parts of your business are covered by security rules?" },
        { p: "Leadership", q: "Does senior management regularly review security performance and provide budget?" },
        { p: "Risk Strategy", q: "Do you have a formal 'Risk Treatment Plan' explaining how you handle cyber threats?" },
        { p: "Support", q: "Do you provide regular security awareness training to all staff?" },
        { p: "Performance", q: "Do you conduct internal audits to check if security rules are followed?" },
        { p: "Operational Controls", q: "Do you maintain a central inventory of all hardware and software used?" },
        { p: "Access Control", q: "Is there a formal process to grant and revoke staff access based on job roles?" },
        { p: "Physical Security", q: "Are your office and server locations physically secured against unauthorised entry?" },
        { p: "Incident Response", q: "Is there a documented procedure for reporting and managing security breaches?" },
        { p: "Business Continuity", q: "Do you have a plan to keep critical security operations running during system failure?" }
    ],
    "27701": [
        { p: "Management System", q: "Have you updated your Security Scope to specifically include personal data protection?" },
        { p: "Leadership", q: "Is there a designated person responsible for overseeing privacy compliance?" },
        { p: "Risk Strategy", q: "Have you conducted a Privacy Impact Assessment for processes involving sensitive data?" },
        { p: "Support", q: "Does staff training specifically cover how to handle and protect PII?" },
        { p: "Performance", q: "Are privacy controls included in your regular internal audit cycle?" },
        { p: "Operational Controls", q: "Do you know exactly what personal data you hold and who has access to it?" },
        { p: "Privacy by Design", q: "Do you formally consider privacy requirements when implementing new systems?" },
        { p: "Subject Rights", q: "Do you have a tested procedure for responding to data access or deletion requests?" },
        { p: "Third Parties", q: "Do you have legally binding processing agreements with every data supplier?" },
        { p: "Transparency", q: "Is your privacy notice clear, up-to-date, and easily accessible?" }
    ],
    "14001": [
        { p: "Management System", q: "Have you identified environmental aspects you can actually control or influence?" },
        { p: "Leadership", q: "Is there a signed environmental policy demonstrating management commitment?" },
        { p: "Planning", q: "Do you have a process to stay updated on industry-specific environmental laws?" },
        { p: "Support", q: "Are employees aware of how their work activities can impact the environment?" },
        { p: "Performance", q: "Do you track environmental performance against stated goals?" },
        { p: "Operational Controls", q: "Do you have written procedures to manage waste and energy use?" },
        { p: "Emergency Readiness", q: "Do you have a plan to respond to environmental accidents like spills?" },
        { p: "Supply Chain", q: "Do you communicate environmental requirements to your suppliers?" },
        { p: "Evidence", q: "Do you maintain records of waste disposal and energy consumption?" },
        { p: "Improvement", q: "Do you investigate environmental near-misses to prevent them recurring?" }
    ],
    "42001": [
        { p: "Management System", q: "Have you established an AI Management System addressing ethical use?" },
        { p: "Leadership", q: "Does management provide clear direction on responsible AI deployment?" },
        { p: "Risk Strategy", q: "Have you assessed potential bias or ethical harm in your AI systems?" },
        { p: "Support", q: "Are staff who use AI tools trained on the risks and ethical implications?" },
        { p: "Performance", q: "Do you monitor AI performance to ensure it remains accurate over time?" },
        { p: "Operational Controls", q: "Do you maintain a full inventory of every AI system used?" },
        { p: "Data Integrity", q: "Are there strict controls over the quality/source of data used for AI?" },
        { p: "Human Oversight", q: "Is there a clear mechanism for a human to override AI outputs?" },
        { p: "Transparency", q: "Do you inform users when they are interacting with an AI system?" },
        { p: "Incident Response", q: "Do you have a plan to handle AI hallucinations or failures?" }
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
        alert("Note: ISO 27701 is an extension. You must have ISO 27001 in place.");
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
    const total = scores.reduce((a, b) => a + b, 0);
    const max = scores.length * 2;
    const ratio = total / max;
    const questions = questionBank[currentStandard];

    let color = "red-bg";
    let statusText = "Status: Red. Heavy investment in documentation and culture is required.";
    if (ratio > 0.8) { color = "green-bg"; statusText = "Status: Green. You are likely audit-ready."; }
    else if (ratio > 0.4) { color = "amber-bg"; statusText = "Status: Amber. Foundations exist, but gaps remain."; }

    document.getElementById('traffic-light-indicator').className = `light ${color}`;
    document.getElementById('snapshot-text').innerHTML = `<p><strong>${statusText}</strong></p>`;

    let summaryHtml = `<h3>Breakdown for ISO ${currentStandard}</h3><p>Based on your answers, here is the executive overview:</p><ul>`;
    let emailSummary = `Summary for ISO ${currentStandard}: %0A`;

    questions.forEach((q, index) => {
        const score = scores[index];
        const status = score === 2 ? "✓ Strong" : score === 1 ? "⚠ Partial" : "✗ Gap";
        summaryHtml += `<li><strong>${q.p}:</strong> ${status} - ${q.q}</li>`;
        emailSummary += `- ${q.p}: ${status}%0A`;
    });
    summaryHtml += `</ul>`;

    document.getElementById('executive-summary-content').innerHTML = summaryHtml;

    const mailSubject = `ISO ${currentStandard} Gap Analysis Results`;
    const mailBody = `Hello Boo Consulting,%0A%0A I have completed the gap analysis for ISO ${currentStandard}.%0A%0A${emailSummary}%0A*PLEASE NOTE: This is an outline based on user answers and not a formal audit report. A full Gap Analysis by a qualified individual is required to ensure all controls and requirements are met.*%0A%0A I would like to discuss a roadmap based on these findings.`;
    document.getElementById('email-link').href = `mailto:enquiries@booconsulting.co.uk?subject=${encodeURIComponent(mailSubject)}&body=${mailBody}`;
}
