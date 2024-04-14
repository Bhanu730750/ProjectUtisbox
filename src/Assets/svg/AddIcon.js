import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const AddIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={3}
      d="M6.735 2v9.411M2 6.705h9.471"
    />
  </Svg>
);
export default AddIcon;
