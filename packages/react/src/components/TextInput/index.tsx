import { ComponentProps, forwardRef, ElementRef } from "react"
import { Input, Prefix, TextInputContainer } from "./styles"

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, "size"> {
  prefix?: string
  size?: ComponentProps<typeof TextInputContainer>["size"]
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ size, prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer size={size}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  }
)

TextInput.displayName = "TextInput"
