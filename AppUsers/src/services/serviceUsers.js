import axios from "./axios";

const GET_USERS = "users";

export function getDataUsers() {
    return axios.get(GET_USERS);
}