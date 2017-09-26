/* Header script variables*/
var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum, neque a scelerisque tempus, quam ligula elementum massa, quis porta metus dui non dui. Aliquam pellentesque vel velit sed laoreet. Phasellus metus orci, volutpat et lacus a, commodo tempus turpis. Maecenas mi quam, varius id urna in, euismod laoreet eros. Ut hendrerit sem a maximus rhoncus. Donec pulvinar molestie nisi sit amet porta. Pellentesque sed diam id purus vulputate dictum a quis nisi. Duis consequat aliquet ultrices. Proin consectetur nisi vel leo ultrices, sed dictum lorem fringilla. Proin nec augue a quam blandit vestibulum. Donec ut dolor in turpis dictum suscipit. Nulla dignissim leo eu diam pellentesque, ac elementum risus maximus. Phasellus ut lorem mi. Sed in tincidunt elit. Nulla sit amet massa faucibus mi interdum facilisis. In vel accumsan ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam luctus eu turpis sed ornare. Praesent imperdiet dignissim ipsum non sagittis. Morbi sit amet risus leo. Duis in dapibus odio. In in tincidunt sapien. Nam est dui, varius vitae ultricies lobortis, luctus sed nisi. Quisque vel maximus orci. Duis odio neque, malesuada ac dui quis, tincidunt pellentesque purus. Praesent ultricies elementum augue et tristique. Etiam sit amet dolor vel ex porttitor consectetur ac ut lacus. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras fringilla dui mollis, mattis diam sed, pellentesque lacus.Quisque porta vulputate quam nec imperdiet. Nunc urna elit, pharetra in egestas a, consectetur sit amet quam. Duis venenatis, nulla et vestibulum molestie, neque augue varius mauris, id dictum lorem nisi hendrerit ex. Nulla vitae nisl dolor. Vivamus laoreet ornare semper. Aenean lobortis elementum erat sed luctus. Duis luctus mauris dapibus auctor volutpat. Sed quis libero egestas, blandit sapien id, interdum tellus. Sed quis luctus neque, vel posuere neque. Sed sed consequat felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed aliquam mauris elementum dui facilisis efficitur. Etiam accumsan eget risus a blandit. Nulla varius, lectus sed ullamcorper bibendum, diam mauris tempor metus, a scelerisque libero felis a elit. Sed in magna euismod, congue quam in, bibendum odio. Nullam tincidunt velit et neque ultricies, et aliquam purus lacinia. Duis ullamcorper metus felis, eget gravida tortor tempus ut. Nunc metus libero, porttitor eu lacus non, iaculis porta leo. Donec sit amet sollicitudin purus, molestie pretium nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus et leo a arcu aliquet luctus. Cras lectus ex, auctor eu lorem eu, iaculis blandit elit. Praesent tempus molestie velit in ornare. Cras viverra massa fermentum nisi volutpat congue consectetur quis nunc. Duis consequat turpis at ipsum placerat consequat. Morbi orci elit, interdum quis sapien id, malesuada molestie erat. Vestibulum erat ipsum, pulvinar quis tellus ut, elementum feugiat diam.".split("");

var divArray = document.getElementsByClassName("square");
var header = document.getElementsByTagName("header");
var stars = document.getElementById("starContainer");
var interval = 0;
var numOfDivs = window.innerWidth;



/* Header script */

//put divs to type in
function populate() {
	for ( let i = 1; i <= numOfDivs; i++){
		var newDiv = document.createElement('div');
		newDiv.className = "square";
		newDiv.style.height = "25px";
		newDiv.style.width = "20px";
    	newDiv.style.display = "inline-block";
    	header[0].appendChild(newDiv);

	}
}

