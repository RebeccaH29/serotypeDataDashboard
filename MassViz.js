var minYear = d3.min(MassSeroData, function(d) {
    return d.year;
 });
 var maxYear = d3.max(MassSeroData, function(d) {
    return d.year;
 });
 var width = 1200;
 var height = 600;
 var numBars = 34;
 var barPadding = 3;
 var padding = 40;
 var barWidth = width / numBars - barPadding - padding/4;

 var maxBirths = d3.max(MassSeroData, function(d)
    { return d.births;
});

var yScale = d3.scaleLinear()
               .domain([0, 80])
               .range([height, -10]);

 var x = d3.scaleBand()
 .domain(['6A', '23F', '14', '6B', '9N', '34', '19F', '11A', 'NT', '35F', '15B/C', '10A', '35B', '22F', '18C', '19A', '3', '6C', '7C', '38', '23A', '33F', '9V', '23B', '37', '15A', '31', '17F', '16F', '15F', '7F', '21'])
 /*.domain(['NT', '7B', '33C', '39', '6B', '48', '19B', '35F', '17F', '7F', '6C', '23A', '6A', '22F', '19A', '13', '32A', '33D', '24F', '15B', '11A', '34', '23B', '19F', '23F', '14', '10B', '1', '16F', '4', '24A', '21', '33B', '2', '28F', '3', '20', '46', '40', '22A', '37', '9V', '10A', '5', '15A', '32F', '35C', '18A', '10F', '18C', '38', '45', '15C', '31', '18F', '9N', '33F', '35B', '25F', '12F', '29', '9L', '36'])*/
    .range([padding-10, 1120])
    .padding(0.1);

// Define x axis
 var xAxis = d3.axisBottom(x);

 var yAxis = d3.axisLeft(yScale)
                .tickSize(-width + padding*2);

 d3.select("svg")
 .append("g")
    .attr("transform", "translate(" + (30) + ", " + -padding + ")")
    .call(yAxis)

d3.select("svg")
.append("g")
.attr("transform", "translate(0," + (height-(padding)) + ")")
    .call(xAxis)
    
d3.select("svg")
    .attr("width", width + padding)
    .attr("height", height)
 .selectAll("rect")
 .data(MassSeroData)
 .enter()
 .append("rect")
    .attr("width", barWidth)
    .attr("height", function(d) {
        return height - yScale(d.count);
    })
    .attr("y", function(d) {
        return yScale(d.count) - padding;
    })
    .attr("x", function(d,i) {
        return ((barWidth + barPadding) * i) + padding;
    })
    .attr("fill", '#7fcaef')
    /*.attr("fill", '#61076b')*/
    .append("title")
        .attr("id", "popup")
        .text(function(d) {
            return d.serotype + ": " + " total " + d.count;
    });
        

