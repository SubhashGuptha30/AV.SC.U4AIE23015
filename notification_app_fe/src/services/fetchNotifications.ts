import api from "./api";
import type { Notification } from "../types/notification";

export async function fetchNotifications(): Promise<Notification[]> {
  try {
    const response = await api.get("/notifications");

    return response.data.notifications || [];
  } catch (error) {
    console.error("Failed to fetch notifications");

    return [];
  }
}