import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Detalhes() {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Tela de Detalhes
            </Text>

            <View style={styles.imageContainer}>

                <Image style={styles.gridImage}
                    source={{ uri: 'https://i0.statig.com.br/bancodeimagens/by/ii/95/byii959tobe0eszss3ibiww3s.jpg' }} />

                <Image style={styles.gridImage}
                    source={{ uri: 'https://www.mundoinverso.com.br/wp-content/uploads/2018/12/fur%C3%A3o-fofo-1024x768.jpg' }} />

                <Image style={styles.gridImage}
                    source={{ uri: 'https://s3.glbimg.com/v1/AUTH_35862ca5c6ab48b992baf1f1b4f7062e/m-extra-globo-com/incoming/9000867-711-a5c/w488h275-PROP/furao.jpg' }} />

                <Image style={styles.gridImage}
                    source={{ uri: 'https://jpimg.com.br/uploads/2025/08/7-curiosidades-interessantes-sobre-os-furoes.jpg' }} />

            </View>

            <Text style={styles.description}>
                Fotos de furões, animais muito fofos e curiosos. Os furões são conhecidos por sua personalidade brincalhona e energética, tornando-os ótimos animais de estimação para aqueles que gostam de interagir com seus pets. Eles adoram explorar seu ambiente e brincar com brinquedos, proporcionando muita diversão para seus donos.
            </Text>

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
    imageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    gridImage: {
        width: '48%',
        height: 140,
        marginBottom: 16,
        borderRadius: 24,
},
    description: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginBottom: 30,
    },
});