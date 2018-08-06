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
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Medium', 'Pieces of Public Art',],
        ['Sculpture', 62],
        ['Print', 4],
        ['Painting', 14],
        ['Mosaic', 2],
        ['Landscape', 1],
        ['Drawing', 1],
        ['Mixed Media', 23]
      ]);

      var options = {
        title: '78701',
        chartArea: {width: '50%'},
        height: 300,
        hAxis: {
          title: 'Public art pieces',
          minValue: 0
        },
        vAxis: {
          title: 'Medium'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('78701_div'));

      chart.draw(data, options);



    //78702


          var data2 = google.visualization.arrayToDataTable([
            ['Medium', 'Pieces of Public Art',],
            ['Sculpture', 43],
            ['Print', 13],
            ['Painting', 18],
            ['Mosaic', 1],
            ['Landscape', 3],
            ['Drawing', 1],
            ['Mixed Media', 5]
          ]);

          var options2 = {
            title: '78702',
            chartArea: {width: '50%'},
            height: 300,
            hAxis: {
              title: 'Public art pieces',
              minValue: 0
            },
            vAxis: {
              title: 'Medium'
            }
          };

          var chart2 = new google.visualization.PieChart(document.getElementById('78702_div'));

          chart2.draw(data2, options2);


    //78719

    var data3 = google.visualization.arrayToDataTable([
      ['Medium', 'Pieces of Public Art',],
      ['Sculpture', 8],
      ['Print', 7],
      ['Painting', 6],
      ['Mosaic', 0],
      ['Landscape', 0],
      ['Drawing', 0],
      ['Mixed Media', 7]
    ]);

    var options3 = {
      title: '78719',
      chartArea: {width: '50%'},
      height: 300,
      hAxis: {
        title: 'Public art pieces',
        minValue: 0
      },
      vAxis: {
        title: 'Medium'
      }
    };

    var chart3 = new google.visualization.BarChart(document.getElementById('78719_div'));

    chart3.draw(data3, options3);

        }//close drawBasic















