import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = ({ color = "#000", ...props }) => (
  <Svg
    width={13}
    height={13}
    viewBox="0 0 23 23"
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="m8.5 12.5 2 2 5-5"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.7}
      d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"
    />
  </Svg>
)
export default SvgComponent
