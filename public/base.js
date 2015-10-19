console.log("Sanity Check: JS is working!");

$(document).ready(function() {

		  // code in here
		  //Form to creat Micro blog
		// var Microblog = [
		// 	{name: "Zain Ahmed", desc: "Sample Blog WorKing for ProJect 0"},

		// 	];
		//element to hold our list of blogs
		var $newMicroblog = $('#new-Microblog');
		var $MicroblogList = $('#Microblog-list');



  
	$("#new-Microblog").on('submit', function(event) {
	event.preventDefault();
	text = $(this).serialize();
	console.log('text: ', text);

	$.ajax({
		url: '/api/post',
		type: "post",
		data: text
	})
	.done(function(data){
      console.log('response from server: ', data);
      	$MicroblogList.append('<li class="Microblog">' + data.name + ' ---- ' + data.desc + '</li>');

      	$newMicroblog[0].reset();

	})
	.fail(function(data){


	});
	// var MicroblogName = $('#Microblog-name').val();
	// var Microblogdesc = $('#Microblog-desc').val();
	// var MicroblogData = {name: MicroblogName, desc: Microblogdesc};

	// Microblog.push(MicroblogData);

	// $MicroblogList.append('<li class="Microblog">' + MicroblogData.name + ' ---- ' + MicroblogData.desc + '</li>');
	// console.log("the MicroblogData is" + MicroblogData.name);
	


	// var MicroblogName = $('#Microblog-name').val();
	// var Microblogdesc = $('#Microblog-desc').val();
	// var MicroblogData = {name: MicroblogName, desc: Microblogdesc};

	// Microblog.push(MicroblogData);
	


	

	// $('#MicroblogList')	.on('click' , '.Microblog', function() {

	// $(this).addClass('done');

	 });


 

});


