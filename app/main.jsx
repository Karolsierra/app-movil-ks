import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { signOut } from '../lib/appwrite'; // Asegúrate de que la ruta es correcta
import Header from '../components/Header'; // Asegúrate de que la ruta es correcta
import Footer from '../components/Footer'; // Asegúrate de que la ruta es correcta

const HomeScreen = () => {
  const router = useRouter();

  // Función para cerrar sesión
  const handleSignOut = async () => {
    try {
      await signOut(); // Cerrar todas las sesiones
      router.push('/'); // Cambia '/main' por la ruta correcta si es necesario
    } catch (error) {
      Alert.alert('Error', 'No se pudo cerrar sesión.');
      console.error('Error cerrando sesión:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} // Ajusta el offset para el comportamiento en iOS y Android
      >
        <Header />
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>Bienvenido a AVA</Text>

          {/* Subtítulo agregado */}
          <Text style={styles.subtitle}>Objetivo Plan de Bienestar al Aprendiz</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Implementar estrategias de acompañamiento para el desarrollo integral del aprendiz en su proceso formativo.
            </Text>
            <Image
              source={require('../assets/images/mentoria1.jpg')} // Asegúrate de que la ruta es correcta
              style={styles.infoImage}
            />
          </View>

          <View style={styles.separator} /> {/* Línea delgada para separar el contenido */}

          {/* Nuevo bloque de texto e imagen */}
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Incentivar al aprendiz en su proceso de formación profesional integral mediante la implementación de un programa de estímulos.
            </Text>
            <Image
              source={require('../assets/images/mentoria2.jpg')} // Asegúrate de que la ruta es correcta
              style={styles.infoImage}
            />
          </View>

          <View style={styles.separator} /> {/* Línea delgada para separar el contenido */}

          {/* Otro bloque de texto e imagen */}
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Entregar con oportunidad y calidad los servicios de bienestar al aprendiz documentando procedimientos que soporten una operación ágil y flexible.
            </Text>
            <Image
              source={require('../assets/images/reunion.jpeg')} // Asegúrate de que la ruta es correcta
              style={styles.infoImage}
            />
          </View>

          <View style={styles.separator} /> {/* Línea delgada para separar el contenido */}

          <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
            <Text style={styles.signOutButtonText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Footer aquí */}
        <View style={styles.footer}>
          <Footer /> {/* Componente de Footer */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 100, // Espacio para el footer
  },
  innerContainer: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 20, // Ajusta según el espacio necesario
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  infoText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 20,
  },
  infoImage: {
    width: 220,
    height: 240,
    resizeMode: 'contain',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  signOutButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  signOutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    height: 100, // Altura del footer
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    width: '100%', // Asegura que ocupe todo el ancho
    position: 'relative', // Asegura que el footer esté en el flujo normal del layout
    bottom: 3, // Alinea el footer en la parte inferior
  },
});


export default HomeScreen;
