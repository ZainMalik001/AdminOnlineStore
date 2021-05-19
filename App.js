import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen}
        options = {{
          headerShown: false
        }} 
      />

      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen 
        name="ProductDetailsScreen" 
        component={ProductDetailsScreen}
        options = {({navigation, route}) => ({
          headerTitle: route.params.name,
          headerTitleAlign: 'center',
        })} 
      />

      <Stack.Screen name="EmployeeScreen" component={EmployeeScreen} />
      <Stack.Screen 
        name="EmployeeDetailsScreen"
        component={EmployeeDetailsScreen}
        options = {({navigation, route}) => ({
          headerTitle: route.params.name,
          headerTitleAlign: 'center',
        })}  
      />

      <Stack.Screen name="OrderScreen" component={OrderScreen} />
      <Stack.Screen 
        name="OrderDetailsScreen" 
        component={OrderDetailsScreen}
        options = {({navigation, route}) => ({
          headerTitle: route.params.name,
          headerTitleAlign: 'center',
        })}  
      />

    </Stack.Navigator>
    </NavigationContainer>
  );
}

const productList = [
  {
    id: 'p1',
    name: 'T Shirt',
    imageUrl:
      'https://www.all4o.com/image/cache/data/brand/TrueStory/TRUE-STORY-Elite-orienteering-shirt-Men-Deep-BLUE-800x800.jpg',
    price: '$40',
  },
  {
    id: 'p2',
    name: 'Glasses',
    imageUrl:
      'https://static.zennioptical.com/production/products/general/19/54/195421-eyeglasses-angle-view.jpg?resize=800px:*&output-quality=80',
    price: '$50',
  },
  {
    id: 'p3',
    name: 'Trousers',
    imageUrl:
      'https://rohan.imgix.net/product/05424030.jpg?w=2500&auto=format&q=77',
    price: '$120'
  },
  {
    id: 'p4',
    name: 'Books',
    imageUrl:
      'https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg',
    price: '$20',
  },
];

const employeeList = [
  {
    id: 'e1',
    name: 'Ali',
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg',
    age: 25,
    designation: 'CEO',
  },
  {
    id: 'e2',
    name: 'Ahmad',
    imageUrl:
      'https://365psd.com/images/istock/previews/1006/100634961-profile-icon-male-portrait.jpg',
    designation: 'Manager',
    age: 25,
  },
  {
    id: 'e3',
    name: 'Sara',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCefjCLmE-w6O6yxEeeZcfJXDTou5AEK594Q&usqp=CAU',
    designation: 'Assistant',
    age: 34,
  },
  {
    id: 'e4',
    name: 'Zain',
    imageUrl:
      'https://lh3.googleusercontent.com/proxy/c5toltIwDr4GriTRfQrgZodizE0pHEZ2BJR8yvcx0G1LgNNerypAiZZs3sli98zAkL78rN-YkMCyWgP-yD0nXMiIqeK3mGRQ-mvn9DkkNdvQe5aWJUIrd64JY8Q',
    designation: 'Sales Person',
    age: 28,
  },
];

