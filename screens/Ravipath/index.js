import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Ravipath = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.VVtfnKOy}></View><Text style={styles.OVQgnknc}>{"Testing World"}</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  VVtfnKOy: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 8,
    color: "#777777"
  },
  OVQgnknc: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Ravipath;