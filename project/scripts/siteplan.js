const senerios = [
    {
      visitorProfile: "A first-year programming student who is struggling to understand new terminology and concepts",
      questions: [
        "What does polymorphism mean in programming, and how is it used?",
        "Is there a difference between an array and a list in Python?",
        "Where can I find simple examples to help me understand object-oriented programming?"
      ]
    },
    {
      visitorProfile: " An intermediate developer who is learning a new language like Python, C#, or JavaScript",
      questions: [
        "How well does Cristobal understand fundamental programming concepts like data structures and algorithms?",
        "Can Cristobal explain technical topics clearly and concisely for both technical and non-technical audiences?",
        "Does Cristobal have practical experience applying these concepts in real-world projects?"
      ]
    },
    {
      visitorProfile: " A hiring manager or recruiter evaluating your technical knowledge and ability to explain programming concepts",
      questions: [
        "What answers does LDS theology provide to the classic existential question: 'What is the purpose of life?'",
        "How does the belief in the eternal nature of man influence LDS perspectives on free will and moral responsibility?"
      ]
    },
    {
      visitorProfile: "A programming mentor or teacher looking for resources to explain fundamental concepts to their students",
      questions: [
        "What are the key differences between functional and object-oriented programming?",
        "Are there any real-world examples or projects that demonstrate the use of recursion?",
        "How can I explain the concept of inheritance with simple, cross-language examples?"
      ]
    }
];

let currentScenarioIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    showScenario(currentScenarioIndex);
});

function showScenario(index) {
    const scenarioContent = document.getElementById('scenario-content');
    const scenario = senerios[index];
    
    scenarioContent.innerHTML = `
        <div class="scenario-card">
            <h3>${scenario.visitorProfile}</h3>
            <ul>
                ${scenario.questions.map(question => `<li>${question}</li>`).join('')}
            </ul>
        </div>
    `;
};

function showNextScenario() {
    currentScenarioIndex = (currentScenarioIndex + 1) % senerios.length;
    showScenario(currentScenarioIndex);
};