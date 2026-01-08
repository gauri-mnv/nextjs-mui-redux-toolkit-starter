"use client";

import Link from "next/link";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

export default function TopMenu() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} href="/removeuser">
            Remove User
          </Button>

          <Button color="inherit" component={Link} href="/todolist">
            Todo Page
          </Button>

          <Button color="inherit" component={Link} href="/apiusers">
            API Users
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
