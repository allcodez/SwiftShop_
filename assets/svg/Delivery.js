import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent  = ({ color = "#000", ...props }) => (
    <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill={color}
      d="M7.506 15.265a.75.75 0 0 0 1.446-.4l-1.446.4Zm-1.43-7.99.724-.2-.723.2ZM4.705 5.92l-.2.723.2-.723ZM3.2 4.725a.75.75 0 1 0-.402 1.445l.402-1.445Zm16.988 11a.75.75 0 0 0-.378-1.451l.378 1.452Zm-9.991 1.834c.31 1.12-.37 2.303-1.574 2.616L9 21.627c1.977-.514 3.185-2.503 2.643-4.467l-1.446.399Zm-1.574 2.616c-1.212.315-2.428-.389-2.74-1.519l-1.446.4c.54 1.955 2.594 3.082 4.563 2.57l-.377-1.451Zm-2.74-1.519c-.31-1.12.37-2.303 1.574-2.616L7.08 14.59c-1.977.513-3.186 2.502-2.643 4.467l1.446-.4Zm1.574-2.616c1.212-.314 2.428.389 2.74 1.519l1.446-.4c-.54-1.954-2.594-3.082-4.563-2.57l.377 1.451Zm1.494-1.175L6.8 7.075l-1.446.4 2.152 7.79 1.446-.4ZM4.904 5.197l-1.703-.472-.402 1.445 1.704.473.401-1.446ZM6.8 7.075a2.707 2.707 0 0 0-1.896-1.878l-.4 1.446c.425.118.742.44.85.831l1.446-.4Zm4.31 11.01 9.079-2.36-.378-1.451-9.079 2.36.377 1.451Z"
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19.165 6.236c-.485-1.756-.728-2.634-1.44-3.033-.714-.4-1.619-.164-3.429.307l-1.92.498c-1.81.47-2.715.706-3.126 1.398-.412.691-.17 1.569.315 3.324l.515 1.863c.485 1.755.727 2.633 1.44 3.032.713.4 1.618.164 3.428-.306l1.92-.5c1.81-.47 2.715-.705 3.127-1.396.226-.38.255-.816.154-1.423"
    />
  </Svg>
)
export default SvgComponent