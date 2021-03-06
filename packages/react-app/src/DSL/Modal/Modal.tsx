import React from "react";
import {Box, Flex, useColorMode, useMultiStyleConfig,} from "@chakra-ui/react";
import Icon from "../Icon/Icon";
import {lightOrDark} from "../Theme";
import Draggable from "react-draggable";
import Typography, {TVariant} from "../Typography/Typography";
import ReactModal from "react-modal";
import "./Modal.css"


export interface ModalProps extends ReactModal.Props {
  onClose: () => void;
  size?: "xs" | "sm" | "md" | "lg",
  renderFooter?: () => JSX.Element;
  title?: string;
  name?: string;
  defaultPosition?: any;
  description?: string;
}

let styleOverrides: {overlay: object, content: object} = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "none",
    width: "100vw",
    pointerEvents: "none"
  },
  content: {
    bottom: "unset",
    overflow: "visible",
    padding: 0,
    border: "none",
    borderRadius: 0,
    position: "static",
    background: "none",
    pointerEvents: "none",
    display: "flex",
    justifyContent: "center",
    width: "100%",
  }
};

const Modal = ({
        isOpen,
        onClose,
        children,
        size = "md",
        title,
        name,
        description,
        defaultPosition,
        ...rest
}: ModalProps) => {
  const chakraStyles = useMultiStyleConfig("Modal", {size: size})
  const { colorMode } = useColorMode()

  ReactModal.setAppElement('#root');
  return (
    <ReactModal
      onRequestClose={onClose}
      isOpen={isOpen}
      style={styleOverrides}
      // ariaHideApp={false}
      {...rest}
    >
      <Draggable handle={".handle"} defaultPosition={defaultPosition}>
        <Box
          position={"relative"}
          overflow={"hidden"}
          zIndex={1}
          width={"100%"}
          maxWidth={chakraStyles.container.maxWidth as string}
        >
          <Box __css={chakraStyles.container}>
            <Flex>
              <Flex
                width={"100%"}
                _hover={{
                  cursor: "pointer"
                }}
                _active={{
                  cursor: "grabbing"
                }}
                className={"handle"}
                justifyContent={"flex-end"}
                borderBottom={"1px solid"}
                borderColor={lightOrDark(colorMode, "black", "white")}
              />
              <Box
                borderLeft={"1px solid"}
                borderBottom={"1px solid"}
                borderColor={lightOrDark(colorMode, "black", "white")}
              >
                <Box
                  p={1}
                  _hover={{cursor: "pointer"}}
                  color={lightOrDark(colorMode, "black", "white")}
                  onClick={onClose}
                  lineHeight={"normal"}
                >
                  <Icon icon={"close"} boxSize={5}/>
                </Box>
              </Box>
            </Flex>
            <Box __css={chakraStyles.body}>
              {title && <Box __css={chakraStyles.title}>
                  <Typography variant={TVariant.PresStart20}>
                    {title}
                  </Typography>
              </Box>}
              {description && <Box __css={chakraStyles.description}>
                <Typography variant={TVariant.ComicSans18}>
                  {description}
                </Typography>
              </Box>}
              {children}
            </Box>
          </Box>
          <Box sx={chakraStyles.drop}/>
        </Box>
      </Draggable>
    </ReactModal>
  );
};

export default Modal;
