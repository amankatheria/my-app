import Feather from '@expo/vector-icons/Feather';
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from "expo-status-bar";
import MaterialIcons from '@expo/vector-icons/build/MaterialIcons';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Layout() {
   const navigation = useNavigation();

   return (
      <React.Fragment>
         <StatusBar />
         <Tabs>
            <Tabs.Screen name="History" options={{ headerShown: false, tabBarIcon: () => <MaterialIcons name="history" size={28} color="black" /> }} />
            <Tabs.Screen name="index" options={{ headerShown: false, tabBarIcon: () => <Ionicons name="help-circle-outline" size={28} color="black" /> }} />
            <Tabs.Screen name="Profile" options={{ headerShown: false, tabBarIcon: () => <Feather name="user" size={28} color="black" /> }} />
            <Tabs.Screen name="Mechanic" options={{ headerShown: false, tabBarIcon: () => <Feather name="user" size={28} color="black" /> }} />
         </Tabs>
        
      </React.Fragment>
   );
}