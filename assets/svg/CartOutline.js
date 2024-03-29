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
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10 14.3 1.333 1.2 2.667-3"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 6V5a3 3 0 1 1 6 0v1M20.224 12.526c-.586-3.121-.878-4.682-1.99-5.604C17.125 6 15.537 6 12.36 6h-.72c-3.176 0-4.764 0-5.875.922-1.11.922-1.403 2.483-1.989 5.604-.823 4.389-1.234 6.583-.034 8.029C4.942 22 7.174 22 11.639 22h.722c4.465 0 6.698 0 7.897-1.445.696-.84.85-1.93.696-3.555"
    />
  </Svg>
)
export default SvgComponent
