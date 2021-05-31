import axios from "../instances/axios";

export function getRanking() {
    return new Promise((resolve, reject) => {
        axios
            .get("/ranking?limit=20&offset=0&filter=sananduva&filterName=city")
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}

export function addPoints(userId, points, adminId) {
    return new Promise((resolve, reject) => {
        axios
            .post(
                "/points/add",
                { user: userId, points },
                { headers: { user_id: adminId } }
            )
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}

export function removePoints(userId, points, adminId) {
    return new Promise((resolve, reject) => {
        axios
            .post(
                "/points/remove",
                { user: userId, points },
                { headers: { user_id: adminId } }
            )
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}

export function resetPoints(userId, adminId) {
    return new Promise((resolve, reject) => {
        axios
            .post(
                "/points/remove",
                { user: userId },
                { headers: { user_id: adminId } }
            )
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}
