"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";

import { addUser } from "../redux/slice";
import TopMenu from "../components/TopMenu";

import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack
} from "@mui/material";

export default function AddUsers() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  const dispatch = useDispatch();

  const userDispatch = () => {
    if (!name || !mail) return;
    dispatch(addUser({ name, mail }));
    setName("");
    setMail("");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
         <TopMenu />
      <Card elevation={4}>
        <CardContent>
          <Typography variant="h5" gutterBottom textAlign="center">
            Users Data
          </Typography>

          <Stack spacing={3}>
            <TextField
              label="User Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
            />

            <TextField
              label="User Email"
              variant="outlined"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              fullWidth
            />

            <Button
              variant="contained"
              size="large"
              onClick={userDispatch}
            >
              Add User
            </Button>

           
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
