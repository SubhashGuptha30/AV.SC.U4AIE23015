import {
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

import type { Notification } from "../types/notification";

interface Props {
  notification: Notification;
  viewed: boolean;
  onClick: () => void;
}

export default function NotificationCard({
  notification,
  viewed,
  onClick,
}: Props) {
  return (
    <Card
      onClick={onClick}
      sx={{
        marginBottom: 2,
        cursor: "pointer",
        backgroundColor: viewed
          ? "#f5f5f5"
          : "#e3f2fd",
      }}
    >
      <CardContent>
        <Chip
          label={notification.Type}
          color={
            notification.Type === "Placement"
              ? "success"
              : notification.Type === "Result"
              ? "primary"
              : "warning"
          }
          sx={{ marginBottom: 1 }}
        />

        <Typography variant="h6">
          {notification.Message}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          {notification.Timestamp}
        </Typography>

        <Typography
          variant="caption"
          sx={{
            display: "block",
            marginTop: 1,
          }}
        >
          {viewed ? "Viewed" : "New"}
        </Typography>
      </CardContent>
    </Card>
  );
}