import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Button from '../components/button';
import ButtonDisable from '../components/button_disable';
import axios from 'axios';

const home = ({navigation}) => {
  const [country, setCountry] = useState('');

  const {container, input} = styles;

  const getDetails = () => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${country}`)
      .then((res) => {
        res.data.map((item) => {
          navigation.navigate('result', {items: item});
        });
      });
  };

  return (
    <View style={container}>
      <TextInput
        style={input}
        placeholder="Enter country"
        onChangeText={(text) => setCountry(text)}
        value={country}
      />
      {country.length == '' ? (
        <ButtonDisable />
      ) : (
        <Button onPress={getDetails} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 350,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
  },
});

export default home;
