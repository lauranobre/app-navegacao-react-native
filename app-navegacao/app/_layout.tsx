import { Stack } from 'expo-router';

/*ESTOU DIZENDO PRA ELE QUE VOU CRIAR ESSAS DUAS TELAS*/
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} /*ESCONDE O CABEÇALHO PADRÃO DO EXPO ROUTER*/>
      <Stack.Screen name='index' options={{ title: 'Home' }} />
      <Stack.Screen name='detalhes' options={{ title: 'Detalhes' }} />
      <Stack.Screen name='sobre' options={{ title: 'Sobre' }} />
    </Stack>
  );
}
