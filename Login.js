import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  return (
    <ImageBackground
      source={require('../assets/images/login_bg.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image source={require('../assets/images/user.png')} style={styles.userIcon} />

        <TextInput
          style={styles.input}
          placeholder="EMAIL , USERID"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="PASSWORD"
          secureTextEntry
          placeholderTextColor="#888"
        />

        <Text style={styles.forgot}>FORGOT PASSWORD?</Text>
        <View style={styles.line} />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>Don't have account yet ? Sign in</Text>

        <View style={styles.iconRow}>
          <Image source={require('../assets/images/google.png')} style={styles.socialIcon} />
          <Image source={require('../assets/images/instagram.png')} style={styles.socialIcon} />
        </View>
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
    justifyContent: 'center', // centers vertically
    alignItems: 'center',
    paddingBottom: 40, // pushes slightly down for balance
  },
  userIcon: {
    width: 40,
    height: 40,
    marginBottom: 40,
  },
  input: {
    width: 373,
    height: 67,
    backgroundColor: 'white',
    borderRadius: 50,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  forgot: {
    alignSelf: 'flex-end',
    marginRight: 40,
    fontSize: 12,
    color: '#444',
    marginTop: 10,
  },
  line: {
    width: 120,
    height: 1,
    backgroundColor: '#aaa',
    alignSelf: 'flex-end',
    marginRight: 40,
    marginTop: 4,
    marginBottom: 20,
  },
  loginButton: {
    width: 139,
    height: 43,
    backgroundColor: '#36A5EA',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signupText: {
    fontSize: 12,
    color: '#000',
    marginBottom: 20,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 5,
  },
});
