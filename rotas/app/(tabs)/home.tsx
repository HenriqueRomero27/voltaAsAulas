import { View, Text, Button, StyleSheet} from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
    const router = useRouter();
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>
            <Button title="Ir para Sobre" onPress={() => router.push("./about")} color="#1F115E" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    },
    title: {
        fontSize: 20,
        color: "#86FF64",
        marginBottom: 20,
        fontFamily: "Inter"
    }
})