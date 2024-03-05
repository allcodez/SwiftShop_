import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = ({ color = "#000", ...props }) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4 12a2.5 2.5 0 1 0 2.5-2.5M14 6.5 9 10M14 17.5 9 14M16.5 21a2.5 2.5 0 1 0-2.5-2.5M18.665 6.75a2.5 2.5 0 1 1-.915-3.415"
    />
  </Svg>
)
export default SvgComponent
