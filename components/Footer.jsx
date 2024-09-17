import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const Footer = () => {
  return (
    <View style={styles.footer}>
      <ScrollView
        contentContainerStyle={styles.footerContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Sección Redes Sociales */}
        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>Síguenos en nuestras redes</Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity style={styles.socialIcon}>
              <FontAwesome name="instagram" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <FontAwesome name="twitter" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sección Contáctenos */}
        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>Acércate a nuestras oficinas</Text>
          <Text style={styles.footerItem}><FontAwesome name="building" size={14} color="black" /> Calle 57 No. 8 - 69</Text>
          <Text style={styles.footerItem}><MaterialIcons name="calendar-today" size={14} color="black" /> Lunes-Viernes</Text>
          <Text style={styles.footerItem}><MaterialIcons name="access-time" size={14} color="black" /> 7:00am - 7:00pm</Text>
        </View>
      </ScrollView>
      <View style={styles.footerBottom}>
        <Text style={styles.footerBottomText}>
          © 2024 - Todos los derechos reservados a Bienestar al Aprendiz
          <TouchableOpacity>
            <Text style={styles.footerLink}> Términos y condiciones</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%', // Asegura que ocupe todo el ancho disponible
    backgroundColor: '#f8f8f8',
    borderTopWidth: 2,
    borderTopColor: '#00D32E',
    paddingVertical: 20, // Ajusta el padding vertical para ampliar el footer
  },
  footerContent: {
    paddingHorizontal: 25,
    paddingBottom: 50, // Asegura espacio suficiente para el contenido antes de los términos
  },
  footerSection: {
    marginBottom: 20,
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  socialIcon: {
    marginHorizontal: 15,
  },
  footerItem: {
    fontSize: 15,
    color: '#333',
    marginBottom: 5,
  },
  footerBottom: {
    backgroundColor: '#e0e0e0',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center', // Centrado horizontal
    paddingVertical: 10, // Ajusta el padding vertical para el contenido del footer
    paddingHorizontal: 20,
  },
  footerBottomText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center', // Centrado del texto
  },
  footerLink: {
    color: '#000000',
    fontWeight: 'bold',
  },
});

export default Footer;