// typing animation
setInterval(function(){
  let previous = interval - 1;

  if (previous >= 0){
    //blicker
    divArray[interval].style.backgroundColor="rgba(8, 61, 102,1.0)"
    // remove blinker
    divArray[previous].style.backgroundColor="rgba(8, 61, 102,0.0)"
    // insert text
    divArray[previous].innerHTML = lorem[previous];
  } else {

    divArray[interval].style.backgroundColor="rgba(8, 61, 102,1.0)"
  }

  interval++;
  if (interval == divArray.length) {
  	for(let d in divArray) {
  	 divArray[d].innerHTML="";
    }
    interval = 0;
  }

}, 250);

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~controls order of all operations based on scroll height~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

var windowHeight = window.innerHeight;
var nav = document.getElementById("nav");
var starScene = document.getElementById("scene");
var buttons = Array.from(document.getElementsByClassName("online-presence"));


function scrollTo(){

  window.addEventListener("scroll", function(){

// ~~~~~~~~~~~~~~~~~BOUNDERIES~~~~~~~~~~~~~~~~~~~~~~~~~
    var headerBottom = header[0].getBoundingClientRect().bottom;
    var starTop = starScene.getBoundingClientRect().top;

//~~~~~~~~~~~~~~~~~~STARRY NIGHT EXPOSED~~~~~~~~~~~~~~~

    if (starTop < windowHeight){
      console.log(starTop);
      console.log(stars.children.length);
      if(stars.children.length <= 12){
        starz();
      }

      for(let b in buttons){
          buttons[b].style.opacity="1";
          buttons[b].style.transform="translateY(10vh)";
        }
    }

// ~~~~~~~~~~~~~~~~~NAV CONTROL~~~~~~~~~~~~~~~~~~~~~~~~~

    if (headerBottom <= 0){
      nav.style.position = "fixed";
      nav.style.top = "0";
    } else {
      nav.style.position = "initial";
    }

// ~~~~~~~~~~~~~~~~~BUTTON CONTROL~~~~~~~~~~~~~~~~~~~~~~~~~

  // if (headerBottom > windowHeight){
  //     nav.style.position = "fixed";
  //     nav.style.top = "0";
  //   } else {
  //     nav.style.position = "initial";
  //   }

  })

}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~stars~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


function starz() {
  for ( let i = 1; i <= 300; i++){
    var newDiv = document.createElement('div');
    newDiv.style.position = "absolute";
    newDiv.className = "star";
    newDiv.style.height = "15px";
    newDiv.style.width = "15px";
    newDiv.style.color = "white";
    newDiv.style.borderRadius = "15px";
    newDiv.style.backgroundColor = "white";
    newDiv.style.background = "radial-gradient(circle, rgba(255,255,255,1.0) 1%, rgba(255,255,255,0.0))";
    newDiv.style.opacity = "0";
    newDiv.style.transition = "5s";
    newDiv.style.animationIterationCount="infinite";
    newDiv.style.animationDelay = setAnimationDelay();
    newDiv.style.animationDuration=setAnimationDuration();
    newDiv.style.left = setLeftPosition();
    newDiv.style.top = setTopPosition();


    stars.appendChild(newDiv);
  }
}

function setAnimationDelay() {
  let min = Math.ceil(0);
  let max = Math.floor(20);
  let rand = Math.floor(Math.random() * (max - min)) + min;

  // console.log( rand + "px");
  return rand + "s";
}

function setAnimationDuration() {
  let min = Math.ceil(0);
  let max = Math.floor(5);
  let rand = Math.floor(Math.random() * (max - min)) + min;

  // console.log( rand + "px");
  return rand + "s";
}

function setLeftPosition(){
  let min = Math.ceil(0);
  let max = Math.floor(2000);
  let rand = Math.floor(Math.random() * (max - min)) + min;

  return rand + "px";
}

function setTopPosition(){
  let min = Math.ceil(0);
  let max = Math.floor(2000);
  let rand = Math.floor(Math.random() * (max - min)) + min;

  return rand + "px";
}
/*~~~~~~~~~~~~~~~~~~~~~~~~~~ ~~~~~~~~~~~~~~~~~~~~~*/
