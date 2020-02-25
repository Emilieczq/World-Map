var width = 960,
    height = 490;

var svg = d3.select("body").append("svg")
.attr("width", width)
.attr("height", height);

d3.json("world.json", function(error, world) {
    if (error) return console.error(error);
    console.log(world);

    var path = d3.geo.path().projection(d3.geo.equirectangular());

    svg.selectAll(".country")
    .data(topojson.feature(world, world.objects.countries).features)
    .enter().append("path")
    .attr("class", function(d) { return "country " + d.id; })
    .attr("d", path);
});