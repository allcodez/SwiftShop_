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
      d="M22 12c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172.654-.653.943-1.528 1.07-2.828M10 16H6M14 16h-1.5M2 10h5m15 0H11"
    />
  </Svg>
)
export default SvgComponent
