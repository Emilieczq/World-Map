/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

// Set map definition
chart.geodata = am4geodata_chinaLow;

// Set projection
chart.projection = new am4maps.projections.Miller();

// Create map polygon series
var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("#DDDDDD");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("#AAAAAA");

// Bindinng properties to data
polygonSeries.data = [{
  "id": "CN-BJ",
  "name": "北京市",
  "fill": am4core.color("#EEEE44")
  }, {
  "id": "CN-FJ",
  "name": "福建省",
  "fill": am4core.color("#11CCEE")
  }, {
  "id": "CN-GD",
  "name": "广东省",
  "fill": am4core.color("#CCFF00")
}, {
  "id": "CN-GS",
  "name": "甘肃省",
  "fill": am4core.color("#55CCEE")
}, {
  "id": "CN-HI",
  "name": "海南省",
  "fill": am4core.color("#227766")
}, {
  "id": "CN-HN",
  "name": "湖南省",
  "fill": am4core.color("#3366FF")
}, {
  "id": "CN-HL",
  "name": "黑龙江省",
  "fill": am4core.color("#CC6699")
}, {
  "id": "CN-NM",
  "name": "内蒙古自治区",
  "fill": am4core.color("#99CC33")
}, {
  "id": "CN-QH",
  "name": "青海省",
  "fill": am4core.color("#FF9900")
}, {
  "id": "CN-SC",
  "name": "四川省",
  "fill": am4core.color("#EEDD44")
}, {
  "id": "CN-SH",
  "name": "上海市",
  "fill": am4core.color("#339999")
}, {
  "id": "CN-SX",
  "name": "山西省",
  "fill": am4core.color("#99CC66")
}, {
  "id": "CN-TJ",
  "name": "天津市",
  "fill": am4core.color("#556688")
}, {
  "id": "CN-ZJ",
  "name": "浙江省",
  "fill": am4core.color("#AA9977")
}];

// Bind "fill" property to "fill" key in data
polygonTemplate.propertyFields.fill = "fill";
