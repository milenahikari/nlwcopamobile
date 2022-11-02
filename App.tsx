import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { AuthContextProvider } from "./src/contexts/AuthContext";

import { Loading } from "./src/components/Loading";
import { Pools } from "./src/screens/Pools";

import { THEME } from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar style="light" backgroundColor="transparent" translucent />
        {fontsLoaded ? <Pools /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
