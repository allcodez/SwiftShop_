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
      d="m12 5.5-.54.521.01.01.53-.53ZM8.962 18.912l-.465.59.465-.59Zm6.076 0-.464-.589.464.59Zm-8.037-2.49a.75.75 0 0 0-.954 1.158l.954-1.158Zm-4.659-3.01a.75.75 0 1 0 1.316-.72l-1.316.72Zm11.128-5.38a.75.75 0 1 0 1.06-1.061l-1.06 1.06ZM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713 1.612-.736 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.026 5 3.06 2.786 4.072 1.25 6.424 1.25 9.136h1.5ZM8.497 19.5c.513.404 1.063.834 1.62 1.16.557.326 1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385-.453-.264-.922-.628-1.448-1.043L8.497 19.5Zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024 1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343-1.315 1.48-2.972 2.647-4.488 3.842l.929 1.178ZM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077-2.264-1.034-5.098-.616-7.54 1.92l1.08 1.041c2.058-2.138 4.224-2.333 5.836-1.597 1.659.759 2.874 2.562 2.874 4.713h1.5Zm-8.176 9.185c-.526.415-.995.779-1.448 1.043-.452.265-.816.385-1.126.385v1.5c.69 0 1.326-.264 1.883-.59.558-.326 1.107-.756 1.62-1.16l-.929-1.178Zm-5.148 0c-.796-.627-1.605-1.225-2.425-1.9l-.954 1.157c.83.684 1.708 1.336 2.45 1.921l.93-1.178Zm-5.768-5.63a7.252 7.252 0 0 1-.908-3.555h-1.5c0 1.638.42 3.046 1.092 4.275l1.316-.72Zm7.812-6.66 2 1.999 1.06-1.061-2-2-1.06 1.061Z"
    />
  </Svg>
)
export default SvgComponent