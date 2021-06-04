import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SettingScreen from '../screens/SettingScreen';
import CustomSideBarMenu from './CustomSideBarMenu'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ExchangeScreen from '../screens/ExchangeScreen';
import HomeScreen from '../screens/HomeScreen';
export const AppTabNavigator=createBottomTabNavigator({
HomeScreen:{
screen:HomeScreen
},
ExchangeScreen:{
screen:ExchangeScreen
}

})
 const AppDrawerNavigator=createDrawerNavigator({
    Home:{
        screen:AppTabNavigator,
    },
    Setting:{
        screen:SettingScreen,
    }
},
{
    contentComponent:CustomSideBarMenu
},{
    initialRouteName:'Home'

})