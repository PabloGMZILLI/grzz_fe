import axios from "../instances/axios";

export function getUsersAnswers(adminId) {
    return new Promise((resolve, reject) => {
        axios
            .get("/answers", {
                headers: {
                    user_id: adminId,
                },
            })
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}

export function getAnswer(answerId) {
    return new Promise((resolve, reject) => {
        axios
            .get(`/answers/${answerId}`)
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}

export function saveUserAnswer(answer) {
    return new Promise((resolve, reject) => {
        axios
            .post("/answer/save", answer)
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}
