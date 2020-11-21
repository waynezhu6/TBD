import React from 'react';
import { StyleSheet, View } from 'react-native';
import generateLayout from "../lib/layout";

const Screen = () => {

  const generateViews = () => {
    //generates the views from layout specs
    const layout = generateLayout();
    let views = [];
    for(const row of layout){
      rows = [];
      for(const cell of row.content){
        rows.push(<View style={[{flex: 1}, styles.cell]}></View>);
      }
      views.push(<View style={{flex: 1}}>{rows}</View>);
    }
    return views;
  }

  return(
    <View style={styles.body}>
        {generateViews()}
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'skyblue'
  },
  cell: {
    borderColor: 'black',
    borderWidth: 1
  }
});

export default Screen;