import { useNumberInput } from '@chakra-ui/react'
import { Button, HStack, Input } from '@chakra-ui/react'

interface Props {
    value: number
    onChange: (value: any) => void
}

export const MobileNumberInput = (props: Props) => {
    const { value, onChange } = props
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
        step: 1,
        defaultValue: value,
        min: 0,
        onChange: (value: string) => onChange(parseInt(value)),
    })

    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    return (
        <HStack maxW='320px'>
            <Button {...dec}>-</Button>
            <Input {...input} />
            <Button {...inc}>+</Button>
        </HStack>
    )
}