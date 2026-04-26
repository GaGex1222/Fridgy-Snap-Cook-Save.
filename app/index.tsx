import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { Montserrat_600SemiBold, useFonts } from '@expo-google-fonts/montserrat';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORS = {
  primary: '#27AE60',
  text: '#2C3E50',
  secondaryText: '#7F8C8D',
  background: '#FFFFFF',
};

export default function WelcomeScreen() {
  const router = useRouter();

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* 1. Top Section: Branding & Tagline */}
      <View style={styles.topSection}>
        <Text style={styles.appName}>Fridgy</Text>
        <Text style={styles.tagline}>
          Smart recipes, <Text style={{ color: COLORS.primary }}>zero effort.</Text>
        </Text>
        <Text style={styles.description}>
          Snap a photo, reduce waste, and discover recipes you already have.
        </Text>
      </View>

      {/* 2. Middle Section: The Image Holder */}
      <View style={styles.imageContainer}>
        {/* Gal: Replace the source below with your image. 
            Example: source={require('../assets/images/hero.png')} 
        */}
        <Image 
        source={require('../assets/images/food_shopping_cart.png')} // הנתיב היחסי מהקובץ הנוכחי
        style={styles.heroImage}
        resizeMode="contain"
        />
      </View>

      {/* 3. Bottom Section: Action Button */}
      <View style={styles.actionSection}>
        <TouchableOpacity 
          onPress={() => router.replace('/')}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Get Started</Text>
          <Ionicons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
        
        <Text style={styles.footerText}>Zero waste. Zero effort.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
    topSection: {
    paddingHorizontal: 30,
    paddingTop: 60,         // הגדלתי קצת את המרווח מלמעלה
    alignItems: 'center',    // ממרכז את ה-Components עצמם לרוחב
    },
    appName: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 42,
    color: COLORS.text,
    marginBottom: 5,
    textAlign: 'center',     // ממרכז את הטקסט בתוך השורה
    },
    tagline: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 22,
    color: COLORS.text,
    marginBottom: 12,
    textAlign: 'center',     // ממרכז את הטקסט בתוך השורה
    },
    description: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 15,
    color: COLORS.secondaryText,
    lineHeight: 22,
    textAlign: 'center',     // ממרכז את התיאור הארוך
    },
  imageContainer: {
    flex: 1, // Takes up the middle space
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heroImage: {
    width: '100%',
    height: '80%',
  },
  actionSection: {
    paddingHorizontal: 30,
    paddingBottom: 40,
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    width: '100%',
    height: 65,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonText: {
    fontFamily: 'Montserrat_600SemiBold',
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginRight: 10,
  },
  footerText: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 12,
    color: COLORS.secondaryText,
    marginTop: 15,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
});