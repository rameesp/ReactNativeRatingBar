import * as React from 'react';
import Svg, {SvgProps, Path, Defs, Pattern, Use, Image} from 'react-native-svg';

const StarIcon = (props: SvgProps) => (
  <Svg width={48} height={48} fill="none" {...props}>
    <Path fill="url(#a)" d="M0 0h48v48H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#b" transform="scale(.02083)" />
      </Pattern>
      <Image
        id="b"
        width={48}
        height={48}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);

export default StarIcon;
