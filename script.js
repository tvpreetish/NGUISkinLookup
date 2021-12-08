var copyLblRtxSkinName = function (row, col) {
	if (event.target.innerHTML === "") {
		return;
	}
	console.log("row : " + row + ", col : " + col);
	let fontSizeTh = document.querySelector("th[data-lbl-rtx-col-no='" + col + "']");
	let colorNo = Math.ceil(row / 2);
	let vizColorCodeTh = document.querySelector("th[data-lbl-rtx-color-no='" + colorNo + "']");
	let emphasised = row % 2 === 0 ? "Emp" : "";
	let skin = vizColorCodeTh.getAttribute("data-viz-code") + fontSizeTh.getAttribute("data-font-size") + emphasised;
	document.getElementById("lbl-skin-name").innerHTML = "lbl" + skin;
	document.getElementById("rtx-skin-name").innerHTML = "rtx" + skin;
};
var copyLblFontIconSkinName = function (row, col) {
	if (event.target.innerHTML === "") {
		return;
	}
	let fontSizeTh = document.querySelector("th[data-lbl-icon-col-no='" + col + "']");
	let vizColorCodeTh = document.querySelector("th[data-lbl-icon-color-no='" + row + "']");
	let skin = vizColorCodeTh.getAttribute("data-viz-code") + fontSizeTh.getAttribute("data-font-size");
	document.getElementById("lbl-font-icon-skin-name").innerHTML = "lblIcon" + skin;
};
var copyBtnFontIconSkinName = function (row, col) {
	if (event.target.innerHTML === "") {
		return;
	}
	let fontSizeTh = document.querySelector("th[data-btn-icon-col-no='" + col + "']");
	let vizColorCodeTh = document.querySelector("th[data-btn-icon-color-no='" + row + "']");
	let skin = vizColorCodeTh.getAttribute("data-viz-code") + fontSizeTh.getAttribute("data-font-size");
	document.getElementById("btn-font-icon-skin-name").innerHTML = "btnIcon" + skin;
};

var showTab = function (evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
};