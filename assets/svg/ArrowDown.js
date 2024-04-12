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
      stroke="#1c274c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19 9-7 6-7-6"
    />
  </Svg>
)
export default SvgComponent
