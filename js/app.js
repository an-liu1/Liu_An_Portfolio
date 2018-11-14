(() => {
$(document).foundation()
var svgObject1 = document.querySelector('.s1').contentDocument.querySelector('#HTML5');

console.log(svgObject1);

function SvgFun() {
	this.style.display = "none";
}



svgObject1.addEventListener('mouseover', SvgFun);
})();
