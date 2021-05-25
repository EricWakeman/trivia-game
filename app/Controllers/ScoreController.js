import { ProxyState } from "../AppState.js"


function drawScoreboard() {
    let template = /*html*/ `
                    <div class="card text-center p-2 w-100">
                        <h2>Answered Correctly: ${ProxyState.scoreCorrect}</h2>
                        <h2>Answered Incorrectly: ${ProxyState.scoreIncorrect}</h2>
                    </div>`
    document.getElementById('scoreboard').innerHTML = template


}
export class ScoreController {
    constructor() {
        ProxyState.on('scoreCorrect', drawScoreboard)
        ProxyState.on('scoreIncorrect', drawScoreboard)
    }

}