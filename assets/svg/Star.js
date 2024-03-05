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
      fill="#FFA800"
      d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1.27 1.27 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506.766.582 1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452.347 0 .674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01.767-.582.64-1.89.387-4.507l-.048-.487Z"
    />
    <Path
      fill="#FFA800"
      d="m9.153 5.408-.327.588c-.36.646-.54.969-.821 1.182.04-.03.077-.062.113-.097a8.5 8.5 0 0 0 10.365 9.686l-.018-.19c-.072-.743-.108-1.115 0-1.46.106-.344.345-.623.821-1.18l.434-.507c1.677-1.96 2.515-2.941 2.223-3.882-.293-.941-1.523-1.22-3.982-1.776l-.637-.144c-.699-.158-1.048-.237-1.329-.45-.28-.213-.46-.536-.82-1.182l-.328-.588C13.58 3.136 12.947 2 12 2c-.947 0-1.58 1.136-2.847 3.408Z"
      opacity={0.5}
    />
  </Svg>
)
export default SvgComponent