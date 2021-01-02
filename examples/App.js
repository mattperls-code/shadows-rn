/*
  v2.2.0
  An Example Of How To Use shadows-rn
*/

import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

import Shadow from "shadows-rn";

const App = () => {
  return (
    <View style={styles.container}>
      <Shadow
        style={styles.shadowA}
        inset={true}
        shadows={[
          {
            offsetX: -10,
            offsetY: -10,
            radius: 15,
            color: "white",
          },
          {
            offsetX: 10,
            offsetY: 10,
            radius: 15,
            color: "rgb(195,195,195)",
          },
        ]}
      ></Shadow>
      <Shadow
        style={styles.shadowB}
        inset={false}
        shadows={[
          {
            offsetX: -10,
            offsetY: -10,
            radius: 15,
            color: "white",
          },
          {
            offsetX: 10,
            offsetY: 10,
            radius: 15,
            color: "rgb(195,195,195)",
          },
        ]}
      ></Shadow>
      <Shadow
        style={styles.shadowC}
        inset={true}
        shadows={[
          {
            offsetX: -10,
            offsetY: -10,
            radius: 15,
            color: "white",
          },
          {
            offsetX: 10,
            offsetY: 10,
            radius: 15,
            color: "rgb(195,195,195)",
          },
        ]}
      ></Shadow>
      <Shadow
        style={styles.shadowD}
        inset={false}
        shadows={[
          {
            offsetX: -10,
            offsetY: -10,
            radius: 15,
            color: "white",
          },
          {
            offsetX: 10,
            offsetY: 10,
            radius: 15,
            color: "rgb(195,195,195)",
          },
        ]}
      ></Shadow>
      <Shadow
        style={styles.shadowE}
        inset={true}
        shadows={[
          {
            offsetX: -10,
            offsetY: -10,
            radius: 15,
            color: "white",
          },
          {
            offsetX: 10,
            offsetY: 10,
            radius: 15,
            color: "rgb(195,195,195)",
          },
        ]}
      >
        <View
          style={
            ([styles.container],
            { justifyContent: "center", alignItems: "center", flex: 1 })
          }
        >
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            Child Component
          </Text>
        </View>
      </Shadow>
      <Shadow
        style={styles.shadowF}
        inset={false}
        shadows={[
          {
            offsetX: -10,
            offsetY: -10,
            radius: 15,
            color: "white",
          },
          {
            offsetX: 10,
            offsetY: 10,
            radius: 15,
            color: "rgb(195,195,195)",
          },
        ]}
      >
        <View
          style={
            ([styles.container],
            { justifyContent: "center", alignItems: "center", flex: 1 })
          }
        >
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            Child Component
          </Text>
        </View>
      </Shadow>
      <Shadow
        style={styles.shadowG}
        inset={true}
        shadows={[
          {
            offsetX: -10,
            offsetY: -10,
            radius: 15,
            color: "white",
          },
          {
            offsetX: 10,
            offsetY: 10,
            radius: 15,
            color: "rgb(195,195,195)",
          },
        ]}
      >
        <View
          style={
            ([styles.container],
            { justifyContent: "center", alignItems: "center", flex: 1 })
          }
        >
          <Shadow
            style={styles.internalShadow}
            inset={false}
            shadows={[
              {
                offsetX: -7.5,
                offsetY: -7.5,
                radius: 15,
                color: "white",
              },
              {
                offsetX: 7.5,
                offsetY: 7.5,
                radius: 15,
                color: "rgb(195,195,195)",
              },
            ]}
          ></Shadow>
        </View>
      </Shadow>
      <Shadow
        style={styles.shadowH}
        inset={false}
        shadows={[
          {
            offsetX: -10,
            offsetY: -10,
            radius: 15,
            color: "white",
          },
          {
            offsetX: 10,
            offsetY: 10,
            radius: 15,
            color: "rgb(195,195,195)",
          },
        ]}
      >
        <View
          style={
            ([styles.container],
            { justifyContent: "center", alignItems: "center", flex: 1 })
          }
        >
          <Shadow
            style={styles.internalShadow}
            inset={true}
            shadows={[
              {
                offsetX: -7.5,
                offsetY: -7.5,
                radius: 15,
                color: "white",
              },
              {
                offsetX: 7.5,
                offsetY: 7.5,
                radius: 15,
                color: "rgb(195,195,195)",
              },
            ]}
          ></Shadow>
        </View>
      </Shadow>
    </View>
  );
};

const vw = Dimensions.get("screen").width / 100;
const vh = Dimensions.get("screen").height / 100;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgb(220,220,220)",
  },
  shadowA: {
    position: "absolute",
    top: 12.5 * vh,
    left: 10 * vw,
    width: 35 * vw,
    height: 15 * vh,
    backgroundColor: "rgb(220,220,220)",
  },
  shadowB: {
    position: "absolute",
    top: 12.5 * vh,
    right: 10 * vw,
    width: 35 * vw,
    height: 15 * vh,
    backgroundColor: "rgb(220,220,220)",
  },
  shadowC: {
    position: "absolute",
    top: 32.5 * vh,
    left: 10 * vw,
    width: 35 * vw,
    height: 15 * vh,
    backgroundColor: "rgb(220,220,220)",
    borderRadius: 20,
  },
  shadowD: {
    position: "absolute",
    top: 32.5 * vh,
    right: 10 * vw,
    width: 35 * vw,
    height: 15 * vh,
    backgroundColor: "rgb(220,220,220)",
    borderRadius: 20,
  },
  shadowE: {
    position: "absolute",
    top: 52.5 * vh,
    left: 10 * vw,
    width: 35 * vw,
    height: 15 * vh,
    backgroundColor: "rgb(220,220,220)",
    borderRadius: 20,
  },
  shadowF: {
    position: "absolute",
    top: 52.5 * vh,
    right: 10 * vw,
    width: 35 * vw,
    height: 15 * vh,
    backgroundColor: "rgb(220,220,220)",
    borderRadius: 20,
  },
  shadowG: {
    position: "absolute",
    top: 72.5 * vh,
    left: 10 * vw,
    width: 35 * vw,
    height: 15 * vh,
    backgroundColor: "rgb(220,220,220)",
    borderRadius: 20,
  },
  shadowH: {
    position: "absolute",
    top: 72.5 * vh,
    right: 10 * vw,
    width: 35 * vw,
    height: 15 * vh,
    backgroundColor: "rgb(220,220,220)",
    borderRadius: 20,
  },
  internalShadow: {
    width: 20 * vw,
    height: 7.5 * vh,
    borderRadius: 15,
  },
});

export default App;