const orderList = [
  { id: 'DD01', name: 'Momin', date: '12-09-2021', product: 'Glasses' },
  {
    id: 'DD02',
    name: 'Zain',
    date: '12-09-2021',
    product: 'T Shirt',
  },
  {
    id: 'DD03',
    name: 'Ali',
    date: '12-09-2021',
    product: 'Trouser',
  },
  { id: 'DD04', name: 'Hamza', date: '12-09-2021', product: 'book' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={styles.screenContainer}>
      <Text style={styles.appTitle}>Welcome to Admin Online Store</Text>
      <View style={{}}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('ProductScreen')}
        activeOpacity={0.6}>
        <Text style = {{color: 'white',textAlign: 'center'}}>Manage Products</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('EmployeeScreen')}
        activeOpacity={0.6}>
        <Text style = {{color: 'white',textAlign: 'center'}}>Manage Employees</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('OrderScreen')}
        activeOpacity={0.6}>
        <Text style = {{color: 'white',textAlign: 'center'}}>Manage Orders</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const ProductScreen = ({ navigation }) => {
  return (
    <View
      style={{marginTop: 50}}>
      <ScrollView>
        {productList.map((item) => (
          <TouchableOpacity
            style={styles.widget}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('ProductDetailsScreen', {
                id: item.id,
                imageUrl: item.imageUrl,
                name: item.name,
                price: item.price,
              })
            }>
            <View style={styles.listitem}>
              <View style={styles.detailPanel}>
                <Text>{item.name}</Text>
                <Text style={{ color: '#ff00ff' }}>{item.price}</Text>
              </View>
              <View>
                <Image
                  style={styles.imgIcon}
                  source={{
                    uri: item.imageUrl,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const ProductDetailsScreen = ({ navigation, route }) => {
  return (
    <View>
      <View style = {{flexDirection: 'column', alignItems: 'center'}}>
        <Image 
          style = {styles.imgView}
          source = {{
            uri: route.params.imageUrl
          }}
        />
        <Text style = {{marginTop: 20,fontSize: 20, fontWeight: 'bold',color: 'purple'}}>Name: {route.params.name}</Text>
        <Text style = {{marginTop: 20,fontSize: 20, fontWeight: 'bold',color: 'purple'}}>Price: {route.params.price}</Text>
        <TouchableOpacity style={styles.widget}>
        <Text
          style={styles.backbtn}
          onPress={() => navigation.popToTop()}>
          Back To Home
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const EmployeeScreen = ({ navigation }) => {
  return (
    <View
      style={{marginTop: 50}}>
      <ScrollView>
        {employeeList.map((item) => (
          <TouchableOpacity
            style={styles.widget}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('EmployeeDetailsScreen', {
                id: item.id,
                name: item.name,
                imageUrl: item.imageUrl,
                age: item.age,
                designation: item.designation,
              })
            }>
            <View style={styles.listitem}>
              <View style={styles.detailPanel}>
                <Text>{item.name}</Text>
                <Text style={{ color: '#ff00ff' }}>{item.designation}</Text>
              </View>
              <View>
                <Image
                  style={styles.imgIconEmployee}
                  source={{
                    uri: item.imageUrl,
                  }}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const EmployeeDetailsScreen = ({ navigation, route }) => {
  return (
    <View>
      <View style = {{flexDirection: 'column', alignItems: 'center'}}>
        <Image 
          style = {styles.imgView}
          source = {{
            uri: route.params.imageUrl
          }}
        />
        <Text style = {{marginTop: 20,fontSize: 20, fontWeight: 'bold',color: 'purple'}}>Name: {route.params.name}</Text>
        <Text style = {{marginTop: 20,fontSize: 20, fontWeight: 'bold',color: 'purple'}}>Age: {route.params.age}</Text>
        <Text style = {{marginTop: 20,fontSize: 20, fontWeight: 'bold',color: 'purple'}}>Designation: {route.params.designation}</Text>
        <TouchableOpacity style={styles.widget}>
        <Text
          style={styles.backbtn}
          onPress={() => navigation.popToTop()}>
          Back To Home
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const OrderScreen = ({ navigation }) => {
  return (
    <View
      style={{marginTop: 50}}>
      <ScrollView>
        {orderList.map((item) => (
          <TouchableOpacity
            style={styles.widget}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('OrderDetailsScreen', {
                id: item.id,
                name: item.name,
                date: item.date,
                product: item.product,
              })
            }>
            <View style={styles.listitem}>
              <View style={styles.detailPanel}>
                <Text>Order ID. {item.id}</Text>
                <Text style={{ color: '#ff00ff' }}>
                  Ordered By : {item.name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const OrderDetailsScreen = ({ navigation, route }) =>  {
  return (
    <View
      style={{marginTop: 50}}>
      <View style={{flexDirection: 'column', alignItems: 'center'}}>

        <Text style={styles.name}>Order ID: {route.params.id}</Text>
        <Text style={styles.price}>Ordered By : {route.params.name}</Text>
        <Text style={styles.price}>Date : {route.params.date}</Text>
        <Text style={styles.price}>Product : {route.params.product}</Text>
      </View>

      <TouchableOpacity style={styles.widget}>
        <Text
          style={styles.backbtn}
          onPress={() => navigation.popToTop()}>
          Back To Home
        </Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonStyle: {
    padding: 10,
    borderRadius: 20,
    marginBottom: 30,
    backgroundColor: 'red',
  },
  medium: {
    backgroundColor: '#d580ff',
  },
  light: {
    backgroundColor: '#e6b3ff',
  },
  detailPanel: {
    flexDirection: 'column',
  },
  imgIcon: {
    width: 100,
    height: 60,
    borderRadius: 15
  },
  imgView: {
    width: '100%',
    height: 300,
  },
  imgIconEmployee: {
    width: 80,
    height: 70,
    borderColor: '#ff66ff',
    borderWidth: 1,
  },
  listitem: {
    flex: 1,
    marginLeft: 30,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ff99ff',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#ffccff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0.5,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  widget: {
    width: '100%',
  },
  img: {
    paddingBottom: 30,
    paddingLeft: 20,
    width: '200%',
    height: '120%',
  },
  imgEmp: {
    marginTop: 60,
    paddingBottom: 30,
    paddingLeft: 20,
    width: '100%',
    height: '100%',
  },
  detailView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
    color: '#e600e6',
  },
  price: {
    fontSize: 15,
    color: '#800080',
    paddingBottom: 5,
  },
  appTitle: {
    textAlign: 'center',
    fontSize: 22,
    color: 'purple',
    paddingBottom: 30,
  },
  backbtn: {
    backgroundColor: '#ff99ff',
    padding: 10,
    borderRadius: 20,
    marginTop: 30,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

