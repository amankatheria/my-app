
import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Truck } from "lucide-react";
export default function Home() {

  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-blue-50">
      <ScrollView >
        <StatusBar barStyle={"dark-content"} className="bg-white"/>
        <View className="p-4">

         
          <Text className="text-2xl font-bold mb-1">Confirm Issue</Text>
          <Text className="text-gray-500 mb-5">
            Select the service you need to help us find the right technician.
          </Text>

     
          <View className="bg-gray-100 rounded-2xl overflow-hidden mb-6">
            <Image
              source={{ uri: "" }}
              className="w-full h-44"
              resizeMode="cover"
            />
            <View className="absolute bottom-3 left-3 bg-white px-3 py-1 rounded-full shadow">
              <Text className="text-xs font-medium">
                Bandra West, Mumbai
              </Text>
            </View>
          </View>

         
          <View className="flex-row flex-wrap justify-between">

          
            <TouchableOpacity
              activeOpacity={0.8}
              className="basis-[48%] bg-blue-600 rounded-2xl p-4 mb-4 items-center"
            >
              <View className="bg-white/20 rounded-full p-3 mb-2">
                <MaterialIcons name="build" size={26} color="white" />
              </View>
              <Text className="text-white text-lg font-semibold">
                Puncture
              </Text>
              <Text className="text-white text-xs opacity-80">
                Starting from ₹199
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              className="basis-[48%] bg-white rounded-2xl p-4 mb-4 items-center shadow-sm"
            >
              <View className="bg-gray-200 rounded-full p-3 mb-2">
                <MaterialIcons name="battery-charging-full" size={26} />
              </View>
              <Text className="text-gray-800 text-lg font-semibold">
                Battery
              </Text>
              <Text className="text-gray-500 text-xs">
                Jumpstart or Replace
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              className="basis-[48%] bg-white rounded-2xl p-4 mb-4 items-center shadow-sm"
            >
              <View className="bg-gray-200 rounded-full p-3 mb-2">
                <MaterialIcons name="local-gas-station" size={26} />
              </View>
              <Text className="text-gray-800 text-lg font-semibold">
                Fuel
              </Text>
              <Text className="text-gray-500 text-xs">
                Emergency 5L Refill
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              className="basis-[48%] bg-white rounded-2xl p-4 mb-4 items-center shadow-sm"
            >
              <View className="bg-gray-200 rounded-full p-3 mb-2">
                <Entypo name="dots-three-horizontal" size={26} />
              </View>
              <Text className="text-gray-800 text-lg font-semibold">
                Other
              </Text>
              <Text className="text-gray-500 text-xs">
                Diagnostic & more
              </Text>
            </TouchableOpacity>

          </View>

          
          <View className="bg-white p-6 rounded-2xl mt-2 shadow-sm">
            <Text className="text-blue-600 text-lg font-semibold">
              Estimated Base Fee
            </Text>
            <Text className="text-3xl font-bold mt-1">₹199</Text>
            <Text className="text-gray-500 text-sm mt-1">
              Includes visit & inspection
            </Text>
          </View>

          {/* Button */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => router.push("/(tabs)/History")}
            className="flex-row items-center justify-center gap-2 bg-blue-600 p-4 mt-5 rounded-full"
          >
            <Text className="text-white text-lg font-semibold">
              Continue
            </Text>
            <AntDesign name="arrow-right" size={18} color="white" />
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
