import { View, Text, Button, StyleSheet} from "react-native";
import { useRouter } from "expo-router";

export default function About() {
    const router = useRouter();
    return(
        <View style={styles.container}>
            <Text style={styles.title}>About Screen</Text>
            <Text style={styles.desc}>This is the about page.</Text>
            <Button title="Ir para Home" onPress={() => router.push("./home")} color="#1F115E" />
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
    },
    desc: {
        fontSize: 16,
        color: "#FFF",
        textAlign: "center",
        fontFamily: "Love Light",
        paddingBottom: 10
    }
})