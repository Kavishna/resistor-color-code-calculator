import { useSelector, useDispatch } from "react-redux";
import * as actionTypes from "../../actions/actions";
import Total from "../Total/Total";
import Model from "./Model/Model";
import "./Resistor.css";

const Resistor = () => {
  const selectedTab = useSelector((state) => state.bands);
  const selectedBand = useSelector((state) => state.selectedBand);

  const selectedColors = useSelector((state) => state.selectedColors);
  const dispatch = useDispatch();

  const selectModel = (payload) => {
    if (selectedBand !== payload) {
      dispatch({ type: actionTypes.MODEL_CHANGED, payload });
    }
  };

  const setColor = (selectedColor) => {
    return selectedColor ? selectedColor : "white";
  };

  const drawOutlone = (selectedBand, bandNumber) => {
    if (selectedTab === 4 && selectedBand === 4) {
      bandNumber -= 1;
    }

    return selectedBand === bandNumber ? "#00aa39" : undefined;
  };

  return (
    <div className="resistor">
      <svg
        width="255"
        height="127"
        viewBox="0 0 255 127"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M168.854 12.0157C168.854 5.3796 174.233 0 180.87 0H193.619C210.91 0 224.927 14.0168 224.927 31.3075V31.3075C224.927 48.5981 210.91 62.6149 193.619 62.6149H180.87C174.233 62.6149 168.854 57.2353 168.854 50.5993V12.0157Z"
          fill="url(#paint0_linear)"
        />
        <rect
          x="86.1461"
          y="10.2801"
          width="82.7078"
          height="41.5875"
          fill="url(#paint1_linear)"
        />
        <path
          d="M86.1461 12.0157C86.1461 5.3796 80.7665 0 74.1305 0H61.3805C44.0899 0 30.0731 14.0168 30.0731 31.3075V31.3075C30.0731 48.5981 44.0899 62.6149 61.3805 62.6149H74.1305C80.7665 62.6149 86.1461 57.2353 86.1461 50.5993V12.0157Z"
          fill="url(#paint2_linear)"
        />

        {/* ------------band 6----------- */}
        <rect
          className={
            selectedTab === 3 || selectedTab === 4 || selectedTab === 5
              ? "remove"
              : null
          }
          x="186.738"
          stroke={drawOutlone(selectedBand, 6)}
          width="8.41096"
          height="62.6149"
          fill={setColor(selectedColors[6])}
        />

        {/* --------band 5-------------- */}
        <rect
          className={selectedTab === 3 ? "remove" : null}
          x="154.836"
          y="10.2801"
          width="8.41096"
          height="41.5875"
          stroke={drawOutlone(selectedBand, 5)}
          fill={setColor(
            selectedTab === 4 ? selectedColors[4] : selectedColors[5]
          )}
        />
        {/* -----------band 4---------- */}
        <rect
          className={selectedTab === 3 || selectedTab === 4 ? "remove" : null}
          x="120.257"
          y="10.2801"
          width="8.41096"
          height="41.5875"
          stroke={drawOutlone(selectedBand, 4)}
          fill={setColor(selectedColors[4])}
        />
        <rect
          x="105.304"
          y="10.2801"
          width="8.41096"
          height="41.5875"
          stroke={drawOutlone(selectedBand, 3)}
          fill={setColor(selectedColors[3])}
        />
        <rect
          x="90.3516"
          y="10.2801"
          width="8.41096"
          height="41.5875"
          stroke={drawOutlone(selectedBand, 2)}
          fill={setColor(selectedColors[2])}
        />
        <rect
          x="59.8508"
          width="8.41096"
          height="62.6149"
          stroke={drawOutlone(selectedBand, 1)}
          fill={setColor(selectedColors[1])}
        />
        <g filter="url(#filter0_d)">
          <rect
            onClick={() => selectModel(1)}
            x="30.073"
            y="98.5951"
            width="20"
            height="20"
            className="color-box"
            stroke={drawOutlone(selectedBand, 1)}
            rx="4"
            fill={setColor(selectedColors[1])}
          />
        </g>
        <g filter="url(#filter1_d)">
          <rect
            onClick={() => selectModel(2)}
            x="66.5205"
            y="98.5951"
            width="20"
            height="20"
            className="color-box"
            stroke={drawOutlone(selectedBand, 2)}
            rx="4"
            fill={setColor(selectedColors[2])}
          />
        </g>
        <g filter="url(#filter2_d)">
          <rect
            onClick={() => selectModel(3)}
            x="102.968"
            y="98.5951"
            width="20"
            height="20"
            className="color-box"
            stroke={drawOutlone(selectedBand, 3)}
            rx="4"
            fill={setColor(selectedColors[3])}
          />
        </g>
        {/* ------------band 4----------- */}
        <g filter="url(#filter3_d)">
          <rect
            onClick={() => selectModel(4)}
            className={
              selectedTab === 3 || selectedTab === 4
                ? "color-box remove"
                : "color-box"
            }
            x="139.416"
            y="98.5951"
            width="20"
            height="20"
            stroke={drawOutlone(selectedBand, 4)}
            rx="4"
            fill={setColor(selectedColors[4])}
          />
        </g>
        {/* -----------band 5------------ */}
        <g filter="url(#filter4_d)">
          <rect
            onClick={() => selectModel(selectedTab === 4 ? 4 : 5)}
            className={selectedTab === 3 ? "color-box remove" : "color-box"}
            x="175.863"
            y="98.5951"
            width="20"
            height="20"
            stroke={drawOutlone(selectedBand, 5)}
            rx="4"
            fill={setColor(
              selectedTab === 4 ? selectedColors[4] : selectedColors[5]
            )}
          />
        </g>
        {/* -------------band 6-------------- */}
        <g filter="url(#filter5_d)">
          <rect
            onClick={() => selectModel(6)}
            className={
              selectedTab === 3 || selectedTab === 4 || selectedTab === 5
                ? "color-box remove"
                : "color-box"
            }
            x="212.311"
            y="98.5951"
            width="20"
            height="20"
            stroke={drawOutlone(selectedBand, 6)}
            rx="4"
            fill={setColor(selectedColors[6])}
          />
        </g>
        <path
          d="M224.927 29.4384H251.927C253.584 29.4384 254.927 30.7815 254.927 32.4384V32.7093H224.927V29.4384Z"
          fill="#545861"
        />
        <path
          d="M0 32.4384C0 30.7815 1.34315 29.4384 3 29.4384H30V32.7093H0V32.4384Z"
          fill="#545861"
        />
        <path
          d="M64 62.5V73L39.5 89.5V98.5"
          stroke={setColor(selectedColors[1])}
        />
        <path
          d="M94.5 52V73L76.5 89.5V98.5"
          stroke={setColor(selectedColors[2])}
        />
        <path d="M109.5 52V73V98.5" stroke={setColor(selectedColors[3])} />
        {/* band 4 */}
        <path
          d="M124.5 52V73L149.5 89.5V98.5"
          stroke={setColor(selectedColors[4])}
          className={selectedTab === 3 || selectedTab === 4 ? "remove" : null}
        />
        {/* band 5 */}
        <path
          className={selectedTab === 3 ? "remove" : null}
          d="M159 52V73L186.5 89.5V98.5"
          stroke={setColor(
            selectedTab === 4 ? selectedColors[4] : selectedColors[5]
          )}
        />
        {/* band 6 */}
        <path
          className={
            selectedTab === 3 || selectedTab === 4 || selectedTab === 5
              ? "remove"
              : null
          }
          d="M191 62.5V73L222.5 89.5V98.5"
          stroke={setColor(selectedColors[6])}
        />
        <defs>
          <filter
            id="filter0_d"
            x="26.073"
            y="98.5951"
            width="28"
            height="28"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d"
            x="62.5205"
            y="98.5951"
            width="28"
            height="28"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d"
            x="98.968"
            y="98.5951"
            width="28"
            height="28"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_d"
            x="135.416"
            y="98.5951"
            width="28"
            height="28"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter4_d"
            x="171.863"
            y="98.5951"
            width="28"
            height="28"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter5_d"
            x="208.311"
            y="98.5951"
            width="28"
            height="28"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear"
            x1="225.249"
            y1="31.2203"
            x2="168.755"
            y2="31.2203"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.625" stopColor="#F0C093" />
            <stop offset="1" stopColor="#B67B44" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="89.2179"
            y1="31.2203"
            x2="168.755"
            y2="31.2203"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0416667" stopColor="#B67B44" />
            <stop offset="0.270833" stopColor="#F0C093" />
            <stop offset="0.536458" stopColor="#F0C093" />
            <stop offset="0.729167" stopColor="#F0C093" />
            <stop offset="1" stopColor="#B67B44" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="29.7506"
            y1="31.2203"
            x2="88.8462"
            y2="31.2203"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.645833" stopColor="#F0C093" />
            <stop offset="1" stopColor="#B67B44" />
          </linearGradient>
        </defs>
      </svg>
      <Model />
      <Total />
    </div>
  );
};

export default Resistor;
