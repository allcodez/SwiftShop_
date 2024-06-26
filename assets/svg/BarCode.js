import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent  = ({ color = "#000", ...props }) => (
    <Svg
    width={24}
    height={24}
    fill={color}
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5.5 15.5c0-.943 0-1.414.293-1.707.293-.293.764-.293 1.707-.293h1c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v1c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293-1.414 0-2.121 0-2.56-.44"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M5.5 8.5c0-1.414 0-2.121.44-2.56.439-.44 1.146-.44 2.56-.44.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v1c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-1c-.943 0-1.414 0-1.707-.293C5.5 9.914 5.5 9.443 5.5 8.5ZM13.5 15.5c0-.943 0-1.414.293-1.707.293-.293.764-.293 1.707-.293h1c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707 0 1.414 0 2.121-.44 2.56-.439.44-1.146.44-2.56.44-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707v-1Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18.5 8.5c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-1c-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707v-1c0-.943 0-1.414.293-1.707.293-.293.764-.293 1.707-.293 1.414 0 2.121 0 2.56.44M22 14v1m-8 7c3.771 0 5.657 0 6.828-1.172.654-.653.943-1.528 1.07-2.828M10 22c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14M10 2C6.229 2 4.343 2 3.172 3.172 2.518 3.825 2.229 4.7 2.102 6M2 10V9"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14 2c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10"
    />
  </Svg>
)
export default SvgComponent
