import React from "react";
import "../../global.css";
import { Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";

export default function History() {
  const router = useRouter();

  const [history, setHistory] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setHistory(data))
      .catch((error) => console.error("Error fetching history:", error));
  }, []);

  return (
   
      <SafeAreaView className="flex-1 bg-blue-50">
        <StatusBar barStyle={"dark-content"} className="bg-white" />
        <View className="flex-row items-center p-3 bg-blue-100">

          <TouchableOpacity onPress={() => router.push("/(Home)/Index")}>
            <Ionicons name="arrow-back" size={27} color="blue" />
          </TouchableOpacity>

          <View className="flex-1 items-center">
            <Text className="text-xl font-bold text-blue-500">
              Service History
            </Text>
          </View>

          <Text className="text-xl font-bold text-blue-500">
            Puncture Wala
          </Text>
        </View>
          <ScrollView showsVerticalScrollIndicator={true}>
        <View className="flex-row flex-wrap justify-between p-4">

          <View className="w-[48%] bg-white rounded-2xl p-4 mb-4">
            <Text className="text-black text-lg font-semibold mb-1">
              TOTAL JOBS
            </Text>
            <Text className="text-black font-bold text-2xl">
              24
            </Text>
          </View>

          <View className="w-[48%] bg-blue-600 rounded-2xl p-4 mb-4">
            <Text className="text-white text-lg font-semibold mb-1 ">
              SPENT THIS MONTH
            </Text>
            <Text className="text-white font-bold text-2xl">
              ₹1,450
            </Text>
          </View>

          <Text className="text-xl font-bold text-gray-400 mt-2">
            October 2023
          </Text>
        </View>


        {history.map((item) => (
          <View key={item.id} className="mb-4 p-4 bg-white rounded-2xl mx-3">


            <View className="flex-row justify-between items-center">

              <View className="flex-row items-center">
                <View className="bg-gray-400 p-2 rounded-full mr-2">
                  <MaterialIcons name="build" size={18} color="white" />
                </View>

                <Text className="text-lg font-bold text-gray-800">
                  Service Name
                </Text>
              </View>

              <Text className="text-lg font-bold text-gray-800">
                ₹{Math.floor(Math.random() * 500)}
              </Text>
            </View>

            <View className="flex-row justify-between mt-2">
              <Text className="text-gray-500">
                {item.email}
              </Text>

              <Text className="text-green-600 font-semibold">
                Completed
              </Text>
            </View>


            <View className="flex-row items-center justify-between mt-4">

              <View className="flex-row items-center">
                <Image
                  source={{ uri: `https://i.pravatar.cc/150?u=${item.id}` }}
                  className="w-10 h-10 rounded-full"
                />

                <Text className="ml-3 text-lg">
                  {item.name}
                </Text>
              </View>

              <TouchableOpacity>
                <Text className="text-blue-600 font-semibold">
                  View DVI →
                </Text>
              </TouchableOpacity>

            </View>

          </View>
        ))}
        </ScrollView>
      </SafeAreaView>
    

  )
}