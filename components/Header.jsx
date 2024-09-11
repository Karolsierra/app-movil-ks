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
            source={require('../assets/images/Logo.png')}
            style={styles.logo}
          />
          <Text style={styles.logoText}>Distribuidora de Flores Yesid</Text>
        </View>
      </Link>

      {/* Parte inferior con icono de hamburguesa, carrito y cuenta */}
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => setMenuVisible(true)} style={styles.menuButton}>
          <FontAwesome name="bars" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.accountCart}>
          <TouchableOpacity style={styles.cartButton}>
            <FontAwesome name="shopping-cart" size={20} color="black" />
            <Text style={styles.cartText}>0 ARTÍCULO(S) - $0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountButton} onPress={() => setAccountMenuVisible(true)}>
            <FontAwesome name="user" size={20} color="black" />
            <Text style={styles.accountText}>MI CUENTA</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal del menú */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Pressable onPress={() => setMenuVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </Pressable>
            <ScrollView style={styles.modalMenu}>
              <Text style={styles.menuItem} onPress={() => router.push('/special-dates')}>FECHAS ESPECIALES</Text>
              <Text style={styles.menuItem} onPress={() => router.push('/flowers')}>FLORES</Text>
              <Text style={styles.menuItem} onPress={() => router.push('/events')}>EVENTOS</Text>
              <Text style={styles.menuItem} onPress={() => router.push('/about')}>QUIÉNES SOMOS</Text>
            </ScrollView>
          </View>
        </View>
      </Modal>

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
              <TouchableOpacity style={styles.accountMenuItem} onPress={() => handleNavigation('/sign-up')}>
                <Text style={styles.accountMenuText}>Registrarse</Text>
                <FontAwesome name="user-plus" size={20} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.accountMenuItem} onPress={() => handleNavigation('/sign-in')}>
                <Text style={styles.accountMenuText}>Iniciar sesión</Text>
                <FontAwesome name="sign-in" size={20} color="black" />
              </TouchableOpacity>
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
    paddingVertical: 28,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
    width: '100%',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    flex: 1,
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuButton: {
    padding: 10,
  },
  accountCart: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginLeft: 3,
    fontSize: 12,
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
