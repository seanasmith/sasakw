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

// Filter list


    data2 = JSON.parse(data);
    document.getElementById("form1").onchange = function() {
    j=0;

    month = document.getElementById("thedropdown").value;
    document.getElementById("answer").innerHTML = " ";
     for(i=0;i<data2.length; i++) {
      if(month == data2[i].month) {
     document.getElementById("answer").innerHTML += "<tr><td>" + data[i].Zip + "</td><td>" + data[i].month + "</td><td>" + data[i].unit + "</td><td>" + data[i].lat + "</td><td>" + data[i].long + "</td></tr>";
     j=j+1;
     }
     }

     document.getElementById("answer2").innerHTML = j;

     }
    












