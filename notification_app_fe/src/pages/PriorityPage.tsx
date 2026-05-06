import {
  Box,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";

import { useEffect, useState } from "react";

import NotificationCard from "../components/NotificationCard";

import { fetchNotifications } from "../services/fetchNotifications";

import { calculatePriority } from "../utils/calculatePriority";

import type { Notification } from "../types/notification";

export default function PriorityPage() {
  const [notifications, setNotifications] =
    useState<Notification[]>([]);

  const [limit, setLimit] =
    useState<number>(10);

  useEffect(() => {
    async function loadPriorityNotifications() {
      const data = await fetchNotifications();

      const sorted = data.sort(
        (a, b) =>
          calculatePriority(b) -
          calculatePriority(a)
      );

      setNotifications(sorted);
    }

    loadPriorityNotifications();
  }, []);

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ marginBottom: 3 }}
      >
        Priority Notifications
      </Typography>

      <Select
        value={limit}
        onChange={(e) =>
          setLimit(Number(e.target.value))
        }
        sx={{ marginBottom: 3 }}
      >
        <MenuItem value={5}>Top 5</MenuItem>
        <MenuItem value={10}>Top 10</MenuItem>
        <MenuItem value={15}>Top 15</MenuItem>
      </Select>

      {notifications
        .slice(0, limit)
        .map((notification) => (
          <NotificationCard
            key={notification.ID}
            notification={notification}
            viewed={false}
            onClick={() => {}}
          />
        ))}
    </Box>
  );
}