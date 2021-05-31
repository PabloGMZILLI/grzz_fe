import axios from "../instances/axios";

export function getAllUser(adminId) {
    return new Promise((resolve, reject) => {
        axios
            .get("/users", {
                headers: {
                    user_id: adminId,
                },
            })
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}

export function loginUser(name, password) {
    return new Promise((resolve, reject) => {
        axios
            .post("/login", { name, password })
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}

export function registerUser(newUser) {
    return new Promise((resolve, reject) => {
        axios
            .post("/register", newUser)
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}

export function setUserWorkspace(userId, newWorkspace, adminId) {
    return new Promise((resolve, reject) => {
        axios
            .put(
                `/workspace/set/${userId}`,
                { workspace: newWorkspace },
                {
                    headers: {
                        user_id: adminId,
                    },
                }
            )
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => reject(error));
    });
}
