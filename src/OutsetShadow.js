import React from "react"

import { WebView } from "react-native-webview"


const OutsetShadow = (props) => {

    let boundingBox = {
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: 0
    }

    let shadowsCSS = []

    props.options.forEach(shadow => {
        let offsetX = 0
        let offsetY = 0
        let radius = 0
        let color = "#ffffff"

        if(shadow.offsetX == null || isNaN(shadow.offsetX) || typeof shadow.offsetX != "number"){
            console.warn("The offsetX of a shadow must be a number; defaulted to 0")
        }
        if(shadow.offsetY == null || isNaN(shadow.offsetY) || typeof shadow.offsetY != "number"){
            console.warn("The offsetY of a shadow must be a number; defaulted to 0")
        }
        if(shadow.radius == null || isNaN(shadow.radius) || typeof shadow.radius != "number"){
            console.warn("The: radius of a shadow must be a number; defaulted to 0")
        }
        if(shadow.color == null || typeof shadow.color != "string"){
            console.warn("The color of a shadow must be a string; defaulted to '#ffffff'")
        }

        boundingBox.minX = Math.min(boundingBox.minX,offsetX-radius)
        boundingBox.maxX = Math.max(boundingBox.maxX,offsetX+radius)
        boundingBox.minY = Math.min(boundingBox.minX,offsetY-radius)
        boundingBox.maxY = Math.max(boundingBox.maxX,offsetY+radius)
        shadowsCSS.push(
            `${offsetX}px ${offsetY}px ${radius}px ${color}`
        )
    })

    shadowsCSS = shadowsCSS.join(", ")

    return <WebView  style={{
        position: "absolute",
        top: boundingBox.minY,
        bottom: -boundingBox.maxY,
        left: boundingBox.minX,
        right: -boundingBox.maxX,
        borderRadius:props.borderRadius,
        backgroundColor:"transparent"

    }} source={{
        html: (
            `
                <!DOCTYPE html>
                <html>
                    <head>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    </head>
                    <body style="margin:0;width:100vw;height:100vh;">
                        <div style="position:"absolute"; top: ${-boundingBox.minY}px; bottom: ${boundingBox.maxY}px; left: ${-boundingBox.minX}px; right: ${boundingBox.maxX}px; box-shadow: ${shadowsCSS}; border-radius: ${props.borderRadius ?? 0}px"></div>
                    </body>
                </html>
            `
        )
    }}/>
}

export default OutsetShadow