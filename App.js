import React from "react";
import { Text, View, Image,SafeAreaView, StyleSheet, TextInput } from "react-native";

const UselessTextInput = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (

    <SafeAreaView>
    <View style={styles.container}>
    <Text style={styles.title}>Mihoyo Present</Text>
    
    </View>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://cdn-2.tstatic.net/tribunnews/foto/bank/images/genshin-impact.jpg',
        }}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Masukkan ID Genshin"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Masukkan PIN Genshin"
        keyboardType="numeric"
      />
       <Image
        style={styles.logo}
        source={{
          uri: 'https://pbs.twimg.com/media/E67D6vWVEAMoe1i.png',
        }}
        style={{width:400,height:200,alignself:'center',marginTop:5}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingVertical: 1,
    borderWidth: 5,
    borderColor: "#20232a",
    borderRadius: 2,
    backgroundColor: "#808080",
    color: "#61dafb",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    paddingTop: 50,
  },
});

export default UselessTextInput;