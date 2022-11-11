import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//screem
import HomeScreem from './src/screens/HomeScreem';
import SettingsScreem from './src/screens/SettingsScreem';
import AboutUsScreem from './src/screens/AboutUsScreem';
import Main from './src/screens/Main';
import ScroolView from './src/screens/ScroolView';


import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator ();

function MyTabs (){
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name="Home" 
            component={HomeScreem}
            options = {{
                tabBarIcon: ({color }) => (
                    <Entypo name="home" size={24} color="black" />
                )
            }} 
            />

            <Tab.Screen
                name="Setting" 
                component={SettingsScreem}
                options = {{
                    tabBarIcon: ({color }) => (
                        <Ionicons name="settings" size={24} color="black" />
                    )
                }}

            
             />


            <Tab.Screen 
            name="About Us" 
            component={AboutUsScreem}
            options = {{
                tabBarIcon: ({color }) => (
                    <MaterialCommunityIcons name="account-group" size={24} color="black" />
                )
            }}
            />
            <Tab.Screen 
            name="Main" 
            component={Main}
            options = {{
                tabBarIcon: ({color }) => (
                    <AntDesign name="mail" size={24} color="black" />
                )
            }}
            />
            <Tab.Screen 
            name="ScroolView" 
            component={ScroolView}
            options = {{
                tabBarIcon: ({color }) => (
                    <AntDesign name="back" size={24} color="black" />
                )
            }}
            />

        </Tab.Navigator>
    );
};

export function Navigator(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}