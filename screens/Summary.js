import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Card, Text } from "react-native-paper";
import { db } from "../firebase.conf";

export default function Summary() {
  const [data, setData] = useState({});
  useEffect(
    () => db.ref("students").on("value", (snapshot) => setData(snapshot.val())),
    []
  );
  return (
    <View>
      {Object.keys(data).map((name) => {
        console.log(data, name);
        return (
          <Card>
            <Card.Title title={name} />
            <Card.Content>
              <Text>
                {data[name].on}: {data[name][data[name].on]}
              </Text>
            </Card.Content>
          </Card>
        );
      })}
    </View>
  );
}
