// import ValuesController from "./Controllers/ValuesController.js";

import { QuestionsController } from "./Controllers/QuestionsController.js";
import { ScoreController } from "./Controllers/ScoreController.js";

class App {
  // valuesController = new ValuesController();

  questionsController = new QuestionsController()
  scoreController = new ScoreController()
}

window["app"] = new App();
