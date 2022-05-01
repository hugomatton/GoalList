import {StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native'
import { useState } from 'react'


export default function GoalInput (props) {

    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText)
    }

    /**
     * Permet d'appeler la fonction ajouter goal du parent
     * Avec parametre
     */
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return(
    <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/goal.png')}/>
            <TextInput 
                style={styles.textInput} 
                placeholder='Your course goal' 
                onChangeText={goalInputHandler} //Si valeur de l'input change valeur de la variable change
                value={enteredGoalText} //Si variable change valeur de l'input change
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        color='#f31282'
                        title='Cancel'
                        onPress={props.onCancel}
                    />
                </View>
                <View style={styles.button}>
                    <Button 
                        color='#b180f0'
                        title='Add Goal'
                        onPress={addGoalHandler}
                    />
                </View>
            </View>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        marginRight: 8,
        padding: 14
      },
      buttonContainer: {
          flexDirection: 'row',
          marginTop: 16
      },
      button: {
          width: 100,
          marginHorizontal: 8,
      },
      image:{
          width:100,
          height:100,
          margin:20
      }
})
