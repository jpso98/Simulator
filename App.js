import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function App() {
  
  const [valueInitial, setValueInitial] = useState('')
  const [contribuition, setContribuition] = useState('')
  const [percentage, setPercentage] = useState('')
  const [mounths, setMounths] = useState('')
  const [total, setTotal] = useState('')
  const [visible, setVisible] = useState(false)
  const [information, setInformation] = useState(false)

  function showInformations(){
    if(information){
      setInformation(false)
    } else {
      setInformation(true)
    }
  }
  
  function calculate() {
    let value = parseFloat(valueInitial)
    let perce = parseFloat(percentage)
    let moun = parseFloat(mounths)
    let contri = parseFloat(contribuition)
   

    for(i = 0;i < moun; i++){
      let tot = value + contri + (value * perce)
      value = tot

      setTotal(tot.toFixed(2))
      setVisible(true)
    }
  }

  return (
    <View style={styles.container}>

      <Text style ={styles.title}>Simular Investimento</Text>

      <TouchableOpacity onPress = {() => showInformations()}>
        <Text style ={styles.textInformations}>mais</Text>
      </TouchableOpacity>

      {
          information ?
          <View style = {styles.information}>
            <Text style ={{color:'white'}}>
              *Considere 1 = a 100% na hora de informar a Porcentagem
            </Text>
            <Text style ={{color:'white'}}>
              *A porcetagem calculada é mensal
            </Text>
          </View>
          :<Text></Text>
        }

        <View style = {styles.inputContainer}>
          <Text style = {styles.textInput}>Valor Inicial</Text>
          <TextInput
          style = {styles.input}
          placeholder = ''
          underlineColorAndroid = 'transparent'
          keyboardType = 'numeric'
          value = {valueInitial}
          onChangeText = {(text) => setValueInitial(text)}
          />
        </View>

        <View style = {styles.inputContainer}>
          <Text style = {styles.textInput}>Aporte Mensal</Text>
          <TextInput
          style = {styles.input}
          placeholder = ''
          underlineColorAndroid = 'transparent'
          keyboardType = 'numeric'
          value = {contribuition}
          onChangeText = {(text) => setContribuition(text)}
          />
        </View>

        <View style = {styles.inputContainer}>
          <Text style = {styles.textInput}>Porcentagem</Text>
          <TextInput
          style = {styles.input}
          placeholder = ''
          underlineColorAndroid = 'transparent'
          keyboardType = 'numeric'
          value = {percentage}
          onChangeText = {(text) => setPercentage(text)}
          />
        </View>

        <View style = {styles.inputContainer}>
          <Text style = {styles.textInput}>Meses</Text>
          <TextInput
          style = {styles.input}
          placeholder = ''
          underlineColorAndroid = 'transparent'
          keyboardType = 'numeric'
          value = {mounths}
          onChangeText = {(text) => setMounths(text)}
          />
        </View>

        <TouchableOpacity style = {styles.button} onPress = { () => calculate()} >
          <Text style = {styles.textButton}>Simular</Text>
        </TouchableOpacity>

        {
            visible ? 
            <Text style = {styles.result}>O valor final depois de {mounths} meses sera de {total} reais</Text>
            :
            <Text style = {styles.result}>Resultado</Text>
        }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#9400d3'
  },
  screen : {
    
  },
  input: {
    borderWidth: 2,
    borderColor: '#ffffff',
    width: 200,
    borderRadius: 3,
    color: '#ffffff',
    fontSize: 20
  },
  inputContainer: {
    flexDirection: 'column',
    marginBottom: 20
  },
  textInformations: {
    color:'white',
    alignItems: 'flex-start',
  },
  textInput: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  title: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: 200,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 5
  },
  textButton: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold'
  },
  result: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 20,
    color: '#ffffff'
  }
});
