import { ProxyState } from "../AppState.js"
import { Question } from "../Models/Question.js"

class OpentdbService {
    constructor() {

    }

    async getQuestions() {
        console.log('service button connected')
        let res = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy')
        console.log(res)
        let data = await res.json()
        console.log(data)
        ProxyState.questions = data.results.map(q => new Question(q))
        console.log(ProxyState.questions)
    }

}

export const opentdbService = new OpentdbService()