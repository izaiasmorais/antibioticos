import React from "react";
import { Tabs } from "expo-router";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

import Colors from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				headerShown: useClientOnlyValue(false, true),
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Antibióticos HU",
					tabBarIcon: ({ color }) => (
						<AntDesign
							name="home"
							size={24}
							color={color}
							style={{ marginBottom: 3 }}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name="about"
				options={{
					title: "Sobre",
					tabBarIcon: ({ color }) => (
						<AntDesign
							name="infocirlceo"
							size={24}
							color={color}
							style={{ marginBottom: 3 }}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
