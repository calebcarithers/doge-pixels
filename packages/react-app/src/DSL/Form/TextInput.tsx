import Control from "./Control";
import { FormErrorMessage, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { AllowedStyleProps, BaseInputProps } from "./interfaces";
import { Input } from "./Input/Input";
import { useControlledFormField, useFormField } from "./useFormField";
import Icon from "../Icon/Icon";

interface TextInputProps extends BaseInputProps, AllowedStyleProps {
  rightIcon?: any
}

const TextInput = ({
  name,
  placeholder,
  label,
  validate,
  initialValue,
  value,
  onChange,
  horizontal = false,
  rightIcon,
  ...rest
}: TextInputProps) => {
  const { isRequired, inputValue, inputOnChange, restInput, meta } = useFormField(validate, name, initialValue);
  useControlledFormField(inputOnChange, value);

  const rightIconWidth = "60px"

  return (
    <Control name={name} isRequired={isRequired} label={label} horizontal={horizontal}>
      <InputGroup>
        <Input
          id={name}
          placeholder={placeholder}
          {...restInput}
          {...rest}
          onChange={e => {
            // TODO: below input change could be put in else only to trigger if onChange not passed
            // forcing the above useEffect to be present
            const value = e.target.value;
            if (onChange) {
              onChange(value);
            }
            inputOnChange(value);
          }}
          value={inputValue}
          pr={rightIcon ? rightIconWidth : "inherit"}
        />
        {rightIcon && <InputRightElement zIndex={0} top={"50%"} transform={"translateY(-50%)"} width={rightIconWidth} children={<Icon icon={rightIcon}/>}/>}
      </InputGroup>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </Control>
  );
};

export default TextInput;
