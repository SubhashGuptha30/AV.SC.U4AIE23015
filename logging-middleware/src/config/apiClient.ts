import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.BASE_URL || "";

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        "Content-Type": "application/json",
    },
    timeout: 5000,
});

export default apiClient;