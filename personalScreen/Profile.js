import React, { createContext,useEffect,useState,useContext } from 'react';
import { StyleSheet, Text, View,Alert,Image,TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import {StoreContext} from "../store";
import * as firebase from 'firebase';
import { DrawerActions } from '@react-navigation/native';
import {VictoryPie,VictoryBar} from "victory-native";

import '../store/score'
import { set } from 'react-native-reanimated';
import { Plus } from '../store/score';

export default function Profile({navigation}) {
  const {isLoginState} = useContext(StoreContext);
  const [isLogin,setIsLogin] = isLoginState;
  const onSignOut = () => {
    firebase.auth().signOut();
    setIsLogin(false);
    global.login=false
  };
  
  const [no, setNo] = React.useState(true); 

  let profi = require('../assets/cats/0.png');

  Plus();

  if(global.score.allS==0){
    profi = require('../assets/cats/0.png');
  }else if(global.score.allS==1){
    profi = require('../assets/cats/1.png');
  }
  else if(global.score.allS==2){
    profi = require('../assets/cats/2.png');
  }
  else if(global.score.allS==3){
    profi = require('../assets/cats/3.png');
  }else{
    profi = require('../assets/cats/4.png');
  }

  const defaultData=[
    {x:"國",y:20},
    {x:"數",y:20},
    {x:"英",y:20},
    {x:"自",y:20},
    {x:"社",y:20},
  ];

  const sampleData=[
    {x:"國",y:global.score.chS},
    {x:"數",y:global.score.maS},
    {x:"英",y:global.score.enS},
    {x:"自",y:global.score.scS},
    {x:"社",y:global.score.soS},
    {x:"待挑戰",y:5},
  ];

  const dataColor=["#FF8A00","#fca623","#FFC554","#ffe478","#FFF493","#f9ffa8"];
  
  const [graphicData,setGraphicData]=useState(defaultData);
  useEffect(()=>{
    setGraphicData(sampleData);
  },[no]);


  if(no==true){
    return(
      <View style={styles.container}>
      <View style={{marginTop:-150}}></View>

      <Image source={require('../assets/pics/leftTop.png')} style={styles.header}/>
      <View style={{justifyContent:"flex-start",width:350,marginTop:50}}>
      <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image source={require('../assets/pics/equal2.png')} style={styles.headerIcon}/>
      </TouchableOpacity>
      </View>
      
      <View style={{width:350,marginLeft:130,flexDirection:"row"}}>
      <Image source={profi} style={{width:50,height:50}}/>
      <Text style={{color:"#FFF",fontSize:16,marginLeft:20,marginTop:15}}>Lv.{global.score.allS}</Text>
      </View>

      <View style={styles.allName}>
      <Text style={styles.name}>{global.proG.name}</Text>
      <TouchableOpacity
          onPress={() => console.log("change name")}>
          <Image source={require('../assets/pics/pen.png')} style={styles.pen}/>
      </TouchableOpacity>
      </View>

      <View style={styles.allName}>
      <Text style={{fontSize:16,color:"#fff",marginTop:0}}>catmeow@gmail.com</Text>
      </View>
      
      {/*<Text style={styles.name}>{firebase.auth().uid}</Text>*/}

      <View style={{marginTop:20}}>
      <VictoryPie width={300} data={graphicData}
      colorScale={dataColor} innerRadius={40} 
      animate={{easing:"exp"}} labelRadius={65}
      />
      </View>
      <Text style={{marginTop:-80,fontSize:20}}>答題率</Text>
      
        <View style={styles.bottomBtn}>
            <Button
                title="登出"
                buttonStyle={{backgroundColor:"#FF8A00",borderRadius:10}}
                containerStyle={{padding:5,width:80,marinRight:10}}
                onPress={onSignOut}
                //onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              />
            <Button
                title="更新圖表"
                buttonStyle={{backgroundColor:"#F8671D",borderRadius:10}}
                containerStyle={{padding:5,width:120}}
                onPress={() => {setNo(false),console.log(no)}}
              />
              
        </View>

    </View>
    );
}else{
    return(
      <View style={styles.container}>
      <View style={{marginTop:-150}}></View>

      <Image source={require('../assets/pics/leftTop.png')} style={styles.header}/>
      <View style={{justifyContent:"flex-start",width:350,marginTop:50}}>
      <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image source={require('../assets/pics/equal2.png')} style={styles.headerIcon}/>
      </TouchableOpacity>
      </View>
      
      <View style={{width:350,marginLeft:130,flexDirection:"row"}}>
      <Image source={profi} style={{width:50,height:50}}/>
      <Text style={{color:"#FFF",fontSize:16,marginLeft:20,marginTop:15}}>Lv.{global.score.allS}</Text>
      </View>

      <View style={styles.allName}>
      <Text style={styles.name}>{global.proG.name}</Text>
      <TouchableOpacity
          onPress={() => console.log("change name")}>
          <Image source={require('../assets/pics/pen.png')} style={styles.pen}/>
      </TouchableOpacity>
      </View>

      <View style={styles.allName}>
      <Text style={{fontSize:16,color:"#fff",marginTop:0}}>catmeow@gmail.com</Text>
      </View>
      
      {/*<Text style={styles.name}>{firebase.auth().uid}</Text>*/}

      <View style={{marginTop:20}}>
      <VictoryPie width={300} data={graphicData}
      colorScale={dataColor} innerRadius={40} 
      animate={{easing:"exp"}} labelRadius={65}
      />
      </View>
      <Text style={{marginTop:-80,fontSize:20}}>答題率</Text>
      
        <View style={styles.bottomBtn}>
            <Button
                title="登出"
                buttonStyle={{backgroundColor:"#FF8A00",borderRadius:10}}
                containerStyle={{padding:5,width:80,marinRight:10}}
                //onPress={onSignOut}
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              />
            <Button
                title="更新圖表"
                buttonStyle={{backgroundColor:"#F8671D",borderRadius:10}}
                containerStyle={{padding:5,width:120}}
                onPress={() => {setNo(true),console.log(no)}}
              />
              
        </View>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    position: 'absolute',
    left:0,
    top:0,
  },
  name:{
    marginTop:10,
    fontSize:20,
    color:"#FFF",
    fontWeight:"bold",
  },
  headerIcon:{
    
    width:30,
    height:12,
  },
  pen:{
    marginLeft:10,
    marginTop:15
  },
  allName:{
    marginTop:0,
    marginLeft:-160,
    width:180,
    flexDirection:"row",
    justifyContent:"center"
  },
  bottomBtn:{
    flexDirection:"row",
    justifyContent:"space-between",
    position: 'absolute',
    bottom:20,
    width:320
  }
});
