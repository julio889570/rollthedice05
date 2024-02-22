
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageSourcePropType
} from 'react-native';
 import DiceOne from '../assets/One.png'
 import DiceTwo from '../assets/Two.png'
 import DiceThree from '../assets/Three.png'
 import DiceFour from '../assets/Four.png'
 import DiceFive from '../assets/Five.png'
 import DiceSix from '../assets/Six.png'

 type DiceProps = PropsWithChildren<{
    imageUrl: ImageSourcePropType
 }>
 const Dice = ({imageUrl}: DiceProps ): React.JSX.Element=>{
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
 }
function App(): React.JSX.Element {


  return (
    <View><Text>Text is here</Text></View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  diceImage:{

  }
});

export default App;
