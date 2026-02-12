import { useRouter } from "expo-router"; /* PARA USAR O USE ROUTER EU PRECISO IMPORTAR ELE DO EXPO ROUTER */
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

 export default function Home() { /* TODA VEZ QUE EU COLOCAR UMA TAG NO EXPORT DEFAULT EU TENHO QUE COLOCAR DENTRO DAS CHAVES DO IMPORT */
    const router = useRouter(); 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem vindo ao React Native!</Text>
            <Text style={styles.subtitle}>Está é a tela inicial do nosso App.</Text>
            
            {/* BOTÃO PARA TELA DETALHES */}
            <TouchableOpacity style={styles.button} onPress={() => router.push('/detalhes')}>
                <Text style={styles.buttonText}>
                    Ir para detalhes
                </Text>
            </TouchableOpacity>

            {/* BOTÃO PARA TELA SOBRE */}
            <TouchableOpacity style={styles.button2} onPress={() => router.push('/sobre')}>
                <Text style={styles.button2Text}>
                    Ir para sobre
                </Text>
            </TouchableOpacity>
        </View>
    );
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
    button2: {
        backgroundColor: '#ff6b6bff',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        marginTop: 16,
    },
    button2Text: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
 });