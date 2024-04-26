import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { signOut } from "firebase/auth";

import { auth } from "../config";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export const HomeScreen = () => {
  const handleLogout = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  (async () => {
    const products = collection(db, "Products");

    const querySnapshot = await getDocs(products);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
    
  })();

  return (
    <View style={styles.container}>
      <Button title="Sign Out" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
