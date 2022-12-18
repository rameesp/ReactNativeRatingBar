import React, {ReactNode, useMemo} from 'react';
import StarWidget from '../widget/star-widget';
import {View} from 'react-native';

interface IRatingBarViewProps {
  ratedIndex: number;
  setRatedIndex: React.Dispatch<React.SetStateAction<number>>;
}
const NO_OF_RATINGS = 5;

const RatingBarView: React.FC<IRatingBarViewProps> = ({
  ratedIndex,
  setRatedIndex,
}) => {
  let rating: ReactNode[] = [];
  const renderRating = () => {
    for (let index = 0; index < NO_OF_RATINGS; index++) {
      rating.push(
        <StarWidget
          rated={ratedIndex >= index}
          index={index}
          onStar={(star: number) => {
            setRatedIndex(star);
          }}
          key={index}
        />,
      );
    }
    return rating;
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let ratings = useMemo(() => renderRating(), [ratedIndex]);

  return <View>{ratings}</View>;
};

export default RatingBarView;
