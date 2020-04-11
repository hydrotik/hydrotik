import { extend } from "lodash";



// Colors
const yellow200 = "#FFF59D";
const deepOrange600 = "#F4511E";
const lime300 = "#DCE775";
const lightGreen500 = "#8BC34A";
const teal700 = "#00796B";
const cyan900 = "#006064";
const colors = [
	deepOrange600,
	yellow200,
	lime300,
	lightGreen500,
	teal700,
	cyan900
];
const blueGrey50 = "#ECEFF1";
const blueGrey300 = "#90A4AE";
const blueGrey700 = "#455A64";
const grey900 = "#212121";

// Typography
const sansSerif = "'Roboto', 'Helvetica Neue', Helvetica, sans-serif";
const letterSpacing = "normal";
const fontSize = 4;

// Layout
const padding = 0;
const baseProps = {

};

// * Labels
const baseLabelStyles = {
	fontFamily: sansSerif,
	fontSize,
	letterSpacing,
	padding,
	fill: blueGrey700,
	stroke: "transparent",
	strokeWidth: 0
};

const centeredLabelStyles = extend({ textAnchor: "middle" }, baseLabelStyles);


const ChartTheme: any = {
	line: extend(
		{
			style: {
				data: {
					fill: "transparent",
					opacity: 1,
					stroke: blueGrey700,
					strokeWidth: 2
				},
				labels: centeredLabelStyles
			}
		},
		baseProps
	)
};

export default ChartTheme;