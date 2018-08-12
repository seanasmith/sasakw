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

//popup



  $('a').on('click', function(){
 //   var image = this.attr('src');

    console.log('!');

    //$('#popup img').attr("src=",image);
  });

});

// Filter list


   var data = JSON.parse(data);

  //filter

   document.getElementById("form1").onchange = function() {

   var j = 0;
   var zip = document.getElementById("thedropdown").value;
   var medium = document.getElementById('thedropdown2').value;

   document.getElementById("answer").innerHTML = "";

    for(i=0;i<data.length; i++) {

    if (zip == data[i].zip && medium == 0) {
    document.getElementById("answer").innerHTML += "<tr><td><img class='table_thumb' data-lightbox='thumbs' src='"  + data[i].image + "'/></td><td>" + data[i].title + "</td><td>" + data[i].artist + "</td><td>" + data[i].medium + "</td><td>" + data[i].location + '</td><td>' + data[i].address + "</td><td>" + data[i].zip + "</td></tr>";
    j=j+1;
  } else if (zip == 0 && medium == data[i].medium) {
    document.getElementById("answer").innerHTML += "<tr><td><img class='table_thumb' data-lightbox='thumbs' src='"  + data[i].image + "'/></td><td>" + data[i].title + "</td><td>" + data[i].artist + "</td><td>" + data[i].medium + "</td><td>" + data[i].location + '</td><td>' + data[i].address + "</td><td>" + data[i].zip + "</td></tr>";
    j=j+1;
  } else if (zip == data[i].zip && medium == data[i].medium) {
     document.getElementById("answer").innerHTML += "<tr><td><img class='table_thumb' data-lightbox='thumbs' src='"  + data[i].image + "'/></td><td>" + data[i].title + "</td><td>" + data[i].artist + "</td><td>" + data[i].medium + "</td><td>" + data[i].location + '</td><td>' + data[i].address + "</td><td>" + data[i].zip + "</td></tr>";
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
          width: 900,
        };

        var chart = new google.charts.Bar(document.getElementById('agg_bar'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }


// Line chart



google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawCurveTypes);

function drawCurveTypes() {

      var data2 = new google.visualization.arrayToDataTable([

      ['Year','Aggregate','yearly'], ['1935',0,0], ['1936',0,0], ['1937', 0,0], ['1938', 1,1], ['1939',1,0], ['1940',1,0], ['1941',1,0], ['1942',1,0], ['1943',1,0], ['1944',1,0], ['1945',1,0], ['1946',1,0], ['1947',1,0], ['1948',1,0], ['1949',2,1], ['1950',2,0], ['1951',2,0], ['1952',2,0], ['1953',2,0], ['1954',2,0], ['1955',2,0], ['1956',2,0], ['1957',2,0], ['1958',2,0], ['1959',2,0], ['1960',2,0], ['1961',2,0], ['1962',2,0], ['1963',2,0], ['1964',2,0], ['1965',2,0], ['1966',2,0], ['1967',2,0], ['1968',2,0], ['1969',2,0], ['1970',2,0], ['1971',2,0], ['1972',3,1], ['1973',3,0], ['1974',4,1], ['1975',4,0], ['1976',5,1], ['1977',5,0], ['1978',6,1], ['1979',7,1], ['1980',9,2], ['1981',9,0], ['1982',9,0], ['1983',11,2], ['1984',11,0], ['1985',11,0], ['1986',13,2], ['1987',13,0], ['1988',17,4], ['1989',18,1], ['1990',26,8], ['1991',32,6], ['1992',39,7], ['1993',47,10], ['1994',55,8], ['1995',59,4], ['1996',72,13], ['1997',79,7], ['1998',86,7], ['1999',99,13], ['2000',106,7], ['2001',109,3], ['2002',120,11], ['2003',133,13], ['2004',142,9], ['2005',147,5], ['2006',156,9], [2007,159,3], ['2008',171,12], ['2009',182,11], ['2010',189,7], ['2011',207,18], ['2012',218,11], ['2013',254,36], ['2014',269,15], ['2015',277,8], ['2016',300,13], ['2017',325,25],
      ]);



      var options2 = {
        hAxis: {
          title: 'Time'
        },
        vAxis: {
          title: 'Popularity'
        },
        width: 900,
        height: 400,


      };

      var chart = new google.visualization.LineChart(document.getElementById('agg_line'));
      chart.draw(data2, options2);
    }

/*    $(document).ready(function() {

  // Every time the window is scrolled ...
  $(window).scroll( function(){

      // Check the location of each desired element
      $('.offScreen').each( function(i){

          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          //If the object is completely visible in the window, fade it it
          if( bottom_of_window > bottom_of_object ){

              $(this).removeClass('offScreen');
              $(this).addClass('onScreen');

          } else {
              $(this).removeClass('onScreen');
              $(this).addClass('offScreen');
          }

      });

  });

});*/
