import React, { createContext,useEffect,useState,useContext } from 'react';
import { StyleSheet, Text, View, ActivityIndicator,Image } from 'react-native';
import { Input,Button } from 'react-native-elements';
import * as firebase from 'firebase';
import {StoreContext} from "../store";
import '../store/score';

export default function Login({navigation}) {
  const [email,setEmail] = useState(null);
  const [password,setPassword] = useState(null);
  const [error,setError] = useState('');
  const [loading,setLoading] = useState(false);
  const {isLoginState} = useContext(StoreContext);
  const [isLogin,setIsLogin] = isLoginState;

  const onSignIn = async()=>{
    setError(" ");
    setLoading(true);
    try{
      await firebase.auth().signInWithEmailAndPassword(email,password);
      setEmail("");
      setPassword("");
      setError("");
      setIsLogin(true);
      global.login=true;
    } catch (err1){
      try {
        await firebase.auth().createUserWithEmailAndPassword(email,password);
        setEmail("");
        setPassword("");
        setError("");
        setIsLogin(true);
      }catch (err2){
        setError(err2.message);
      }
    } finally{
      setLoading(false);
    }
  };

  const renderButton = () => {
    if(loading){
      return <ActivityIndicator size="large" style={{marginTop:30}} />;
    }
    return (
      <Button 
        title="登入"
        buttonStyle={{backgroundColor:"#FFC554",height:40,width:80,borderRadius:10,marginTop:50}}
        containerStyle={{padding:5,alignItems: 'center',}}
        onPress={onSignIn}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/pics/logo.png')} style={styles.headerIcon}/>
      <View style={styles.formStyle}>
        <View style={styles.content}>
      <Input
          lableStyle={{marginTop:20}}
          label="Email"
          labelStyle={{color:"#000"}}
          placeholderTextColor="#FFF493"
          inputContainerStyle={{borderColor:"#000"}}
          placeholder="catmeow@gmail.com"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={(email)=>setEmail(email)}
        />
        <Input
          lableStyle={{marginTop:20}}
          label="密碼"
          labelStyle={{color:"#000"}}
          placeholderTextColor="#FFF493"
          inputContainerStyle={{borderColor:"#000"}}
          placeholder="至少七個字元"
          secureTextEntry
          autoCorrect={false}
          autoCapitalize="none"
          value={password}
          onChangeText={(password)=>setPassword(password)}
        />
        </View>
        {renderButton()}
        <Text style={{padding:10,fontSize:16,color:'red'}}>{error}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formStyle:{
    margin:10,
    width:240,
  },
  content:{
    backgroundColor:"#FFC554",
    borderRadius:20,
    width:244,height:200,
    alignItems: 'center',
    justifyContent: 'center',
    padding:10
},
headerIcon:{
  marginTop:-20,
  marginBottom:30
}
});
