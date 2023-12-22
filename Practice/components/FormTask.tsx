// RegistrationForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

const FormTask = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [data, setData] = useState<Array<{ id: string; name: string; email: string; password: string }>>([]);

  const handleRegister = () => {
    // Validate input if needed
    setData((prevData) => [
      ...prevData,
      { id: (prevData.length + 1).toString(), name, email, password },
    ]);
    // Clear the input fields
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Name:</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <Text>Email:</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      <Text>Password:</Text>
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <Button title="Register" onPress={handleRegister} />

      <Text style={{ marginTop: 20, fontSize: 18 }}>Registered Users:</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
            <Icon name="user" type="font-awesome" />
            <Text style={{ marginLeft: 10 }}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FormTask;
