import { useSelector } from "react-redux";
import "./Total.css";

const Total = () => {
  const selectedTab = useSelector((state) => state.bands);
  const selectedValues = useSelector((state) => state.selectedValues);

  const values = setValues(selectedTab, selectedValues);

  let data = <p>select all colors</p>;

  if (
    (values.resistance && values.tolerance && values.tempco) ||
    (values.resistance === 0 && values.tolerance && values.tempco)
  ) {
    data = (
      <>
        <h1>
          {ohmConversion(values.resistance)} <span> </span>
          {displayTolerance(values.tolerance)}
        </h1>

        <p>
          temperature coefficient:
          <br />
          {values.tempco}ppm
        </p>
      </>
    );
  } else if (
    (values.resistance && values.tolerance) ||
    (values.resistance === 0 && values.tolerance)
  ) {
    data = (
      <>
        {values.resistance ? (
          <h1>
            {ohmConversion(values.resistance)} <span> </span>
            {displayTolerance(values.tolerance)}
          </h1>
        ) : (
          <p>select all colors</p>
        )}
      </>
    );
  }

  return (
    <div className="calculated-value">
      <h3>Resistor Value</h3>
      {data}
    </div>
  );
};

const setValues = (tab, selectedValues) => {
  switch (tab) {
    case 3:
      return calculateResistance(
        concatNumbers(selectedValues[1], selectedValues[2]),
        selectedValues[3]
      );
    case 4:
      return calculateResistance(
        concatNumbers(selectedValues[1], selectedValues[2]),
        selectedValues[3],
        selectedValues[4]
      );
    case 5:
      return calculateResistance(
        concatNumbers(selectedValues[1], selectedValues[2], selectedValues[3]),
        selectedValues[4],
        selectedValues[5]
      );
    case 6:
      return calculateResistance(
        concatNumbers(selectedValues[1], selectedValues[2], selectedValues[3]),
        selectedValues[4],
        selectedValues[5],
        selectedValues[6]
      );
  }
};

const calculateResistance = (
  number,
  multiplier,
  tolerance = 20 / 100,
  tempco
) => {
  const resistance = number * multiplier;
  //removed from result
  const maximum = resistance + resistance * tolerance;
  const minimum = resistance - resistance * tolerance;

  return {
    resistance,
    maximum,
    minimum,
    tolerance,
    tempco,
  };
};

const displayTolerance = (value) => {
  switch (value) {
    case 20 / 100:
      return "±20%";
    case 5 / 100:
      return "±5%";
    case 10 / 100:
      return "±10%";
    case 2 / 100:
      return "±2%";
    case 1 / 100:
      return "±1%";
    case 0.5 / 100:
      return "±0.5%";
    case 0.25 / 100:
      return "±0.25%";
    case 0.1 / 100:
      return "±0.1%";
    default:
      return "±" + value + "%";
  }
};

const ohmConversion = (value) => {
  const trimmedNumber = Math.floor(value);
  const lengthOfValue = trimmedNumber.toString().length;
  // console.log(trimmedNumber, lengthOfValue, value);

  if (!value) return;

  if (lengthOfValue > 3 && lengthOfValue < 7) {
    return value / 1000 + "KΩ";
  } else if (lengthOfValue > 5 && lengthOfValue < 10) {
    return value / 1000000 + "MΩ";
  } else if (lengthOfValue > 9) {
    return value / 1000000000 + "GΩ";
  } else {
    return value + "Ω";
  }
};

const concatNumbers = (...numbers) => {
  const concatValue = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, "");

  if (numbers[0] === null || numbers[1] === null) return;
  return parseInt(concatValue);
};

export default Total;
