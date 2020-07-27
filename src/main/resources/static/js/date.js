
function getToday() {
	var yIdx = '월화수목금토일';
	var today = new Date();
	var buf = "";

	yy=today.getYear();
	mm=today.getMonth() + 1;
	dd=today.getDate();
//	yo=yIdx.charAt(today.getDay())+'요일';
	yo=yIdx.charAt((today.getDay())-1)+'요일';

	buf=(1900+yy)+'년도 '+mm+'월 '+dd+'일['+yo+']';

	return buf;
}

function putsDate() {
	if(typeof(document.all.divDate) == "object") {
		document.all.divDate.innerHTML = "" + getToday() + "";
	}

	setTimeout("putsDate()", 1000);
}

putsDate();