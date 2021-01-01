import React from "react"

import { WebView } from "react-native-webview"


const InsetShadow = (props) => {

    let shadowsCSS = []

    props.options.forEach(shadow => {
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

        shadowsCSS.push(
            `inset ${offsetX}px ${offsetY}px ${radius}px ${color}`
        )
    })

    shadowsCSS = shadowsCSS.join(", ")

    return <WebView  style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
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
                        <div style="position:"absolute"; top: 0; bottom: 0; left: 0; right: 0; box-shadow: ${shadowsCSS}; border-radius: ${props.borderRadius ?? 0}px"></div>
                    </body>
                </html>
            `
        )
    }}/>
}

export default InsetShadow