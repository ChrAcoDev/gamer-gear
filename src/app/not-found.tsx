import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <Typography>Sorry, this page cannot be found</Typography>
          <Link href={"/"}>
            <Typography>Take me Home</Typography>
          </Link>
        </Box>
      </Box>
    </>
  );
}
