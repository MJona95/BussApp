import 'dotenv/config'
import { defineConfig } from 'expo/config'

export default {
  expo: {
    "newArchEnabled": false,
    "name": "BussApp",
    "slug": "bussapp",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "scheme": "whatsapp",
    "userInterfaceStyle": "light",
    "plugins": ["react-native-maps", {"config":{"googleMaps": true}}],
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    ios: {
      "supportsTablet": true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    },
    owner: "mjona9514",
    plugins: [
      "expo-router",
      "expo-font"
    ],
    extra: {
        apiKey: process.env.EXPO_PUBLIC_API_KEY,
        apikeym: process.env.EXPO_PUBLIC_API_KEY_GM,
        authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
        projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
        storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
        messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
        appId: process.env.EXPO_PUBLIC_APP_ID,
        eas: {
          projectId: "467dbc0d-b6dc-471c-b51c-9ee0c1ecd587"
        }
    }
  }
}
