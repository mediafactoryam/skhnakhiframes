function hetqtheme(target) {
  if (target instanceof am4core.ColorSet) {
    target.list = [
      am4core.color("#f1bf3c"),
      am4core.color("black")
    ];
  }
}


am4core.useTheme(am4themes_animated);
am4core.useTheme(hetqtheme);
let mainContainer = am4core.create("chartdiv", am4core.Container);
mainContainer.width = am4core.percent(100);
mainContainer.height = am4core.percent(100);
mainContainer.layout = "horizontal";

let usData = [
  { 'age': '0-ից 10', 'male': 35, 'female': 26 },
  { 'age': '10-ից 20', 'male': 21, 'female': 23 },
  { 'age': '20-ից 30', 'male': 23, 'female': 26 },
  { 'age': '30-ից 40', 'male': 31, 'female': 25 },
  { 'age': '40-ից 50', 'male': 18, 'female': 17 },
  { 'age': '50-ից 60', 'male': 12, 'female': 17 },
  { 'age': '60-ից 70', 'male': 10, 'female': 10 },
  { 'age': '70-ից 80', 'male': 7, 'female': 6 },
  { 'age': '80-ից 90', 'male': 1, 'female': 2 },
];

let maleChart = mainContainer.createChild(am4charts.XYChart);
maleChart.paddingRight = 0;
maleChart.data = JSON.parse(JSON.stringify(usData));

let maleCategoryAxis = maleChart.yAxes.push(new am4charts.CategoryAxis());
maleCategoryAxis.dataFields.category = "age";
maleCategoryAxis.renderer.grid.template.location = 0;
maleCategoryAxis.renderer.minGridDistance = 15;

let maleValueAxis = maleChart.xAxes.push(new am4charts.ValueAxis());
maleValueAxis.renderer.inversed = true;
maleValueAxis.min = 0;
maleValueAxis.max = 20;
maleValueAxis.strictMinMax = true;

maleValueAxis.numberFormatter = new am4core.NumberFormatter();
maleValueAxis.numberFormatter.numberFormat = "#.#'%'";

let maleSeries = maleChart.series.push(new am4charts.ColumnSeries());
maleSeries.dataFields.valueX = "male";
maleSeries.dataFields.valueXShow = "percent";
maleSeries.calculatePercent = true;
maleSeries.dataFields.categoryY = "age";
maleSeries.interpolationDuration = 100;
maleSeries.columns.template.tooltipText = "  {valueX} տղամարդ ({valueX.percent.formatNumber('#.0')}%)";
maleSeries.sequencedInterpolation = true;


let femaleChart = mainContainer.createChild(am4charts.XYChart);
femaleChart.paddingLeft = 0;
femaleChart.data = JSON.parse(JSON.stringify(usData));

// Create axes
let femaleCategoryAxis = femaleChart.yAxes.push(new am4charts.CategoryAxis());
femaleCategoryAxis.renderer.opposite = true;
femaleCategoryAxis.dataFields.category = "age";
femaleCategoryAxis.renderer.grid.template.location = 0;
femaleCategoryAxis.renderer.minGridDistance = 100;

let femaleValueAxis = femaleChart.xAxes.push(new am4charts.ValueAxis());
femaleValueAxis.min = 0;
femaleValueAxis.max = 20;
femaleValueAxis.strictMinMax = true;
femaleValueAxis.numberFormatter = new am4core.NumberFormatter();
femaleValueAxis.numberFormatter.numberFormat = "#.#'%'";
femaleValueAxis.renderer.minLabelPosition = 0.01;

// Create series
let femaleSeries = femaleChart.series.push(new am4charts.ColumnSeries());
femaleSeries.dataFields.valueX = "female";
femaleSeries.dataFields.valueXShow = "percent";
femaleSeries.calculatePercent = true;
//femaleSeries.fill = femaleChart.colors.getIndex(4);
femaleSeries.stroke = femaleSeries.fill;
femaleSeries.columns.template.tooltipText = " {valueX} կին ({valueX.percent.formatNumber('#.0')}%)";
femaleSeries.dataFields.categoryY = "age";
femaleSeries.interpolationDuration = 10;