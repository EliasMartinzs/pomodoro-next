"use client";

import { controllers } from "@/constants/constants";

type Props = {
  selectedControl: any;
  setSelectedControl: any;
  resetTimerValues: any;
  setPomodoro: any;
};

const Labels = ({
  selectedControl,
  setSelectedControl,
  resetTimerValues,
  setPomodoro,
}: Props) => {
  function handleSelectedControl(index: any) {
    setSelectedControl(index);
    resetTimerValues();
    setPomodoro((prevPomodoro: any) => ({
      ...prevPomodoro,
      isPaused: true,
    }));
  }

  return (
    <div>
      <ul className="tw-infoContainer">
        {controllers.map((controller, index) => (
          <li
            key={index}
            className={`tw-infoItem ${selectedControl === index && "active"}`}
            onClick={() => handleSelectedControl(index)}
          >
            {controller.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Labels;
