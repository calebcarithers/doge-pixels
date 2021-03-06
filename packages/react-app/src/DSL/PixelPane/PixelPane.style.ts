import {colorModeType, lightOrDark} from "../Theme";

const PixelPaneStyle = {
  parts: ["container", "swatch", "textContainer"],
  baseStyle: ({colorMode}: {colorMode: colorModeType}) => ({
    container: {
      display: "inline-flex",
      flexDirection: "column",
      maxWidth: "fit-content",
      position: "relative",
    },
    swatch: {
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: lightOrDark(colorMode, "black", "white")
    },
    textContainer: {
      borderColor: lightOrDark(colorMode, "black", "white"),
      bg: lightOrDark(colorMode, "yellow.50", "purple.700"),
      borderStyle: "solid",
      borderLeftWidth: "1px",
      borderRightWidth: "1px",
      borderBottomWidth: "1px"
    },
    drop: {
      display: "none",
      zIndex: -1,
      position: "absolute",
      w: "full",
      h: "full",
      top: "8px",
      left: "8px",
      bg: lightOrDark(colorMode, "black", "purple.700"),
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: lightOrDark(colorMode, "black", "white")
    }
  }),
  sizes: {
    sm: {
      swatch: {
        w: "90px",
        h: "90px"
      },
      textContainer: {
        py: 0,
        px: 1
      }
    },
    md: {
      swatch: {
        w: "100px",
        h: "100px"
      },
      textContainer: {
        py: 0,
        px: 1
      }
    },
    lg: {
      swatch: {
        w: "230px",
        h: "230px",
      },
      textContainer: {
        py: 1,
        px: 2
      }
    }
  },
  variants: {
    shadow: ({colorMode}: {colorMode: colorModeType}) => ({
      drop: {
        display: "block"
      }
    })
  },
}

export default PixelPaneStyle
