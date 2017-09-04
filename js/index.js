$(document).ready(function(){
  //when search is clicked below code runs
  $("#search").click(function(){
    //gets search input
    var searchTerm = $('#searchTerm').val();
    //API url with searchTerm
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
    
    //ajax call
    $.ajax({
      type: "GET",
      url: url,
      async: false,
      dataType: "json",
      success: function(data){
        $("#output").html(''); //this works like a clrscr(); i.e., clears the previous output
        for(var i=0; i < data[1].length; i++){
          $("#output").prepend("<li><a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        }
        //clear the search field after the search is done
        $("#searchTerm").val('');
      },
      error: function(errorMessage){
        alert("Better check your code chick!");
      }
    });
  });
  $("#searchTerm").keypress(function(e){
      if(e.which == 13){
        $("#search").click(); 
      }
    });
});