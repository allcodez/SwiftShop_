import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
const SvgComponent  = ({ color = "#000", ...props }) => (
    <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 8h4"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 10.5c0-.077 0-.533-.002-.565-.036-.501-.465-.9-1.005-.933C20.959 9 20.918 9 20.834 9h-2.602C16.446 9 15 10.343 15 12s1.447 3 3.23 3h2.603c.084 0 .125 0 .16-.002.54-.033.97-.432 1.005-.933.002-.032.002-.488.002-.565"
    />
    <Circle cx={18} cy={12} r={1} fill="#000" />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13 4c3.771 0 5.657 0 6.828 1.172.809.808 1.06 1.956 1.137 3.828M10 20h3c3.771 0 5.657 0 6.828-1.172.809-.808 1.06-1.956 1.137-3.828M9 4c-3.114.01-4.765.108-5.828 1.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828.653.654 1.528.943 2.828 1.07"
    />
  </Svg>
)
export default SvgComponent
