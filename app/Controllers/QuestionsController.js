import { ProxyState } from "../AppState.js";
import { opentdbService } from "../Services/OpentdbService.js";
import { scoreService } from "../Services/ScoreService.js";

function drawQuestion(index) {
    if (isNaN(index)) {
        index = 0
    }
    else if (index > 9) {
        let startTemplate = /*html*/ `<h1>Play again?</h1>
                    <button class="btn btn-lg btn-primary" onclick="app.questionsController.getQuestions()">
                        <h2>START GAME!</h2>
                    </button>`

        document.getElementById('main-display').innerHTML = startTemplate
    }
    let template = ProxyState.questions[index]
    if (template.type == 'multiple') {
        document.getElementById('main-display').innerHTML = template.multipleTemplate
    }
    else {
        document.getElementById('main-display').innerHTML = template.booleanTemplate
    }
}


export class QuestionsController {
    constructor() {
        ProxyState.on('questions', drawQuestion)
    }

    getQuestions() {
        opentdbService.getQuestions()
    }

    correct(num) {
        alert('CORRECT!')
        let newIndex = num + 1
        drawQuestion(newIndex)
        scoreService.correct()

    }
    incorrect(num) {
        alert(`WRONG!The correct answer was ${ProxyState.questions[num].correctAnswer}`)
        let newIndex = num + 1
        drawQuestion(newIndex)
        scoreService.incorrect()

    }
}