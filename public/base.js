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
		url: '/api/posts',
		type: "post",
		data: text
	})
	.done(function(data){
      console.log('response from server: ', data);
      	$MicroblogList.append('<li class="Microblog" id=' + data._id + '>' + data.name + ' ---- ' + data.desc + '<span class="close delete">X</span></li>');

      	$newMicroblog[0].reset();
	})
	.fail(function(data){
	});
	});

$(document).on('click', '.close', function(e) {
      e.preventDefault();
      console.log('button close clicked');
      var postId =$(this).parent().attr('id');
      console.log('the post id is : ', postId);
      //var post = $(this).closest('div');
      $.ajax({
      	url:'/api/posts/' + postId,
      	type : "DELETE",
      	success :function(data) {
        console.log(data);
        $('#'+postId).remove();
      	}
      });
	});
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



