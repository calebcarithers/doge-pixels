import {Box, Flex, useMultiStyleConfig, useStyleConfig} from "@chakra-ui/react";
import React from "react";
import Typography, { TVariant } from "../Typography/Typography";
import "./Loading.css";


const Loading = () => {
    const styles = useMultiStyleConfig('Loading', {})
    return <Flex flexDirection={"column"} alignItems={"center"}>
        <Box>
            <Typography variant={TVariant.PresStart18} mb={2} block>Loading</Typography>
        </Box>
        <Box __css={styles.container}>
            {Array.from(Array(15).keys()).map((key, index) => <Box
                __css={styles.pixel}
            />)}
        </Box>
    </Flex>
}

export default Loading;
