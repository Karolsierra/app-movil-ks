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
          <Text style={styles.footerTitle}>Nuestras <Text style={styles.highlight}>Redes</Text></Text>
          <View style={styles.socialIcons}>
            <TouchableOpacity style={styles.socialIcon}>
              <FontAwesome name="whatsapp" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <FontAwesome name="facebook" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Sección Contáctenos */}
        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>Contáctenos</Text>
          <Text style={styles.footerItem}><FontAwesome name="phone" size={14} color="black" /> +57 3222118028</Text>
          <Text style={styles.footerItem}><FontAwesome name="envelope" size={14} color="black" /> mari.luzgomez@hotmail.com</Text>
          <Text style={styles.footerItem}><MaterialIcons name="calendar-today" size={14} color="black" /> Lunes-Sábado</Text>
          <Text style={styles.footerItem}><MaterialIcons name="access-time" size={14} color="black" /> 2am - 2pm</Text>
        </View>

        {/* Sección Flores */}
        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>Flores</Text>
          <Text style={styles.footerItem}>Tropicales</Text>
          <Text style={styles.footerItem}>Coloridas</Text>
          <Text style={styles.footerItem}>Orquídeas</Text>
          <Text style={styles.footerItem}>Rosas</Text>
          <Text style={styles.footerItem}>Decorativas</Text>
        </View>

        {/* Sección Descripción */}
        <View style={styles.footerSection}>
          <Text style={styles.footerTitle}>Somos su mejor opción</Text>
          <Text style={styles.footerDescription}>
            Si está pensando enviar regalos, Flores Colombia es su mejor elección.
            Nuestras Floristerías ofrecen regalos, arreglos florales, cajas de rosas
            y otros tipos de flores que son entregados a domicilio en fechas tan
            especiales como el día del amor y la amistad, día de la mujer, día de la madre,
            cumpleaños, condolencias, entre otros.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footerBottom}>
        <Text style={styles.footerBottomText}>
          © 2023-2024 Todos los derechos reservados | Construido con ❤ por
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
        backgroundColor: '#f8f8f8',
        paddingVertical: 15,
        borderTopWidth: 3,
        borderTopColor: '#000000',
        height: 330, // Asegúrate de que la altura es apropiada
      },
  footerContent: {
    paddingHorizontal: 25,
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
  highlight: {
    color: '#f698ff',
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
  footerDescription: {
    fontSize: 14,
    color: '#333',
  },
  footerBottom: {
    backgroundColor: '#e0e0e0',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center', // Centrado horizontal
    paddingHorizontal: 20,
  },
  footerBottomText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center', // Centrado del texto
  },
  footerLink: {
    color: '#f698ff',
  },
});

export default Footer;
