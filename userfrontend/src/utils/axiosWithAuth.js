import axios from "axios";

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: "http://ctfjmg01:5000/api",
        headers: {}
    });
};