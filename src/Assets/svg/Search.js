import * as React from "react"
import { Circle, G, Path, Svg } from "react-native-svg"
const SearchIcon = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} {...props}>
        <G
            fill="none"
            fillRule="evenodd"
            stroke={props.fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            transform="translate(1 1)"
        >
            <Circle cx={7.5} cy={7.5} r={7.5} />
            <Path d="m18 18-5.2-5.2" />
        </G>
    </Svg>
)
export default SearchIcon
