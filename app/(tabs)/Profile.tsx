import React from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// import { CloudDownload } from 'lucide-react';
// import { MapPin, Headset, IndianRupee } from 'lucide-react';
// import { ShieldCheck } from "lucide-react"

export default function Profile() {
    const router = useRouter()
    return (

        <SafeAreaView className="flex-1 bg-blue-50">

            <View className="p-2 bg-blue-100 flex-row justify-between items-center ">
                <TouchableOpacity onPress={() => router.push("/(tabs)/History")} className="mt-1">
                    <Ionicons name="arrow-back" size={29} color="blue" />
                </TouchableOpacity>
                <FontAwesome name="delicious" size={28} color="blue" className="left-4" />
                <Text className="font-bold text-xl text-blue-700 left-10">Roadside Rescue</Text>
                <View className=" flex-1 items-end right-4">
                    <Image source={{ uri: `https://i.pravatar.cc/160?u=` }}
                        className="w-10 h-10 rounded-full " />
                </View>

            </View>
            <ScrollView>
                <View className="p-4 flex-col  ">
                    <Text className=" font-bold text-xl text-center  ">Data Control Center</Text>
                    <Text className="p-3 text-gray-800 text-lg text-balance font-semibold text-center">
                        Manage your digital footprint. Download your history, monitor access logs, or exercise your right to be forgotten.
                    </Text>

                    <View className="flex-1 justify-center items-center p-4">
                        <View className="w-full bg-white rounded-2xl p-5 shadow-lg">

                            <View className="mb-4">
                                <Feather name="cloud-lightning" size={26} color="blue" />
                            </View>

                            <View className=" mb-4 flex-col">
                                <Text className=" text-xl font-semibold ">  Download Your Data </Text>
                                <Text className="p-3 text-lg font-medium text-gray-700">Request a comprehensive export of your personal information, including service history, location logs, and communication archives. We'll package it in a machine-readable JSON format.</Text>
                                <TouchableOpacity className=" mt-6 rounded-full py-4 bg-blue-800">
                                    <Text className="text-white font-bold text-center text-lg">
                                        Request Data Export
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                    <View className="p-4 items-center">
                        <View className="w-full bg-gray-200 rounded-2xl p-5 shadow-lg">

                            <Text className="font-semibold text-xl mb-3">
                                Compliance
                            </Text>


                            <View className="mb-3 bg-white rounded-2xl p-5 shadow-lg">
                                <View className="flex-row items-center">
                                   <AntDesign name="check-circle" size={24} color="blue" />
                                    <View className="ml-3">
                                        <Text className="text-gray-800 font-semibold text-xl">
                                            GDPR Ready
                                        </Text>
                                        <Text className="text-gray-400 font-medium text-lg">
                                            Global Standard
                                        </Text>
                                    </View>
                                </View>
                            </View>


                            <View className="bg-white rounded-2xl p-5 shadow-lg">
                                <View className="flex-row items-center">
                                     <AntDesign name="check-circle" size={24} color="blue" />
                                    <View className="ml-3">
                                        <Text className="text-gray-800 font-semibold text-xl">
                                            CCPA Compliant
                                        </Text>
                                        <Text className="text-gray-400 font-medium text-lg">
                                            Local Privacy
                                        </Text>
                                    </View>
                                </View>

                            </View>
                            <View className="items-center mt-5">
                                <Image
                                    source={{ uri: "https://i.pravatar.cc/20?u=" }}
                                    className="w-48 h-48 rounded-xl" />
                            </View>
                        </View>
                    </View>
                    <View className="p-4 items-center">
                        <View className="w-full rounded-2xl bg-white p-5 shadow-lg">

                            <View className="flex-row justify-between items-center">
                                <Text className="text-xl font-bold">Data Usage Log</Text>
                                <TouchableOpacity>
                                    <Text className="text-xl font-bold text-blue-800">View all</Text>
                                </TouchableOpacity>
                            </View>


                            <View className="mt-2">
                                <Text className="text-lg font-medium text-gray-400">
                                    Real-time transparency into how your information is being used.
                                </Text>
                            </View>


                            <View className="flex-row mt-4 items-start">

                                 <Entypo name="location" size={24} color="blue" />

                                <View className="ml-3 flex-1">

                                    <View className="flex-row justify-between items-center">
                                        <Text className="font-bold text-lg flex-1 pr-2">
                                            Service Dispatch accessed location
                                        </Text>
                                        <Text className="font-medium text-sm text-gray-500">
                                            Oct 15, 14:32
                                        </Text>
                                    </View>

                                    <View className="flex-row justify-between items-center mt-1">
                                        <Text className="text-lg font-medium flex-1 pr-2">
                                            Coordination for Roadside Assist #8821
                                        </Text>

                                        <View className="px-3 py-1 bg-green-400 rounded-full">
                                            <Text className="font-medium text-sm">
                                                Authorized
                                            </Text>
                                        </View>
                                    </View>

                                </View>
                            </View>

                            <View className="flex-row mt-4 items-start">


                             <MaterialIcons name="payments" size={24} color="blue" />

                                <View className="ml-3 flex-1">

                                    <View className="flex-row justify-between items-center">
                                        <Text className="font-bold text-lg flex-1 pr-2">
                                            Payment Processor verified billing
                                        </Text>
                                        <Text className="font-medium text-sm text-gray-500">
                                            Oct 12, 9:12
                                        </Text>
                                    </View>

                                    <View className="flex-row justify-between items-center mt-1">
                                        <Text className="text-lg font-medium flex-1 pr-2">
                                            Subscription renewal check
                                        </Text>

                                        <View className="px-3 py-1 bg-green-400 rounded-full">
                                            <Text className="font-medium text-sm">
                                                Authorized
                                            </Text>
                                        </View>
                                    </View>

                                </View>

                            </View>
                            <View className="flex-row mt-4 items-start">


                                <AntDesign name="customer-service" size={24} color="blue" />

                                <View className="ml-3 flex-1">

                                    <View className="flex-row justify-between items-center">
                                        <Text className="font-bold text-lg flex-1 pr-2">
                                            Support Team accessed contact info
                                        </Text>
                                        <Text className="font-medium text-sm text-gray-500">
                                            Oct 12, 9:12
                                        </Text>
                                    </View>

                                    <View className="flex-row justify-between items-center mt-1">
                                        <Text className="text-lg font-medium flex-1 pr-2">
                                            Inquiry #SF-1029 followup
                                        </Text>

                                        <View className="px-3 py-1 bg-green-400 rounded-full">
                                            <Text className="font-medium text-sm">
                                                Authorized
                                            </Text>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="mt-6 bg-white rounded-2xl p-5 shadow-lg">
                        <Text className="text-xl font-semibold">
                            Right to be Forgotten
                        </Text>

                        <Text className="mt-2 text-lg font-medium text-gray-500 leading-6">
                            Deleting your account is permanent. This will immediately stop all active services
                            and purge your personal data from our systems.
                        </Text>

                        <TouchableOpacity className="mt-6 rounded-full py-4 bg-yellow-800">
                            <Text className="text-white font-bold text-center text-lg">
                                Delete Account & Data
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>


    )
}    
