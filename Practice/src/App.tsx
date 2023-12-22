import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import { RadioButton } from 'react-native-paper';

// Define a type for your user data
type UserDataItem = {
  name: string;
  email: string;
  password: string;
  gender: string;
};

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('male');

  const [userData, setUserData] = useState<UserDataItem[]>([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [clearAllModalVisible, setClearAllModalVisible] = useState(false);

  const handleRegistration = () => {
    if (!name || !email || !password) {
      Alert.alert('Validation Error', 'All fields are mandatory.');
      return;
    }

    const newUser: UserDataItem = { name, email, password, gender };
    setUserData([...userData, newUser]);

    // Clear input fields after registration
    clearInputFields();
  };

  const clearInputFields = () => {
    setName('');
    setEmail('');
    setPassword('');
    setGender('male');
  };

  const handleDeleteItem = (index: number) => {
    setDeleteIndex(index);
    setModalVisible(true);
  };

  const handleConfirmDelete = () => {
    if (deleteIndex !== null) {
      const newUserData = [...userData];
      newUserData.splice(deleteIndex, 1);
      setUserData(newUserData);
      setModalVisible(false);
    }
  };

  const handleCancelDelete = () => {
    setModalVisible(false);
  };

  const handleClearAll = () => {
    if (userData.length === 0) {
      // Don't show the modal if the list is empty
      return;
    }

    setClearAllModalVisible(true);
  };

  const handleConfirmClearAll = () => {
    setUserData([]);
    setClearAllModalVisible(false);
  };

  const handleCancelClearAll = () => {
    setClearAllModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Registration Form</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* RadioGroup and RadioButtons for gender */}
      <View style={styles.genderContainer}>
        <Text style={styles.genderLabel}>Gender:</Text>
        <RadioButton.Group
          onValueChange={(value) => setGender(value)}
          value={gender}
        >
          <View style={styles.radioButtonContainer}>
            <RadioButton value="male" />
            <Text>Male</Text>
          </View>
          <View style={styles.radioButtonContainer}>
            <RadioButton value="female" />
            <Text>Female</Text>
          </View>
          {/* Add more gender options if needed */}
        </RadioButton.Group>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={handleRegistration} />
      </View>

      {/* Display user data using FlatList */}
      <FlatList
        data={userData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleDeleteItem(index)}>
            <View key={index} style={styles.userDataItem}>
              <Text>Name: {item.name}</Text>
              <Text>Email: {item.email}</Text>
              <Text>Password: {item.password}</Text>
              <Text>Gender: {item.gender}</Text>
            </View>
          </TouchableOpacity>
        )}
        style={styles.userDataContainer}
      />

      {userData.length > 0 && (
        <View style={styles.clearButtonContainer}>
          <Button
            title="Clear All"
            onPress={handleClearAll}
            color="red" // Set the background color to red
          />
        </View>
      )}

      {/* Modal for confirming item deletion */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to delete this item?
            </Text>
            <View style={styles.modalButtonContainer}>
              <Button title="Delete" onPress={handleConfirmDelete} />
              <Button title="Cancel" onPress={handleCancelDelete} />
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal for confirming clear all */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={clearAllModalVisible}
        onRequestClose={() => setClearAllModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Are you sure you want to clear all data?
            </Text>
            <View style={styles.modalButtonContainer}>
              <Button title="Clear All" onPress={handleConfirmClearAll} />
              <Button title="Cancel" onPress={handleCancelClearAll} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  genderLabel: {
    marginRight: 10,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '80%',
    marginBottom: 20,
  },
  clearButtonContainer: {
    marginTop: 10,
    width: '80%',
  },
  userDataContainer: {
    width: '80%',
  },
  userDataItem: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%', // Set a specific width for the modal content
    alignItems: 'center', // Center content horizontally
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center', // Center text within the modal
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Evenly space buttons
    width: '100%', // Take the full width of the modal content
  },
});

export default RegistrationForm;
