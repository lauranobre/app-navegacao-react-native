import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Detalhes() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela de Detalhes
            </Text>
            <Image style={styles.image} 
            source={{ uri: 'https://i0.statig.com.br/bancodeimagens/by/ii/95/byii959tobe0eszss3ibiww3s.jpg' }} />

            <Text style={styles.description}>
                Foto de um lindo furão, um animal muito fofo e curioso. Os furões são conhecidos por sua personalidade brincalhona e energética, tornando-os ótimos animais de estimação para aqueles que gostam de interagir com seus pets. Eles adoram explorar seu ambiente e brincar com brinquedos, proporcionando muita diversão para seus donos.
            </Text>

            <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                <Text style={styles.buttonText}>
                    Voltar
                </Text>
            </TouchableOpacity>
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
    button: {
        backgroundColor: '#ff6b6bff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
    },
    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginBottom: 30,

    },
});