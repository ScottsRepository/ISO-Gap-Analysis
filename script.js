const questionBank = {
    "9001": [
        { c: "Clause 4.2", p: "Management System", q: "Have you identified the 'interested parties' whose needs impact your quality goals?", critical: true, r: "Boo Consulting can help define your stakeholder map and context." },
        { c: "Clause 5.1", p: "Leadership", q: "Does senior management actively promote a culture of quality and provide required resources?", critical: true, r: "We offer executive workshops to align leadership with ISO objectives." },
        { c: "Clause 6.2", p: "Planning", q: "Do you have measurable quality objectives aligned with your business strategy?", critical: true, r: "Boo Consulting assists in setting SMART objectives that drive actual business value." },
        { c: "Clause 7.2", p: "Support", q: "Is there a formal process to ensure employees have required training for their roles?", critical: true, r: "We can help design simple competency matrices and training logs." },
        { c: "Clause 9.2", p: "Performance", q: "Do you regularly perform internal audits to ensure quality processes work as intended?", r: "Boo Consulting can act as your outsourced internal auditor." },
        { c: "Clause 8.1", p: "Operational Controls", q: "Do you have clear procedures for checking services/products meet requirements before delivery?", r: "We specialize in creating jargon-free SOPs and checklists." },
        { c: "Clause 8.2", p: "Customer Focus", q: "Do you have a structured method for acting on customer feedback and complaints?", r: "We help build feedback loops that improve customer retention." },
        { c: "Clause 8.4", p: "Suppliers", q: "Do you evaluate and monitor the performance of external providers?", r: "Boo Consulting can provide supplier assessment templates and frameworks." },
        { c: "Clause 7.5", p: "Evidence", q: "Are critical records stored in a way that makes them easily retrievable for audits?", r: "We advise on simple document control systems and folder structures." },
        { c: "Clause 10.2", p: "Improvement", q: "When a mistake occurs, is there a process to identify the root cause?", r: "We train teams in root-cause analysis to prevent recurring errors." }
    ],
    "27001": [
        { c: "Clause 4.3", p: "Management System", q: "Do you have a defined 'Scope' stating which parts of your business are covered by security rules?", critical: true, r: "Boo Consulting ensures your scope is robust enough for auditors but practical for the team." },
        { c: "Clause 5.1", p: "Leadership", q: "Does senior management regularly review security performance and provide budget?", critical: true, r: "We facilitate management reviews to ensure security remains a priority." },
        { c: "Clause 6.1", p: "Risk Strategy", q: "Do you have a formal 'Risk Treatment Plan' explaining how you handle cyber threats?", critical: true, r: "Boo Consulting can lead your Risk Assessment workshops." },
        { c: "Clause 7.2", p: "Support", q: "Do you provide regular security awareness training to all staff?", critical: true, r: "We provide engaging, jargon-free training content for your team." },
        { c: "Clause 9.2", p: "Performance", q: "Do you conduct internal audits to check if security rules are followed?", r: "Boo Consulting can perform your required Annex A and Clause audits." },
        { c: "Annex A.5", p: "Operational Controls", q: "Do you maintain a central inventory of all hardware and software used?", r: "We provide templates to ensure your asset register is audit-proof." },
        { c: "Annex A.9", p: "Access Control", q: "Is there a formal process to grant and revoke staff access based on job roles?", r: "Boo Consulting can help design your Joiner, Mover, Leaver (JML) processes." },
        { c: "Annex A.11", p: "Physical Security", q: "Are your office and server locations physically secured against unauthorised entry?", r: "We conduct physical security walk-throughs to identify gaps." },
        { c: "Annex A.16", p: "Incident Response", q: "Is there a documented procedure for reporting and managing security breaches?", r: "We help build and test your Information Security Incident plan." },
        { c: "Annex A.17", p: "Business Continuity", q: "Do you have a plan to keep critical security operations running during system failure?", r: "Boo Consulting assists in building resilient Disaster Recovery strategies." }
    ],
    "27701": [
        { c: "Clause 5.2", p: "Management System", q: "Have you updated your Security Scope to specifically include personal data protection?", critical: true, r: "Boo Consulting integrates privacy requirements into your existing ISO 27001 scope." },
        { c: "Clause 5.3", p: "Leadership", q: "Is there a designated person responsible for overseeing privacy compliance?", critical: true, r: "We provide DPOaaS to fill this critical role." },
        { c: "Clause 5.4", p: "Risk Strategy", q: "Have you conducted a Privacy Impact Assessment for processes involving sensitive data?", critical: true, r: "Boo Consulting can facilitate your DPIA/PIA processes." },
        { c: "Clause 5.5", p: "Support", q: "Does staff training specifically cover how to handle and protect PII?", critical: true, r: "We provide specialized GDPR and PII handling awareness sessions." },
        { c: "Clause 5.8", p: "Performance", q: "Are privacy controls included in your regular internal audit cycle?", r: "Boo Consulting can audit your PIMS alongside your ISMS." },
        { c: "Clause 6.3", p: "Operational Controls", q: "Do you know exactly what personal data you hold and who has access to it?", r: "We specialize in Data Mapping and Record of Processing (RoPA) development." },
        { c: "Clause 6.4", p: "Privacy by Design", q: "Do you formally consider privacy requirements when implementing new systems?", r: "Boo Consulting can help embed privacy into your project management lifecycle." },
        { c: "Clause 6.10", p: "Subject Rights", q: "Do you have a tested procedure for responding to data access or deletion requests?", r: "We provide workflows for handling DSARs efficiently and legally." },
        { c: "Clause 6.15", p: "Third Parties", q: "Do you have legally binding processing agreements with every data supplier?", r: "Boo Consulting can review and draft your Data Processing Agreements (DPAs)." },
        { c: "Clause 6.12", p: "Transparency", q: "Is your privacy notice clear, up-to-date, and easily accessible?", r: "We rewrite privacy notices to be honest, transparent, and jargon-free." }
    ],
    "14001": [
        { c: "Clause 4.1", p: "Management System", q: "Have you identified environmental aspects you can actually control or influence?", critical: true, r: "Boo Consulting helps you identify and score your environmental impacts." },
        { c: "Clause 5.2", p: "Leadership", q: "Is there a signed environmental policy demonstrating management commitment?", critical: true, r: "We help draft meaningful policies that go beyond lip service." },
        { c: "Clause 6.1", p: "Planning", q: "Do you have a process to stay updated on industry-specific environmental laws?", critical: true, r: "Boo Consulting provides Legal Registers tailored to your industry." },
        { c: "Clause 7.3", p: "Support", q: "Are employees aware of how their work activities can impact the environment?", critical: true, r: "We provide environmental awareness training for your entire team." },
        { c: "Clause 9.1", p: "Performance", q: "Do you track environmental performance against stated goals?", r: "Boo Consulting helps design tracking dashboards for carbon and waste." },
        { c: "Clause 8.1", p: "Operational Controls", q: "Do you have written procedures to manage waste and energy use?", r: "We build practical operational controls to reduce your footprint." },
        { c: "Clause 8.2", p: "Emergency Readiness", q: "Do you have a plan to respond to environmental accidents like spills?", r: "Boo Consulting can help draft and test your Spill Response and Emergency plans." },
        { c: "Clause 8.1b", p: "Supply Chain", q: "Do you communicate environmental requirements to your suppliers?", r: "We help you set sustainable procurement standards." },
        { c: "Clause 7.5", p: "Evidence", q: "Do you maintain records of waste disposal and energy consumption?", r: "Boo Consulting organizes your evidence for easy auditor inspection." },
        { c: "Clause 10.2", p: "Improvement", q: "Do you investigate environmental near-misses to prevent them recurring?", r: "We help you build a culture of environmental improvement." }
    ],
    "42001": [
        { c: "Clause 4.1", p: "Management System", q: "Have you established an AI Management System addressing ethical use?", critical: true, r: "Boo Consulting is at the forefront of AI governance and ethical frameworking." },
        { c: "Clause 5.1", p: "Leadership", q: "Does management provide clear direction on responsible AI deployment?", critical: true, r: "We offer AI strategy sessions for senior leadership." },
        { c: "Clause 6.1", p: "Risk Strategy", q: "Have you assessed potential bias or ethical harm in your AI systems?", critical: true, r: "Boo Consulting can lead your AI Ethics and Bias assessments." },
        { c: "Clause 7.2", p: "Support", q: "Are staff who use AI tools trained on the risks and ethical implications?", critical: true, r: "We provide specialized AI risk awareness training for employees." },
        { c: "Clause 9.1", p: "Performance", q: "Do you monitor AI performance to ensure it remains accurate over time?", r: "Boo Consulting helps you set up AI monitoring and evaluation logs." },
        { c: "Annex B", p: "Operational Controls", q: "Do you maintain a full inventory of every AI system used?", r: "We provide AI Inventory templates to track model lineage and use." },
        { c: "Annex B.7", p: "Data Integrity", q: "Are there strict controls over the quality/source of data used for AI?", r: "Boo Consulting helps audit your AI data pipelines for security and quality." },
        { c: "Annex B.9", p: "Human Oversight", q: "Is there a clear mechanism for a human to review and override AI outputs?", r: "We design human-in-the-loop workflows to maintain control." },
        { c: "Annex B.10", p: "Transparency", q: "Do you inform users when they are interacting with an AI system?", r: "Boo Consulting assists in building transparent AI disclosure policies." },
        { c: "Annex B.8", p: "Incident Response", q: "Do you have a plan to handle AI hallucinations or failures?", r: "We help you prepare for AI-specific technical and ethical incidents." }
    ]
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

    let summaryHtml = `<h3>Full Breakdown: ISO ${currentStandard}</h3>`;
    
    if (currentStandard === "27701") {
        summaryHtml += `<div class="disclaimer-box" style="background:#e8f4fd; color:#0c5460; border-color:#bee5eb;"><strong>Note:</strong> ISO 27701 is an extension to ISO 27001. A valid Information Security Management System is a mandatory prerequisite.</div>`;
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
