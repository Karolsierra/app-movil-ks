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
            <Text style={styles.welcomeText}>Bienestar al Aprendiz</Text>

            {/* Sección de Imágenes de Productos */}
            <View style={styles.productsContainer}>
            <Text style={styles.descripcion}>
            Es una estrategia que contribuye a brindar servicios a los aprendices en formación
            de los programas técnicos y tecnológicos de las modalidades , presencial, virtual y 
            a distancia con el fin de promover acciones que permitan fortalecer sus competencias y 
            habilidades socioemocionales, deportivas, artísticas, de liderazgo, culturales , brindar 
            información sobre la promoción de la salud y prevención de la enfermedad, ofrecer apoyos 
            socioeconómicos para el mejoramiento de su calidad de vida y la satisfacción de culminar 
            su proceso formativo con éxito.   
            </Text>
              <Image
                source={require('../assets/images/bienestar_SENA_600.jpg')}
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
    backgroundColor: '#F8F8F8',
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
    fontSize: 32,
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
  descripcion: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },

  productImage: {
    width: 240,
    height: 150,
    borderRadius: 5,
  },
  footer: {
    backgroundColor: '#f8f8f8',
    padding: 14,
  },
});

export default App;
