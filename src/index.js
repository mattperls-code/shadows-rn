/*
    v2.2.0
*/

import React from "react"

import { View, StyleSheet } from "react-native"

import InsetShadow from "./InsetShadow"
import OutsetShadow from "./OutsetShadow"

/**
 * @param {object} props.style Style sheet object applied as a container for the shadow component
 * @param {object} props.shadows Array of shadow styles to be rendered
 * @param {boolean} props.inset Whether the shadow should be inset or outset
 * @param {object} props.children Components inside of the shadow
 */

const Shadow = ({style,shadows,inset,children}) => {

    if (!Array.isArray(shadows)) {
        throw new Error(
            "Property 'shadows' must be an array"
        )
    }

    return (
        <View style={
            [
                style,
                {
                    overflow: "visible"
                }
            ]
        }>
            <View style={styles.container}>
                {
                    inset ?
                        <InsetShadow shadows={shadows} borderRadius={style.borderRadius ?? 0} /> :
                        <OutsetShadow shadows={shadows} borderRadius={style.borderRadius ?? 0} />
                }
            </View>
            <View style={styles.container}>
                {
                    children
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "visible"
    }
})

module.exports = Shadow