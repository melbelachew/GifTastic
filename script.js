// Adding click event listen listener to all buttons
    $("button").on("click", function() {
      // Grabbing and storing the data-howIfeel property value from the button
      var myfeelings = $(this).attr("data-howIfeel");

      // Constructing a queryURL using the animal name
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        myfeelings + "&api_key=dc6zaTOxFJmzC&limit=10";

      // Performing an AJAX request with the queryURL
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        // After data comes back from the request
        .then(function(response) {
         console.log(queryURL);

            // console.log(response);

          // storing the data from the AJAX request in the results variable
          var results = response.data;

          // Looping through each result item
          for (var i = 0; i < results.length; i++) {

            // Creating and storing a div tag
            var feelingsDiv = $("<div>");

            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);

            // Creating and storing an image tag
            var feelingsImage = $("<img>");

            // Setting the src attribute of the image to a property pulled off the result item
            feelingsImage.addClass("pause")
            feelingsImage.attr("src", results[i].images.fixed_height.url);
            feelingsImage.attr("animate", results[i].images.fixed_height.url);

            feelingsImage.attr("still",results[i].images.fixed_height_still.url);

            // Appending the paragraph and image tag to the animalDiv
        
            feelingsDiv.append(feelingsImage);
            feelingsDiv.append(p);

            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(feelingsDiv);
          }
          
          $("#gifs-appear-here").on("click",".pause", function(){
              var feelingsImageUrl = $(this).attr('src');
              var animate = $(this).attr('animate');
              var still = $(this).attr('still');
              
            if (feelingsImageUrl ===still){
                $(this).attr('src',animate);
            }
            else {
                $(this).attr('src',still);
            }
          })
        });

        var gifbuttons = []

               function renderButtons() {

                $("#buttons-view").empty();

                for (var i = 0; i<gifbuttons.length; i++) {

                  var btn = $("<button>");
                    btn.text(gifbuttons[i]);
                    $('#button-view').append(btn)
                }
               }

              //  ("#add-giphy").on("click", function(event) {
              //    event.preventDefault();
              //    var userInput = $("#giphy-input").val();
              //    btn.push(userInput);
              //    renderButton();
              //  })
               
     });
