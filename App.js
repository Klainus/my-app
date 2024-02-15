export default App;

import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import { useState, useEffect }  from "react";


const choicesAvailable = ['Sten', 'Sax', 'Påse'];

const choiceRandomizer = () => {
  const randomChoice = Math.floor(Math.random() * choicesAvailable.length);
  return choicesAvailable[randomChoice];
};

//Variables, choices and results for the user & computer 
const App = () => {
  const [choices, setChoices] = useState(['Sten', 'Sax', 'Påse']);
  const [userChoice, setUserChoice] = useState(null);
  const [compChoice, setCompChoice] = useState(null);
  const [result, setResult] = useState('');

  const userSelection = (choice) => {
    setUserChoice(choice);
  };
 
    useEffect(() => {
      const randomChoice = choiceRandomizer();
      setCompChoice(randomChoice);

  if (userChoice === randomChoice) {
    setResult('Det blir oavgjort');
  } else if (
    (userChoice === 'Sten' && randomChoice === 'Påse') ||
    (userChoice === 'Sax' && randomChoice === 'Sten')  ||
    (userChoice === 'Påse' && randomChoice === 'Sax')  
    ) {
      setResult('Du förlorar!');
    } else {
      setResult('DU VANN!');
    }
  }, [userChoice]);
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sten, Sax, Påse</Text>

  <View style={styles.choicesContainer}>
  {choicesAvailable.map((choice) => (
    <TouchableOpacity 
    key={choice} 
    style={styles.choiceButton}
    onPress={() => userSelection(choice)}
    >
      <Text>{choice}</Text>
    </TouchableOpacity>
  ))}
      </View>

<Text>{userChoice ? `Du valde: ${userChoice}` : ''}</Text>
<Text>{compChoice ? `Datorns val: ${compChoice}` : ''}</Text>
  <Text>{result}</Text>
  </View>




  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },

  title: {
    marginTop: 35,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

  choiceButton: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    marginVertical: 10,
    width: 80,
  },

  choicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 80,
    marginTop: 'auto'
  },
});
