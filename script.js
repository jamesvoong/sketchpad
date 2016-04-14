$(document).ready(function(){
	for(var i = 0; i < 16; i++) {
		$('#container').append('<div class="box"></div>');
	}

	$('.box').mouseenter(function(){
		$(this).css('background','black');
	});
});

function numberOfBoxes() {
	var boxesInRow = prompt("Input the number of boxes horizontally.");
	var boxesInColumn = prompt("Input the number of boxes vertically.");
	var boxWidth = (600-(boxesInRow*4))/boxesInRow;
	var boxHeight = (600-(boxesInColumn*4))/boxesInColumn;

	$('#container').empty();

	for(var i = 0; i < boxesInColumn*boxesInRow; i++) {
		$('#container').append('<div class="box"></div>');
	}

	$('.box').css('width', boxWidth + 'px');
	$('.box').css('height', boxHeight + 'px');

	$('.box').mouseenter(function(){
		$(this).css('background','black');
	});
};

function colorOfBoxes() {
	//CSS-tricks
	$('.box').css('background', 'none');
	$('.box').mouseenter(function(){
		var randomColor = Math.floor(Math.random()*16777215).toString(16);
		$(this).css('background','#'+randomColor);
	});
};

function reset () {
	$('.box').css('background','none');
}