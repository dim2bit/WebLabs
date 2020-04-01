let fullScreen = false;
let current_image = null;
class Gallery extends HTMLElement {
  constructor() {
    super();
	const shadow = this.attachShadow({mode: 'open'});
	const st = document.createElement('style');
	st.innerHTML = `
	#img-gallery {
	  margin-top: 3vh;
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: center;
	}

	#_img {
	  margin: 1vw;
	  height: 250px;
	  width: 250px;
	  object-fit: cover;
	  border: 2px solid grey;
	}

	#resize {
	  position: fixed;
	  width: 200px;
	  border: 2px solid grey;
	  transform: translate(0px, 180px) scale(5);
  	  transition-timing-function: linear;
  	  transition-duration: 0.5s;
	}`;

	shadow.appendChild(st);
	
	const elements = document.createElement('div');
	elements.setAttribute("id", "img-gallery");
	shadow.appendChild(elements);

	if (this.hasAttribute('img-list')) {
	  const images = this.getAttribute('img-list').split(';');
	  for (let i in images) {
		const image = document.createElement('img');
		image.setAttribute("src", images[i]);
		image.setAttribute("id", "_img");
		image.setAttribute("onerror", "placeholder_func(this)");
		image.setAttribute("onclick", "toggle(this)");
		elements.appendChild(image);
	  }
	}
	else {
	  const placeholder = document.createElement('img');
	  placeholder.setAttribute("src", "resources/placeholder.jpg");
	  placeholder.setAttribute("id", "_img");
	  elements.appendChild(placeholder);
	}
  }
}
customElements.define('img-gallery', Gallery);

function placeholder_func(placeholder) {
  placeholder.setAttribute("src", "resources/placeholder.jpg");
  placeholder.setAttribute("onclick", null)
}
function toggle(image) {
  if (fullScreen) {
	current_image.setAttribute("id", "_img");
	fullScreen = false;
  }
  else {
	image.setAttribute("id", "resize");
	current_image = image;
	fullScreen = true;
  }
}

function timeout() {
  const myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}