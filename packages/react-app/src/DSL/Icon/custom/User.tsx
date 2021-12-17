import React from "react";
import {Icon} from "@chakra-ui/react";
import {IconProps as ChakraIconProps} from "@chakra-ui/icon/dist/types/icon";


const User = ({...rest}: ChakraIconProps) => {
  return <Icon {...rest}>
    {/*<svg viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">*/}
      <g clipPath="url(#clip0_477_3219)">
        <path
          d="M23.6714 20.2078V18.9349V17.6885H22.3985V16.4155H21.1521V15.1691H19.8791V13.8962H18.6327H17.3598H16.0869V15.1691H14.8405H13.5675H12.2946H11.0482H9.77528V13.8962H8.52887H7.25594H5.98301V15.1691H4.7366V16.4155H3.46367V17.6885H2.21726V18.9614V20.2078H0.944336V21.4807V22.7271V24.0001H2.21726H3.46367H4.7366H5.98301H7.25594H8.52887H9.77528H11.0482H12.2946H13.5675H14.8405H16.0869H17.3598H18.6327H19.8791H21.1521H22.3985H23.6714H24.9443V22.7271V21.4807V20.2078H23.6714Z"
          fill="currentColor"
        />
        <path
          d="M18.6331 3.79226V2.51934H17.3602V1.27293H16.0873V0H14.8409H13.5679H12.295H11.0486H9.77566V1.27293H8.52925V2.51934H7.25633V3.79226H5.9834V5.06519V6.3116V7.58453V8.83094H7.25633V10.1039H8.52925V11.3768H9.77566V12.6232H11.0486H12.295H13.5679H14.8409H16.0873V11.3503H17.3602V10.1039H18.6331V8.83094H19.8795V7.58453V6.3116V5.03867V3.79226H18.6331Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_477_3219">
          <rect width="24" height="24" fill="white" transform="translate(0.944336)"/>
        </clipPath>
      </defs>
    {/*</svg>*/}
  </Icon>
}

export default User
