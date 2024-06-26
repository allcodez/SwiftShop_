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
            strokeWidth={1.5}
            d="M3.5 11v3c0 3.771 0 5.657 1.172 6.828C5.843 22 7.729 22 11.5 22h1c3.771 0 5.657 0 6.828-1.172M20.5 11v3c0 1.17 0 2.158-.035 3"
        />
        <Path
            stroke={color}
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M9.5 2h5m-5 0-.652 6.517a3.167 3.167 0 1 0 6.304 0L14.5 2m-5 0H7.418c-.908 0-1.362 0-1.752.107a3 3 0 0 0-1.888 1.548M9.5 2l-.725 7.245a3.06 3.06 0 1 1-6.043-.904L2.8 8m11.7-6h2.082c.908 0 1.362 0 1.752.107a3 3 0 0 1 1.888 1.548c.181.36.27.806.448 1.696l.598 2.99a3.06 3.06 0 1 1-6.043.904L14.5 2ZM9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v3"
        />
    </Svg>
)
export default SvgComponent
