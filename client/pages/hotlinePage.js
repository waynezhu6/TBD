import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';

const hotlinePage = ({navigation}) => {

  return (
    <SafeAreaView style={styles.body}>

      <View style={styles.header}>
        <View style={styles.banner}>
          <Entypo 
            name="chevron-thin-left" 
            size={32} 
            style={styles.backIcon}
            onPress={() => navigation.navigate('home')}
          />
          <Text style={styles.name}>VenTalk</Text>
          <View style={styles.spacer}></View>
        </View>
        <Text style={styles.title}>Helpful Hotlines:</Text>
      </View>

      <View style={styles.middle}>
        <Text style={styles.text}>
          Wellness Together Canada:{"\n"}
          Text WELLNESS to 741741 
        </Text>
        <Text style={styles.text}>
          Kids Help Phone:{"\n"}
          1-800-668-6868
        </Text>
        <Text style={styles.text}>
          Canada Suicide Prevention Service:{"\n"}
          833-456-04566 
        </Text>
        <Text style={styles.text}>
          If you or someone you know is in immediate danger, please call 911.
        </Text>

      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#ACA1C0"
  },

  header: {
    flex: 1,
  },
  banner: {
    flexDirection: "row",
    paddingVertical: 16,
    paddingBottom: 24
  },
  backIcon: {
    flex: 1,
    color: "white",
    paddingLeft: 10
  },
  name: {
    flex: 3,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: "white",
  },
  spacer: {
    flex: 1
  },

  title: {
    width: 200,
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    padding: 16,
    borderRadius: 16,
    color: "white",
    backgroundColor: "#F8A6A6",
    alignSelf: "center",
    fontWeight: "bold"
  },

  middle: {
    flex: 3,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    maxWidth: "85%",
    textAlign: 'center',
    color: "white",
    marginBottom: 32
  },

  footer: {
    flex: 1,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: 'center'
  },
  button: {
    width: '60%'
  }

});

export default hotlinePage;