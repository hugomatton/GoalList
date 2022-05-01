import {View, Text, StyleSheet, Pressable} from 'react-native'

export default function GoalItem (props){
    return(
      //bind permet de configurer une foction pour une execution future
      <View style={styles.goalItem}>
        <Pressable 
          //Effet android
          android_ripple={{color: '#dddddd'}} 
          //Adpate pour que effet marche sur ios
          style={({pressed})=> pressed && styles.pressedItem} //On applique un style sur la zone pressable si cette dernière est préssée
          onPress={props.onDeleteItem.bind(this, props.id)}
        > 
          <Text style={styles.goalText}>
          {props.text}
          </Text>
        </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: '#5e0acc',
    },
    pressedItem: {
      opacity: 0.5
    },
    goalText:{
      color: 'white',
      padding: 8
    }
  });

