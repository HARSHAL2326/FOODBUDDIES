import { useRouter } from 'expo-router';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Welcome() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../assets/images/login_bg.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>FOOD</Text>
        <Text style={styles.subtitle}>BUDDIES</Text>

        <Text style={styles.hungryText}>ARE YOU HUNGRY?</Text>

        <TouchableOpacity
          style={styles.arrowBox}
          onPress={() => router.push('/Login')}
        >
          <Image
            source={require('../assets/images/arrow.png')}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'FugazOne-Regular',
    marginBottom: -5,
  },
  subtitle: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'FugazOne-Regular',
    marginBottom: 120,
  },
  hungryText: {
    fontSize: 20,
    color: '#000',
    marginBottom: 5,
  },
  arrowBox: {
    width: 74,
    height: 74,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  arrowIcon: {
    width: 60,
    height: 60,
  },
});
