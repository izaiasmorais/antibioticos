import {
	StyleSheet,
	TextInput,
	FlatList,
	TouchableOpacity,
	Image,
} from "react-native";
import { Text, View } from "@/components/Themed";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, useRouter } from "expo-router";
import { useState } from "react";

// Lista de medicamentos
const MEDICINES = [
	{ id: "1", name: "Aciclovir" },
	{ id: "2", name: "Ampicilina-sulbactam" },
	{ id: "3", name: "Amoxicilina" },
	{ id: "4", name: "Amoxicilina + Clavulanato" },
	{ id: "5", name: "Azitromicina" },
	{ id: "6", name: "Anfotericina B (desoxicolato)" },
	{ id: "7", name: "Anfotericina B (lipossomal)" },
	{ id: "8", name: "Anfotericina B complexo lipídico" },
	{ id: "9", name: "Anidulafungina" },
	{ id: "10", name: "Amicacina" },
	{ id: "11", name: "Aztreonam" },
	{ id: "12", name: "Benzilpenicilina benzatina" },
	{ id: "13", name: "Cefalexina" },
];

export default function TabOneScreen() {
	const router = useRouter();
	const [searchText, setSearchText] = useState("");

	// Filter medicines based on search text
	const filteredMedicines = MEDICINES.filter((medicine) =>
		medicine.name.toLowerCase().includes(searchText.toLowerCase())
	);

	// Renderiza cada item da lista
	const renderItem = ({ item }: { item: { id: string; name: string } }) => (
		<TouchableOpacity
			style={styles.itemContainer}
			onPress={() =>
				router.push({
					pathname: "/medicine/[id]",
					params: { id: item.id },
				})
			}
		>
			<Text style={styles.itemText}>{item.name}</Text>

			<AntDesign name="right" size={12} color="black" />
		</TouchableOpacity>
	);

	return (
		<View style={styles.container}>
			<View style={styles.searchContainer}>
				<AntDesign name="search1" size={18} color="black" />
				<TextInput
					placeholder="Nome do medicamento..."
					style={styles.input}
					value={searchText}
					onChangeText={setSearchText}
				/>
			</View>

			<FlatList
				data={filteredMedicines}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				style={styles.list}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 16,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		padding: 16,
		paddingBottom: 8,
	},
	searchContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 16,
		marginBottom: 16,
		borderWidth: 1,
		borderColor: "#e0e0e0",
		marginHorizontal: 16,
		borderRadius: 8,
	},
	searchIcon: {
		width: 20,
		height: 20,
		position: "absolute",
		left: 24,
		zIndex: 1,
	},
	input: {
		flex: 1,
		height: 40,
		borderRadius: 8,
		paddingLeft: 16,
		backgroundColor: "#fff",
		fontSize: 14,
	},
	list: {
		flex: 1,
		width: "100%",
	},
	itemContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 12,
		paddingHorizontal: 16,
		borderBottomWidth: 1,
		borderBottomColor: "#e0e0e0",
		backgroundColor: "white",
	},
	itemText: {
		fontSize: 16,
	},
	chevron: {
		fontSize: 16,
		color: "#999",
	},
});
