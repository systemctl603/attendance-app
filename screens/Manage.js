import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Button } from "react-native-paper";
import { db } from "../firebase.conf";

const Students = ["Student1", "Student2", "Student3"];

export default function Manage({ navigation }) {
  return (
    <View style={styles.container}>
      {Students.map((name) => (
        <Card style={{ marginTop: "10px" }}>
          <Card.Title title={name} />
          <Card.Actions>
            <Button
              onPress={() => {
                db.ref("students")
                  .once("value")
                  .then((snapshot) => {
                    var data = snapshot.val() || {};
                    data[name] = {};
                    data[name][new Date().toDateString()] = "Absent";
                    data[name].on = new Date().toDateString();
                    db.ref("students").set(data);
                  });
              }}
            >
              Absent
            </Button>
            <Button
              onPress={() => {
                db.ref("students")
                  .once("value")
                  .then((snapshot) => {
                    var data = snapshot.val() || {};
                    data[name] = {};
                    data[name][new Date().toDateString()] = "Present";
                    data[name].on = new Date().toDateString();
                    db.ref("students").set(data);
                  });
              }}
            >
              Present
            </Button>
          </Card.Actions>
        </Card>
      ))}
      <View style={{ marginTop: "50px" }}></View>
      <Button mode="contained" onPress={() => navigation.navigate("Summary")}>
        Submit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
