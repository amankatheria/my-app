import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, Image, Button } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRef } from "react";
import { Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Index() {

  const [plan, setplan] = useState("monthly")
  const translateX = useRef(new Animated.Value(0)).current;

  const toggle = () => {
    const ismonthly = plan === "monthly";
    Animated.timing(translateX, {
      toValue: ismonthly ? 1 : 0,
      duration: 250,
      useNativeDriver: true
    }).start()
    setplan(ismonthly ? "yearly" : "monthly")
  }
  const slide = translateX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 90]
  });

  return (

    <SafeAreaView className="flex-1 bg-blue-50">

      <View className="p-2 bg-blue-100 flex-row ">

        <TouchableOpacity onPress={() => router.push("/(tabs)/History")} className="mt-1">
          <Ionicons name="arrow-back" size={29} color="blue" />
        </TouchableOpacity>

        <View className=" flex-1 items-center justify-center">
          <Text className="text-2xl font-bold mb-2 text-blue-600 "> Puncture Wala</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View className="p-6 items-center justify-center">

          <Text className="text-2xl font-bold text-center">
            Premium Assist
          </Text>

          <Text className="font-semibold text-lg text-gray-600 mt-2 text-center leading-6">
            The ultimate roadside lifeline for every{"\n"}journey.
          </Text>

        </View>

        <TouchableOpacity onPress={toggle} activeOpacity={0.8}>
          <View className="mb-3  w-[49%] h-14 bg-gray-300 rounded-full self-center justify-center">
            <Animated.View
              style={{
                transform: [{ translateX: slide }],
              }}
              className="absolute w-1/2 h-12 bg-white rounded-full ml-1 justify-center items-center "
            >
              <View className="  font-bold rounded-full bg-white w-[90%] items-center p-3 ">
                <Text className="text-black text-lg font-bold">
                  {plan === "monthly" ? "Monthly" : "Yearly"}
                </Text>
              </View>
            </Animated.View>

          </View>
        </TouchableOpacity>

        {plan === "monthly" ? (
          <View className="flex-1 items-center p-3">

            <View className="w-full bg-white rounded-2xl p-5 shadow-lg">

              <View className="mb-4">
                <Text className="text-4xl font-bold text-blue-600">
                  ₹499 <Text className="text-black text-xl">/ Monthly</Text>
                </Text>
                <Text className="text-yellow-900 mt-1 font-semibold text-xl">
                  Best Value Plan
                </Text>
              </View>

              <View className="space-y-4">

                <View className="flex-row items-center p-2">
                  <View className="bg-gray-100 w-12 h-12 rounded-2xl items-center justify-center mb-4">

                    <FontAwesome6 name="bolt-lightning" size={26} color="blue" />
                  </View>
                  <View className="ml-3 flex-1">
                    <Text className="font-bold text-black text-lg">
                      10 free jumpstarts
                    </Text>
                    <Text className="text-gray-500 text-sm">
                      Never get stranded with a dead battery.
                    </Text>
                  </View>
                </View>


                <View className="flex-row items-center p-2">
                  <View className="bg-gray-100 w-12 h-12 rounded-2xl items-center justify-center mb-4">

                    <AntDesign name="percentage" size={26} color="blue" />
                  </View>
                  <View className="ml-3 flex-1">
                    <Text className="font-bold text-black text-lg">
                      20% discount on all labor
                    </Text>
                    <Text className="text-gray-500 text-sm">
                      Premium savings on every professional service.
                    </Text>
                  </View>
                </View>


                <View className="flex-row items-center p-2">
                  <View className="bg-gray-100 w-12 h-12 rounded-2xl items-center justify-center mb-4">

                    <FontAwesome5 name="clock" size={26} color="blue" />
                  </View>
                  <View className="ml-3 flex-1">
                    <Text className="font-bold text-black text-lg">
                      Priority 15-min dispatch
                    </Text>
                    <Text className="text-gray-500 text-sm">
                      Jump the queue with our elite response time.
                    </Text>
                  </View>
                </View>


                <View className="flex-row items-center p-2">
                  <View className="bg-gray-100 w-12 h-12 rounded-2xl items-center justify-center mb-4">

                    <AntDesign name="customer-service" size={26} color="blue" />
                  </View>
                  <View className="ml-3 flex-1">
                    <Text className="font-bold text-black text-lg">
                      Dedicated 24/7 concierge
                    </Text>
                    <Text className="text-gray-500 text-sm">
                      Direct human support whenever you need it.
                    </Text>
                  </View>
                </View>

              </View>

              <TouchableOpacity className="mt-6 bg-blue-600 py-4 rounded-full">
                <Text className="text-center text-white font-bold text-xl">
                  Subscribe Now
                </Text>
              </TouchableOpacity>

            </View>
          </View>
        ) : (
          <View className="flex-1 justify-center items-center p-4">

            <View className="w-full bg-white rounded-2xl p-5 shadow-lg">

              <View className="mb-4">
                <Text className="text-4xl font-bold text-blue-600">₹999 <Text className=" text-black text-xl">/Yearly</Text></Text>
                <Text className="text-yellow-900 mt-1 font-semibold text-xl">Best Value Plan</Text>
              </View>


              <View className="space-y-4">

                <View className="flex-row items-start p-2">
                  <View className="bg-gray-100 w-12 h-12 rounded-2xl items-center justify-center mb-4">

                    <FontAwesome6 name="bolt-lightning" size={24} color="blue" />
                  </View>
                  <View className="ml-3 flex-1">
                    <Text className="font-bold text-black text-lg ">Unlimited free jumpstarts</Text>
                    <Text className="text-gray-500 text-sm">
                      Never get stranded with a dead battery.
                    </Text>
                  </View>
                </View>


                <View className="flex-row items-start p-2">
                  <View className="bg-gray-100 w-12 h-12 rounded-2xl items-center justify-center mb-4">

                    <AntDesign name="percentage" size={24} color="blue" />
                  </View>
                  <View className="ml-3 flex-1">
                    <Text className="font-bold text-black text-lg">30% discount on all labor</Text>
                    <Text className="text-gray-500 text-sm">
                      Premium savings on every professional service.
                    </Text>
                  </View>
                </View>


                <View className="flex-row items-start p-2">
                  <View className="bg-gray-100 w-12 h-12 rounded-2xl items-center justify-center mb-4">

                    <FontAwesome5 name="clock" size={24} color="blue" />
                  </View>
                  <View className="ml-3 flex-1">
                    <Text className="font-bold text-black text-lg">Priority 10-min dispatch</Text>
                    <Text className="text-gray-500 text-sm">
                      Jump the queue with our elite response time.
                    </Text>
                  </View>
                </View>


                <View className="flex-row items-start p-2">
                  <View className="bg-gray-100 w-12 h-12 rounded-2xl items-center justify-center mb-4">

                    <AntDesign name="customer-service" size={26} color="blue" />
                  </View>
                  <View className="ml-3 flex-1">
                    <Text className="font-bold text-black text-lg">Dedicated 24/7 concierge</Text>
                    <Text className="text-gray-500 text-sm">
                      Direct human support whenever you need it.
                    </Text>
                  </View>
                </View>

              </View>

              <TouchableOpacity className="mt-6 bg-blue-600 py-4 rounded-full">
                <Text className="text-center text-white font-bold text-xl">
                  Subscribe Now
                </Text>
              </TouchableOpacity>

            </View>
          </View>
        )}

        <View className="flex-row justify-between m-4">

          <View className="bg-gray-100 rounded-2xl p-4 flex-1 mx-1 justify-center items-center">
            <AntDesign name="check-square" size={24} color="blue" className="mb-2" />
            <Text className="text-black text-base font-semibold mb-1 text-center">
              Trusted by
            </Text>
            <Text className="text-black text-sm font-semibold text-center">
              10k+ Drivers
            </Text>
          </View>

          <View className="bg-gray-100 rounded-2xl p-4 flex-1 mx-1 justify-center items-center">
            <MaterialIcons name="security" size={24} color="blue" />
            <Text className="text-black text-base font-semibold mb-1 text-center">
              Secure
            </Text>
            <Text className="text-black text-sm font-semibold text-center">
              Payment
            </Text>
          </View>

        </View>

        <View className="px-6 mt-2 m-4">
          <Text className="font-semibold text-md text-gray-400 text-center">
            "The fastest roadside assistance I've ever used"
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}