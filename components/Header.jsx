import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal, Pressable, ScrollView, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

const { width } = Dimensions.get('window');

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [accountMenuVisible, setAccountMenuVisible] = useState(false);
  const router = useRouter();

  // Función para manejar la navegación y cerrar el modal
  const handleNavigation = (route) => {
    router.push(route);
    setAccountMenuVisible(false);
  };

  return (
    <View style={styles.header}>
      <Link href="/">
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/Loguito.jpeg')}
            style={styles.logo}
          />
            
        </View>
      </Link>

      {/* Parte inferior con icono de hamburguesa, carrito y cuenta */}
      <View style={styles.bottomBar}>
        <View style={styles.accountCart}>
          <TouchableOpacity style={styles.accountButton} onPress={() => handleNavigation('/sign-in')}>
            <FontAwesome name="user" size={20} color="black" />
            <Text style={styles.accountText}>INICIAR SESIÓN</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal del menú de cuenta */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={accountMenuVisible}
        onRequestClose={() => setAccountMenuVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.accountModalContent}>
            <Pressable onPress={() => setAccountMenuVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </Pressable>
            <View style={styles.accountMenu}>
              
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 1,
    borderBottomWidth: 3,
    borderBottomColor: '#00D32E',
    width: '100%',
    height: 80,  // Define una altura fija para evitar que el nav cambie de tamaño
    position: 'relative', 
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  bottomBar: {
    position: 'absolute',  // Para colocarla encima sin afectar el layout
    right: 0,  // Mueve el botón al lado derecho
    top: 25,  // Ajusta la posición verticalmente dentro del nav
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    padding: 10,
  },
  accountCart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',  // Alinea los elementos al lado derecho
    flex: 1, 
  },
  cartButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 18,
  },
  cartText: {
    color: 'black',
    marginLeft: 5,
    fontSize: 12,
  },
  accountButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountText: {
    color: 'black',
    marginLeft: 5,
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: width * 0.8,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  accountModalContent: {
    width: width * 0.8,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#f698ff',
    padding: 10,
    borderRadius: 50,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalMenu: {
    width: '100%',
  },
  accountMenu: {
    width: '100%',
  },
  menuItem: {
    fontSize: 18,
    paddingVertical: 8,
    color: '#333',
    textAlign: 'left',
  },
  accountMenuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  accountMenuText: {
    fontSize: 18,
    color: '#333',
    flex: 1,
  },
});

export default Header;
