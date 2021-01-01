import React from "react"

import { View, StyleSheet } from "react-native"

import InsetShadow from "./InsetShadow"
import OutsetShadow from "./OutsetShadow"

const Shadow = (props) => {

    if(!Array.isArray(props.shadows)){
        throw new Error(
            "Property 'shadows' must be an array"
        )
    }

    return (
        <View style={
            [
                props.style,
                {
                    overflow: "visible"
                }
            ]
        }>
            <View style={styles.container}>
                {
                    props.inset ?
                        <InsetShadow shadows={props.shadows} borderRadius={props.style.borderRadius}/> :
                        <OutsetShadow shadows={props.shadows} borderRadius={props.style.borderRadius}/>
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