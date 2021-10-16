import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from "../../../actions/actions";
import "./Model.css";
import * as resistorValues from "../../Total/ResistorValues/ResistorValues";

const digitColors = Object.keys(resistorValues.digitColorValues);

const multiplyColors = Object.keys(resistorValues.multiplierValues);

const toleranceColors = Object.keys(resistorValues.toleranceValues);

const tempColors = Object.keys(resistorValues.tempCoValues);

const Model = () => {
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.bands);
  const selectedBand = useSelector((state) => state.selectedBand);
  const selectedColors = useSelector((state) => state.selectedColors);

  //   console.log(selectedColors);

  const setColor = (selectedBand, color, value) => {
    if (selectedColors[selectedBand] !== color) {
      dispatch({
        type: actionTypes.COLOR_CHANGED,
        payload: { bandNumber: selectedBand, color },
      });

      dispatch({
        type: actionTypes.VALUE_CHANGED,
        payload: { bandNumber: selectedBand, value },
      });

      dispatch({
        type: actionTypes.MODEL_CHANGED,
        payload: increaseBandValue(selectedTab, selectedBand),
      });
    }
  };

  const renderDivs = (band, tab) => {
    if (
      (band === 3 && tab === 3) ||
      (band === 3 && tab === 4) ||
      (band === 4 && tab === 5) ||
      (band === 4 && tab === 6)
    ) {
      return multiplyColors.map((color) => {
        return (
          <div className="container" key={color}>
            <div
              onClick={() =>
                setColor(
                  selectedBand,
                  color,
                  resistorValues.multiplierValues[color]
                )
              }
              className="color"
              style={{ backgroundColor: `${color}` }}
            ></div>
            <p>{color}</p>
          </div>
        );
      });
    } else if (
      (band === 4 && tab === 4) ||
      (band === 5 && tab === 5) ||
      (band === 5 && tab === 6)
    ) {
      return toleranceColors.map((color) => {
        return (
          <div className="container" key={color}>
            <div
              onClick={() =>
                setColor(
                  selectedBand,
                  color,
                  resistorValues.toleranceValues[color]
                )
              }
              className="color"
              style={{ backgroundColor: `${color}` }}
            ></div>
            <p>{color}</p>
          </div>
        );
      });
    } else if (band === 6) {
      return tempColors.map((color) => {
        return (
          <div className="container" key={color}>
            <div
              onClick={() =>
                setColor(
                  selectedBand,
                  color,
                  resistorValues.tempCoValues[color]
                )
              }
              className="color"
              style={{ backgroundColor: `${color}` }}
            ></div>
            <p>{color}</p>
          </div>
        );
      });
    } else {
      return digitColors.map((color) => {
        return (
          <div className="container" key={color}>
            <div
              onClick={() =>
                setColor(
                  selectedBand,
                  color,
                  resistorValues.digitColorValues[color]
                )
              }
              className="color"
              style={{ backgroundColor: `${color}` }}
            ></div>
            <p> {color}</p>
          </div>
        );
      });
    }
  };

  const divs = renderDivs(selectedBand, selectedTab);

  return (
    <div className="model">
      <h4>select band {selectedBand} color</h4>
      {divs}
    </div>
  );
};

const increaseBandValue = (tab, band) => {
  if (tab === 3 && band !== 3) {
    return band + 1;
  } else if (tab === 4 && band !== 4) {
    return band + 1;
  } else if (tab === 5 && band !== 5) {
    return band + 1;
  } else if (tab === 6 && band !== 6) {
    return band + 1;
  } else {
    return 1;
  }
};

export default Model;
