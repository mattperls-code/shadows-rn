/*
    © 2021 Matthew Perlman
    shadows-rn v3.0.01
*/

import React from "react"

import { View, StyleSheet } from "react-native"

import InsetShadow from "./InsetShadow"
import OutsetShadow from "./OutsetShadow"

const Shadow = ({ style, shadows, inset, children }) => {

    if (!Array.isArray(shadows)) {
        throw new Error(
            "Property 'shadows' must be an array"
        )
    }

    const borderRadiusCorners = {
        tl: 0,
        tr: 0,
        bl: 0,
        br: 0
    }

    if(style.borderRadius != null){
        borderRadiusCorners.tl = style.borderRadius
        borderRadiusCorners.tr = style.borderRadius
        borderRadiusCorners.bl = style.borderRadius
        borderRadiusCorners.br = style.borderRadius
    }

    if(style.borderTopLeftRadius != null){
        borderRadiusCorners.tl = style.borderTopLeftRadius
    }

    if(style.borderTopRightRadius != null){
        borderRadiusCorners.tr = style.borderTopRightRadius
    }

    if(style.borderBottomLeftRadius != null){
        borderRadiusCorners.bl = style.borderBottomLeftRadius
    }

    if(style.borderBottomRightRadius != null){
        borderRadiusCorners.br = style.borderBottomRightRadius
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
                        <InsetShadow shadows={shadows} borderRadiusCorners={borderRadiusCorners} /> :
                        <OutsetShadow shadows={shadows} borderRadiusCorners={borderRadiusCorners} />
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