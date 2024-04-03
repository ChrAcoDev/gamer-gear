import { Box, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  params: {
    productId: string;
  };
}

const ProductPage: FC<Props> = ({params: {productId}}) => {
  return (
    <Box>
      <Typography>Product Page {productId}</Typography>
    </Box>
  );
};

export default ProductPage;
