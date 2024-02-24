
import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageSourcePropType,
  Pressable
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

 const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
 const Dice = ({imageUrl}: DiceProps ): React.JSX.Element=>{
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
 }
function App(): React.JSX.Element {

  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDiceOntap =()=>{
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch(randomNumber){
      case 1: 
      setDiceImage(DiceOne)
      break;
      case 2: 
      setDiceImage(DiceTwo)
      break;
      case 3: 
      setDiceImage(DiceThree)
      break;
      case 4: 
      setDiceImage(DiceFour)
      break;
      case 5:
        setDiceImage(DiceFive)
        break;
        case 6:
          setDiceImage(DiceSix)
          break;
    }

     
  }
  return (

    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDiceOntap}>
       <Text style = {styles.rollDiceBtnText}>Roll the dice</Text> 
      </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer:{
    margin: 12,
  },
  diceImage:{
      width: 200,
      height: 200,
  },
  rollDiceBtnText:{
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#e5e0ff',
    fontSize: 16,
    color: '#8ea7e9',
    fontWeight: '700',
    textTransform: 'uppercase'
  }

});

export default App;
