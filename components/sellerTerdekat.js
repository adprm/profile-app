import React, { useState } from 'react'
import { View, Text } from 'react-native'

export default function sellerTerdekat() {
  const [counter, setCounter] = useState(0);
  
  const incrementCounter = () => {
    setCounter(counter + 1);
  }
  
  return (
    <View>
      <Text>Pushhh</Text>
      <Text>{counter}</Text>
      <Text onPress={incrementCounter}>Tambah</Text>
    </View>
  )
}
