import React from "react";
import { Text } from "@chakra-ui/react";
import { TextProps } from "@chakra-ui/layout/dist/types/text";

export enum TVariant {
  PresStart10 = "PresStart10",
  PresStart12 = "PresStart12",
  PresStart15 = "PresStart15",
  PresStart16 = "PresStart16",
  PresStart18 = "PresStart18",
  PresStart20 = "PresStart20",
  PresStart24 = "PresStart24",
  PresStart28 = "PresStart28",
  PresStart30 = "PresStart30",
  PresStart45 = "PresStart45",
  PresStart95 = "PresStart95",
  PresStart135 = "PresStart135",
  ComicSans10 = "ComicSans10",
  ComicSans12 = "ComicSans12",
  ComicSans14 = "ComicSans14",
  ComicSans16 = "ComicSans16",
  ComicSans18 = "ComicSans18",
  ComicSans20 = "ComicSans20",
  ComicSans22 = "ComicSans22",
  ComicSans28 = "ComicSans28",
}

interface TypographyProps extends TextProps {
  variant: TVariant;
  children?: any;
  block?: boolean;
}

const Typography = ({ children, block, variant, __css, ...rest }: TypographyProps) => {
  return (
    <Text as={block ? "div" : "span"} variant={variant} _hover={{}} {...rest}>
      {children}
    </Text>
  );
};

export default Typography;
