import { Tabs } from "expo-router";
import { TabBar } from "../components/TabBar";

export default function Layout(){
    return(
        <Tabs
            tabBar={ props => <TabBar {...props} />}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: "Inicio"
                }}
            />

            <Tabs.Screen
                name="mapa"
                options={{
                    headerShown: false,
                    title: "Mapa"
                }}
            />

            <Tabs.Screen
                name="itinerario"
                options={{
                    headerShown: false,
                    title: "Itinerario"
                }}
            />

            <Tabs.Screen
                name="privado"
                options={{
                    headerShown: false,
                    title: "Privado"
                }}
            />

        </Tabs>
    );
}
