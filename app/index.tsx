import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Header />
        <ScrollView contentContainerStyle={styles.contentWrapper}>
          <View style={styles.mainContent}>
            <Text style={styles.welcomeText}>Bienvenido Cliente!</Text>

            {/* Sección de Imágenes de Productos */}
            <View style={styles.productsContainer}>
              <Image
                source={require('../assets/images/Ramillete2.jpeg')} // Cambia esta ruta según el nombre de tus imágenes
                style={styles.productImage}
              />
              <Image
                source={require('../assets/images/ramoBase2.jpeg')}
                style={styles.productImage}
              />
              <Image
                source={require('../assets/images/ramoBase3.jpeg')}
                style={styles.productImage}
              />
              <Image
                source={require('../assets/images/Ramillete.jpeg')} // Cambia esta ruta según el nombre de tus imágenes
                style={styles.productImage}
              />
              <Image
                source={require('../assets/images/ramoBase4.jpeg')}
                style={styles.productImage}
              />
              <Image
                source={require('../assets/images/ramoBase1.jpeg')}
                style={styles.productImage}
              />
              <Image
                source={require('../assets/images/Ramillete1.jpeg')} // Cambia esta ruta según el nombre de tus imágenes
                style={styles.productImage}
              />
              <Image
                source={require('../assets/images/Ramobase.jpeg')}
                style={styles.productImage}
              />
              <Image
                source={require('../assets/images/Ramillete3.jpeg')}
                style={styles.productImage}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <Footer/>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  contentWrapper: {
    paddingBottom: 10, 
  },
  mainContent: {
    alignItems: 'center',
    paddingHorizontal: 10, // Added padding to avoid content being too close to edges
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
    marginBottom: 15,
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  footer: {
    backgroundColor: '#f8f8f8',
    padding: 14,
  },
});

export default App;
