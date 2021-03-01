let questions = [];
let options = {}

async function getQuestions() {
    let response = await fetch('/questions');
    return await response.json();
}

async function getOption(id) {
    let response = await fetch('/options?question=' + id);
    return await response.json()
}

async function fetchQuestions() {
    getQuestions().then(data => {
        questions = data;
        for (const question of questions) {
            // if question has option, do a backend request to fetch options and create the question
            if (question.has_options) {
                getOption(question.id).then(option => {
                    // add the question to dom
                    createUi(question, option)
                });
            }else {
                // add the question to dom
                createUi(question)
            }
        }
    });
}
