import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = ({ color = "#000", ...props }) => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 25 25"
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="m15 5-6 7 6 7"
    />
  </Svg>
)
export default SvgComponent
