import React, { createContext,useEffect,useState,useContext } from 'react';
import { StyleSheet, Text, View,Image,AsyncStorage } from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer,DrawerActions } from '@react-navigation/native';
import * as firebase from 'firebase';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from './personalScreen/Profile';
import Chinese from './subjectScreen/Chinese';
import English from './subjectScreen/English';
import Math from './subjectScreen/Math';
import Science from './subjectScreen/Science';
import Social from './subjectScreen/Social';

import Login from './personalScreen/Login';
import icon from "./json/icon.json";
import {StoreContext,StoreProvider} from "./store/index";
import './store/score'
import { Plus } from './store/score';

const Stack = createStackNavigator();

function CustomDrawerContent(props,{navigation}) {
 
  //const [lv,setLv] = React.useState(0); 
  let profi = "require('./assets/cats/0.png')"

  Plus();

  if(global.score.allS==0){
    profi = require('./assets/cats/0.png');
  }else if(global.score.allS==1){
    profi = require('./assets/cats/1.png');
  }
  else if(global.score.allS==2){
    profi = require('./assets/cats/2.png');
  }
  else if(global.score.allS==3){
    profi = require('./assets/cats/3.png');
  }else{
    profi = require('./assets/cats/4.png');
  }
  
  return (
    <DrawerContentScrollView {...props}>

      <View style={styles.drawerHeader}>
          <Image source={profi} style={styles.profileStyle}/>
          <View>
            <Text style={styles.name}>{global.proG.name}</Text>
            <Text style={{color:"#FFF",fontSize:16,marginLeft:3}}>Lv.{global.score.allS}</Text>
          </View>
      </View>
      
        <DrawerItemList {...props} />

    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const App = () => {
 useEffect(()=>{
  const firebaseConfig = {
    apiKey: "AIzaSyCmYNTQ3RfBpoBDOphQL18ZQ6GfAtm24eE",
    authDomain: "exam2020-e1c8e.firebaseapp.com",
    databaseURL: "https://exam2020-e1c8e.firebaseio.com",
    projectId: "exam2020-e1c8e",
    storageBucket: "exam2020-e1c8e.appspot.com",
    messagingSenderId: "362416206595",
    appId: "1:362416206595:web:69b5778ce1f84bfdda6f36",
    measurementId: "G-C3DM29VVC2"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
 },[]);
 const {isLoginState} = useContext(StoreContext);
 const[isLogin,setIsLogin] = isLoginState;
 //const isLogin =true;


 AsyncStorage.setItem('@MySuperStore:key', JSON.stringify(isLogin));

 if(global.login){
 AsyncStorage.getItem('@MySuperStore:key').then(value =>
  setIsLogin(value)
);}

  return (
    isLogin ? (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="國文" 
        drawerStyle={{ backgroundColor: '#fff',width: 220}}
        drawerContentOptions={{
          activeBackgroundColor: '#FFC554',
          activeTintColor:'#fff',
          itemStyle:{borderRadius:20},
          labelStyle:{fontSize:16}
        }}
        drawerContent={props => <CustomDrawerContent {...props} />} >
          
          <Drawer.Screen name="關於我" component={Profile}
          options={{
            drawerLabel:({ focused, color }) => (
              <Text style={[focused ? {color:"white"} : {color:"white"}]}>關於我</Text>
              ),
            drawerIcon: ({ focused, size }) => (
              <Image
                source={require('./assets/subPic/pro.png')}
                style={[focused ? styles.drawerActive : styles.drawerInActive,
                  { height: size, width: size, marginLeft:15,marginRight:-10}]}
              />
              )}
            }/>
            
          <Drawer.Screen name="國文" component={Chinese}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Image
                source={require('./assets/subPic/ch1.png')}
                style={[focused ? styles.drawerActive : styles.drawerInActive,
                  { height: size, width: size, marginLeft:15,marginRight:-10}]}
              />
              )}
            }/>
            <Drawer.Screen name="數學" component={Math}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Image
                source={require('./assets/subPic/ma1.png')}
                style={[focused ? styles.drawerActive : styles.drawerInActive,
                  { height: size, width: size, marginLeft:15,marginRight:-10}]}
              />
              )}
            }/>
            <Drawer.Screen name="英文" component={English}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Image
                source={require('./assets/subPic/en1.png')}
                style={[focused ? styles.drawerActive : styles.drawerInActive,
                  { height: size, width: size, marginLeft:15,marginRight:-10}]}
              />
              )}
            }/>
            <Drawer.Screen name="自然" component={Science}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Image
                source={require('./assets/subPic/sc1.png')}
                style={[focused ? styles.drawerActive : styles.drawerInActive,
                  { height: size, width: size, marginLeft:15,marginRight:-10}]}
              />
              )}
            }/>
            <Drawer.Screen name="社會" component={Social}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Image
                source={require('./assets/subPic/so1.png')}
                style={[focused ? styles.drawerActive : styles.drawerInActive,
                  { height: size, width: size, marginLeft:15,marginRight:-10}]}
              />
              )}
            }/>
          
      </Drawer.Navigator>
    </NavigationContainer>
) : (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
)
  );
}

export default () =>{
  return (
    <StoreProvider>
      <App/>
    </StoreProvider>
  );
};

const styles = StyleSheet.create({
  drawerHeader:{
    height:200,
    marginTop:-30,
    marginLeft:-15,
    marginBottom:-50,
    paddingRight:50,
    paddingLeft:50,
    backgroundColor:"#FFC554",
    flexDirection:"row",
    justifyContent:"flex-start",
    paddingTop:50
  },
  profileStyle:{
    width:50,
    height:50,
    marginRight:20
  },
  name:{
    fontSize:20,
    color:"#FFF",
    fontWeight:"bold",
    //marginTop:20
  },
  email:{
    fontSize:14,
    color:"#fff",
    fontWeight:"normal",
  },
  arrowStyle:{
    width:24,
    height:24,
    marginTop:150,
    marginRight:-10
  },
  iconStyle:{
    width:30,
    height:30,
    marginTop:15,
    marginLeft:30
  }
});
