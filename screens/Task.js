import React, { useEffect, useState } from "react"
import { StyleSheet,FlatList,TouchableOpacity,Alert,View,Text } from "react-native"
import database from "../config"
import { MaterialIcons } from "@expo/vector-icons"

export default function Task ({navigation}){
    const [task, setTask]= useState ([])
    useEffect(()=> {
        database.collection("Tasks").onSnapshot((query)=>{
            const list =[]
            query.forEach((doc)=>{
                list.push({...doc.data(),id:doc.id})
            })
            setTask(list)
        })
    },[])
    

return(

<View style={styles.container}> 
  <Text>Lista de Tarefas:</Text>  
  <FlatList style={styles.FlatList}
  showsVerticalScrollIndicator = {false} 
  data= {task}
  renderItem ={({item}) =>{
    return(
        <View style={styles.tasks}>
            <Text style={styles.descriptionTask}
            onPress={()=>{
                navigation.navigate("Details",{id:item.id, description:item.descripition })
            }}>
                {item.description}
            </Text>
            <TouchableOpacity styles={styles.deleteTask} 
            onPress={()=> deleteTask(item.id)}>
                <MaterialIcons  
                name="delete-forever"
            size={25}
            color="#f64372"
                ></MaterialIcons>
            </TouchableOpacity>
        </View>
    )
  }}  />
  <TouchableOpacity style={styles.ButtonNewTask} 
  onPress ={()=> navigation.navigate("New Task")}>
    <Text style = {styles.iconButton}>+</Text>

  </TouchableOpacity>

</View>


)
}
const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#fff",
    paddingTop: 20,
},
ButtonNewTask:{
    width: 60,
    height:60,
    position: "absolute",
    bottom:30,
    left: 20,
    backgroundColor:"#f92e6a",
    borderRadius:50,
    justifyContent: "center",
    alignItems: "center"
},
iconButton:{
    color:"#fff",
    fontSize: 25,
    fontWeight: "bold",

},
task:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:5
},
descripitiontask:{
    width: "75%",
    alignContent:"flex-start",
    backgroundColor:"#f5f5f5cf",
    padding: 12,
    paddingHorizontal:20,
    borderRadius: 50,
    marginBottom: 5,
    marginRight: 15,
    color: "#282b2db5"
},
deleteTask:{
    justifyContent:"center",
    paddingLeft: 35
}
})



