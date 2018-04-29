 var minYear = d3.min(birthData, function(d) {
    return d.year;
 });
 var maxYear = d3.max(birthData, function(d) {
    return d.year;
 });
 var width = 1200;
 var height = 600;
 var numBars = 63;
 var barPadding = 3;
 var padding = 40;
 var barWidth = width / numBars - barPadding - padding/4;

 var maxBirths = d3.max(birthData, function(d)
    { return d.births;
});

var yScale = d3.scaleLinear()
               .domain([0, 500])
               .range([height, -10]);

 var x = d3.scaleBand()
 .domain(['NT', '7B', '33C', '39', '6B', '48', '19B', '35F', '17F', '7F', '6C', '23A', '6A', '22F', '19A', '13', '32A', '33D', '24F', '15B', '11A', '34', '23B', '19F', '23F', '14', '10B', '1', '16F', '4', '24A', '21', '33B', '2', '28F', '3', '20', '46', '40', '22A', '37', '9V', '10A', '5', '15A', '32F', '35C', '18A', '10F', '18C', '38', '45', '15C', '31', '18F', '9N', '33F', '35B', '25F', '12F', '29', '9L', '36'])
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

 d3.select("input")
    .property("min", minYear)
    .property("max", maxYear)
    .property("value", minYear);
    
d3.select("svg")
    .attr("width", width + padding)
    .attr("height", height)
 .selectAll("rect")
 .data(birthData.filter(function (d) {
     return d.year === minYear;
 }))
 .enter()
 .append("rect")
    .attr("width", barWidth)
    .attr("height", function(d) {
        return height - yScale(d.births);
    })
    .attr("y", function(d) {
        return yScale(d.births) - padding;
    })
    .attr("x", function(d,i) {
        return ((barWidth + barPadding) * i) + padding;
    })
    .attr("fill", 'steelblue')
    .append("title")
        .attr("id", "popup")
        .text(function(d) {
            return d.month + " " + d.year + ": " + d.births + " births";
    });
    //.select('title#yearLabel')
      //  .attr('id', 'yearLabel')
        //.text(function(d) {
          //  return "Year: " + d.year;
        //})

//.select("text")
//.data(birthData.filter(function (d) {
  //  return d.year === minYear;
//}))
  //  .enter()
    //.append("text")
    //.text(function (d) {
      //  return d.births
    //})
//.attr("y", function(d) {
  //              return yScale(d.births);
    //    })
      //  .attr("x", function(d,i) {
        //        return ((barWidth + barPadding) * i) + padding;
        //}); 
    

d3.select("input")
    .on("input", function() {
        var year = +d3.event.target.value;
        d3.selectAll("rect")
          .data(birthData.filter(function(d) {
              return d.year === year;
          }))
          .attr("height", function(d) {
            return height - yScale(d.births);
          })
        .attr("y", function(d) {
            return yScale(d.births) - padding;
        })
        d3.select("svg").selectAll("title")
            .attr("id", "popup")
        //d3.select("text")
            .data(birthData.filter(function(d) {
            return d.year === year;
        }))
        .text(function(d) {
            return d.month + " " + d.year + ": " + d.births + " births";
        })
        //d3.text('popupInfo.html', html => {
          //  d3.select('body').append('div')
            //    .attr('id', 'tooltip').html(html)
        //});
        d3.selectAll('td.data')
            .data(birthData.filter(function(d) {
                return d.year === year;
            }))
            .append('text')
            .text(function (d) {
                return d.year
            })
        
});

var svg2 = d3.select('.yearScale')
            .append('svg')
            .attr('id', 'scaleYears')
            .attr('height', 40)
            .attr('width', '100%');

            var z = d3.scaleBand()
            .domain(["1990", "1992", "1994", "1996", "1998", "2000", "2002", "2004", "2006", "2008", "2010", "2012", "2014", "2016"])
            .range([padding-10, 400])
            .padding(0.1);
        
        // Define x axis
         var xAxis2 = d3.axisBottom(z);
        
         svg2.append("g")
        .attr("transform", "translate(0," + (40-(padding)) + ")")
        //.attr("transform", "rotate(70deg)")
            .call(xAxis2)

        //svg2.selectAll('.tick')
        //.attr("transform", "rotate(20deg)")
        //svg2.selectAll('text')
            //.attr("transform", "rotate(-70deg)")
            //.attr("transform", function(d) {
              //  return "rotate: (-70deg)"})
            //.attr("text-anchor", function(d) {
             //   return "end"
            //})
            
            //});
