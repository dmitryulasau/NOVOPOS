import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MuiCard from "@mui/material/Card";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";

const Card = styled(MuiCard)(({ theme }) => ({
  // background: "salmon",

  borderRadius: 0,
  borderTopLeftRadius: "8px",
  borderBottomLeftRadius: "8px",

  borderRight: "none",

  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  // boxShadow:
  //  "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "350px",
    minHeight: "370px",
    maxHeight: "300px",
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

export default function SignInCard() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  //CHECK INPUTS FOR ERRORS
  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  return (
    <Card variant="outlined">
      {/* SIGN IN HEADING */}
      <Typography
        component="h1"
        variant="h4"
        sx={{
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 800,
          width: "100%",
          fontSize: "clamp(2rem, 10vw, 2.4rem)",
        }}
      >
        NOVOPOS
      </Typography>
      {/* SIGN IN HEADING END*/}

      {/* LOGIN FORM */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 2,
          // background: "lightgreen",
        }}
      >
        {/* //TODO change to username if it's true */}

        {/* USERNAME */}
        <FormControl>
          <FormLabel htmlFor="email">Username</FormLabel>
          <TextField
            error={emailError}
            helperText={
              <span style={{ fontSize: "10px", fontWeight: 700 }}>
                {emailErrorMessage}
              </span>
            }
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            slotProps={{
              input: {
                sx: { fontSize: "16px" }, // Set your desired font size here
              },
            }}
            autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={emailError ? "error" : "primary"}
            sx={{ ariaLabel: "email" }}
          />
        </FormControl>
        {/* USERNAME END */}
        {/* PASSWORD */}
        <FormControl>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormLabel htmlFor="password">Password</FormLabel>
          </Box>
          <TextField
            error={passwordError}
            helperText={
              <span style={{ fontSize: "10px", fontWeight: 700 }}>
                {passwordErrorMessage}
              </span>
            }
            name="password"
            placeholder="••••••"
            slotProps={{
              input: {
                sx: { fontSize: "16px" }, // Set your desired font size here
              },
            }}
            type="password"
            id="password"
            autoComplete="current-password"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={passwordError ? "error" : "primary"}
          />
        </FormControl>
        {/* PASSWORD END */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          onClick={validateInputs}
          sx={{ background: "#29465b", fontSize: "14px" }}
        >
          Sign in
        </Button>
      </Box>
      {/* LOGIN FORM END*/}
    </Card>
  );
}
