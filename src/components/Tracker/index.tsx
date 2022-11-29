import { useState } from "react";
import StepIndicator from "react-native-step-indicator";
import Icon from "react-native-vector-icons/FontAwesome";

const Tracker = () => {
  const labels: string[] = [
    "Business Type",
    "Begin EDTA",
    "Income Statement",
    "Brokerage Details",
    "Final Results",
  ];
  const [currentPosition, setCurrentPosition] = useState(2);
  const icons = ["check"];

  const onStatusChange = (position: number) => {
    setCurrentPosition(3);
  };

  const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: "#3399ff",
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: "#3399ff",
    stepStrokeUnFinishedColor: "#aaaaaa",
    separatorFinishedColor: "#3399ff",
    separatorUnFinishedColor: "grey",
    stepIndicatorFinishedColor: "#3399ff",
    stepIndicatorUnFinishedColor: "grey",
    stepIndicatorCurrentColor: "#3399ff",
    stepIndicatorLabelFontSize: 5,
    currentStepIndicatorLabelFontSize: 5,
    stepIndicatorLabelCurrentColor: "#3399ff",
    stepIndicatorLabelFinishedColor: "#ffffff",
    stepIndicatorLabelUnFinishedColor: "#aaaaaa",
    labelColor: "grey",
    labelSize: 15,
    currentStepLabelColor: "#fe7013",
  };
  return (
    <StepIndicator
      customStyles={customStyles}
      currentPosition={currentPosition}
      labels={labels}
      renderStepIndicator={({ position, stepStatus }) =>
        position <= currentPosition && (
          <Icon name={icons[0]} size={10} color="white" />
        )
      }
    />
  );
};
export default Tracker;
