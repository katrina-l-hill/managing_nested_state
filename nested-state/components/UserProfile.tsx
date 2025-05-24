import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface UserProfileData {
    name: string;
    email: string;
    address: Address;
  }
  
  interface Address {
    street: string;
    city: string;
    country: string;
  }
  
const UserProfile = () => {
    const [userProfile, setUserProfile] = useState<UserProfileData> ({
    name: "John Doe",
    email: "john.doe@gmail.com",
    address: {
        street: "987 Elm St",
        city: "Anytown",
        country: "USA",
    }
    });

    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    const updateAddress = (street: string, city: string, country: string) => {
        setUserProfile((prevProfile) => ({
            ...prevProfile,
            address: {
                street,
                city,
                country,
            },
        }));
    }

    return (
        <View style={styles.container}>
      <Text style={styles.title}>Update Address</Text>

      <TextInput
        placeholder="Street"
        value={street}
        onChangeText={setStreet}
        style={styles.input}
      />
      <TextInput
        placeholder="City"
        value={city}
        onChangeText={setCity}
        style={styles.input}
      />
      <TextInput
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
        style={styles.input}
      />

      <Button
        title="Update Address"
        onPress={() => updateAddress(street, city, country)}
      />

      <View style={styles.profile}>
        <Text style={styles.profileText}>Name: {userProfile.name}</Text>
        <Text style={styles.profileText}>Email: {userProfile.email}</Text>
        <Text style={styles.profileText}>Street: {userProfile.address.street}</Text>
        <Text style={styles.profileText}>City: {userProfile.address.city}</Text>
        <Text style={styles.profileText}>Country: {userProfile.address.country}</Text>
      </View>
    </View>
    )
    
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
    input: {
      borderWidth: 1,
      borderColor: '#aaa',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    profile: { marginTop: 30 },
    profileText: { fontSize: 16, marginVertical: 2 },
  });

export default UserProfile;