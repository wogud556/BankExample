function setSessionStorageData(id, obj)
{  
	 var idx       = 0;
	 var editType  = obj.find("INPUT");
	 var comboType = obj.find("SELECT");
	 var totLen    = editType.length + comboType.length;
	 var data     = new Array(totLen);

	 if( editType !== undefined || editType !== null )
	 {
		 for(var i = 0; i < editType.length; i++)
		 {
			 data[idx++] = editType[i].value;
		 }
	 }
	
	 if( comboType !== undefined || comboType !== null )
	 {
		 for(var i = 0; i < comboType.length; i++)
		 {
			 data[idx++] = comboType[i].value;
			 
			 if( comboType[i].id == "search_stus_cd" )
			 {
				 sessionStorage.setItem(id+"_stus", comboType[i].value);
			 }
			 if( comboType[i].id == "search_resn_cd" )
			 {
				 sessionStorage.setItem(id+"_resn", comboType[i].value);
			 }
		 }
	 }
	 
	 sessionStorage.setItem(id+"_data", JSON.stringify(data));
}

function getSessionStorageData(id, obj)
{
	 var data  = JSON.parse(sessionStorage.getItem(id+"_data"));

	 if( data !== null )
	 {
		 var idx       = 0;
		 var editType  = obj.find("INPUT");
		 var comboType = obj.find("SELECT");
		 
		 if( editType !== undefined || editType !== null )
		 {
			 for(var i = 0; i < editType.length; i++)
			 {
		         editType[i].value = data[idx++];
			 }
		 }
		
		 if( comboType !== undefined || comboType !== null )
		 {
			 for(var i = 0; i < comboType.length; i++)
			 {
				 comboType[i].value = data[idx++] ;
			 }
		 }
	 }
}

function setSessionStorageGrid(id, grid)
{ 
	var jsonObj = new Object();
	var data    = new Array(7);

	jsonObj.total            = grid.getGridParam('lastpage'); 
    jsonObj.records          = grid.getGridParam('records');
    jsonObj.page             = String(grid.getGridParam('page')); 
    jsonObj.rows             = grid.getRowData();
    jsonObj.psize            = grid.getGridParam('rowNum'); 
    
    data[0]                  = jsonObj.psize; 
    data[1]                  = jsonObj.page;
    data[2]                  = jsonObj.total; 
    data[3]                  = jsonObj.records;
    data[4]                  = JSON.stringify(jsonObj);
    
    data[5]                  = grid.jqGrid('getGridParam','selrow');
    data[6]                  = grid.closest(".ui-jqgrid-bdiv").scrollTop();
	 
	sessionStorage.setItem(id+"_grid", JSON.stringify(data));
}

function getSessionStorageGrid(id, grid, inputArea)
{
    var data = JSON.parse(sessionStorage.getItem(id+"_grid"));

    if( data !== null )
    {
		grid.setGridParam({
	        datatype: "jsonstring",
	        datastr: data[4],
	        rowNum: Number(data[0]),
	        gridComplete : function(data) 
	        {
	            grid.setGridParam({
	                url:id+".do", 
	                datatype:"json", 
	                postData:{"param" : JSON.stringify(inputArea)}
	            });  
	        },	          
	   }).trigger ("reloadGrid"); 
	    
		grid.setGridParam({
	        page:     Number(data[1]),
	        lastpage: Number(data[2]),
	        records:  Number(data[3])        
	   });
	    
	    
		grid[0].updatepager(false, true);  
	   
		grid.jqGrid('setSelection', data[5], true);
		grid.closest(".ui-jqgrid-bdiv").scrollTop(data[6]);	
    }
	
}

function clearSessionStorage(id)
{ 
    sessionStorage.removeItem(id+"_grid");
	sessionStorage.removeItem(id+"_data");

	sessionStorage.refresh = "other";
}

function triggerRefresh()
{
	sessionStorage.refresh = "other";

    window.onkeydown = function() 
    {
        var key = event.keyCode;

        if( (event.ctrlKey == true && (key == 78 || key == 82)) || (key == 116) ) 
        { 
            sessionStorage.refresh = "f5";  
        }
    }
}
