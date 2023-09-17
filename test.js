import fs from "fs";
import { readdirSync } from "node:fs";

readdirSync("data", { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => `${dirent.path}/${dirent.name}`)
  .forEach((folderPath) => {
    // Read the questions.md file
    const questionsFile = fs.readFileSync(`${folderPath}/questions.md`, "utf8");

    // Read the answers.md file
    const answersFile = fs.readFileSync(`${folderPath}/answers.md`, "utf8");

    // Split the file content into individual questions
    const questions = questionsFile.split("\n\n");

    // Split the file content into individual answers
    const answers = answersFile.split("\n");

    // Initialize an empty array to store the question objects
    const questionnaires = [];

    // Loop through each question and create an object
    questions.forEach((question, index) => {
      // Split the question into lines
      const lines = question.split("\n").map((x) => x.trim());

      // Extract the question text
      const questionText = lines[0].replace(/^\d+\.\s/, "");

      // Extract the choices
      const choices = lines
        .slice(1, lines.length)
        .map((line) => line.replace(/^\s*- /, ""));

      // Get the answer of the question
      const answer = answers[index];

      // Get the index of the correct choice in the choices array
      const correctChoiceIndex = choices.findIndex((choice) =>
        answer.trim().endsWith(choice)
      );

      // Create the question object
      const questionObject = {
        question: questionText,
        choices: choices,
        correctChoiceIndex: correctChoiceIndex,
      };

      // Push the question object to the questionnaires array
      questionnaires.push(questionObject);
    });

    console.log(questionnaires);
  });
