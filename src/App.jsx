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
          maxWidth: "900px",
          width: "100%",
          background: "lightblue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            maxWidth: "700px",
            width: "100%",
            flex: "1 1 1",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box sx={{ flex: "1 1 50%" }}>
            <SignInCard />
          </Box>
          <Box sx={{ flex: "1 1 50%" }}>
            <SignInInfo />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default App;
