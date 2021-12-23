var copyLblSkinName = function (row, col) {
	if (event.target.innerHTML === "") {
		return;
	}
	console.log("row : " + row + ", col : " + col);
	let fontSize = document.querySelector("th[data-lbl-col-no='" + col + "']").getAttribute("data-font-size");
	let colorNo = Math.ceil(row / 2);
	let vizColorCode = document.querySelector("th[data-lbl-color-no='" + colorNo + "']").getAttribute("data-viz-code");
	let emphasised = row % 2 === 0 ? "Emp" : "";
	document.getElementById("lbl-skin-name").innerHTML = "lbl" + vizColorCode + fontSize + emphasised;
};
var copyRtxSkinName = function (row, col) {
	if (event.target.innerHTML === "") {
		return;
	}
	console.log("row : " + row + ", col : " + col);
	let fontSize = document.querySelector("th[data-rtx-col-no='" + col + "']").getAttribute("data-font-size");
	let colorNo = Math.ceil(row / 2);
	let vizColorCode = document.querySelector("th[data-rtx-color-no='" + colorNo + "']").getAttribute("data-viz-code");
	let emphasised = row % 2 === 0 ? "Emp" : "";
	document.getElementById("rtx-skin-name").innerHTML = "rtx" + vizColorCode + fontSize + emphasised;
};
var copyLblFontIconSkinName = function (row, col) {
	if (event.target.innerHTML === "") {
		return;
	}
	let fontSize = document.querySelector("th[data-lbl-icon-col-no='" + col + "']").getAttribute("data-font-size");
	let vizColorCode = document.querySelector("th[data-lbl-icon-color-no='" + row + "']").getAttribute("data-viz-code");
	document.getElementById("lbl-font-icon-skin-name").innerHTML = "lblIcon" + vizColorCode + fontSize;
};
var copyBtnFontIconSkinName = function (row, col) {
	if (event.target.innerHTML === "") {
		return;
	}
	let fontSize = document.querySelector("th[data-btn-icon-col-no='" + col + "']").getAttribute("data-font-size");
	let vizColorCode = document.querySelector("th[data-btn-icon-color-no='" + row + "']").getAttribute("data-viz-code");
	document.getElementById("btn-font-icon-skin-name").innerHTML = "btnIcon" + vizColorCode + fontSize;
};

var showTab = function (evt, divId) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(divId).style.display = "block";
	evt.currentTarget.className += " active";
};
