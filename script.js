const questionBank = {
    "9001": [
        { c: "Clause 4.2", p: "Management System", q: "Have you identified the 'interested parties' whose needs impact your quality goals?", critical: true, r: "Boo can help define your stakeholder map and context." },
        { c: "Clause 5.1", p: "Leadership", q: "Does senior management actively promote a culture of quality and provide required resources?", critical: true, r: "We offer executive workshops to align leadership with ISO objectives." },
        { c: "Clause 6.2", p: "Planning", q: "Do you have measurable quality objectives aligned with your business strategy?", critical: true, r: "Boo assists in setting SMART objectives that drive actual business value." },
        { c: "Clause 7.2", p: "Support", q: "Is there a formal process to ensure employees have required training for their roles?", r: "We can help design simple competency matrices and training logs." },
        { c: "Clause 9.2", p: "Performance", q: "Do you regularly perform internal audits to ensure quality processes work as intended?", r: "Boo Consulting can act as your outsourced internal auditor." },
        { c: "Clause 8.1", p: "Operational Controls", q: "Do you have clear procedures for checking services/products meet requirements before delivery?", r: "We specialize in creating jargon-free SOPs and checklists." },
        { c: "Clause 8.2", p: "Customer Focus", q: "Do you have a structured method for acting on customer feedback and complaints?", r: "We help build feedback loops that improve customer retention." },
        { c: "Clause 8.4", p: "Suppliers", q: "Do you evaluate and monitor the performance of external providers?", r: "Boo can provide supplier assessment templates and frameworks." },
        { c: "Clause 7.5", p: "Evidence", q: "Are critical records stored in a way that makes them easily retrievable for audits?", r: "We advise on simple document control systems and folder structures." },
        { c: "Clause 10.2", p: "Improvement", q: "When a mistake occurs, is there a process to identify the root cause?", r: "We train teams in root-cause analysis to prevent recurring errors." }
    ],
    "27001": [
        { c: "Clause 4.3", p: "Management System", q: "Do you have a defined 'Scope' stating which parts of your business are covered by security rules?", critical: true, r: "Boo ensures your scope is robust enough for auditors but practical for the team." },
        { c: "Clause 5.1", p: "Leadership", q: "Does senior management regularly review security performance and provide budget?", critical: true, r: "We facilitate management reviews to ensure security remains a priority." },
        { c: "Clause 6.1", p: "Risk Strategy", q: "Do you have a formal 'Risk Treatment Plan' explaining how you handle cyber threats?", critical: true, r: "Boo Consulting can lead your Risk Assessment workshops." },
        { c: "Clause 7.2", p: "Support", q: "Do you provide regular security awareness training to all staff?", r: "We provide engaging, jargon-free training content for your team." },
        { c: "Clause 9.2", p: "Performance", q: "Do you conduct internal audits to check if security rules are followed?", r: "Boo can perform your required Annex A and Clause audits." },
        { c: "Annex A.5", p: "Operational Controls", q: "Do you maintain a central inventory of all hardware and software used?", r: "We provide templates to ensure your asset register is audit-proof." },
        { c: "Annex A.9", p: "Access Control", q: "Is there a formal process to grant and revoke staff access based on job roles?", r: "Boo can help design your Joiner, Mover, Leaver (JML) processes." },
        { c: "Annex A.11", p: "Physical Security", q: "Are your office and server locations physically secured against unauthorised entry?", r: "We conduct physical security walk-throughs to identify gaps." },
        { c: "Annex A.16", p: "Incident Response", q: "Is there a documented procedure for reporting and managing security breaches?", r: "We help build and test your Information Security Incident plan." },
        { c: "Annex A.17", p: "Business Continuity", q: "Do you have a plan to keep critical security operations running during system failure?", r: "Boo assists in building resilient Disaster Recovery strategies." }
    ],
    "27701": [
        { c: "Clause 5.2", p: "Management System", q: "Have you updated your Security Scope to specifically include personal data protection?", critical: true, r: "Boo integrates privacy requirements into your existing ISO 27001 scope." },
        { c: "Clause 5.3", p: "Leadership", q: "Is there a designated person responsible for overseeing privacy compliance?", critical: true, r: "We provide DPOaaS to fill this critical role." },
        { c: "Clause 5.4", p: "Risk Strategy", q: "Have you conducted a Privacy Impact Assessment for processes involving sensitive data?", critical: true, r: "Boo Consulting can facilitate your DPIA/PIA processes." },
        { c: "Clause 5.5", p: "Support", q: "Does staff training specifically cover how to handle and protect PII?", r: "We provide specialized GDPR and PII handling awareness sessions." },
        { c: "Clause 5.8", p: "Performance", q: "Are privacy controls included in your regular internal audit cycle?", r: "Boo can audit your PIMS alongside your ISMS." },
        { c: "Clause 6.3", p: "Operational Controls", q: "Do you know exactly what personal data you hold and who has access to it?", r: "We specialize in Data Mapping and Record of Processing (RoPA) development." },
        { c: "Clause 6.4", p: "Privacy by Design", q: "Do you formally consider privacy requirements when implementing new systems?", r: "Boo can help embed privacy into your project management lifecycle." },
        { c: "Clause 6.10", p: "Subject Rights", q: "Do you have a tested procedure for responding to data access or deletion requests?", r: "We provide workflows for handling DSARs efficiently and legally." },
        { c: "Clause 6.15", p: "Third Parties", q: "Do you have legally binding processing agreements with every data supplier?", r: "Boo can review and draft your Data Processing Agreements (DPAs)." },
        { c: "Clause 6.12", p: "Transparency", q: "Is your privacy notice clear, up-to-date, and easily accessible?", r: "We rewrite privacy notices to be honest, transparent, and jargon-free." }
    ],
    "14001": [
        { c: "Clause 4.1", p: "Management System", q: "Have you identified environmental aspects you can actually control or influence?", critical: true, r: "Boo helps you identify and score your environmental impacts." },
        { c: "Clause 5.2", p: "Leadership", q: "Is there a signed environmental policy demonstrating management commitment?", critical: true, r: "We help draft meaningful policies that go beyond lip service." },
        { c: "Clause 6.1", p: "Planning", q: "Do you have a process to stay updated on industry-specific environmental laws?", critical: true, r: "Boo provides Legal Registers tailored to your industry." },
        { c: "Clause 7.3", p: "Support", q: "Are employees aware of how their work activities can impact the environment?", r: "We provide environmental awareness training for your entire team." },
        { c: "Clause 9.1", p: "Performance", q: "Do you track environmental performance against stated goals?", r: "Boo helps design tracking dashboards for carbon and waste." },
        { c: "Clause 8.1", p: "Operational Controls", q: "Do you have written procedures to manage waste and energy use?", r: "We build practical operational controls to reduce your footprint." },
        { c: "Clause 8.2", p: "Emergency Readiness", q: "Do you have a plan to respond to environmental accidents like spills?", r: "Boo can help draft and test your Spill Response and Emergency plans." },
        { c: "Clause 8.1b", p: "Supply Chain", q: "Do you communicate environmental requirements to your suppliers?", r: "We help you set sustainable procurement standards." },
        { c: "Clause 7.5", p: "Evidence", q: "Do you maintain records of waste disposal and energy consumption?", r: "Boo organizes your evidence for easy auditor inspection." },
        { c: "Clause 10.2", p: "Improvement", q: "Do you investigate environmental near-misses to prevent them recurring?", r: "We help you build a culture of environmental improvement." }
    ],
    "42001": [
        { c: "Clause 4.1", p: "Management System", q: "Have you established an AI Management System addressing ethical use?", critical: true, r: "Boo is at the forefront of AI governance and ethical frameworking." },
        { c: "Clause 5.1", p: "Leadership", q: "Does management provide clear direction on responsible AI deployment?", critical: true, r: "We offer AI strategy sessions for senior leadership." },
        { c: "Clause 6.1", p: "Risk Strategy", q: "Have you assessed potential bias or ethical harm in your AI systems?", critical: true, r: "Boo Consulting can lead your AI Ethics and Bias assessments." },
        { c: "Clause
