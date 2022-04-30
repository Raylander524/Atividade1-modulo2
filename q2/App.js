import React from 'react';
import {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";


export default function App() {
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

    button: {
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 20, 
      minHeight: 95,
      borderRadius: 110,
      backgroundColor: '#87C3F8'
    },
    view: {
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 20, 
      minHeight: 95,
      borderRadius: 110,
    },
    textButton: {
      fontSize: 20,
      color: 'white',
    }, 
  });

  return (
    <Grid>
      <Row size={1} style={styles.results}>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </Row>
      <Row size={6}>
            <Col size={2}>
              <TouchableOpacity onPress={() => handleInput('AC')} key='AC' style={[styles.button, {backgroundColor: '#C1C1BD', minWidth: 196}]}>
                <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>AC</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleInput(1)} key='1' style={[styles.button]}>
                <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleInput(4)} key='4' style={[styles.button]}>
                <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleInput(7)} key='7' style={[styles.button]}>
                <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleInput(0)} key='0'  style={[styles.button, {minWidth: 196}]}>
                <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>0</Text>
              </TouchableOpacity>
            </Col>
            <Col size={2}>
              <View style={[styles.view]}>

              </View>
              <TouchableOpacity onPress={() => handleInput(2)} key='2' style={[styles.button]}>
                <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleInput(5)} key='5' style={[styles.button]}>
                <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleInput(8)} key='8' style={[styles.button]}>
                <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>8</Text>
              </TouchableOpacity>
            </Col>
            <Col size={2}>
              <TouchableOpacity onPress={() => handleInput('DEL')} key='DEL' style={[styles.button, {backgroundColor: '#E38B19'}]}>
                <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>DEL</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleInput(3)} key='3' style={[styles.button]}>
                <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleInput(6)} key='6' style={[styles.button]}>
                <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>6</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleInput(9)} key='9' style={[styles.button]}>
                <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleInput('.')} key='.' style={[styles.button, {minWidth: 42}]}>
                <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>.</Text>
              </TouchableOpacity>
            </Col>
            <Col size={2}>
              <TouchableOpacity onPress={() => handleInput('/')} key='/' style={[styles.button, {backgroundColor: '#E38B19'}]}>
                <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>/</Text>
              </TouchableOpacity> 
              <TouchableOpacity onPress={() => handleInput('*')} key='*' style={[styles.button, {backgroundColor: '#E38B19'}]}>
                <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>*</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleInput('+')} key='+' style={[styles.button, {backgroundColor: '#E38B19'}]}>
                <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleInput('-')} key='-' style={[styles.button, {backgroundColor: '#E38B19'}]}>
                <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleInput('=')} key='=' style={[styles.button, {backgroundColor: '#C1C1BD',minWidth: 42 }]}>
                <Text style={[styles.textButton, {color: "white", fontSize: 30}]}>=</Text>
              </TouchableOpacity>
            </Col>
      </Row>
    </Grid>
  );
}


