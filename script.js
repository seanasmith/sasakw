/***

This example builds on skills to pull data from CSVs, which is covered in other exercises. 

Examples of other kinds of bubble maps are available here: https://plot.ly/javascript/bubble-maps/

Data from https://github.com/fivethirtyeight/data/tree/master/hate-crimes

***/

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


