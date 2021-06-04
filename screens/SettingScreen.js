import React,{Component} from 'react';
import { View,Text, TextInput, KeyboardAvoidingView,StyleSheet, TouchableOpacity,Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
export default class SettingScreen extends Component{
    constructor(){
        super()
        this.state={
emailId:'',
firstName:'',
lastName:'',
address:'',
contact:'',
docId:''
        }
    }
    updateUserDetails=()=>{
        db.collection('users').doc(this.state.docId).update({
            'first_name':this.state.firstName,
            'last_name':this.state.lastName,
            'address':this.state.address,
            'contact':this.state.contact
        })
        Alert.alert('profile Updated Successfully')
    }
    render(){
        return(
            
            <View style={styles.container}>
     <View style={styles.formContainer}>
       <Text style={styles.label}>First Name</Text>
     <TextInput
          style={styles.formTextInput}
          placeholder ={"First Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
          value={this.state.firstName}
        />
          <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Last Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
          value={this.state.lastName}
        />
          <Text style={styles.label}>Contact</Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Contact"}
          keyboardType={'numeric'}
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
          value={this.state.contact}
        />
          <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Address"}
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
          value={this.state.address}
        />
          <TouchableOpacity style={styles.button} 
        onPress={()=>{
            this.updateUserDetails()
        }}>
            <Text style={styles.buttonText}> 
            save
            </Text>
        </TouchableOpacity>
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#6FC0B8',
     alignItems: 'center',
     justifyContent: 'center'
   },
   formContainer:{
       flex:0.88,
       justifyContent:'center'
   },
   profileContainer:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
   },
   title :{
     fontSize:65,
     fontWeight:'300',
     paddingBottom:30,
     color : '#ff3d00'
   },
   formTextInput:{
     width:"90%",
     borderColor:'#grey',
     borderRadius:2,
     borderWidth:1,
     marginTop:20,
 
   },
   button:{
     width:"75%",
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:"#3287d",
     shadowColor: "#000",
     shadowOffset: {
        width: 0,
        height: 8,
     },
     shadowOpacity: 0.44,
     shadowRadius: 10.32,
 
   },
   buttonText:{
     color:'#ffff',
     fontWeight:'bold',
  
   },
   label:{
     color:'#717D7E',
     fontWeight:'bold',
  
   }
  })
  