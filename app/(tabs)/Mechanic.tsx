import { View, Text, Image, TouchableOpacity } from "react-native"
import React from "react";
import { ScrollView } from "react-native";
import { Animated } from "react-native";
import { useRef } from "react";
import { useState } from "react";
import { useRouter } from "expo-router";
import { BadgeCheck, Percent, Star, ChartNoAxesCombined, UserRound } from 'lucide-react';
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';




export default function Mechanic() {
    const [plan, setplan] = useState("monthly")
    const translateX = useRef(new Animated.Value(0)).current;
    const router = useRouter()


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
            <View className="p-2 bg-blue-100 flex-row justify-between items-center">
                <TouchableOpacity onPress={() => router.push("/(tabs)/Profile")} className="mt-1">
                    <Ionicons name="arrow-back" size={29} color="blue" />
                </TouchableOpacity>
                <Text className="font-bold text-2xl text-blue-700 left-7">Puncture Wala</Text>
                <View className=" flex-1 items-end right-4">
                    <Image source={{ uri: `https://i.pravatar.cc/160?u=` }}
                        className="w-10 h-10 rounded-full " />
                </View>
            </View>
            <ScrollView>
                <View className="p-6 items-center justify-center">
                    <Text className="text-xl font-bold text-center">
                        Elevate Your Business
                    </Text>

                    <Text className="p-3 text-gray-800 text-base font-medium text-center">
                        Join the elite network of service providers with Pro Partner and
                        unlock exclusive growth tools designed for high-performance
                        mechanics.
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
                                    {plan === "monthly" ? "Monthly" : "Yearly "}
                                </Text>
                            </View>
                        </Animated.View>

                    </View>
                </TouchableOpacity>
                {plan === "monthly" ? (
                    <View className="flex-1 justify-center items-center p-4">

                        <View className="w-[90%] bg-white rounded-2xl p-5 shadow-lg">

                            <View className="flex-row justify-between items-center mb-4 ">
                                <Text className="bg-blue-100 text-blue-400 px-3 py-1 rounded-full text-lg font-semibold">
                                    PRO PARTNER
                                </Text>
                                <AntDesign name="check-circle" size={26} color="blue" />
                            </View>


                            <Text className="text-3xl font-bold text-black">
                                ₹1,999 <Text className="text-lg text-gray-500">/Months</Text>
                            </Text>


                            <View className="bg-orange-100 self-start px-3 py-1 rounded-full mt-2">
                                <Text className="text-orange-600 text-lg font-semibold">
                                    Save 16% annually
                                </Text>
                            </View>


                            <Text className="text-gray-500 mt-4 text-xl leading-6">
                                Designed for established professionals looking to maximize visibility
                                and reduce operational overhead.
                            </Text>

                            <TouchableOpacity className="bg-blue-600 mt-6 py-4 rounded-full items-center">
                                <Text className="text-white text-xl font-semibold">
                                    Upgrade to Pro
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                ) : (
                    <View className="flex-1 justify-center items-center p-4">

                        <View className="w-[90%] bg-white rounded-2xl p-5 shadow-lg">


                            <View className="flex-row justify-between items-center mb-4 ">
                                <Text className="bg-blue-100 text-blue-400 px-3 py-1 rounded-full text-lg font-semibold">
                                    PRO PARTNER
                                </Text>
                                <AntDesign name="check-circle" size={26} color="blue" />
                            </View>


                            <Text className="text-3xl font-bold text-black">
                                ₹2,999 <Text className="text-lg text-gray-500">/year</Text>
                            </Text>


                            <View className="bg-orange-100 self-start px-3 py-1 rounded-full mt-2">
                                <Text className="text-orange-600 text-lg font-semibold">
                                    Save 16% annually
                                </Text>
                            </View>


                            <Text className="text-gray-500 mt-4 text-xl leading-6">
                                Designed for established professionals looking to maximize visibility
                                and reduce operational overhead.
                            </Text>

                            <TouchableOpacity className="bg-blue-600 mt-6 py-4 rounded-full items-center">
                                <Text className="text-white text-xl font-semibold">
                                    Upgrade to Pro
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                )}
                <View className="bg-white p-5 rounded-2xl shadow-md w-[90%] self-center mt-5">


                    <View className="bg-gray-100 w-12 h-12 rounded-2xl items-center justify-center mb-4">
                        <AntDesign name="percentage" size={24} color="blue" />
                    </View>


                    <Text className="text-lg font-bold text-black mb-2">
                        50% Lower Fees
                    </Text>


                    <Text className="text-gray-500 text-lg leading-5">
                        Significantly reduced commission on every service request you complete through the app.
                    </Text>

                </View>

                <View className="bg-white p-5 rounded-2xl shadow-md w-[90%] self-center mt-5">


                    <View className="bg-gray-100 w-12 h-12 rounded-2xl items-center justify-center mb-4">
                        <AntDesign name="star" size={24} color="blue" />
                    </View>


                    <Text className="text-lg font-bold text-black mb-2">
                        Featured Placement
                    </Text>


                    <Text className="text-gray-500 text-lg leading-5">
                        Appear at the top of customer search results to capture more high-value bookings nearby.
                    </Text>

                </View>
                <View className="bg-white p-5 rounded-2xl shadow-md w-[90%] self-center mt-5">


                    <View className="bg-gray-100 w-12 h-12 rounded-2xl items-center justify-center mb-4">
                        <EvilIcons name="search" size={24} color="blue" />
                    </View>


                    <Text className="text-lg font-bold text-black mb-2">
                        Advanced Analytics
                    </Text>


                    <Text className="text-gray-500 text-lg leading-5">
                        Deep insights into earnings, peak demand times, and customer satisfaction metrics.
                    </Text>

                </View>
                <View className="bg-white p-5 rounded-2xl shadow-md w-[90%] self-center mt-5">


                    <View className="bg-gray-100 w-12 h-12 rounded-2xl items-center justify-center mb-4">
                        <AntDesign name="customer-service" size={24} color="blue" />
                    </View>


                    <Text className="text-lg font-bold text-black mb-2">
                        Priority Support
                    </Text>


                    <Text className="text-gray-500 text-lg leading-5">
                        24/7 direct access to our senior partner success team for any technical or payment issues.
                    </Text>

                </View>

                <View className="p-4">


                    <View className="border border-dashed border-gray-300 rounded-xl p-6 bg-white">


                        <View className="flex-row justify-center mb-4">

                            <Image
                                source={{ uri: "https://i.pravatar.cc/50?img=1" }}
                                className="w-12 h-12 rounded-full border-2 border-white -mr-3"
                            />

                            <Image
                                source={{ uri: "https://i.pravatar.cc/60?img=2" }}
                                className="w-12 h-12 rounded-full border-2 border-white -mr-3"
                            />

                            <Image
                                source={{ uri: "https://i.pravatar.cc/100?img=3" }}
                                className="w-12 h-12 rounded-full border-2 border-white"
                            />

                        </View>


                        <Text className="text-gray-700 text-base text-center leading-6">
                            "Since upgrading to Pro Partner, my monthly call-outs have increased
                            by 40% and I'm saving thousands on fees."
                        </Text>


                        <Text className="text-blue-500 text-center font-semibold mt-4">
                            Ramesh K., Master Mechanic
                        </Text>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}