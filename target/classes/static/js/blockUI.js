var progressHtml =
"<style>                                   "+
"#loaderStyle {                            "+
"    border: 4px solid #f3f3f3;            "+
"    border-top:4px solid #195DAE;         "+
"    border-radius: 100%;                  "+
"    width: 15px;                          "+
"    height: 15px;                         "+
"    animation: spin 0.8s linear infinite; "+
"}                                         "+
"@keyframes spin {                         "+
"    0% { transform: rotate(0deg); }       "+
"    50% { transform: rotate(180deg); }    "+
"    100% { transform: rotate(360deg); }   "+
"}                                         "+
"</style>                                  "+
"<html><body><table><tr><td>               "+
"<td width='75'><b>loading ....</b></td>   "+
"<td><div id='loaderStyle'/></td>          "+
"</tr></table></body></html>               ";

var progressWinow;
var timer;

function blockUI()
{
	if($("#progress").length > 0 )
	{
		$("#progress").remove();
	}
	
	progressWinow = $('<div id="progress"/>');
	
	disableHeader();
	
	$("html").css("cursor", "wait");
	
	$("#load_jqGrid").css("visibility", "hidden");

	progressWinow.html(progressHtml).dialog({cache:false, autoOpen:true, modal:true, width:100, height:80, closeOnEscape:true, 
	 open:function()
	 {   
		 timer = setInterval(function(){unblockUI(); alert("TimeOut이 발생하였습니다.(30초 초과) \n관리자에게 문의하여 주십시오.");}, 30000);
		 $(".ui-dialog-titlebar").hide();
	 }, 
	 close:function(){}});
}

function unblockUI()
{
	clearInterval(timer);
	$("html").css("cursor", "auto");
	progressWinow.dialog("close");
	
	enableHeader();
	
	$("#load_jqGrid").css("visibility", "visible");
	
	$(".ui-dialog-titlebar").show();
}

function disableHeader()
{
	var links = window.parent.parent.frames[0].document.getElementsByTagName("a");
	
	for(var i = 0; i < links.length; i++)
	{
		$(links[i]).bind("click",false);
	}
}

function enableHeader()
{
	var links = window.parent.parent.frames[0].document.getElementsByTagName("a");
	
	for(var i = 0; i < links.length; i++)
	{
		$(links[i]).unbind("click",false);
	}	
}

function wait()
{
	if($("#progress").length > 0 )
	{
		$("#progress").remove();
	}
	
	progressWinow = $('<div id="progress"/>');
	
	$("html").css("cursor", "wait");

	progressHtml = progressHtml.replace(/loading/, "processing");
	
	progressWinow.html(progressHtml).dialog({cache:false, autoOpen:true, modal:true, width:100, height:80, closeOnEscape:true, 
		
	 open:function()
	 {   
		 timer = setInterval(function(){ free(); } , 90000);
	     
		 $(".ui-dialog-titlebar").hide();
	 }, 
	 
	 close:function(){}});
}

function free()
{
    clearInterval(timer); 
    $("html").css("cursor", "auto"); 
    progressWinow.dialog("close"); 
    $(".ui-dialog-titlebar").show();
}

function sleep(interval)
{
	timer = setInterval(function(){ clearInterval(timer)}, interval);
}


