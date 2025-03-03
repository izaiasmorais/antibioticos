import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { useLocalSearchParams, useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

// Lista de medicamentos (mesma do TabOneScreen)
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

export default function MedicineDetailScreen() {
	const { id } = useLocalSearchParams();
	const router = useRouter();

	const medicine = MEDICINES.find((med) => med.id === id);

	const handleBackPress = () => {
		router.back();
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
					<AntDesign name="arrowleft" size={24} color="black" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Detalhes do Medicamento</Text>
			</View>

			{medicine ? (
				<View style={styles.medicineContainer}>
					<Text style={styles.medicineName}>{medicine.name}</Text>
					<View style={styles.divider} />
					<Text style={styles.infoText}>ID: {medicine.id}</Text>
					{/* Aqui você pode adicionar mais informações sobre o medicamento */}
					<Text style={styles.descriptionText}>
						As informações detalhadas sobre {medicine.name} serão exibidas aqui.
						Você pode adicionar informações como dosagem, indicações,
						contraindicações, etc.
					</Text>
				</View>
			) : (
				<View style={styles.notFoundContainer}>
					<Text style={styles.notFoundText}>Medicamento não encontrado</Text>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 16,
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 16,
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: "#e0e0e0",
		backgroundColor: "white",
	},
	backButton: {
		marginRight: 16,
	},
	headerTitle: {
		fontSize: 18,
		fontWeight: "bold",
	},
	medicineContainer: {
		padding: 16,
		backgroundColor: "white",
	},
	medicineName: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 16,
	},
	divider: {
		height: 1,
		backgroundColor: "#e0e0e0",
		marginBottom: 16,
	},
	infoText: {
		fontSize: 16,
		marginBottom: 8,
	},
	descriptionText: {
		fontSize: 16,
		lineHeight: 24,
		marginTop: 16,
	},
	notFoundContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	notFoundText: {
		fontSize: 18,
		color: "red",
	},
});
