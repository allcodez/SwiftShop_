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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19 15-7-6-7 6"
    />
  </Svg>
)
export default SvgComponent
