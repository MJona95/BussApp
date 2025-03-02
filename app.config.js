import 'dotenv/config'
import { defineConfig } from 'expo/config'

export default {
  expo: {
    "newArchEnabled": true,
    "name": "BussApp",
    "slug": "bussapp",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "scheme": "whatsapp",
    "userInterfaceStyle": "light",
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
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        eas: {
          projectId: "467dbc0d-b6dc-471c-b51c-9ee0c1ecd587"
        }
    }
  }
}
