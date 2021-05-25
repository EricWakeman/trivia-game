import { ProxyState } from "../AppState.js";

class ScoreService {

    correct() {
        ProxyState.scoreCorrect = ProxyState.scoreCorrect + 1
    }
    incorrect() {
        ProxyState.scoreIncorrect = ProxyState.scoreIncorrect + 1
    }
}

export const scoreService = new ScoreService