import apiClient from "../config/apiClient";
import type { Notification } from "../types/notification";

export async function fetchNotifications(): Promise<Notification[]> {
    try {
        const response = await apiClient.get("/notifications");

        return response.data.notifications || [];
    } catch (error: any) {
        console.error("Failed to fetch notifications:", error.message);
        return [];
    }
}