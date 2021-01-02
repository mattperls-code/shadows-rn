/*
    v2.1.0
*/

import React from "react"

import { View } from "react-native"

import { WebView } from "react-native-webview"


const OutsetShadow = (props) => {

    let boundingBox = {
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: 0
    }

    let shadowsCSS = []

    props.shadows.forEach(shadow => {
        let offsetX = 0
        let offsetY = 0
        let radius = 0
        let color = "#ffffff"

        if(shadow.offsetX == null || isNaN(shadow.offsetX) || typeof shadow.offsetX != "number"){
            console.warn("The offsetX of a shadow must be a number; defaulted to 0")
        } else {
            offsetX = shadow.offsetX
        }
        if(shadow.offsetY == null || isNaN(shadow.offsetY) || typeof shadow.offsetY != "number"){
            console.warn("The offsetY of a shadow must be a number; defaulted to 0")
        } else {
            offsetY = shadow.offsetY
        }
        if(shadow.radius == null || isNaN(shadow.radius) || typeof shadow.radius != "number"){
            console.warn("The: radius of a shadow must be a number; defaulted to 0")
        } else {
            radius = shadow.radius
        }
        if(shadow.color == null || typeof shadow.color != "string"){
            console.warn("The color of a shadow must be a string; defaulted to '#ffffff'")
        } else {
            color = shadow.color
        }

        boundingBox.minX = Math.min(boundingBox.minX,offsetX-radius)
        boundingBox.maxX = Math.max(boundingBox.maxX,offsetX+radius)
        boundingBox.minY = Math.min(boundingBox.minY,offsetY-radius)
        boundingBox.maxY = Math.max(boundingBox.maxY,offsetY+radius)
        shadowsCSS.push(
            `${offsetX}px ${offsetY}px ${radius}px ${color}`
        )
    })

    shadowsCSS = shadowsCSS.join(", ")

    return (
        <View style={{
            top: boundingBox.minY,
            left: boundingBox.minX,
            flex:1,
            marginBottom:-boundingBox.maxY+boundingBox.minY,
            marginRight:-boundingBox.maxX+boundingBox.minX,
            backgroundColor:"transparent"
        }}>
            <WebView scrollEnabled={false} style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor:"transparent"
            }} source={{
                html: (
                    `
                        <!DOCTYPE html>
                        <html>
                            <head>
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            </head>
                            <body style="margin:0;">
                                <div style="
                                    position:absolute;
                                    top:${-boundingBox.minY}px;
                                    left:${-boundingBox.minX}px;
                                    width:calc(100vw - ${boundingBox.maxX-boundingBox.minX}px);
                                    height:calc(100vh - ${boundingBox.maxY-boundingBox.minY}px);
                                    box-shadow: ${shadowsCSS};
                                    border-radius:${props.borderRadius}px;
                                "></div>
                            </body>
                        </html>
                    `
                )
            }}/>
        </View>
    )
}

export default OutsetShadow