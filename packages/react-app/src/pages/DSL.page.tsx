import React from "react";
import { Box } from "@chakra-ui/react";
import Typography, { TVariant } from "../DSL/Typography/Typography";
import DemoButton from "../DSL/Button/Button.demo";
import DemoModal from "../DSL/Modal/Modal.demo";
import DemoColors from "../DSL/Colors/Colors.demo";
import DemoToast from "../DSL/Toast/Toast.demo";
import DemoColorModeToggle from "../DSL/ColorModeToggle/ColorModeToggle.demo";
import DemoForm from "../DSL/Form/Form.demo";
import DemoLoading from "../DSL/Loading/Loading.demo";

const DSLPage = () => {
  return (
    <Box px={{lg:250, sm:50}} mb={20}>
      <Box textAlign={"center"}>
        <Typography variant={TVariant.PresStart28} block mb={7}>
          ✨ DSL ✨
        </Typography>
        <DemoLoading />
        <DemoButton />
        <DemoModal />
        <DemoColors />
        <DemoToast />
        <DemoColorModeToggle/>
        <DemoForm />
      </Box>
    </Box>
  );
};

export default DSLPage;
