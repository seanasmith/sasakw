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
            color: '#F00'
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
          style: 'light' // These are mapbox styles. Options include light, dark, satellite
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


//Bar charts



/****

  To pull in data from a CSV file, we wrap our javascript inside a plot.d3.csv() function. 

****/

var drawPlot2 = function(category) {

  Plotly.d3.csv('CoA_publicart.csv', function(err, rows){

  
  
  
  
  
  /***
  Inside this function, the rows variable corresponds to the data in the CSV file. rows is an array of objects, each of which is represents a row of the CSV file. Each row object has properties corresponding to the columns in the CSV file. 
  ***/

  
  
  
  
  
  /***
  This function is useful for returning an array of values corresponding to a column in your CSV file. It's not built in to PLotly, so you have to declare it as follows:
  ***/
  var unpack = function(rows, key) {
    return rows.map(function(row) { return row[key]; });
  } 
  
  
  
  
  
  /*** Now that we know how to pull the data from a CSV, we can create our data objects as we've done before: ***/
  var trace1 = {
    // x and y are arrays of numeric values, so we can create those using unpack().
    x: unpack(rows, 'zip'),
    y: unpack(rows, 'zip'),
    type: 'bar', // the type of plot you're producing. Scatter is used to plot points with x and y values
    mode: 'markers', // possible modes: markers, markers+text, lines
    text: unpack(rows, ''), // If specified, this is the text that pops up on hover. If not specified, the text is the y-value for the point.
    name: '',
    marker: {
     color: '#F00'
    },
    line: {
      color: '#FFF'
    }
  };
  


  
  
  
  /*** Now that we've created our data objects using our CSV, we just create the visualization as we've done before: ***/
  
  // Create the data object as an array of our data series objects:
  var data2 = [trace1];

  // The layout object provides options for how our visualization will appear:
  var layout2 = {
    title:'Police Shootings in Austin',
    titlefont: {
      color: '#FFF',
      size: 40,
      family: 'IBM Plex Serif'
    },
    showlegend: false,
    hovermode: true, // if false, disables the hover text for the entire plot
    xaxis: {
     title: "zip",
      color: '#FFF',
      titlefont: {
        size: 25,
        family: 'IBM Plex Serif',
      }
    },
    yaxis: {
     title: 'Shots fired',
      color: '#FFF',
      titlefont: {
       family: 'IBM Plex Serif', 
       size: 30 
    }
    },
    paper_bgcolor: '#222',
    plot_bgcolor: '#222'
  }

  var options2 = {
   displayModeBar: false, // disable zoom, save and other toolbar options.
  }

  Plotly.newPlot('bar_chart1', data2, layout2, options2);

  
})
  
}  

drawPlot2("bar_chart1");

/*** Now we can setup our interactions using jQuery. ***/














