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
                name="intinerario"
                options={{
                    headerShown: false,
                    title: "Intinerario"
                }}
            />

            <Tabs.Screen
                name="nosotros"
                options={{
                    headerShown: false,
                    title: "Nosotros"
                }}
            />

        </Tabs>
    );
}
