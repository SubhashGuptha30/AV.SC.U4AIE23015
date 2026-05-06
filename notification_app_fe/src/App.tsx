import {
  Box,
  Button,
  Container,
} from "@mui/material";

import { useState } from "react";

import NotificationsPage from "./pages/NotificationsPage";

import PriorityPage from "./pages/PriorityPage";

export default function App() {
  const [page, setPage] =
    useState<"notifications" | "priority">(
      "notifications"
    );

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          gap: 2,
          marginTop: 4,
          marginBottom: 4,
        }}
      >
        <Button
          variant={
            page === "notifications"
              ? "contained"
              : "outlined"
          }
          onClick={() =>
            setPage("notifications")
          }
        >
          All Notifications
        </Button>

        <Button
          variant={
            page === "priority"
              ? "contained"
              : "outlined"
          }
          onClick={() =>
            setPage("priority")
          }
        >
          Priority Inbox
        </Button>
      </Box>

      {page === "notifications" ? (
        <NotificationsPage />
      ) : (
        <PriorityPage />
      )}
    </Container>
  );
}