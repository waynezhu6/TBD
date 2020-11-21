import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'galio-framework';

const ChatPage = ({navigation}) => {

  return (
  <SafeAreaView style={styles.body}>

      <View style={styles.header}>

          {/* <View style={styles.back}></View> */}

          <View style={styles.profile}>
            <Ionicons name="ios-person-circle-outline" size={48} style={styles.profileIcon}/>
          </View>

          <View style={styles.info}>
            <Text style={styles.username}>Madeleine</Text>
            <Text style={styles.status}>Online</Text>
          </View>

          <View style={styles.leave}>
            <Button 
              style={styles.button}
              onPress={() => navigation.navigate('home')}
            >
              Leave
            </Button>
          </View>
      </View>

      <View style={styles.content}>
      </View>

  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#7D799A"
  },

  header: {
    flex: 1,
    flexDirection: "row"
  },
  
  back: {
    flex: 1, 
  },

  profile: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  profileIcon: {
    flex: 1,
    color: 'white',
    textAlign: 'center'
  },

  info: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  username: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  status: {
    color: "white",
    fontSize: 13,
  },

  leave: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leaveButton: {

  },

  content: {
    flex: 6,
    flexDirection: "row",
    justifyContent: 'center',
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24
  },
  button: {
    width: '60%'
  }

});

export default ChatPage;