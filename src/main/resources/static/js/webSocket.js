var ws;

function connect(uri, rcvProc) 
{
    ws = new WebSocket('wss://localhost:8899/'+uri);
  
    if( ws == null )
    {  
        alert("통신 에러 발생......");	
    } 
    
    ws.onmessage = rcvProc;
}

function sendData(data) 
{
	if( ws.readyState == 1)
	{
		ws.send(JSON.stringify(data));
	}
	else
	{
		alert("연결이 종료되어 해당 창을 닫습니다.");
	    window.close();
	}
    
}

function disconnect() 
{
    if (ws != null) {
        ws.close();
    }
}

