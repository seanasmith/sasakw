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
      data2.addColumn('number', 'Art');
      

      data2.addRows([
        [1935, 0], [1936,0], [1937, 0], [1938, 1], [1939,1], [1940,1], [1941,1], [1942,1], [1943,1], [1944,1], [1945,1], [1946,1], [1947,1], [1948,1], [1949,2], [1950,2], [1951,2], [1952,2], [1953,2], [1954,2], [1955,2], [1956,2], [1957,2], [1958,2], [1959,2], [1960,2], [1961,2], [1962,2], [1963,2], [1964,2], [1965,2], [1966,2], [1967,2], [1968,2], [1969,2], [1970,2], [1971,2], [1972,3], [1973,3], [1974,4], [1975,4], [1976,5], [1977,5], [1978,6], [1979,7], [1980,9], [1981,9], [1982,9], [1983,11], [1984,11], [1985,11], [1986,13], [1987,13], [1988,17], [1989,18], [1990,26], [1991,32], [1992,39], [1993,47], [1994,55], [1995,59], [1996,72], [1997,79], [1998,86], [1999,99], [2000,106], [2001,109], [2002,120], [2003,133], [2004,142], [2005,147], [2006,156], [2007,159], [2008,171], [2009,182], [2010,189], [2011,207], [2012,218], [2013,2],
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










