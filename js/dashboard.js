//Contains all script run on the Dashboard page

//function to sum up array values
function arrTotal(array) {
var total = 0;
  $.each(array,function() {
    total += this;
});
return total;
}

// Bar Chart Options (Habits)
var options = {
        
  //Boolean - If we show the scale above the chart data     
  scaleOverlay : false,
  
  //Boolean - If we want to override with a hard coded scale
  scaleOverride : true,
  
  //** Required if scaleOverride is true **
  //Number - The number of steps in a hard coded scale
  scaleSteps : 1,
  //Number - The value jump in the hard coded scale
  scaleStepWidth : 1,
  //Number - The scale starting value
  scaleStartValue : 0,

  //String - Colour of the scale line 
  scaleLineColor : "rgba(0,0,0,0)",
  
  //Number - Pixel width of the scale line  
  scaleLineWidth : 1,

  //Boolean - Whether to show labels on the scale 
  scaleShowLabels : false,
  
  //Interpolated JS string - can access value
  scaleLabel : "<%=value%>",
  
  //String - Scale label font declaration for the scale label
  scaleFontFamily : "'Arial'",
  
  //Number - Scale label font size in pixels  
  scaleFontSize : 12,
  
  //String - Scale label font weight style  
  scaleFontStyle : "normal",
  
  //String - Scale label font colour  
  scaleFontColor : "#666",  
  
  ///Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines : false,
  
  //String - Colour of the grid lines
  scaleGridLineColor : "rgba(0,0,0,.0)",
  
  //Number - Width of the grid lines
  scaleGridLineWidth : 0, 

  //Boolean - If there is a stroke on each bar  
  barShowStroke : false,
  
  //Number - Pixel width of the bar stroke  
  barStrokeWidth : 0,
  //Number - Spacing between each of the X value sets
  barValueSpacing : 1,
  
  //Number - Spacing between data sets within X values
  barDatasetSpacing : 1,
  
  //Boolean - Whether to animate the chart
  animation : false,

  //Number - Number of animation steps
  animationSteps : 60,
  
  //String - Animation easing effect
  animationEasing : "easeOutQuart",

  //Function - Fires when the animation is complete
  onAnimationComplete : null
  
}


//for the line chart
lineOptions = {
        
  //Boolean - If we show the scale above the chart data     
  scaleOverlay : false,
  
  //Boolean - If we want to override with a hard coded scale
  scaleOverride : false,
  
  //** Required if scaleOverride is true **
  //Number - The number of steps in a hard coded scale
  scaleSteps : 1,
  //Number - The value jump in the hard coded scale
  scaleStepWidth : 8,
  //Number - The scale starting value
  scaleStartValue : 0,

  //String - Colour of the scale line 
  scaleLineColor : "rgba(0,0,0,0)",
  
  //Number - Pixel width of the scale line  
  scaleLineWidth : 0,

  //Boolean - Whether to show labels on the scale 
  scaleShowLabels : false,
  
  //Interpolated JS string - can access value
  scaleLabel : "<%=value%>",
  
  //String - Scale label font declaration for the scale label
  scaleFontFamily : "'helvetica'",
  
  //Number - Scale label font size in pixels  
  scaleFontSize : 24,
  
  //String - Scale label font weight style  
  scaleFontStyle : "normal",
  
  //String - Scale label font colour  
  scaleFontColor : "#c9c9c9", 
  
  ///Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines : false,
  
  //String - Colour of the grid lines
  scaleGridLineColor : "rgba(0,0,0,.05)",
  
  //Number - Width of the grid lines
  scaleGridLineWidth : 0, 
  
  //Boolean - Whether the line is curved between points
  bezierCurve : false,
  
  //Boolean - Whether to show a dot for each point
  pointDot : false,
  
  //Boolean - Whether to show a stroke for datasets
  datasetStroke : true,
  
  //Number - Pixel width of dataset stroke
  datasetStrokeWidth : 2,
  
  //Boolean - Whether to fill the dataset with a colour
  datasetFill : true,
  
  //Boolean - Whether to animate the chart
  animation : false 
  
}

