import { fetchNotifications } from "./services/fetchNotifications";
import { calculatePriority } from "./utils/calculatePriority";
import type { Notification } from "./types/notification";

interface RankedNotification extends Notification {
    priorityScore: number;
}

async function getTopNotifications(): Promise<void> {
    const notifications = await fetchNotifications();

    const rankedNotifications: RankedNotification[] =
        notifications.map((notification) => ({
            ...notification,
            priorityScore:
                calculatePriority(notification),
        }));

    rankedNotifications.sort(
        (a, b) => b.priorityScore - a.priorityScore
    );

    const top10 = rankedNotifications.slice(0, 10);

    console.log("\nTop 10 Priority Notifications:\n");

    top10.forEach((notification, index) => {
        console.log(
            `${index + 1}. [${notification.Type}] ${notification.Message}`
        );

        console.log(
            `Timestamp: ${notification.Timestamp}`
        );

        console.log(
            `Priority Score: ${notification.priorityScore}`
        );

        console.log("--------------------------------");
    });
}

getTopNotifications();