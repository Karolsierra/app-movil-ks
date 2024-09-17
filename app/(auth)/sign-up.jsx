import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Modal,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { createUser } from "../../lib/appwrite";

const documentTypes = [
  "Cédula de Ciudadanía",
  "Tarjeta de Identidad",
  "Pasaporte",
  "Otro",
];

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [documentType, setDocumentType] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const router = useRouter();

  const validateFields = () => {
    if (!documentType) return "Tipo de documento es obligatorio";
    if (!documentNumber) return "Número de documento es obligatorio";
    if (!name) return "Nombre es obligatorio";
    if (!lastName) return "Apellido es obligatorio";
    if (!email) return "Correo electrónico es obligatorio";
    if (!password) return "Contraseña es obligatoria";
    if (password.length < 6) return "La contraseña debe tener al menos 6 caracteres";
    if (password !== confirmPassword) return "Las contraseñas no coinciden";
    if (!validateEmail(email)) return "El correo electrónico no es válido";
    if (!/^\d+$/.test(documentNumber)) return "El número de documento debe contener solo números";
    return null;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = async () => {
    const errorMessage = validateFields();
    if (errorMessage) {
      Alert.alert("Error", errorMessage);
      return;
    }

    try {
      await createUser(email, password);
      Alert.alert("Éxito", "Usuario registrado correctamente");
      router.push('/sign-in'); // Navegar a la pantalla de inicio de sesión
    } catch (error) {
      Alert.alert("Error", "No se pudo registrar el usuario");
      console.error("Error:", error);
    }
  };

  const handleDocumentTypeSelect = (type) => {
    setDocumentType(type);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Header />
          <View style={styles.innerContainer}>
            <View style={styles.formBox}>
              <Text style={styles.title}>Crear Cuenta</Text>

              {/* Document Type */}
              <Text style={styles.label}>Tipo de Documento</Text>
              <TouchableOpacity
                style={styles.inputBox}
                onPress={() => setModalVisible(true)}
              >
                <TextInput
                  style={styles.input}
                  placeholder="Seleccione un tipo de documento"
                  value={documentType}
                  editable={false}
                />
                <FontAwesome name="id-card" size={20} style={styles.icon} />
              </TouchableOpacity>

              {/* Document Number */}
              <Text style={styles.label}>Número de Documento</Text>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder="Ingrese su número de documento"
                  value={documentNumber}
                  onChangeText={(text) => setDocumentNumber(text.replace(/[^0-9]/g, ''))} // Solo números
                  keyboardType="numeric"
                  maxLength={20}
                />
                <FontAwesome name="key" size={20} style={styles.icon} />
              </View>

              {/* Name */}
              <Text style={styles.label}>Nombre</Text>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder="Ingrese su nombre aquí"
                  value={name}
                  onChangeText={setName}
                />
                <FontAwesome name="user" size={20} style={styles.icon} />
              </View>

              {/* Last Name */}
              <Text style={styles.label}>Apellido</Text>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder="Ingrese su apellido aquí"
                  value={lastName}
                  onChangeText={setLastName}
                />
                <FontAwesome name="user" size={20} style={styles.icon} />
              </View>

              

              {/* Email */}
              <Text style={styles.label}>Correo Electrónico</Text>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder="Ingrese su correo electrónico aquí"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
                <FontAwesome name="envelope" size={20} style={styles.icon} />
              </View>

              {/* Password */}
              <Text style={styles.label}>Contraseña</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Ingrese su contraseña aquí"
                  secureTextEntry={!passwordVisible}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                >
                  <FontAwesome
                    name={passwordVisible ? "eye-slash" : "eye"}
                    size={20}
                  />
                </TouchableOpacity>
                <FontAwesome name="lock" size={20} style={styles.iconAfterEye} />
              </View>

              {/* Confirm Password */}
              <Text style={styles.label}>Confirmar Contraseña</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Confirme su contraseña aquí"
                  secureTextEntry={!confirmPasswordVisible}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                >
                  <FontAwesome
                    name={confirmPasswordVisible ? "eye-slash" : "eye"}
                    size={20}
                  />
                </TouchableOpacity>
                <FontAwesome name="lock" size={20} style={styles.iconAfterEye} />
              </View>

              <TouchableOpacity
                style={styles.registerButton}
                onPress={handleRegister}
              >
                <Text style={styles.registerButtonText}>Registrarse</Text>
              </TouchableOpacity>

              <View style={styles.loginLink}>
                <Text style={styles.loginPrompt}>¿Ya tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => router.push('/sign-in')}>
                  <Text style={styles.loginText}>Iniciar sesión</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.footer}>
            <Footer/>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Modal for Document Type */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Seleccionar Tipo de Documento</Text>
            {documentTypes.map((type) => (
              <TouchableOpacity
                key={type}
                style={styles.modalButton}
                onPress={() => handleDocumentTypeSelect(type)}
              >
                <Text style={styles.modalButtonText}>{type}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  scrollViewContent: {
    flexGrow: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  formBox: {
    width: '100%',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 8,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
    elevation: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10,
  },
  inputBox: {
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  icon: {
    color: "#000",
  },
  iconAfterEye: {
    color: "#000",
    marginLeft: 10,
  },
  input: {
    flex: 1,
    padding: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
    paddingRight: 40, // To ensure space for the eye icon
  },
  eyeIcon: {
    position: "absolute",
    right: 37,
    top: "50%",
    transform: [{ translateY: -10 }],
  },
  registerButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 20,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginLink: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  loginPrompt: {
    fontSize: 16,
    color: "#000",
  },
  loginText: {
    fontSize: 16,
    color: "#4CAF50",
    fontWeight: "bold",
    marginLeft: 5,
  },
  
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "80%",
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalButton: {
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  modalButtonText: {
    fontSize: 15.5,
    color: "#000",
  },
  modalCloseButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  modalCloseButtonText: {
    fontSize: 15.5,
    color: "#000",
  },
  footer: {
    width: "100%",
    backgroundColor: "#f8f8f8",
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Register;