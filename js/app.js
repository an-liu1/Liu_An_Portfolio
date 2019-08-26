$(document).foundation()

	const education = document.querySelector('.BuED'),
		  experience = document.querySelector('.BuEX'),
		  title = document.querySelector('.title-bar-left'),
		  name = document.querySelector('.name');
		//   animatation1s = document.querySelectorAll('.stleft'),
		//   animatation2s = document.querySelectorAll('.Rtitle'),
		//   vidPlayer = document.querySelector('.video1'),
		//   playPause = document.querySelector('.play-pause'),
		//   ffWd = document.querySelector('.forward'),
		//   rWnd = document.querySelector('.rewind'),
		//   volume = document.querySelector('.volume'),
		//   fScreen = document.querySelector('.fullScreen'),
		//   ranges = document.querySelector('.player__slider');

	education.onmouseover = function() {
		document.querySelector('.education').style.display = 'block';
		document.querySelector('.experience').style.display = 'none';
		education.classList.add('zoomInLeft');
		experience.classList.remove('zoomInRight');
	};

	experience.onmouseover = function() {
		document.querySelector('.education').style.display = 'none';
		document.querySelector('.experience').style.display = 'block';
		education.classList.remove('zoomInLeft');
		experience.classList.add('zoomInRight');
	};

	title.onclick =  function(){
		window.location.href = "#";
	};
	
	window.onload = function(){
		title.classList.add('rotateIn','animated','slow');
	}

	

	function loadDoc(data) {
		var arr = [data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8]]
        var obj = {}
        for(var title in arr){
            obj[title]=arr[title]
		}
		console.log(obj);
		var i;
		for(i=0;i<=8;){
			document.querySelector(".img" + i).src = `images/${obj[i].photo}`;
			document.querySelector(".para" + i).textContent = obj[i].description;
			i++;
		}
	}

	function getData(){
		fetch('./admin/config.php')
		.then(res => res.json())
		.then(data => {
			console.log(data);
			loadDoc(data);
		})
		.catch(function(error){
			console.log(error);
		});
	}
	getData();


	// function openanimatate1() {
	// 	this.classList.add('flash');
	// }

	// function closeanimatate1() {
	// 	this.classList.remove('flash');
	// }

	// function openanimatate2() {
	// 	this.classList.add('pulse');
	// }

	// function closeanimatate2() {
	// 	this.classList.remove('pulse');
	// }

	// function togglePlay() {
	// 	var theSVG = this.firstElementChild;
	// 	if(vidPlayer.paused){
	// 	  vidPlayer.play();
	// 	  theSVG.dataset.icon = "pause-circle";
	// 	  }else {
	// 		  vidPlayer.pause();
	// 		  theSVG.dataset.icon = "play-circle";
	// 	  }
	// 	}
	// function ffWdVid() {
	// 	vidPlayer.currentTime += 3;
	// 	}
		
	// 	function rWindVid() {
	// 		vidPlayer.currentTime -= 3;
	// 	 }
		
	// 	 function controlVolume() {
	// 		 var theIcon = this.firstElementChild;
	// 		 if (vidPlayer.muted === false) {
	// 			  vidPlayer.muted = true;
	// 			  theIcon.dataset.icon = "volume-off";
	// 		}else {
	// 			  vidPlayer.muted = false;
	// 			theIcon.dataset.icon = "volume-up";
	// 		}
	// 	  }
		
	// 	function handleRangeUpdate() {
	// 		vidPlayer[this.name] = this.value;
	// 	}
	// 	function fScreenF() {
	// 		fullscreen(vidPlayer);
	// 	}
	// 	function fullscreen(element) {
	// 		if(element.requestFullscreen) {
	// 		  element.requestFullscreen();
	// 		} else if(element.mozRequestFullScreen) {
	// 		  element.mozRequestFullScreen();
	// 		} else if(element.webkitRequestFullscreen) {
	// 		  element.webkitRequestFullscreen();
	// 		} else if(element.msRequestFullscreen) {
	// 		  element.msRequestFullscreen();
	// 		}
	// 	  }

	// animatation1s.forEach(animatation1 => animatation1.addEventListener('mouseover', openanimatate1));
	// animatation1s.forEach(animatation1 => animatation1.addEventListener('mouseout', closeanimatate1));
	// animatation2s.forEach(animatation2 => animatation2.addEventListener('mouseover', openanimatate2));
	// animatation2s.forEach(animatation2 => animatation2.addEventListener('mouseout', closeanimatate2));
	// playPause.addEventListener('click', togglePlay);
  	// ffWd.addEventListener('click', ffWdVid);
  	// rWnd.addEventListener('click', rWindVid);
	// volume.addEventListener('click', controlVolume);
	// ranges.addEventListener('change', handleRangeUpdate);
	// ranges.addEventListener('mousemove', handleRangeUpdate);
	// fScreen.addEventListener('click', fScreenF);
