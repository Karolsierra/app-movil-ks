import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
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
      router.push('/'); // Navegar a la pantalla de inicio de sesión
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
          keyboardShouldPersistTaps="handled" // Asegúrate de que los toques en el ScrollView manejen el teclado
        >
          <Text style={styles.title}>Bienvenido a la aplicación</Text>
          <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
            <Text style={styles.signOutButtonText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.footer}>
            <Footer/>
          </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  signOutButton: {
    backgroundColor: 'black',
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
    width: "100%",
    backgroundColor: "#f8f8f8",
    padding: 30, // Match the padding with other screens
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
