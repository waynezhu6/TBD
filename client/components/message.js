import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Message = (props) => {
  const owner = props.owner; //1 if you, 0 otherwise
  const timestamp = props.time; //a 00:00 style timestamp
  const body = props.body; //the message body

  const styles = owner == 1 ? styles1 : styles0;

  return(
    <View style={styles.body}>
      <Text style={styles.text}>
        {body}
      </Text>
    </View>
  )
}

const styles1 = StyleSheet.create({
  body: {
    backgroundColor: '#F8A2A1', 
    alignSelf: "flex-end", 
    flex: 1,
    maxWidth: "80%",
    padding: 16,
    marginRight: 16,
    marginBottom: 16,
    borderRadius: 24,
    borderBottomRightRadius: 0
  },
  text: {
    color: 'white',
    fontSize: 16,
    lineHeight: 20
  }
});

const styles0 = StyleSheet.create({
  body: {
    backgroundColor: '#F1F0F5', 
    alignSelf: "flex-start", 
    flex: 1,
    maxWidth: "80%",
    padding: 16,
    marginLeft: 16,
    marginBottom: 16,
    borderRadius: 24,
    borderBottomLeftRadius: 0
  },
  text: {
    color: 'grey',
    fontSize: 16,
    lineHeight: 20
  }
});


export default Message;