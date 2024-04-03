"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface Props {
  label: string;
  href: string;
}

const NavButton: FC<Props> = ({ label, href }) => {
  const router = useRouter();

  const navigate = () => {
    router.push(href);
  };

  return (
    <Button
      variant="text"
      size="large"
      sx={{ color: "white", display: "block", my: 2 }}
      onClick={navigate}
    >
      {label}
    </Button>
  );
};

export default NavButton;
