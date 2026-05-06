import type { Notification } from "../types/notification";

const weights: Record<string, number> = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export function calculatePriority(
  notification: Notification
): number {
  const weight =
    weights[notification.Type] || 0;

  const timestamp =
    new Date(notification.Timestamp).getTime();

  return (weight * 1000000000000) + timestamp;
}