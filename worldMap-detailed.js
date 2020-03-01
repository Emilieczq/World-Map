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
chart.geodata = am4geodata_worldLow;

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

// Remove Antarctica
polygonSeries.exclude = ["AQ"];

// Bindinng properties to data
polygonSeries.data = [{
  "id": "CN",
  "name": "China",
  "fill": am4core.color("#F05C5C")
}, {
  "id": "KR",
  "name": "Korea",
  "fill": am4core.color("#5C5CFF")
}, {
  "id": "JP",
  "name": "Japan",
  "fill": am4core.color("#CC99FF")
}, {
  "id": "ID",
  "name": "Indonesia",
  "fill": am4core.color("#9966FF")
}, {
  "id": "CA",
  "name": "Canada",
  "fill": am4core.color("#FFDD44")
}, {
  "id": "FR",
  "name": "France",
  "fill": am4core.color("#EEEE44")
}, {
  "id": "PL",
  "name": "Poland",
  "fill": am4core.color("#11CCEE")
}, {
  "id": "GB",
  "name": "United Kingdom",
  "fill": am4core.color("#003366")
}, {
  "id": "IT",
  "name": "Italy",
  "fill": am4core.color("#CCFF00")
}, {
  "id": "ES",
  "name": "Spain",
  "fill": am4core.color("#55CCEE")
}, {
  "id": "DE",
  "name": "Germany",
  "fill": am4core.color("#227766")
}, {
  "id": "AT",
  "name": "Austria",
  "fill": am4core.color("#3366FF")
}, {
  "id": "CZ",
  "name": "Czechia",
  "fill": am4core.color("#CC6699")
}, {
  "id": "HU",
  "name": "Hungary",
  "fill": am4core.color("#99CC33")
}, {
  "id": "NL",
  "name": "Netherlands",
  "fill": am4core.color("#FF9900")
}, {
  "id": "CH",
  "name": "Switzerland",
  "fill": am4core.color("#EEDD44")
}, {
  "id": "SE",
  "name": "Sweden",
  "fill": am4core.color("#339999")
}, {
  "id": "FI",
  "name": "Finland",
  "fill": am4core.color("#99CC66")
}, {
  "id": "DK",
  "name": "Denmark",
  "fill": am4core.color("#556688")
}, {
  "id": "BE",
  "name": "Belgium",
  "fill": am4core.color("#AA9977")
}, {
  "id": "PT",
  "name": "Portugal",
  "fill": am4core.color("#BB7777")
}, {
  "id": "MT",
  "name": "Malta",
  "fill": am4core.color("#FFDDCC")
}, {
  "id": "MC",
  "name": "Monaco",
  "fill": am4core.color("#337766")
}, {
  "id": "VA",
  "name": "Vatican City",
  "fill": am4core.color("#999900")
}, {
  "id": "GR",
  "name": "Greece",
  "fill": am4core.color("#99CCCC")
}, {
  "id": "LU",
  "name": "Luxembourg",
  "fill": am4core.color("#2299AA")
}, {
  "id": "SK",
  "name": "Slovakia",
  "fill": am4core.color("#009999")
}, {
  "id": "ME",
  "name": "Montenegro",
  "fill": am4core.color("#8899CC")
}, {
  "id": "BA",
  "name": "Bosnia and Herzegovina",
  "fill": am4core.color("#8899CC")
}, {
  "id": "HR",
  "name": "Croatia",
  "fill": am4core.color("#AAFF11")
}, {
  "id": "TR",
  "name": "Turkey",
  "fill": am4core.color("#CC9999")
}];
polygonTemplate.propertyFields.fill = "fill";


