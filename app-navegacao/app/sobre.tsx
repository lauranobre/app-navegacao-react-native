import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Sobre() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela com informações sobre o App
            </Text>
             <Text style={styles.subtitle}>
                Curiosidades sobre os furões
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',  /*ALINHA NA VERTICAL*/
      alignItems: 'center', /*ALINHA NA HORIZONTAL*/
      padding: 16,
      backgroundColor: '#ffd6d6ff',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#333',
        marginBottom: 16, /*ESPAÇAMENTO ENTRE O TITULO E O PARAGRAFO*/
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '400',
        color: '#333',
        marginBottom: 16,
    },
});