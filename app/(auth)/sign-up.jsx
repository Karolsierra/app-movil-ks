import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Picker
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

const genderOptions = [
  "Femenino",
  "Masculino",
  "Otro"
];

const roleOptions = [
  "Administrador",
  "Capacitador",
  "Instructor"
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
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");

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
    if (!gender) return "Género es obligatorio";
    if (!role) return "Rol es obligatorio";
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
              <View style={styles.pickerBox}>
                <Picker
                  selectedValue={documentType}
                  onValueChange={(itemValue) => setDocumentType(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="Seleccione un tipo de documento" value="" />
                  {documentTypes.map((type) => (
                    <Picker.Item key={type} label={type} value={type} />
                  ))}
                </Picker>
              </View>

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

              {/* Gender */}
              <Text style={styles.label}>Género</Text>
              <View style={styles.pickerBox}>
                <Picker
                  selectedValue={gender}
                  onValueChange={(itemValue) => setGender(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="Seleccione su género" value="" />
                  {genderOptions.map((option) => (
                    <Picker.Item key={option} label={option} value={option} />
                  ))}
                </Picker>
              </View>

              {/* Role */}
              <Text style={styles.label}>Rol</Text>
              <View style={styles.pickerBox}>
                <Picker
                  selectedValue={role}
                  onValueChange={(itemValue) => setRole(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="Seleccione su rol" value="" />
                  {roleOptions.map((option) => (
                    <Picker.Item key={option} label={option} value={option} />
                  ))}
                </Picker>
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
            <Footer />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  formBox: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  pickerBox: {
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  inputBox: {
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
    color: "#cccccc",
  },
  passwordContainer: {
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
  },
  iconAfterEye: {
    marginLeft: 10,
    color: "#cccccc",
  },
  registerButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 10,
  },
  registerButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginLink: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginPrompt: {
    fontSize: 16,
  },
  loginText: {
    fontSize: 16,
    color: "#4CAF50",
    fontWeight: "bold",
    marginLeft: 5,
  },
  footer: {
    paddingVertical: 20,
  },
});

export default Register;