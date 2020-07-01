import React, { useState, useEffect,createContext,useContext } from 'react';
import { StyleSheet, Text, View,TextInput,ScrollView,Alert,TouchableOpacity,Image,Button } from 'react-native';

import ch from '../json/chinese.json';
import { DrawerActions } from '@react-navigation/native';
import icon from "../json/icon.json";

export default function Chinese({navigation}) {
    const [no, setNo] = React.useState(0); 
    const [text,setText] = React.useState('');
    const [ans,setAns] = React.useState(ch[no].ans); 
    const [allQ,setAllQ] = React.useState(0); 
    
    if(no<allQ){
      return (      
        <View style={styles.container}>

        <View style={styles.headerCenter}>
          <View>
            <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Image source={require('../assets/pics/equal.png')} style={styles.headerIcon}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => Alert.alert(
                  '提示',
                  ch[no].realHint,
                  [
                    {
                      text: '了解',
                    }
                  ],
                  { cancelable: false }
                )}>
                <Image source={require('../assets/pics/bulb.png')} style={styles.bulbIcon}/>
            </TouchableOpacity>
            </View>
            <View>
              <Image source={require('../assets/pics/chinese.png')} style={styles.headerTitlePic}/>
              <Text style={styles.title}>第{ch[no].NO}題</Text>
            </View>
      </View>

      <View style={styles.content}>
      <ScrollView style={{height:90}}><Text style={{fontSize:16,width:300}}>{ch[no].topic}</Text></ScrollView>
        <Text style={{fontSize:12,color:"#898989",lineHeight:50}}>{ch[no].hint}</Text>
        <View style={styles.moreAns}>
            <Text>{ch[no].moreAns}</Text>
        </View>
        <View style={styles.buttonPos}>
          <TouchableOpacity
            style={styles.buttonYes}
            onPress={() => {
              setNo(allQ);
            }}
          >
            <Text style={{ fontSize:18}}>繼續作答</Text>
          </TouchableOpacity>
          </View>

          <ScrollView horizontal={true} style={styles.page}>
            <TouchableOpacity
                style={{width:15,alignItems:"center",
                  borderWidth:1,borderRadius:10,borderColor:"#FFF",
                  backgroundColor:[allQ>=0?[no==0?"#FFC554":"#FFF493"]:"#fff"
              ]}} 
              onPress={() => setNo(0)}>
              <Text style={{color:[allQ>=0?[no==0?"#000":"#000"]:"gray"]}} 
              >1</Text>
            </TouchableOpacity>

            <View style={{width:10}}></View>

            <TouchableOpacity
                style={{width:15,alignItems:"center",
                  borderWidth:1,borderRadius:10,borderColor:"#FFF",
                  backgroundColor:[allQ>=1?[no==1?"#FFC554":"#FFF493"]:"#fff"
              ]}} 
              onPress={() => setNo(1)}>
              <Text style={{color:[allQ>=1?[no==1?"#000":"#000"]:"gray"]}} 
              >2</Text>
            </TouchableOpacity>

            <View style={{width:10}}></View>

            <TouchableOpacity
                style={{width:15,alignItems:"center",
                  borderWidth:1,borderRadius:10,borderColor:"#FFF",
                  backgroundColor:[allQ>=2?[no==2?"#FFC554":"#FFF493"]:"#fff"
              ]}} 
              onPress={() => setNo(2)}>
              <Text style={{color:[allQ>=2?[no==2?"#000":"#000"]:"gray"]}} 
              >3</Text>
            </TouchableOpacity>

            <View style={{width:10}}></View>

            <TouchableOpacity
                style={{width:15,alignItems:"center",
                  borderWidth:1,borderRadius:10,borderColor:"#FFF",
                  backgroundColor:[allQ>=3?[no==3?"#FFC554":"#FFF493"]:"#fff"
              ]}} 
              onPress={() => setNo(3)}>
              <Text style={{color:[allQ>=3?[no==3?"#000":"#000"]:"gray"]}} 
              >4</Text>
            </TouchableOpacity>

            <View style={{width:10}}></View>

            <TouchableOpacity
                style={{width:15,alignItems:"center",
                  borderWidth:1,borderRadius:10,borderColor:"#FFF",
                  backgroundColor:[allQ>=4?[no==4?"#FFC554":"#FFF493"]:"#fff"
              ]}} 
              onPress={() => setNo(4)}>
              <Text style={{color:[allQ>=4?[no==4?"#000":"#000"]:"gray"]}} 
              >5</Text>
            </TouchableOpacity>

            <View style={{width:10}}></View>

            <TouchableOpacity
                style={{width:15,alignItems:"center",
                  borderWidth:1,borderRadius:10,borderColor:"#FFF",
                  backgroundColor:[allQ>=4?[no==4?"#FFC554":"#FFF493"]:"#fff"
              ]}} 
              onPress={() => setNo(4)}>
              <Text style={{color:[allQ>=4?[no==4?"#000":"#000"]:"gray"]}} 
              >6</Text>
            </TouchableOpacity>

            <View style={{width:10}}></View>

            <TouchableOpacity
                style={{width:15,alignItems:"center",
                  borderWidth:1,borderRadius:10,borderColor:"#FFF",
                  backgroundColor:[allQ>=4?[no==4?"#FFC554":"#FFF493"]:"#fff"
              ]}} 
              onPress={() => setNo(4)}>
              <Text style={{color:[allQ>=4?[no==4?"#000":"#000"]:"gray"]}} 
              >7</Text>
            </TouchableOpacity>

            <View style={{width:10}}></View>

            <TouchableOpacity
                style={{width:15,alignItems:"center",
                  borderWidth:1,borderRadius:10,borderColor:"#FFF",
                  backgroundColor:[allQ>=4?[no==4?"#FFC554":"#FFF493"]:"#fff"
              ]}} 
              onPress={() => setNo(4)}>
              <Text style={{color:[allQ>=4?[no==4?"#000":"#000"]:"gray"]}} 
              >8</Text>
            </TouchableOpacity>
          </ScrollView>

          <View　style={styles.jokeShape}>
            <Text>{ch[no].joke}</Text>
          </View>
        </View>
    </View>
      );
    }else if(no>allQ){
        setNo(allQ);
    }else{
  return (      
    <View style={styles.container}>

    <View style={styles.headerCenter}>
      <View>
      <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Image source={require('../assets/pics/equal.png')} style={styles.headerIcon}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => Alert.alert(
                  '提示',
                  ch[no].realHint,
                  [
                    {
                      text: '了解',
                    }
                  ],
                  { cancelable: false }
                )}>
                <Image source={require('../assets/pics/bulb.png')} style={styles.bulbIcon}/>
            </TouchableOpacity>
        </View>
        <View>
          <Image source={require('../assets/pics/chinese.png')} style={styles.headerTitlePic}/>
          <Text style={styles.title}>第{ch[no].NO}題</Text>
        </View>
  </View>

  <View style={styles.content}>
  <ScrollView style={{height:90}}><Text style={{fontSize:16,width:300}}>{ch[no].topic}</Text></ScrollView>
    <Text style={{fontSize:12,color:"#898989",lineHeight:50}}>{ch[no].hint}</Text>
    <View style={styles.input}>
      <TextInput
        style={{height: 40}}
        placeholder="請點我輸入答案"
        placeholderTextColor="#747474"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
    </View>
    <View style={styles.buttonPos}>
      <TouchableOpacity
        style={styles.buttonSkip}
        onPress={() => {
          Alert.alert(
            '跳過',
            "確定要跳過這題嗎？",
            [
              {
                text: '確定',
                onPress: () => 
                {setText('');setAllQ(allQ+1);setNo(allQ);setAns(ch[no+1].ans);}
              },
            {
              text: '取消',
              onPress: () => 
              console.log('Cancel Pressed')
            },
          ],
          );
        }}
      >
        <Text style={{ fontSize:18}}>跳過</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonYes}
        onPress={() => {
        if (text==ch[no].ans){
          Alert.alert(
            '答對了!',
            ch[no].moreAns,
            [
              {
                text: '了解',
                onPress: () => 
                {setText('');setAllQ(allQ+1);setNo(allQ);setAns(ch[no+1].ans);global.score.chS+=1;}
              }
            ],
            { cancelable: false }
          );
        }
        else{
          Alert.alert('答錯囉！',"再想想看～");
        }}}
      >
        <Text style={{ fontSize:18}}>確定</Text>
      </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={styles.page}>
        <TouchableOpacity
            style={{width:15,alignItems:"center",
              borderWidth:1,borderRadius:10,borderColor:"#FFF",
              backgroundColor:[allQ>=0?[no==0?"#FFC554":"#FFF493"]:"#fff"
          ]}} 
          onPress={() => setNo(0)}>
          <Text style={{color:[allQ>=0?[no==0?"#000":"#000"]:"gray"]}} 
          >1</Text>
        </TouchableOpacity>

        <View style={{width:10}}></View>

        <TouchableOpacity
            style={{width:15,alignItems:"center",
              borderWidth:1,borderRadius:10,borderColor:"#FFF",
              backgroundColor:[allQ>=1?[no==1?"#FFC554":"#FFF493"]:"#fff"
          ]}} 
          onPress={() => setNo(1)}>
          <Text style={{color:[allQ>=1?[no==1?"#000":"#000"]:"gray"]}} 
          >2</Text>
        </TouchableOpacity>

        <View style={{width:10}}></View>

        <TouchableOpacity
            style={{width:15,alignItems:"center",
              borderWidth:1,borderRadius:10,borderColor:"#FFF",
              backgroundColor:[allQ>=2?[no==2?"#FFC554":"#FFF493"]:"#fff"
          ]}} 
          onPress={() => setNo(2)}>
          <Text style={{color:[allQ>=2?[no==2?"#000":"#000"]:"gray"]}} 
          >3</Text>
        </TouchableOpacity>

        <View style={{width:10}}></View>

        <TouchableOpacity
            style={{width:15,alignItems:"center",
              borderWidth:1,borderRadius:10,borderColor:"#FFF",
              backgroundColor:[allQ>=3?[no==3?"#FFC554":"#FFF493"]:"#fff"
          ]}} 
          onPress={() => setNo(3)}>
          <Text style={{color:[allQ>=3?[no==3?"#000":"#000"]:"gray"]}} 
          >4</Text>
        </TouchableOpacity>

        <View style={{width:10}}></View>

        <TouchableOpacity
            style={{width:15,alignItems:"center",
              borderWidth:1,borderRadius:10,borderColor:"#FFF",
              backgroundColor:[allQ>=4?[no==4?"#FFC554":"#FFF493"]:"#fff"
          ]}} 
          onPress={() => setNo(4)}>
          <Text style={{color:[allQ>=4?[no==4?"#000":"#000"]:"gray"]}} 
          >5</Text>
        </TouchableOpacity>
        
        <View style={{width:10}}></View>

        <TouchableOpacity
            style={{width:15,alignItems:"center",
              borderWidth:1,borderRadius:10,borderColor:"#FFF",
              backgroundColor:[allQ>=4?[no==4?"#FFC554":"#FFF493"]:"#fff"
          ]}} 
          onPress={() => setNo(4)}>
          <Text style={{color:[allQ>=4?[no==4?"#000":"#000"]:"gray"]}} 
          >6</Text>
        </TouchableOpacity>

        <View style={{width:10}}></View>

        <TouchableOpacity
            style={{width:15,alignItems:"center",
              borderWidth:1,borderRadius:10,borderColor:"#FFF",
              backgroundColor:[allQ>=4?[no==4?"#FFC554":"#FFF493"]:"#fff"
          ]}} 
          onPress={() => setNo(4)}>
          <Text style={{color:[allQ>=4?[no==4?"#000":"#000"]:"gray"]}} 
          >7</Text>
        </TouchableOpacity>

        <View style={{width:10}}></View>

        <TouchableOpacity
            style={{width:15,alignItems:"center",
              borderWidth:1,borderRadius:10,borderColor:"#FFF",
              backgroundColor:[allQ>=4?[no==4?"#FFC554":"#FFF493"]:"#fff"
          ]}} 
          onPress={() => setNo(4)}>
          <Text style={{color:[allQ>=4?[no==4?"#000":"#000"]:"gray"]}} 
          >8</Text>
        </TouchableOpacity>

      </ScrollView>
      <View　style={styles.jokeShape}>
        <Text>{ch[no].joke}</Text>
      </View>
    </View>
