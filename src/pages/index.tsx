import { Container, Heading, SimpleGrid, useColorMode, Switch } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Plate } from '@/layouts/shared/Plate'
import { useState } from 'react'

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const [redSushiCount, setRedSushiCount] = useState('0')
  const [silverSushiCount, setSilverSushiCount] = useState('0')
  const [goldSushiCount, setGoldSushiCount] = useState('0')
  const [blackSushiCount, setBlackSushiCount] = useState('0')

  const redSushiPrice = 30 * parseInt(redSushiCount)
  const silverSushiPrice = 60 * parseInt(silverSushiCount)
  const goldSushiPrice = 80 * parseInt(goldSushiCount)
  const blackSushiPrice = 120 * parseInt(blackSushiCount)

  let totalPrice = (redSushiPrice + silverSushiPrice + goldSushiPrice + blackSushiPrice) * 1.177
  const formattedTotalPrice = isNaN(totalPrice) ? 0 : totalPrice.toFixed(2);

  return (
    <Container p={10} size="2xl">
      <Heading textAlign="center">Sushiro Calculator</Heading>
      <Switch
        size="lg"
        colorScheme="blue"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        my={4}
      >
        {colorMode === "dark" ? "Dark" : "Light"}
      </Switch>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} p={10}>
        <Plate
          primaryColor="red.500"
          secondaryColor="red.600"
          price={30}
          setter={setRedSushiCount}
        />
        <Plate
          primaryColor="yellow.500"
          secondaryColor="yellow.200"
          price={60}
          setter={setSilverSushiCount}
        />
        <Plate
          primaryColor="yellow.500"
          secondaryColor="yellow.200"
          price={80}
          setter={setGoldSushiCount}
        />
        <Plate
          primaryColor="gray.500"
          secondaryColor="gray.200"
          price={120}
          setter={setBlackSushiCount}
        />
      </SimpleGrid>
      <Heading as="h2" mt={8} mb={2}>
        Total Price: {formattedTotalPrice} ฿
      </Heading>
    </Container>
  )
}

export default Home