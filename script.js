// MAP 

Plotly.d3.csv('CoA_publicart.csv', function(err, rows){
     
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

      var data = [{
          type: 'scattermapbox',
          lat: unpack(rows, 'Latitude'),
          lon: unpack(rows, 'Longitude'),
          text: unpack(rows,'Artwork Title'),
        marker: {
            color: '#F22'
          }
      }];
  
      var layout = {
       title: 'Public Art in Austin, Texas',
       font: {
         color: '#222'
       },
        dragmode: 'zoom',
        mapbox: { 
          center: { // Sets the center of the map.
            lat: 30.2672,
            lon: -97.7431
          },
          zoom: 10, // Sets the zoom level.
          style: 'satellite' // These are mapbox styles. Options include light, dark, satellite
        },
        margin: {
          r: 20,
          t: 40,
          b: 20,
          l: 20,
          pad: 0
        },
        paper_bgcolor: '#ffffff',
        plot_bgcolor: '#ffffff',
        showlegend: false
      };

      Plotly.setPlotConfig({
        mapboxAccessToken: 'pk.eyJ1IjoiYWxleGFuZHJhd2hpdGUiLCJhIjoiY2pmbHVxdmVhMHMyZjJ4bGk1eHdidDVjMCJ9.Bm90pkulu8KqsBfgDBO7lA' // Get your own Mapbox access token by registering at mapbox.com
      });

      Plotly.plot('mapviz', data, layout);
});


/*

  Smooth scroll 

*/


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("header nav ul li a").on('click', function(event) {

    // clicked hash link should have value
    if (this.hash !== "") {
      // Prevent default link click behavior
      event.preventDefault();

      // get hash value
      var hash = this.hash;

      // animate for smooth scroll to clicked link
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
      });
    } // End if
  });
});

// Filter list


   data = JSON.parse(data);

  //filter

   document.getElementById("form1").onchange = function() {

   j=0;
   zip = document.getElementById("thedropdown").value;
   medium = document.getElementById('thedropdown2').value;

   document.getElementById("answer").innerHTML = "";

    for(i=0;i<data.length; i++) {

    if (zip == data[i].zip && medium == 0) {
    document.getElementById("answer").innerHTML += "<tr><td>" + data[i].title + "</td><td>" + data[i].Artist + "</td><td>" + data[i].medium + "</td><td>" + data[i].address + "</td><td>" + data[i].zip + "</td></tr>";
    j=j+1;
  } else if (zip == 0 && medium == data[i].medium) {
    document.getElementById("answer").innerHTML += "<tr><td>" + data[i].title + "</td><td>" + data[i].Artist + "</td><td>" + data[i].medium + "</td><td>" + data[i].address + "</td><td>" + data[i].zip + "</td></tr>";
    j=j+1;
  } else if (zip == data[i].zip && medium == data[i].medium) {
    document.getElementById("answer").innerHTML += "<tr><td>" + data[i].title + "</td><td>" + data[i].Artist + "</td><td>" + data[i].medium + "</td><td>" + data[i].address + "</td><td>" + data[i].zip + "</td></tr>";
    j=j+1
  }
  }
  document.getElementById("answer2").innerHTML = j;
  }


//charts

  //78701

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart);


 function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Medium', '78701', '78702', '78719'],
          ['Sculpture', 62, 43, 8],
          ['Print', 4, 13, 7],
          ['Painting', 14, 18, 6],
          ['Mosaic', 2, 1, 0],
          ['Landscape', 1, 3, 0],
          ['Drawing', 1, 1, 0],
          ['Mixed Media', 23, 5, 7]
        ]);

        var options = {
          chart: {
            title: 'Public Art Pieces by Medium',
            subtitle: 'Top three Zipcodes',
          },
          bars: 'horizontal',// Required for Material Bar Charts.
          height: 500,
          width: 700,
        };

        var chart = new google.charts.Bar(document.getElementById('agg_bar'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
    

// Line chart



google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawCurveTypes);

function drawCurveTypes() {
      var data2 = new google.visualization.DataTable();
      data2.addColumn('number', 'X');
      data2.addColumn('number', 'Dogs');
      data2.addColumn('number', 'Cats');

      data2.addRows([
        [0, 0, 0],    [1, 10, 5],   [2, 23, 15],  [3, 17, 9],   [4, 18, 10],  [5, 9, 5],
        [6, 11, 3],   [7, 27, 19],  [8, 33, 25],  [9, 40, 32],  [10, 32, 24], [11, 35, 27],
        [12, 30, 22], [13, 40, 32], [14, 42, 34], [15, 47, 39], [16, 44, 36], [17, 48, 40],
        [18, 52, 44], [19, 54, 46], [20, 42, 34], [21, 55, 47], [22, 56, 48], [23, 57, 49],
        [24, 60, 52], [25, 50, 42], [26, 52, 44], [27, 51, 43], [28, 49, 41], [29, 53, 45],
        [30, 55, 47], [31, 60, 52], [32, 61, 53], [33, 59, 51], [34, 62, 54], [35, 65, 57],
        [36, 62, 54], [37, 58, 50], [38, 55, 47], [39, 61, 53], [40, 64, 56], [41, 65, 57],
        [42, 63, 55], [43, 66, 58], [44, 67, 59], [45, 69, 61], [46, 69, 61], [47, 70, 62],
        [48, 72, 64], [49, 68, 60], [50, 66, 58], [51, 65, 57], [52, 67, 59], [53, 70, 62],
        [54, 71, 63], [55, 72, 64], [56, 73, 65], [57, 75, 67], [58, 70, 62], [59, 68, 60],
        [60, 64, 56], [61, 60, 52], [62, 65, 57], [63, 67, 59], [64, 68, 60], [65, 69, 61],
        [66, 70, 62], [67, 72, 64], [68, 75, 67], [69, 80, 72]
      ]);

      var options2 = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Popularity'
        },
        series: {
          1: {curveType: 'function'}
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('agg_line'));
      chart.draw(data2, options2);
    }










