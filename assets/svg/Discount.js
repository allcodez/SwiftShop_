import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent  = ({ color = "#000", ...props }) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
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
      d="M12 15.108v5.042c0 1.114-.905 2.038-1.987 1.817C5.442 21.038 2 16.966 2 12.083A10.1 10.1 0 0 1 3.362 7m13.002 14.158A10.091 10.091 0 0 0 22 12.083C22 6.514 17.523 2 12 2c-1.821 0-3.53.491-5 1.349"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M9 11.8a.8.8 0 0 1 .8-.8h4.4a.8.8 0 0 1 .8.8v.2a3 3 0 1 1-6 0v-.2Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.5 11V9M10.5 11V9"
    />
  </Svg>
)
export default SvgComponent
