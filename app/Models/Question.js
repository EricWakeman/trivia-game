import { ProxyState } from "../AppState.js"
import { shuffle } from "../Utils/Shuffle.js"
export class Question {
    constructor({ type, question, correct_answer, incorrect_answers }) {
        this.type = type
        this.question = question
        this.correctAnswer = correct_answer
        this.incorrectAnswers = incorrect_answers
    }



    get multipleTemplate() {
        let order = [1, 2, 3, 4]
        shuffle(order)
        let num = ProxyState.questions.findIndex(q => q.question == this.question)
        return /*html*/ `
        <div class="card text-center">
                        <div class="card-header">
                            <h2>
                                ${this.question}
                            </h2>
                        </div>
                        <div class="card-body d-flex flex-column">
                        <button class="btn btn-primary btn-block order-${order[0]} my-2" onclick="app.questionsController.correct(${num})">${this.correctAnswer}</button>
                        
                        <button class="btn btn-primary btn-block order-${order[1]} my-2" onclick="app.questionsController.incorrect(${num})">${this.incorrectAnswers[0]}</button>
                      
                        
                        <button class="btn btn-primary btn-block order-${order[2]} my-2" onclick="app.questionsController.incorrect(${num})">${this.incorrectAnswers[1]}</button>
                      
                        
                        <button class="btn btn-primary btn-block order-${order[3]} my-2" onclick="app.questionsController.incorrect(${num})">${this.incorrectAnswers[2]}</button>
                      
                        </div>
                    </div>
        `

    }
    get booleanTemplate() {
        let order = [1, 2]
        shuffle(order)
        let num = ProxyState.questions.findIndex(q => q.question == this.question)

        return /*html*/ `
        <div class="card text-center">
                        <div class="card-header">
                            <h2>
                                ${this.question}
                            </h2>
                        </div>
                        <div class="card-body d-flex">
                        
                        <button class="btn btn-primary btn-block order-${order[0]} mx-2" onclick="app.questionsController.correct(${num})">${this.correctAnswer}</button>
                        
                        
                        <button class="btn btn-primary btn-block order-${order[1]} mx-2" onclick="app.questionsController.incorrect(${num})">${this.incorrectAnswers}</button>
                        
                        </div>
                    </div>
        `
    }
}