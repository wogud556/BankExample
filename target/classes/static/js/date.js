
function getToday() {
	var yIdx = '��ȭ���������';
	var today = new Date();
	var buf = "";

	yy=today.getYear();
	mm=today.getMonth() + 1;
	dd=today.getDate();
//	yo=yIdx.charAt(today.getDay())+'����';
	yo=yIdx.charAt((today.getDay())-1)+'����';

	buf=(1900+yy)+'�⵵ '+mm+'�� '+dd+'��['+yo+']';

	return buf;
}

function putsDate() {
	if(typeof(document.all.divDate) == "object") {
		document.all.divDate.innerHTML = "" + getToday() + "";
	}

	setTimeout("putsDate()", 1000);
}

putsDate();