import axios from "../instances/axios";

export function getQuizzes() {
    return new Promise((resolve, reject) => {
        axios
            .get("/quiz")
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}

export function createFullQuiz(quiz, adminId) {
    return new Promise((resolve, reject) => {
        axios
            .post("/quiz/create", quiz, { headers: { user_id: adminId } })
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}

export function updateQuiz(quizId, updates, adminId) {
    return new Promise((resolve, reject) => {
        axios
            .post(`/quiz/update/${quizId}`, updates,  {
                headers: { user_id: adminId },
            })
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}

export function addQuestion(quizId, question, adminId) {
    return new Promise((resolve, reject) => {
        axios
            .post(`/quiz/add_question/${quizId}`, question, {
                headers: { user_id: adminId },
            })
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}

export function updateQuestion(questionId, question, adminId) {
    return new Promise((resolve, reject) => {
        axios
            .post(`/question/update/${questionId}`, question,  {
                headers: { user_id: adminId },
            })
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}

export function setCorrectAnswer(questionId, answerId, adminId) {
    return new Promise((resolve, reject) => {
        axios
            .post(
                "/answer/set/correct",
                {
                    question_id: questionId,
                    answer_id: answerId,
                },
                { headers: { user_id: adminId } }
            )
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}

export function addAnswer(quizId, answerText, adminId, isCorrect = false) {
    return new Promise((resolve, reject) => {
        axios
            .post(
                `/answer/add/${quizId}`,
                { answer: answerText, correct: isCorrect },
                { headers: { user_id: adminId } }
            )
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}

export function deleteQuestion(questionId, adminId) {
    return new Promise((resolve, reject) => {
        axios
            .delete(`/quiz/delete_question/${questionId}`, {
                headers: { user_id: adminId },
            })
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}

export function deleteQuiz(quizId, adminId) {
    return new Promise((resolve, reject) => {
        axios
            .delete(`/quiz/delete/${quizId}`, {
                headers: { user_id: adminId },
            })
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}

export function deleteAnswer(answerId, adminId) {
    return new Promise((resolve, reject) => {
        axios
            .delete(`/answer/delete/${answerId}`, {
                headers: { user_id: adminId },
            })
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}
