import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Sobre() {
    const router = useRouter();

    return (

        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Informações sobre o App
            </Text>
             <Text style={styles.subtitle}>
                Esse App tem função de mostrar as curiosidades sobre os furões.
            </Text>

            {/* IMAGEM 1 */}
            <Image style={styles.image} 
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvOvxnzps5NUBtBweNyJBw24Il_CAk6drA6g&s' }} />

            <Text style={styles.description}>
                Podem dormir de 14 a 18 horas por dia.
            </Text>

            <Image style={styles.image} 
                source={{ uri: 'https://avesornamentaisjej.cdn.magazord.com.br/img/2024/03/produto/497/86-furao-2.png' }} />

            <Text style={styles.description}>
                Tem odor natural forte.
            </Text>

            <Image style={styles.image} 
                source={{ uri: 'https://i0.statig.com.br/bancodeimagens/by/7x/nv/by7xnvylh4a90bssiutalzsga.jpg' }} />

            <Text style={styles.description}>
                Adoram túneis e espaços apertados.
            </Text>

            {/* BOTÃO PARA VOLTAR NO HOME */}
            <TouchableOpacity style={styles.button} onPress={() => router.back()}>
                <Text style={styles.buttonText}>
                    Voltar
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#ffd6d6ff',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#333',
        marginBottom: 16, /*ESPAÇAMENTO ENTRE O TITULO E O PARAGRAFO*/
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '400',
        color: '#333',
        marginBottom: 16,
        marginTop: 16,
        textAlign: 'center',
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
        width: 200,
        height: 100,
        borderRadius: 50,
        marginBottom: 24,
    },
    description: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginBottom: 30,
    },
});