//Polar chart options
var polarOptions = {
        
  //Boolean - Whether we show the scale above or below the chart segments
  scaleOverlay : true,
  
  //Boolean - If we want to override with a hard coded scale
  scaleOverride : false,
  
  //** Required if scaleOverride is true **
  //Number - The number of steps in a hard coded scale
  scaleSteps : 30,
  //Number - The value jump in the hard coded scale
  scaleStepWidth : 1,
  //Number - The centre starting value
  scaleStartValue : 0,
  
  //Boolean - Show line for each value in the scale
  scaleShowLine : true,
  
  //String - The colour of the scale line
  scaleLineColor : "rgba(0,0,0,0)",
  
  //Number - The width of the line - in pixels
  scaleLineWidth : 1,
  
  //Boolean - whether we should show text labels
  scaleShowLabels : false,
  
  //Interpolated JS string - can access value
  scaleLabel : "<%=value%>",
  
  //String - Scale label font declaration for the scale label
  scaleFontFamily : "'Arial'",
  
  //Number - Scale label font size in pixels  
  scaleFontSize : 12,
  
  //String - Scale label font weight style  
  scaleFontStyle : "normal",
  
  //String - Scale label font colour  
  scaleFontColor : "#666",
  
  //Boolean - Show a backdrop to the scale label
  scaleShowLabelBackdrop : true,
  
  //String - The colour of the label backdrop 
  scaleBackdropColor : "rgba(255,255,255,0.75)",
  
  //Number - The backdrop padding above & below the label in pixels
  scaleBackdropPaddingY : 2,
  
  //Number - The backdrop padding to the side of the label in pixels  
  scaleBackdropPaddingX : 2,

  //Boolean - Stroke a line around each segment in the chart
  segmentShowStroke : true,
  
  //String - The colour of the stroke on each segement.
  segmentStrokeColor : "#fff",
  
  //Number - The width of the stroke value in pixels  
  segmentStrokeWidth : 2,
  
  //Boolean - Whether to animate the chart or not
  animation : false,
  
  //Number - Amount of animation steps
  animationSteps : 100,
  
  //String - Animation easing effect.
  animationEasing : "easeOutBounce",

  //Boolean - Whether to animate the rotation of the chart
  animateRotate : true,
  
  //Boolean - Whether to animate scaling the chart from the centre
  animateScale : false,

  //Function - This will fire when the animation of the chart is complete.
  onAnimationComplete : null
}


//habit charts strokecolor
var strokecolor = "rgba(255,255,255,1)";

//set habit category colors
var healthColor = "rgb(252,67,73)";
var mentalColor = "rgb(109,188,219)";
var emotionalColor = "rgb(44,62,80)";