</View>
  );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerCenter:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:390
},
headerIcon:{
  width:30,
  height:12,
  marginTop:50,
  marginLeft:30
},
bulbIcon:{
  width:60,
  height:60,
  marginTop:50,
  marginLeft:20
},
headerContentStyle:{
  width:420,
  height:80,
  backgroundColor:'#00b49f',
},
headerTitlePic:{
  height:300,
  width:300,
  marginTop:-70,
  marginRight:-60
},
title:{
  fontSize:25,
  position: 'absolute',
  left:90,
  top:130,
  color:"#fff"
},
content:{
  alignItems: 'center',
  marginTop:30
},
input:{
  backgroundColor:"#FFF493",
  width:280,
  height:40,
  borderRadius:10,
  paddingLeft:10,
  position: 'absolute',
  top:140,
},
buttonYes:{
  backgroundColor:"#FFC554",
  width:80,
  height:40,
  borderRadius:10,
  alignItems:"center",
  justifyContent:"center",
  margin:15
},
buttonSkip:{
  backgroundColor:"#FFF",
  width:80,
  height:40,
  borderRadius:10,
  borderColor:"#FFC554",
  borderWidth:1,
  alignItems:"center",
  justifyContent:"center",
  margin:15
},
buttonPos:{
  flexDirection:"row",
  justifyContent:"space-between",
  position: 'absolute',
  top:200,
},
jokeShape:{
  backgroundColor:"#FFC554",
  height:80,
  width:420,
  alignItems:"center",
  justifyContent:"center",
  borderRadius:20,
  position: 'absolute',
  top:350,
  paddingLeft:12,
  paddingRight:10
},
page:{
  width:150,
  position: 'absolute',
  top:300,
},
moreAns:{
  backgroundColor:"#FFF493",
  width:280,
  height:100,
  borderRadius:10,
  paddingLeft:10,
  position: 'absolute',
  top:140,
  paddingTop:10,
  paddingRight:10
},
});
