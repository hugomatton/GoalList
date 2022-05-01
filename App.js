import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  /**
   * Ouvre le modal
   */
  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

  /**
   * Ferme le modal
   */
  function endAddGoalHandler(){
    setModalIsVisible(false)
  }

  /**
   * Ajoute un goal
   * @param {*} enteredGoalText 
   */
  function addGoalHandler(enteredGoalText){
    setCourseGoals((currentCourseGoals)=>[...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}])
    //On ferme ensuite le modal
    endAddGoalHandler()
  }

  /**
   * Supprime un goal pour un id indiqué
   * @param {*} id 
   */
  function deleteGoalHandler(id){
    setCourseGoals( currentCourseGoals => {
      return currentCourseGoals.filter((goal)=>
        goal.id != id //on garde tout les item dont l'id ne correspond pas
      )
    })
  }

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button 
          title='Add new goal' 
          color='#b180f0'
          onPress={startAddGoalHandler}
        />
        <GoalInput onCancel={endAddGoalHandler} onAddGoal={addGoalHandler} visible={modalIsVisible}/>
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={itemData =>{
              return (
                <GoalItem 
                  id={itemData.item.id}
                  text={itemData.item.text} 
                  onDeleteItem={deleteGoalHandler}
                />
              )
            }}
            keyExtractor={(item, index)=>{
              return item.id
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer:{
    flex: 5
  }
});
