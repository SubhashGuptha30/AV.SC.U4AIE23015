import {
  Box,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";

import NotificationCard from "../components/NotificationCard";

import { fetchNotifications } from "../services/fetchNotifications";

import type { Notification } from "../types/notification";

export default function NotificationsPage() {
  const [notifications, setNotifications] =
    useState<Notification[]>([]);

  const [filter, setFilter] =
    useState<string>("All");

  const [viewedNotifications, setViewedNotifications] =
    useState<string[]>([]);

  useEffect(() => {
    async function loadNotifications() {
      const data = await fetchNotifications();

      setNotifications(data);
    }

    loadNotifications();

    const viewed =
      JSON.parse(
        localStorage.getItem("viewed") || "[]"
      );

    setViewedNotifications(viewed);
  }, []);

  function markAsViewed(id: string) {
    if (!viewedNotifications.includes(id)) {
      const updated = [...viewedNotifications, id];

      setViewedNotifications(updated);

      localStorage.setItem(
        "viewed",
        JSON.stringify(updated)
      );
    }
  }

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter(
          (notification) =>
            notification.Type === filter
        );

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{ marginBottom: 3 }}
      >
        All Notifications
      </Typography>

      <Select
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value)
        }
        sx={{ marginBottom: 3 }}
      >
        <MenuItem value="All">All</MenuItem>

        <MenuItem value="Placement">
          Placement
        </MenuItem>

        <MenuItem value="Result">
          Result
        </MenuItem>

        <MenuItem value="Event">
          Event
        </MenuItem>
      </Select>

      {filteredNotifications.map(
        (notification) => (
          <NotificationCard
            key={notification.ID}
            notification={notification}
            viewed={viewedNotifications.includes(
              notification.ID
            )}
            onClick={() =>
              markAsViewed(notification.ID)
            }
          />
        )
      )}
    </Box>
  );
}