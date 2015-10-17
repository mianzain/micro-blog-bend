console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  // code in here
  //Form to creat Micro blog
var Microblog = [
	{name: "Zain Ahmed", desc: "Sample Blog WorKing for ProJect 0"},

	];
//element to hold our list of blogs
var $newMicroblog = $('#new-Microblog');
console.log($newMicroblog);
var $MicroblogList = $('#Microblog-list');

for (var i=0; i < Microblog.length; i++) {
    $MicroblogList.append('<li class="Microblog">' + Microblog[i].name + ' -- ' + Microblog[i].desc + '</li>');

  }
	$newMicroblog.on('submit', function(event) {
	event.preventDefault();

	var MicroblogName = $('#Microblog-name').val();
	var Microblogdesc = $('#Microblog-desc').val();
	var MicroblogData = {name: MicroblogName, desc: Microblogdesc};

	Microblog.push(MicroblogData);
	
	console.log(Microblog);

	$MicroblogList.append('<li class="Microblog">' + MicroblogData.name + ' ---- ' + MicroblogData.desc + '</li>');

	$newMicroblog[0].reset();
	$('#Microblog-name').focus();

});	

	$MicroblogList.on('click' , '.Microblog', function() {
	$(this).addClass('done');

  });

});