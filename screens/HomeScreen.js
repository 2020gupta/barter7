import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput,KeyboardAvoidingView,TouchableOpacity,Alert} from 'react-native';
import {ListItem} from 'react-native-elements'
import db from '../config'
export default class HomeScreen extends Component{
    constructor(){
        super()
        this.state={
            allRequest:[],

        }
    }
    getAllRequest=()=>{
        this.requestref=db.collection("exchange_request")
.onSnapshot((snapshot)=>{
    var allRequest=[]
    snapshot.forEach((doc)=>{
        allRequest.push(doc.data())
    })
    this.setState({allRequest:allRequest})
})
    }
    keyExtractor=(item,index)=>index.toString()
    renderItem=({item,i})=>{
        return(
            <ListItem
            key={i} bottomDivider>
                <ListItem.Content>
                    <ListItem.title>
                        {item.item_name}
                    </ListItem.title>
                    <ListItem.Subtitle>
                        {item.description}
                    </ListItem.Subtitle>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{color:'#ffffff'}}>
                            exchange
                        </Text>
                    </TouchableOpacity>
                </ListItem.Content>
            </ListItem>
        )
    }
    componentDidMount(){
        this.getAllRequest()
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Text>Barter App</Text>
                <View style={{flex:1}}>
                    {
                        this.state.allRequest.length===0
                        ()
                    }
                </View>
            </View>
        )
    }
}