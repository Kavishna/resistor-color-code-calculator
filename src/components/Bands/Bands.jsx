import "./Bands.css";

import * as actionTypes from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";

const bandCount = [3, 4, 5, 6];

const Bands = () => {
  const selectedTab = useSelector((state) => state.bands);

  const dispatch = useDispatch();

  const changeTab = (band) => {
    band !== selectedTab &&
      dispatch({ type: actionTypes.BAND_CHANGED, payload: band });
  };

  const tabs = bandCount.map((band) => {
    return (
      <p
        className={selectedTab === band ? "active" : null}
        onClick={() => changeTab(band)}
      >
        {band}_Bands
      </p>
    );
  });

  return <div className="bands">{tabs}</div>;
};

export default Bands;
