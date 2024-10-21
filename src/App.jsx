import { useState } from "react";
import SignInCard from "./components/SignInCard";
import SignInInfo from "./components/SignInInfo";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function App() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <SignInCard />
          <SignInInfo />
        </Box>
      </Container>
    </>
  );
}

export default App;
