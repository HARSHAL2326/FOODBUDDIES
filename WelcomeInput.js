// app/WelcomeInput.js

import { useNavigation } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function WelcomeInput() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Image source={require('../assets/images/login_bg.png')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <Text style={styles.heading}>WELCOME !</Text>
        <Text style={styles.subheading}>WHAT SHOULD YOUR BUDDY CALL YOU?</Text>

        <TextInput
          style={styles.input}
          placeholder="ENTER YOUR NAME"
          placeholderTextColor="#888"
        />

        <Text style={styles.label}>AGE</Text>
        <TextInput
          style={styles.input}
          placeholder="ENTER YOUR AGE"
          placeholderTextColor="#888"
          keyboardType="numeric"
        />

        <Text style={styles.label}>What's your favorite place to dine in?</Text>
        <TextInput
          style={styles.input}
          placeholder="SELECT RESTAURANT"
          placeholderTextColor="#888"
        />

        <Text style={styles.label}>What's your gender?</Text>
        <TextInput
          style={styles.input}
          placeholder="SELECT YOUR GENDER"
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CuisineSelection')}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    paddingTop: 60,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'FugazOne-Regular',
  },
  subheading: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 15,
  },
  input: {
    width: 373,
    height: 67,
    borderRadius: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    fontSize: 14,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  label: {
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginLeft: 10,
    fontSize: 13,
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#36A5EA',
    width: 139,
    height: 43,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
