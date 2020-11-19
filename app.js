"use strict";
!(function() {
  function n() {
    for (
      var n = 0.5,
        o = function n() {
          return t(0.5);
        },
        r = [1e3, 1e4, 1e5, 1e6, 1e7],
        i = void 0,
        a = void 0,
        c = void 0,
        u = r.length - 1;
      u >= 0;
      u--
    ) {
      for (i = a = c = 0; c < r[u]; ) o() ? i++ : a++, c++;
      console.log(
        "Variations: " +
          r[u].toLocaleString() +
          "\nA/B: " +
          e(i / r[u]) +
          "%/" +
          e(a / r[u]) +
          "%"
      );
    }
  }
  var t = function n(t) {
      return Math.random() > t;
    },
    e = function n(t) {
      return (100 * t).toFixed(2);
    };
    d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};
    function app() {
      // Set the dimensions of the canvas / graph
      var margin = {top: 30, right: 20, bottom: 30, left: 50},
          width = parseInt(d3.select('#graphsvg').style('width')),
          width = width - margin.left - margin.right,
          graphRatio = .5,
          height = width * graphRatio;

      // Parse the date / time
      var parseDate = d3.time.format("%Y-%m-%d").parse,
      bisectDate = d3.bisector(function(d) { return d.date; }).left,
      formatValue = d3.format(","),
        dateFormatter = d3.time.format("%m/%d/%y");
      // Set the ranges
      var x = d3.time.scale().range([0, width]);
      var y = d3.scale.linear().range([height, 0]);

      // Define the axes
      var xAxis = d3.svg.axis().scale(x)
          .orient("bottom").ticks(5).tickSize(0);

      var yAxis = d3.svg.axis().scale(y)
          .orient("left").ticks(5).tickSize(0);
      function color_hex(color){
        switch(color){
          case "green":
          return "#69be28";
          break;
          case "yellow":
          return "#ffb612";
          break;
          case "orange":
          return "#ff6e00";
          break;
        }
      }

      function mySortFunc(text, input) {
  return text < input;
}

      // Define the line
      var valueline = d3.svg.line()
          .x(function(d) { return x(d.date); })
          .y(function(d) { return y(d.IUR_13wk); });

      // Adds the svg canvas
      var svg = d3.select("#graphsvg")
      .append("g")
          .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
      /*
          .append("svg")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
          .append("g")
              .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");
                    */
      var selected_state;


        new Awesomplete(state_search, {
          sort: mySortFunc,
          minChars: 1,
          list:['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
],

        });


      state_search.addEventListener('awesomplete-selectcomplete',function(){

        selected_state = this.value;
        //analytics('search', selected_school);

        highlight_selected_state(selected_state, "red");


      });
      function highlight_selected_state(selected_state){

        d3.selectAll(".green, .orange, .yellow")
          .style("stroke", "grey")
          .style("stroke-width", 2)
          var st_id = selected_state.replace(" ", "")
          var color = d3.select("#"+st_id)
          .attr("class")

        d3.select("#"+st_id)
            .style("stroke", color_hex(color))
            .style("stroke-width", 3)
            .moveToFront();

      }

      function mouseover(){
        console.log("mouseover")
      }
      // Get the data
      d3.csv("assets/data.csv", function(error, data) {
          data.forEach(function(d) {
      		d.date = parseDate(d.date);
      		d.IUR_13wk = +d.IUR_13wk;
          d.color = d.color;
          });

          // Scale the range of the data
          x.domain(d3.extent(data, function(d) { return d.date; }));
          y.domain([0, d3.max(data, function(d) { return d.IUR_13wk; })]);

          svg.append("rect")
          .attr("x", x(parseDate("2008-01-01")))
          .attr("y", 0)
          .attr("width", x(parseDate("2009-07-01"))-x(parseDate("2008-01-01")))
          .attr("height", height)
          .attr("fill", "#dddddd");

          svg.append("rect")
          .attr("x", x(parseDate("2020-03-01")))
          .attr("y", 0)
          .attr("width", width-x(parseDate("2020-03-01")))
          .attr("height", height)
          .attr("fill", "#dddddd");

          svg.append("line")
            .style("stroke", "red")
            .style("stroke-width", 2)
            .style("stroke-dasharray", "10, 10")
            .attr("x1", 0)
            .attr("y1", y(5))
            .attr("x2", width)
            .attr("y2", y(5))

            svg.append("line")
              .style("stroke", "lightblue")
              .style("stroke-width", 2)
              .style("stroke-dasharray", "10, 10")
              .attr("x1", 0)
              .attr("y1", y(6))
              .attr("x2", width)
              .attr("y2", y(6))



          // Nest the entries by symbol
          var dataNest = d3.nest()
              .key(function(d) {return d.state_name;})
              .entries(data);

          // Loop through each symbol / key
          dataNest.forEach(function(d) {
              var temp_color = d.values[0].color;
              var st_name = d.values[0].state_name;
              var st_id = st_name.replace(" ", "")
              svg.append("path")
                  .style("stroke", color_hex(temp_color))
                  .classed(temp_color, true)
                  .attr("id", st_id)
                  .attr("d", valueline(d.values))
                  .on("click", function(){
                    selected_state = st_name;
                    document.getElementById("state_search").value = st_name;
                    highlight_selected_state(selected_state, temp_color);
                  })



          });


          // Add the X Axis
          svg.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + height + ")")
              .call(xAxis);

          // Add the Y Axis
          svg.append("g")
              .attr("class", "y axis")
              .call(yAxis);

              svg.append("text")
                  .attr("text-anchor", "middle")
                  .attr("transform", "rotate(-90)")
                  .attr("x", -(height/2))
                  .attr("y", -30)
                  .text("Insured unemployment rate")
                  .attr("id", "y-axis-label")
      });
    }
  document.addEventListener(
    "readystatechange",
    function() {
      "interactive" === document.readyState && app();
    },
    !1
  );

})();
//# sourceMappingURL=./app.js.map
