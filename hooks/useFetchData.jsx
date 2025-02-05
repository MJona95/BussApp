import { useState, useEffect } from "react";
import { database } from "../src/fb";
import { dataD } from "../components/dataL";
import { collection, getDocs } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function useFetchData(collection_name) {
    const [data, setData] = useState(dataD);

    useEffect(() => {
        if (!collection_name) return; // Evita ejecutar si collection_name está vacío

        const fetchData = async () => {
            try {
                // 1️⃣ Buscar datos locales almacenados en AsyncStorage
                let lData = await AsyncStorage.getItem('lData');
                lData = lData ? JSON.parse(lData) : {}; // Convierte en objeto si existe, sino crea uno vacío

                // 2️⃣ Obtener la última fecha de actualización
                const lastFetchDate = await AsyncStorage.getItem('lastFetchDate');
                const today = new Date().toISOString().split('T')[0];

                // 3️⃣ Si la última actualización fue hace menos de 30 días, usa los datos locales
                if (lastFetchDate) {
                    const lastDate = new Date(lastFetchDate);
                    const todayDate = new Date(today);
                    const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));

                    if (diffDays <= 30 && lData[collection_name]) {
                        setData(lData[collection_name]);
                        console.log("📌 Usando datos locales:", lData[collection_name]);         
                        return;
                    }
                }

                // 4️⃣ Si no hay datos o pasaron más de 30 días, obtener de Firestore
                console.log("🔄 Actualizando datos desde Firestore...");
                const querySnapshot = await getDocs(collection(database, collection_name));
                const workData = querySnapshot.docs.flatMap((doc) => doc.data()[collection_name] || []);

                // 5️⃣ Reemplazamos la data que tenemos en local storage por la que viene desde firestore
                const updatedArray = workData

                // 6️⃣ Guardar en AsyncStorage
                lData[collection_name] = updatedArray;
                await AsyncStorage.setItem('lData', JSON.stringify(lData));
                await AsyncStorage.setItem('lastFetchDate', today);

                setData(updatedArray);
                console.log("✅ Datos actualizados:", updatedArray);

            } catch (error) {
                console.error('❌ Error fetching data:', error);
            }
        };

        fetchData();

    }, [collection_name]); // 🔥 Se ejecutará cuando collection_name cambie
    
    return data;
}
