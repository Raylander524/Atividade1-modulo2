import React from 'react';
import {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 



export default function App() {
  const buttons = ['AC', 'DEL', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '=']  

  const [currentNumber, setCurrentNumber] = useState("");


  function calculator(){
    const splitNumbers = currentNumber.split(' ')
    const fistNumber = parseFloat(splitNumbers[0])
    const lastNumber = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]

    switch(operator){
      case '+':
        setCurrentNumber((fistNumber + lastNumber).toString())
        return
      case '-': 
        setCurrentNumber((fistNumber - lastNumber).toString())
        return
      case '*':
        setCurrentNumber((fistNumber * lastNumber).toString())
        return
      case '/': 
        setCurrentNumber((fistNumber / lastNumber).toString())
        return
    }
  }

  function handleInput(buttonPressed){
    if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/" ){
      setCurrentNumber(currentNumber + " " + buttonPressed + " ")
      return
    }
    switch(buttonPressed){
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length -1)))
        return
      case 'AC':
        setCurrentNumber("")
        return
      case '=':
        calculator()
        return
      case '+/-':
        return
    }

    setCurrentNumber(currentNumber + buttonPressed)
  }

  const styles = StyleSheet.create({
    results: {
      width: '100%',
      minHeight: 280,
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    resultText: {
      margin: 10,
      fontSize: 50
    },

    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 90, 
      minHeight: 90,
      flex: 2,
      borderRadius: 110,
      backgroundColor: '#87C3F8'
    },
    textButton: {
      fontSize: 20,
      color: 'white',
    }, 
  });

  return (
    <View>
      <View style={styles.results}>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => 
          button === '=' ?
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, {backgroundColor: '#C1C1BD',minWidth: 42 }]}>
              <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>{button}</Text>
            </TouchableOpacity>
          :
          button === 'AC' ?
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, {backgroundColor: '#C1C1BD', minWidth: 188}]}>
              <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>{button}</Text>
            </TouchableOpacity>
          :
          button === 'DEL' ?
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, {backgroundColor: '#E38B19'}]}>
              <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>{button}</Text>
            </TouchableOpacity>
          :
          button === '/' ?
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, {backgroundColor: '#E38B19'}]}>
              <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>{button}</Text>
            </TouchableOpacity>
          :
          button === '*' ?
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, {backgroundColor: '#E38B19'}]}>
              <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>{button}</Text>
            </TouchableOpacity>
          :
          button === '-' ?
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, {backgroundColor: '#E38B19'}]}>
              <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>{button}</Text>
            </TouchableOpacity>
          :
          button === '+' ?
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, {backgroundColor: '#E38B19'}]}>
              <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>{button}</Text>
            </TouchableOpacity>
          :
          button === 0 ?
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, {minWidth: 140}]}>
              <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>{button}</Text>
            </TouchableOpacity>
          :
          button === '.' ?
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, {minWidth: 42}]}>
              <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>{button}</Text>
            </TouchableOpacity>
          :
            <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button]}>
              <Text style={styles.textButton}>{button}</Text>
            </TouchableOpacity>
        )}
      </View>
    </View>
  );
}


