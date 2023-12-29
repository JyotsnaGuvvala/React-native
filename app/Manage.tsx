import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Homescreen from './Homescreen';
import Icon from 'react-native-vector-icons/AntDesign';
function Manage(): React.JSX.Element {
  const navigation = useNavigation();
  const handleHome = () => {
    navigation.navigate('Homescreen');
  };
  const handleManage = () => {};
  const [expanded, setExpanded] = useState(null);

  const paymentModes = [
    {
      id: '1',
      name: 'Card',
      description: 'Settings & limits',
      icon: require('../assets/assets/card.png'),
      image: (
        <Icon name={expanded === '1' ? 'right' : 'down'} color="green" size={20} />
      ),
    },
    {
      id: '2',
      name: 'Debit Orders',
      description: 'Approve, reject ,stop & reverse',
      icon: require('../assets/assets/debitorders.png'),
      image: (
        <Icon name={expanded === '1' ? 'right' : 'down'} color="green" size={20} />
      ),
    },
    {
      id: '3',
      name: 'PayShap',
      description: `Manage & Pay Shap ID's`,
      icon: require('../assets/assets/payshap.png'),
      image: (
        <Icon name={expanded === '1' ? 'right' : 'down'} color="green" size={20} />
      ),
    },
  ];

  const toggleAccordion = id => {
    setExpanded(expanded === id ? null : id);
  };

  const renderPaymentMode = ({item}) => (
    <View>
      <TouchableOpacity onPress={() => toggleAccordion(item.id)}>
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
          <Image
            source={item.icon}
            style={{width: 40, height: 40, marginRight: 10,marginTop: 12}}
          />
          <View style={{marginTop: 12}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
          <Image
            source={item.icon}
            style={{ height: 4,marginTop: 12 ,flex: 1, alignItems: 'flex-end'}}
          />
        </View>
      </TouchableOpacity>
      {expanded === item.id && (
        <View style={{padding: 10}}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            Payment Description
          </Text>
          <Text>{item.description}</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={paymentModes}
        renderItem={renderPaymentMode}
        keyExtractor={item => item.id}
      />
      <View style={styles.footer}>
        <View style={styles.item}>
          <TouchableOpacity
            onPress={() => {
              handleHome();
            }}>
            <Image
              source={require('../assets/assets/home.png')}
              style={styles.iconFooter as ImageStyle}
            />
            <Text style={styles.textfooter}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            onPress={() => {
              handleManage();
            }}>
            <Image
              source={require('../assets/assets/Manage.png')}
              style={[styles.iconFooter, { tintColor: '#0033cc', marginLeft: 5 } as ImageStyle]}
            />
            <Text style={[styles.textfooter, { color: '#0033cc' }]}>Manage</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.imageFooter as ImageStyle}
            source={require('../assets/assets/transact.png')}
          />
          <Text style={styles.textfooter}>Transact</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.iconFooter2 as ImageStyle}
            source={require('../assets/assets/cart.png')}
          />
          <Text style={styles.textfooter}>Buy</Text>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.iconFooter3 as ImageStyle}
            source={require('../assets/assets/More.png')}
          />
          <Text style={styles.textfooter}>More</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    flex: 1,
  },
  image: {
    width: 80,
    height: 80,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  item: {},
  text: {
    fontSize: 15,
    color: '#fff',
  },
  textfooter: {
    fontSize: 15,
    color: 'rgb(156 145 145)',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    // Additional footer styles
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },

  button: {
    width: 300,
    height: 150,
    margin: 30,
  },
  icon1: {
    width: 35,
    height: 35,
    marginLeft: 10,
    marginBottom: 3,
  },
  iconhelp: {
    width: 45,
    height: 45,
  },
  icon: {
    width: 40,
    height: 40,
  },
  iconFooter: {
    width: 30,
    height: 30,
    marginTop: -20,
    color: 'red',
  },
  iconFooter2: {
    width: 40,
    height: 35,
    marginTop: -20,
  },
  iconFooter3: {
    width: 40,
    height: 35,
    marginTop: -20,
  },
  icon3: {
    width: 40,
    height: 40,
    marginLeft: 10,
  },
  imageFooter: {
    width: 60,
    height: 60,
    marginTop: '-70%',
    marginBottom: 8,
  },
});

export default Manage;
