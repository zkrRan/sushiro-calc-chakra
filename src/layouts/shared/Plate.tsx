import { useState } from 'react'
import {
    Box,
    Center,
    Text,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    HStack,
} from '@chakra-ui/react'
import { MobileNumberInput } from './MobileInputButton'

interface Props {
    primaryColor: string
    secondaryColor: string
    price: number
    setter: (value: string) => void
}

export const Plate = (props: Props) => {
    const { primaryColor, secondaryColor, price, setter } = props
    const [count, setCount] = useState<number>(0)

    const handleCountChange = (valueAsString: string) => {
        setter(valueAsString)
    }

    return (
        <Box
            bg="blackAlpha.400"
            boxShadow="md"
            rounded="md"
            border="1px"
            borderColor="gray.200"
            px={{ base: 4, sm: 6 }}
            py={{ base: 5, sm: 6 }}
        >
            <Center
                w="20"
                h="20"
                rounded="full"
                mx="auto"
                shadow="md"
                bg={primaryColor}
                position="relative"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    w="16"
                    h="16"
                    rounded="full"
                    bg={secondaryColor}
                    position="absolute"
                />
            </Center>
            <Text textAlign="center" fontWeight="semibold" fontSize="xl" mt="2">
                {price} ฿
            </Text>
            <Center p={5}>
                <MobileNumberInput onChange={handleCountChange} value={count} />
            </Center>
        </Box>
    )
}
