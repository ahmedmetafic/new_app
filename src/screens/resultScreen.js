import React, {useState} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Text,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';

const result = ({navigation, route}) => {
  const [info, setInfo] = useState('');
  const {items} = route.params;
  //   console.log('this is items', items.flag);
  const {container} = styles;

  const getWeather = (city) => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=c42598c05f823684af80fefa26e81f9f&query=${city}`,
      )
      .then((res) => {
        setInfo(res);
      });
  };

  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Image style={styles.logo} source={{uri: items.flag}} />
              <Text>
                capital :{' '}
                <TouchableOpacity onPress={() => getWeather(items.capital)}>
                  <Text style={{color: 'blue'}}>{items.capital}</Text>
                </TouchableOpacity>
              </Text>
              <Text> population : {items.population}</Text>
              <Text> latlng : {items.latlng}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
});
export default result;
