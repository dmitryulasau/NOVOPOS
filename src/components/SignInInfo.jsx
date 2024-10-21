import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import CircleIcon from "@mui/icons-material/Circle";

import { useState } from "react";

export default function SignInInfo() {
  const [imageIndex, setImageIndex] = useState(1);
  const [activeIndex, setActiveIndex] = useState(1);

  const [fade, setFade] = useState(false);

  const imagesAndTexts = [
    {
      src: "https://res.cloudinary.com/dulasau/image/upload/v1729467055/shopping_1_pta5r3.png",
      text: "Renew Your License",
      alt: "Renew Your License",
    },
    {
      src: "https://res.cloudinary.com/dulasau/image/upload/v1729467055/shopping_2_pjyqnk.png",
      text: "Check License Status",
      alt: "Check License Status",
    },
    {
      src: "https://res.cloudinary.com/dulasau/image/upload/v1729467056/shopping_3_i3yooj.png",
      text: "Explore License Benefits",
      alt: "Explore License Benefits",
    },
  ];

  const handleIconClick = (index) => {
    setFade(true); // Trigger fade effect
    setTimeout(() => {
      setImageIndex(index);
      setActiveIndex(index);
      setFade(false); // Reset fade effect after changing the image
    }, 300); // Match this duration to the CSS transition duration
  };

  return (
    <Card
      sx={{
        // maxWidth: { xs: "350px", sm: "350px" },
        width: "100%",
        minHeight: { sm: "370px" },
        maxHeight: { xs: "200px" },
        background: "#FFFFE0",
        borderRadius: 0,
        borderTopRightRadius: "8px",
        borderBottomRightRadius: "8px",
        boxShadow: "none",
        padding: "16px",
        border: "1px solid rgba(0, 0, 0, 0.12)",
        borderLeft: "none",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={imagesAndTexts[imageIndex].src}
          alt={imagesAndTexts[imageIndex].alt}
          sx={{
            width: { xs: "20%", sm: "100%" }, // Make the box fluid
            height: "auto", // Maintain aspect ratio
            maxWidth: "100%",
            objectFit: "contain",

            background: "lightyellow",

            maxHeight: "210px",
            display: "block",
            borderRadius: "4px",

            opacity: fade ? 0 : 1, // Apply fade effect
            transition: "opacity 0.2s ease-in-out", // Smooth transition for opacity
          }}
        />

        <Typography sx={{ mb: 1.5 }}></Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Roboto', sans-serif",
            fontSize: "clamp(1rem, 4vw, 1.4rem)",
            fontWeight: "800",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {imagesAndTexts[imageIndex].text}
        </Typography>
      </CardContent>

      <CardActions>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={2}>
            {imagesAndTexts.map((_, index) => (
              <IconButton
                key={index}
                aria-label="change image and text"
                size="medium"
                onClick={() => handleIconClick(index)}
              >
                <CircleIcon
                  fontSize="inherit"
                  sx={{
                    color: activeIndex === index ? "#252422" : "inherit", // Change color to red if active
                    transition: "color 0.2s ease-in-out",
                  }}
                />
              </IconButton>
            ))}
          </Stack>
        </Box>
      </CardActions>
    </Card>
  );
}
