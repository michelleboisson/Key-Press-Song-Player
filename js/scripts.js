var Player = {
		
	
}

var PopcornSong = {
	
	file : {
		url : "music/Sherry-JerseyBoys.mp3",
		cues : [
			12.521086692810059,
			14.925012588500977,
			16.697240829467773,
			18.468372344970703,
			20.590715408325195,
			22.405925750732422,
			24.206064224243164,
			26.141321182250977,
			27.99818229675293,
			28.909971237182617,
			29.83009338378906,
			30.710050582885742,
			31.637418746948242,
			32.54954147338867,
			33.494293212890625,
			 ]
	},
	
	intro: {
		url : "music/Sherry-JerseyBoys-Tune.mp3",
		cues : [
			1.2,
			2.438957929611206,
			
			5.15940523147583,

			7.854953765869141,

			9.758703231811523,

			12.511377334594727,

			15.295846939086914,

			17.124244689941406,

			18.9987735748291,

			20.871116638183594
		]
		
		
		
		
	},
	
	htmlid : "#thissong",
	
	popcornsong : '',
	
	
	
	
}
Player.Init = function (){
	
	console.log("present!");
	
	$("#thissong").hide();
	
	 PopcornSong.popcornsong = Popcorn( "#thissong");
	 
	 var mysong = Popcorn( "#thissong" );
	 mysong.media.children[ 0 ].src = PopcornSong.intro.url;
	 mysong.load();
	 
	 
	 var currentCueIndex = 0;
	 var currentSong = PopcornSong.intro;
		 
	 //mysong.play();

	
	$(document).keypress(function(event) {
		$("#key").css("opacity", .5);
		if (currentCueIndex == 0 && currentSong == PopcornSong.file){
			mysong.play(11);
			console.log("skip intro");
		}else{
			console.log("not skip intro", currentCueIndex);
			mysong.play();
		}
		$("#pause").html("pause");
		if ( event.which == 13 ) {
			event.preventDefault();
		}
		console.log( event.which);
//		console.log( event );
		console.log(mysong.currentTime());
			
		currentCueIndex++;


		
		if (currentCueIndex < currentSong.cues.length){
			mysong.cue(currentSong.cues[currentCueIndex], function(){
				mysong.pause();	
				$("#pause").html("play");
				console.log("cue: " + currentSong.cues[currentCueIndex]);
				$("#key").css("opacity", 1);
			});
		}
		
		if (currentCueIndex == currentSong.cues.length && currentSong == PopcornSong.intro){
			console.log("new song");
			currentCueIndex = 0;
			//mysong.play();
			//$("#pause").html("pause");
			//console.log(mysong.currentTime());
			currentSong = PopcornSong.file;
			mysong.media.children[ 0 ].src = currentSong.url;
			mysong.load();
			mysong.play(11);
			
		}

/*		if (mysong.paused()){
			mysong.play();
		}	
		else{
			mysong.pause();
		}
*/		
	});
	
		$("#pause").on("click", function(){
		
			if (mysong.paused()){
				mysong.play();
				$(this).html("pause");
			}else{
				mysong.pause();
				$(this).html("play");
			}
		});
	
}