//do this when the page has loaded
jQuery(document).ready(function($) {

// Assign number of days (to be dynamic in the future)
var days = 14

// Assign habits to variable array
var habitsArr = ["read","photography","projects","bike","lift","stretch","friends"];

//service endpoint
var query = "https://spreadsheets.google.com/feeds/list/0As5RZ7GwGj6mdEp2bHFPamgtU1dZc3QxZlBzNEM0WVE/1/public/basic?alt=json-in-script&$callback=mycallback";
 
  //ajax call
  $.ajax({
    dataType: "jsonp",
    url: query,
    jsonpCallback: "mycallback",
    success: mycallback,
    error: error 
});
 
//if there's an error, display this message
function error(){
  $("#topline").append("<p id=errormsg>Sorry, Google Docs can't be reached - please try again later.</p>");
}

//if the callback is successful
function mycallback(fullData) {

//Add the title
$("#topline").append("<p id=habittitle>habits</p>");

// Get all the spreadsheet data and put it in a clean array //
var allData = []
$.each(fullData.feed.entry, function(i){
  allData.push({
    date : fullData.feed.entry[i].title.$t,
    habits : fullData.feed.entry[i].content.$t
  });
});

//take the selected number of days
var data = allData.slice(allData.length-days,allData.length);

// This function checks each day for a given string to see if the habit was performed, and creates three arrays for the habit: History, Data, and Dates. It then adds a new div to the page to hold the chart for that habit. Probably not the best way to do this, but it works. 
function dataToChartFormat (habitStr) {
  //Create the history array
  eval(habitStr+"History = [];");
  //populate the history array
  $.each(data, function(i){
    var searchIn = data[i].habits;
    if (searchIn.indexOf(habitStr) !== -1) {
      eval(habitStr+"History").push({
        date : data[i].date,
        performed : 1
      });
    }
    else {
     eval(habitStr+"History").push({
        date : data[i].date,
        performed : 0
  });
}
});
  //create the Date and Data arrays
  eval(habitStr+"Dates = [];");
  eval(habitStr+"Data = [];");
  //populate the Date and Data arrays
  $.each(eval(habitStr+"History"), function(i) {
    eval(habitStr+"Dates").push('');
    eval(habitStr+"Data").push(eval(habitStr+"History")[i].performed);
  });
  $("#habit_holder").append("<p class=habit_label id=label"+habitStr+">"+habitStr+"</p><canvas class=dailyhabit id="+habitStr+" width=800 height=85></canvas>");


}


//array for all the Contexts
var ctx = [];

//run the function for each habit in the habitsArr
$.each(habitsArr, function(i){
  dataToChartFormat(habitsArr[i]);
  //add each habit's div's context to array
  ctx.push($("#"+habitsArr[i]+"").get(0).getContext('2d'));
});

// Date Labels: using the first habit (bike), add date labels that fit the habit and line charts and size dynamically depending on the number of days.
$.each(bikeHistory, function(i){
$("#date_labels").append("<div class=datelabel id=label"+i+">"+moment(bikeHistory[i].date).format('dddd').toLowerCase()+"</div>");
});
$(".datelabel").css("width",780/days);
$("#label"+(days-1)+"").css("color",healthColor);

//Individual Habits

//Read
//format data
var readchartdata = {
  labels : readDates,
  datasets : [
    {
      fillColor : mentalColor,
      strokeColor : strokecolor,
      data :  readData
    }
  ]
}
//build it
new Chart(ctx[0]).Bar(readchartdata, options);
 
//Photography
//format data
var photographychartdata = {
  labels : photographyDates,
  datasets : [
    {
      fillColor : mentalColor,
      strokeColor : strokecolor,
      data :  photographyData
    }
  ]
}
// build it
new Chart(ctx[1]).Bar(photographychartdata, options);

//Projects
//format data
var projectschartdata = {
  labels : projectsDates,
  datasets : [
    {
      fillColor : mentalColor,
      strokeColor : strokecolor,
      data :  projectsData
    }
  ]
}
// build it
new Chart(ctx[2]).Bar(projectschartdata, options);

// Bike
//format data
var bikechartdata = {
  labels : bikeDates,
  datasets : [
    {
      fillColor : healthColor,
      strokeColor : strokecolor,
      data :  bikeData
    }
  ]
}

//build it
new Chart(ctx[3]).Bar(bikechartdata, options);

//Lift
//format data
var liftchartdata = {
  labels : liftDates,
  datasets : [
    {
      fillColor : healthColor,
      strokeColor : strokecolor,
      data :  liftData
    }
  ]
}
//build it
new Chart(ctx[4]).Bar(liftchartdata, options);

//Stretch
//format data
var stretchchartdata = {
  labels : liftDates,
  datasets : [
    {
      fillColor : healthColor,
      strokeColor : strokecolor,
      data :  stretchData
    }
  ]
}
//build it
new Chart(ctx[5]).Bar(stretchchartdata, options);

//Friends
//format data
var friendschartdata = {
  labels : friendsDates,
  datasets : [
    {
      fillColor : emotionalColor,
      strokeColor : strokecolor,
      data :  friendsData
    }
  ]
}
// build it
new Chart(ctx[6]).Bar(friendschartdata, options);

//Line chart stuff

//In case more habits are added
var emoData = friendsData;

//add the health habits into a single array, add the emotional habits so they show above
var healthData = [];
$.each(bikeData, function(i){
  healthData.push(bikeData[i]+liftData[i]+stretchData[i]+emoData[i]);
});

//add the mental habits into a single array, add the emotional and health habits so they show above
var mentalData = [];
$.each(readData, function(i){
  mentalData.push(readData[i]+photographyData[i]+projectsData[i]+emoData[i]+healthData[i]);
});

//create an empty label array to match the size of the data series
var emptyLabelArr = [];
$.each(bikeData,function(){
  emptyLabelArr.push('');
});

//data for the line chart
var linedata = {
  labels : emptyLabelArr,
  datasets : [
    {
      fillColor : mentalColor,
      strokeColor : strokecolor,
      pointColor : mentalColor,
      pointStrokeColor : strokecolor,
      data : mentalData
    },
    {
      fillColor : healthColor,
      strokeColor : strokecolor,
      pointColor : healthColor,
      pointStrokeColor : strokecolor,
      data : healthData
    },
    {
      fillColor : emotionalColor,
      strokeColor : strokecolor,
      pointColor : emotionalColor,
      pointStrokeColor : strokecolor,
      data : emoData
    }
  ]
}

//get the line chart context
var ctxLine = $("#habitsline").get(0).getContext("2d");
//build it
new Chart(ctxLine).Line(linedata,lineOptions);


//Polar Chart Stuff (dotting the i)

//add the totals for the mental, physical, emotional habits into the polar chart data format
var habitTotals = [
  {
    value : arrTotal(readData)+arrTotal(photographyData)+arrTotal(projectsData),
    color: mentalColor
  },
  {
    value : arrTotal(bikeData)+arrTotal(liftData)+arrTotal(stretchData),
    color: healthColor
  },
  {
    value : arrTotal(friendsData),
    color: emotionalColor
  }
]

//add the polar chart container and canvas
$("#topline").prepend("<div id=polarholder><canvas id=habitspolar width=108 height=108></canvas></div>");
var ctxPolar = $("#habitspolar").get(0).getContext("2d");

//Build the polar chart
new Chart(ctxPolar).PolarArea(habitTotals,polarOptions);

//calculate the position so it stays over the dot in the i. credit: http://stackoverflow.com/questions/12586344/absolute-positioning-does-not-work-with-browser-resize
    calculation();
    $(window).resize(calculation);

    function calculation() {
        var location = $("#topline").offset();

        var top = location.top - 21;

        var left = location.left;
        left = left - $('#polarholder').width();
        left = left + 350;

        $("#polarholder").css({
            'position': 'absolute',
            'top': top + 'px',
            'left': left + 'px'
        });
    }

//Add the legend to the page
$("#topline").after("<p id=legend><span class=legend  id=mentalLegend>mental</span><span class=legend id=physicalLegend>physical</span><span class=legend id=emotionLegend>emotional</span>  past "+days+" days</p>");
$("#physicalLegend").css("color", healthColor);
$("#emotionLegend").css("color", emotionalColor);
$("#mentalLegend").css("color", mentalColor);

}
});
