import { View, Text } from "react-native";
import React from "react";
import StarIcon from "../icon/star";

interface StarWidgetProps {
  isRated: boolean;
}
const StarWidget: React.Fc<StarWidgetProps> = ({ isRated }) => {
  return <>{isRated ? <StarIcon /> : <StarIcon />}</>;
};

export default StarWidget;
