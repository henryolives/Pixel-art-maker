
// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$( document ).ready(function makeGrid() {
// Your code goes here
	$("#button").click(function(event){
		var row 	= 	parseInt($( "#inputHeight" ).val());
		var column 	= 	parseInt($("#inputWeight").val());
		//clear table
		$('table').empty()
		event.preventDefault();

		//create all the rows
		for(var x =1; x<=row; x++){
			$('table').append("<tr class='row'></tr>")
		}

		//create all the columns for each row
		$( ".row" ).each(function(){
			for(var y =1; y<=column; y++){
				$(this).append("<td class='cell'></td>")
			}
		})

		//apply the selected color to the desired cells
		$('.cell').click(function(){
				var colorChoice = $("#colorPicker").val()
				$(this).css('background-color',colorChoice )
		})

		//clear the cell
		$('.cell').dblclick(function(){
				var colorChoice = $("#colorPicker").val()
				$(this).css('background-color','transparent' )
		})

	})
})
