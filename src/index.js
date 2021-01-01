import React from "react"

import { View, StyleSheet } from "react-native"

import InnerShadow from "./InnerShadow"
import OuterShadow from "./OuterShadow"

/*
    - Inset or Outset Shadow Component for React native
    -
    - @param {object} style
    -    Style Sheet Object
    - @param {boolean} inset
    -    Shadow is Inset?
    - @param {array} shadows
    -    Shadow Styling Options
    -         {number} offsetX
    -         {number} offsetY
    -         {number} radius
    -         {string} color
*/

const Shadow = (props) => {

    if(!Array.isArray(props.shadows)){
        throw new Error(
            "Property 'shadows' must be an array"
        )
    }

    return (
        <View style={
            [
                styles.props,
                {
                    overflow: "visible"
                }
            ]
        }>
            <View style={styles.container}>
                {
                    props.inset ?
                        <InnerShadow shadows={props.shadows} borderRadius={props.style.borderRadius}/> :
                        <OuterShadow shadows={props.shadows} borderRadius={props.style.borderRadius}/>
                }
            </View>
            <View style={styles.container}>
                {
                    props.children
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        overflow: "visible"
    }
})

module.exports = Shadow