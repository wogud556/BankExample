var debtorHtml=
"<table width='100%' bgcolor='LightGrey'>"+
    "<tr>"+
        "<td height='8'/>"+
    "</tr>"+
    "<tr>"+
        "<td align='right' dStyle>BIC</td>"+
        "<td>" +
            "<input id='sendBnkBIC'     name='sendBnkBIC' type='text' dtStyle size='14'  value='' readonly/>" +
        "</td>"+
    "</tr>"+
    "<tr>"+
        "<td height='6'/>"+
    "</tr>"+     
    "<tr>"+
        "<td align='right' dStyle>송금금액</td>" +
        "<td/>"+
    "</tr>"+    
    "<tr>"+
        "<td align='right'>" +
            "<input id='sendBnkCur'     name='sendBnkCur'   type='text' dtStyle size='3'   value='' readonly/>" +
        "</td>"+
        "<td>"+
            "<input id='sendBnkAmt'     name='sendBnkAmt'   type='text' amtStyle size='19'  value='' readonly/>" +
        "</td>"+
    "</tr>"+	
    "nmlStart"+  
    "<tr>"+
       "<td height='40'/>"+
    "</tr>"+    
    "<tr>"+
        "<td align='right' dStyle>발신일시</td>"+
        "<td>"+
            "<input id='sendBnkSndDtm'  name='sendBnkSndDtm'  type='text' dtStyle size='19'   value='' readonly/>" +
        "</td>"+
    "</tr>"+                                        
    "<tr>"+
        "<td height='22'/>" +
    "</tr>"+ 
    "<tr>"+
        "<td height='6'/>"+
    "</tr>"+  
    "nmlEnd"+
    "timeStart"+   
    "<tr>"+
        "<td height='15'/>"+
    "</tr>"+                
    "<tr>"+
        "<td align='right' dStyle>발신일시</td>"+
    "</tr>"+     
    "<tr>"+
        "<td align='right' dStyle>gCCT</td>"+
        "<td>"+
            "<input id='sendBnkSndDtm'  name='sendBnkSndDtm'       type='text' dtStyle size='19' value='' readonly/>" +
        "</td>"+
    "</tr>"+
    "<tr>"+
        "<td align='right' dStyle>gCOV</td>"+
        "<td>"+
            "<input id='sendCovBnkSndDtm'  name='sendCovBnkSndDtm'  type='text' dtStyle size='19' value='' readonly/>" +
        "</td>"+
    "</tr>"+ 
    "<tr>"+
        "<td height='12'/>"+
    "</tr>"+     
    "timeEnd"+    
    "<tr>"+
        "<td align='right' dStyle>수수료</td>" +
        "<td/>"+
    "</tr>"+
    "<tr>"+
        "<td align='right'>" +
            "<input id='sendBnkFeeCur'  name='sendBnkFeeCur'  type='text' dtStyle size='3'  value='' readonly/>" +
        "</td>"+
        "<td>"+
            "<input id='sendBnkFeeAmt'  name='sendBnkFeeAmt'   type='text' amtStyle size='19' value='' readonly/>" +
        "</td>"+
    "</tr>"+ 
    "tagStart"+
    "<tr>"+
        "<td align='right' dtStyle>환율</td>"+
	    "<td>"+
            "<input id='sendBnkRate'    name='sendBnkRate'     type='text' amtStyle size='9'  value='' readonly/>" +
        "</td>"+
    "</tr>"+
    "tagEnd"+
"</table>";


var creditorHtml=
"<table width='100%' bgcolor='LightGrey'>"+
    "<tr>"+
        "<td height='8'/>"+
    "</tr>"+
    "<tr>"+
        "<td align='right' dStyle>BIC</td>"+
        "<td>" +
            "<input id='recvBnkBIC'     name='recvBnkBIC'     type='text' dtStyle size='14' value='' readonly/>" +
        "</td>"+
    "</tr>"+
    "<tr>"+
        "<td height='6'/>"+
    "</tr>"+    
    "<tr>"+
        "<td align='right' dStyle>송금금액</td>" +
        "<td/>"+
    "</tr>"+    
    "<tr>"+
        "<td align='right'>" +
            "<input id='recvBnkCur'     name='recvBnkCur'     type='text' dtStyle size='3'   value='' readonly/>" +
        "</td>"+
        "<td>"+
            "<input id='recvBnkAmt'     name='recvBnkAmt'     type='text' amtStyle size='19' value='' readonly/>" +
        "</td>"+
    "</tr>"+    
    "<tr>"+
        "<td height='12'/>"+
    "</tr>"+                                       
    "<tr>"+
        "<td align='right' dStyle>수신일시</td>"+
        "<td>"+
            "<input id='recvBnkRcvDtm'  name='recvBnkRcvDtm'  type='text' dtStyle size='19' value='' readonly/>" +
        "</td>"+
    "</tr>"+
    "<tr>"+
        "<td align='right' dStyle>완료일시</td>"+
        "<td>"+
            "<input id='recvBnkPayDtm'  name='recvBnkPayDtm'  type='text' dtStyle size='19' value='' readonly/>" +
        "</td>"+
    "</tr>"+                                        
    "<tr>"+
        "<td align='right' dStyle>경과시간</td>"+
        "<td>" +
            "<input id='recvBnkIntvl'   name='recvBnkIntvl'   type='text' dtStyle size='19' value='' readonly/>" +
        "</td>"+
    "</tr>"+ 
    "<tr>"+
        "<td height='6'/>"+
    "</tr>"+                                          
    "<tr>"+
        "<td align='right' dStyle>수수료</td>" +
        "<td/>"+
    "</tr>"+
    "<tr>"+
        "<td align='right'>" +
            "<input id='recvBnkFeeCur'  name='recvBnkFeeCur'  type='text' dtStyle size='3'  value='' readonly/>" +
        "</td>"+
        "<td>"+
            "<input id='recvBnkFeeAmt'  name='recvBnkFeeAmt'  type='text' amtStyle size='19' value='' readonly/>" +
        "</td>"+
    "</tr>"+ 
    "tagStart"+
    "<tr>"+
	    "<td align='right' dStyle>환율</td>"+
	    "<td>"+
	        "<input id='recvBnkRate'    name='recvBnkRate'    type='text' amtStyle size='9'  value='' readonly/>" +
	    "</td>"+
	"</tr>"+
	"tagEnd"+
"</table>";

var intermediaryAgent1Html=
"<table width='100%' bgcolor='LightGrey'>"+
    "<tr>"+
        "<td height='8'/>"+
    "</tr>"+	
    "<tr>"+
        "<td align='right' dStyle>BIC</td>"+
        "<td>" +
            "<input id='relayBnk1BIC'    name='relayBnk1BIC'    type='text' dtStyle size='14' value='' readonly/>" +
        "</td>"+
    "</tr>"+
    "<tr>"+
        "<td height='6'/>"+
    "</tr>"+	    
    "<tr>"+
        "<td align='right' dStyle>송금금액</td>" +
        "<td/>"+
    "</tr>"+
    "<tr>"+
        "<td align='right'>" +
            "<input id='relayBnk1Cur'    name='relayBnk1Cur'    type='text' dtStyle size='3'  value='' readonly/>" +
        "</td>"+
        "<td>" +
            "<input id='relayBnk1Amt'    name='relayBnk1Amt'    type='text' amtStyle size='19' value='' readonly/>" +
        "</td>"+
    "</tr>"+	
    "nmlForNonGpiStart"+      
    "<tr>"+
        "<td height='12'/>"+
    "</tr>"+                                       
    "<tr>"+
        "<td align='right' dStyle>수신일시</td>"+
        "<td>"+
            "<input id='relayBnk1RcvDtm' name='relayBnk1RcvDtm' type='text' dtStyle size='19' value='' readonly/>" +
        "</td>"+
    "</tr>"+
    "<tr>"+
        "<td align='right' dStyle><div id='relay1_label'>발신일시</div></td>"+
        "<td>"+
            "<input id='relayBnk1SndDtm' name='relayBnk1SndDtm' type='text' dtStyle size='19' value='' readonly/>" +
        "</td>"+
    "</tr>"+                                        
    "<tr>"+
        "<td align='right' dStyle>경과시간</td>"+
        "<td>"+
            "<input id='relayBnk1Intvl'  name='relayBnk1Intvl'  type='text' dtStyle size='19' value='' readonly/>" +
        "</td>"+
    "</tr>"+ 
    "nmlForNonGpiEnd"+ 
    "timeForNonGpiStart"+  
    "<tr>"+
        "<td height='15'/>"+
    "</tr>"+                
    "<tr>"+
        "<td align='right' dStyle>발신일시</td>"+
    "</tr>"+     
    "<tr>"+
        "<td align='right' dStyle>gCCT</td>"+
        "<td>"+
            "<input id='relayBnk1SndDtm'  name='relayBnk1SndDtm'       type='text' dtStyle size='19' value='' readonly/>" +
        "</td>"+
    "</tr>"+
    "<tr>"+
        "<td align='right' dStyle>gCOV</td>"+
        "<td>"+
            "<input id='relayBnk1CovSndDtm'  name='relayBnk1CovSndDtm'  type='text' dtStyle size='19' value='' readonly/>" +
        "</td>"+
    "</tr>"+ 
    "<tr>"+
        "<td height='4'/>"+
    "</tr>"+   
    "timeForNonGpiEnd"+
    "covStart"+
    "<tr>"+
        "<td height='6'/>"+
    "</tr>"+  
    "<tr>"+
        "<td align='right' dStyle>수수료</td>" +
        "<td/>"+
    "</tr>"+
    "<tr>"+
        "<td align='right'>" +
            "<input id='relayBnk1FeeCur' name='relayBnk1FeeCur' type='text' dtStyle size='3'  value='' readonly/>" +
        "</td>"+
        "<td>" +
            "<input id='relayBnk1FeeAmt' name='relayBnk1FeeAmt' type='text' amtStyle size='19' value='' readonly/>" +
        "</td>"+
    "</tr>"+ 
    "tagStart"+
    "<tr>"+
        "<td align='right' dStyle>환율</td>"+
        "<td>"+
            "<input id='relayBnk1Rate'  name='relayBnk1Rate'   type='text' amtStyle size='9'  value='' readonly/>" +
        "</td>"+
    "</tr>"+
    "tagEnd"+
"</table>";

var debtorAgent=
"<div id='dBox'>"+
    debtorHtml+
"</div>";


var creditorAgent=
"<div id='dBox'>"+
    creditorHtml+
"</div>";	

var covDeptorAgent=
"<div id='boxFlag'>"+
    debtorHtml.replace(/tagStart/gi, "covFxStart").replace(/tagEnd/gi, "covFxEnd")+
"</div>";
    

var covCreditorAgent=
"<div id='boxFlag'>"+
    creditorHtml.replace(/tagStart/gi, "covFxStart").replace(/tagEnd/gi, "covFxEnd")+
"</div>";	

var intermediaryAgent1ForNonGpi=
	"<div id='boxFlag'>"+
	    intermediaryAgent1Html.replace(/tagStart/gi, "covFxStart").replace(/tagEnd/gi, "covFxEnd").replace(/covStart/gi, "")+
	"</div>";

var intermediaryAgent1=
"<div id='dBox'>"+	
    intermediaryAgent1Html
"</div>";

var intermediaryAgent2=
"<div id='dBox'>"+	
	"<table width='100%' bgcolor='LightGrey'>"+
        "<tr>"+
            "<td height='8'/>"+
        "</tr>"+	
	    "<tr>"+
	        "<td align='right' dStyle>BIC</td>"+
	        "<td>" +
	            "<input id='relayBnk2BIC'    name='relayBnk2BIC'    type='text' dtStyle size='14' value='' readonly/>" +
	        "</td>"+
	    "</tr>"+
        "<tr>"+
            "<td height='6'/>"+
        "</tr>"+	    
	    "<tr>"+
            "<td align='right' dStyle>송금금액</td>" +
            "<td/>"+
        "</tr>"+
        "<tr>"+
            "<td align='right'>" +
                "<input id='relayBnk2Cur'    name='relayBnk2Cur'    type='text' dtStyle size='3'  value='' readonly/>" +
            "</td>"+
            "<td>" +
                "<input id='relayBnk2Amt'    name='relayBnk2Amt'    type='text' amtStyle size='19' value='' readonly/>" +
            "</td>"+
        "</tr>"+	    
	    "<tr>"+
	        "<td height='12'/>"+
	    "</tr>"+                                       
	    "<tr>"+
	        "<td align='right' dStyle>수신일시</td>"+
	        "<td>"+
	            "<input id='relayBnk2RcvDtm' name='relayBnk2RcvDtm' type='text' dtStyle size='19' value='' readonly/>" +
	        "</td>"+
	    "</tr>"+
	    "<tr>"+
	        "<td align='right' dStyle><div id='relay2_label'>발신일시</div></td>"+
	        "<td>"+
	            "<input id='relayBnk2SndDtm' name='relayBnk2SndDtm' type='text' dtStyle size='19' value='' readonly/>" +
	        "</td>"+
	    "</tr>"+                                        
	    "<tr>"+
	        "<td align='right' dStyle>경과시간</td>"+
	        "<td>"+
	            "<input id='relayBnk2Intvl'  name='relayBnk2Intvl'  type='text' dtStyle size='19' value='' readonly/>" +
	        "</td>"+
	    "</tr>"+ 
	    "covStart"+
	    "<tr>"+
	        "<td height='6'/>"+
	    "</tr>"+                                           
	    "<tr>"+
	        "<td align='right' dStyle>수수료</td>" +
	        "<td/>"+
	    "</tr>"+
	    "<tr>"+
	        "<td align='right'>" +
	            "<input id='relayBnk2FeeCur' name='relayBnk2FeeCur' type='text' dtStyle size='3'  value='' readonly/>" +
	        "</td>"+
	        "<td>" +
	            "<input id='relayBnk2FeeAmt' name='relayBnk2FeeAmt' type='text' amtStyle size='19' value='' readonly/>" +
	        "</td>"+
	    "</tr>"+ 
	    "tagStart"+
        "<tr>"+
		    "<td align='right' dStyle>환율</td>"+
		    "<td>"+
		        "<input id='relayBnk2Rate'  name='relayBnk2Rate'   type='text' amtStyle size='9'  value='' readonly/>" +
		    "</td>"+
		"</tr>"+
		"tagEnd"+
	"</table>"+
"</div>";


var intermediaryAgent3=
"<div id='dBox'>"+	
	"<table width='100%' bgcolor='LightGrey'>"+
        "<tr>"+
            "<td height='8'/>"+
        "</tr>"+	
	    "<tr>"+
	        "<td align='right' dStyle>BIC</td>"+
	        "<td>" +
	            "<input id='relayBnk3BIC'    name='relayBnk3BIC'    type='text' dtStyle size='14' value='' readonly/>" +
	        "</td>"+
	    "</tr>"+
        "<tr>"+
            "<td height='6'/>"+
        "</tr>"+	    
	    "<tr>"+
            "<td align='right' dStyle>송금금액</td>" +
            "<td/>"+
        "</tr>"+
        "<tr>"+
            "<td align='right'>" +
                "<input id='relayBnk3Cur'    name='relayBnk3Cur'    type='text' dtStyle size='3'  value='' readonly/>" +
            "</td>"+
            "<td>" +
                "<input id='relayBnk3Amt'    name='relayBnk3Amt'    type='text' amtStyle size='19' value='' readonly/>" +
            "</td>"+
        "</tr>"+    
	    "<tr>"+
	        "<td height='12'/>"+
	    "</tr>"+                                       
	    "<tr>"+
	        "<td align='right' dStyle>수신일시</td>"+
	        "<td>"+
	            "<input id='relayBnk3RcvDtm' name='relayBnk3RcvDtm' type='text' dtStyle size='19' value='' readonly/>" +
	        "</td>"+
	    "</tr>"+
	    "<tr>"+
	        "<td align='right' dStyle><div id='relay3_label'>발신일시</div></td>"+
	        "<td>"+
	            "<input id='relayBnk3SndDtm' name='relayBnk3SndDtm' type='text' dtStyle size='19' value='' readonly/>" +
	        "</td>"+
	    "</tr>"+                                        
	    "<tr>"+
	        "<td align='right' dStyle>경과시간</td>"+
	        "<td>"+
	            "<input id='relayBnk3Intvl'  name='relayBnk3Intvl'  type='text' dtStyle size='19' value='' readonly/>" +
	        "</td>"+
	    "</tr>"+ 
	    "covStart"+
	    "<tr>"+
	        "<td height='6'/>"+
	    "</tr>"+                                           
	    "<tr>"+
	        "<td align='right' dStyle>수수료</td>" +
	        "<td/>"+
	    "</tr>"+
	    "<tr>"+
	        "<td align='right'>" +
	            "<input id='relayBnk3FeeCur' name='relayBnk3FeeCur' type='text' dtStyle size='3'  value='' readonly/>" +
	        "</td>"+
	        "<td>" +
	            "<input id='relayBnk3FeeAmt' name='relayBnk3FeeAmt' type='text' amtStyle size='19' value='' readonly/>" +
	        "</td>"+
	    "</tr>"+ 
	    "tagStart"+
        "<tr>"+
		    "<td align='right' dStyle>환율</td>"+
		    "<td>"+
		        "<input id='relayBnk3Rate'  name='relayBnk3Rate'   type='text' amtStyle size='9'  value='' readonly/>" +
		    "</td>"+
		"</tr>"+
		"tagEnd"+
	"</table>"+
"</div>";


var intermediaryAgent4=
"<div id='dBox'>"+	
	"<table width='100%' bgcolor='LightGrey'>"+
        "<tr>"+
            "<td height='8'/>"+
        "</tr>"+	
	    "<tr>"+
	        "<td align='right' dStyle>BIC</td>"+
	        "<td>" +
	            "<input id='relayBnk4BIC'    name='relayBnk4BIC'    type='text' dtStyle size='14' value='' readonly/>" +
	        "</td>"+
	    "</tr>"+
        "<tr>"+
            "<td height='6'/>"+
        "</tr>"+	    
	    "<tr>"+
            "<td align='right' dStyle>송금금액</td>" +
            "<td/>"+
        "</tr>"+
        "<tr>"+
            "<td align='right'>" +
                "<input id='relayBnk4Cur'    name='relayBnk4Cur'    type='text' dtStyle size='3'  value='' readonly/>" +
            "</td>"+
            "<td>" +
                "<input id='relayBnk4Amt'    name='relayBnk4Amt'    type='text' amtStyle size='19' value='' readonly/>" +
            "</td>"+
        "</tr>"+	    
	    "<tr>"+
	        "<td height='12'/>"+
	    "</tr>"+                                       
	    "<tr>"+
	        "<td align='right' dStyle>수신일시</td>"+
	        "<td>"+
	            "<input id='relayBnk4RcvDtm' name='relayBnk4RcvDtm' type='text' dtStyle size='19' value='' readonly/>" +
	        "</td>"+
	    "</tr>"+
	    "<tr>"+
	        "<td align='right' dStyle><div id='relay4_label'>발신일시</div></td>"+
	        "<td>"+
	            "<input id='relayBnk4SndDtm' name='relayBnk4SndDtm' type='text' dtStyle size='19' value='' readonly/>" +
	        "</td>"+
	    "</tr>"+                                        
	    "<tr>"+
	        "<td align='right' dStyle>경과시간</td>"+
	        "<td>"+
	            "<input id='relayBnk4Intvl'  name='relayBnk4Intvl'  type='text' dtStyle size='19' value='' readonly/>" +
	        "</td>"+
	    "</tr>"+ 
	    "covStart"+
	    "<tr>"+
	        "<td height='6'/>"+
	    "</tr>"+                                           
	    "<tr>"+
	        "<td align='right' dStyle>수수료</td>" +
	        "<td/>"+
	    "</tr>"+
	    "<tr>"+
	        "<td align='right'>" +
	            "<input id='relayBnk4FeeCur' name='relayBnk4FeeCur' type='text' dtStyle size='3'  value='' readonly/>" +
	        "</td>"+
	        "<td>" +
	            "<input id='relayBnk4FeeAmt' name='relayBnk4FeeAmt' type='text' amtStyle size='19' value='' readonly/>" +
	        "</td>"+
	    "</tr>"+ 
	    "tagStart"+
        "<tr>"+
		    "<td align='right' dStyle>환율</td>"+
		    "<td>"+
		        "<input id='relayBnk4Rate'  name='relayBnk4Rate'   type='text' amtStyle size='9'  value='' readonly/>" +
		    "</td>"+
		"</tr>"+
		"tagEnd"+
	"</table>"+
"</div>";


var intermediaryAgent5=
"<div id='dBox'>"+	
	"<table width='100%' bgcolor='LightGrey'>"+
        "<tr>"+
            "<td height='8'/>"+
        "</tr>"+	
	    "<tr>"+
	        "<td align='right' dStyle>BIC</td>"+
	        "<td>" +
	            "<input id='relayBnk5BIC'    name='relayBnk5BIC'    type='text' dtStyle size='14' value='' readonly/>" +
	        "</td>"+
	    "</tr>"+
        "<tr>"+
            "<td height='6'/>"+
        "</tr>"+	    
	    "<tr>"+
            "<td align='right' dStyle>송금금액</td>" +
            "<td/>"+
        "</tr>"+
        "<tr>"+
            "<td align='right'>" +
                "<input id='relayBnk5Cur'    name='relayBnk5Cur'    type='text' dtStyle size='3'  value='' readonly/>" +
            "</td>"+
            "<td>" +
                "<input id='relayBnk5Amt'    name='relayBnk5Amt'    type='text' amtStyle size='19' value='' readonly/>" +
            "</td>"+
        "</tr>"+	    
	    "<tr>"+
	        "<td height='12'/>"+
	    "</tr>"+                                       
	    "<tr>"+
	        "<td align='right' dStyle>수신일시</td>"+
	        "<td>"+
	            "<input id='relayBnk5RcvDtm' name='relayBnk5RcvDtm' type='text' dtStyle size='19' value='' readonly/>" +
	        "</td>"+
	    "</tr>"+
	    "<tr>"+
	        "<td align='right' dStyle><div id='relay5_label'>발신일시</div></td>"+
	        "<td>"+
	            "<input id='relayBnk5SndDtm' name='relayBnk5SndDtm' type='text' dtStyle size='19' value='' readonly/>" +
	        "</td>"+
	    "</tr>"+                                        
	    "<tr>"+
	        "<td align='right' dStyle>경과시간</td>"+
	        "<td>"+
	            "<input id='relayBnk5Intvl'  name='relayBnk5Intvl'  type='text' dtStyle size='19' value='' readonly/>" +
	        "</td>"+
	    "</tr>"+ 
	    "covStart"+
	    "<tr>"+
	        "<td height='6'/>"+
	    "</tr>"+                                           
	    "<tr>"+
	        "<td align='right' dStyle>수수료</td>" +
	        "<td/>"+
	    "</tr>"+
	    "<tr>"+
	        "<td align='right'>" +
	            "<input id='relayBnk5FeeCur' name='relayBnk5FeeCur' type='text' dtStyle size='3'  value='' readonly/>" +
	        "</td>"+
	        "<td>" +
	            "<input id='relayBnk5FeeAmt' name='relayBnk5FeeAmt' type='text' amtStyle size='19' value='' readonly/>" +
	        "</td>"+
	    "</tr>"+ 
	    "tagStart"+
        "<tr>"+
		    "<td align='right' dStyle>환율</td>"+
		    "<td>"+
		        "<input id='relayBnk5Rate'  name='relayBnk5Rate'    type='text' amtStyle size='9'  value='' readonly/>" +
		    "</td>"+
		"</tr>"+
		"tagEnd"+
	"</table>"+
"</div>";


var agent2=	
"<div id='boxProgress' style='border: 1px solid #1950AE;'>"+
    "<table width='100%'>"+
        "<tr>"+
            "<td width='19%' style='border: 1px solid #195DAE;' align='center' class='SRflag0'>Originator</td>"+
            "<td width='62%' style='border: 1px solid #195DAE;' align='center' class='done'>MT 103</td>"+
            "<td width='19%' style='border: 1px solid #195DAE;' align='center' class='credColor'>Beneficiary</td>"+
        "</tr>"+
    "</table>"+
"</div>"+	
"<table>"+
    "<tr>"+
        "<td>"+
             debtorAgent+ 
        "</td>"+  
        "<td>" +
           "<div id='GapAgent2'/>"+        
        "</td>"+
        "<td>"+
            creditorAgent+           
        "</td>"+
    "</tr>"+
"</table>";


var agent3=
"<div id='boxProgress' style='border: 1px solid #1950AE;'>"+
    "<table width='100%'>"+
        "<tr>"+
            "<td width='19%' style='border: 1px solid #195DAE;' align='center' class='SRflag0'>Originator</td>"+
            "<td width='62%' style='border: 1px solid #195DAE;' align='center' class='SRflag1'>Intermediary</td>"+
            "<td width='19%' style='border: 1px solid #195DAE;' align='center' class='credColor'>Beneficiary</td>"+
        "</tr>"+
    "</table>"+
"</div>"+	
"<table>"+
    "<tr>"+
        "<td>"+
            debtorAgent+  
        "</td>"+  
        "<td>" +
           "<div id='GapAgent3'/>" +
        "</td>"+
        "<td>"+
            intermediaryAgent1+ 
	    "</td>"+  
	    "<td>" +
	       "<div id='GapAgent3'/>" +
	    "</td>"+        
        "<td>"+
            creditorAgent+
        "</td>"+
    "</tr>"+        
"</table>";


var agent4=
"<div id='boxProgress' style='border: 1px solid #1950AE;'>"+
    "<table width='100%'>"+
        "<tr>"+
            "<td width='19%' style='border: 1px solid #195DAE;' align='center' class='SRflag0'>Originator</td>"+
            "<td width='31%' style='border: 1px solid #195DAE;' align='center' class='SRflag1'>Intermediary1</td>"+
            "<td width='31%' style='border: 1px solid #195DAE;' align='center' class='SRflag2'>Intermediary2</td>"+            
            "<td width='19%' style='border: 1px solid #195DAE;' align='center' class='credColor'>Beneficiary</td>"+
        "</tr>"+
    "</table>"+
"</div>"+
"<table>"+
    "<tr>"+
        "<td>"+
            debtorAgent+ 
        "</td>"+  
        "<td>" +
           "<div id='GapAgent4'/>" +
        "</td>"+
        "<td>"+
            intermediaryAgent1+
	    "</td>"+  
	    "<td>" +
	       "<div id='GapAgent4'/>" +
	    "</td>"+
        "<td>"+
	        intermediaryAgent2+
	    "</td>"+  
	    "<td>" +
	       "<div id='GapAgent4'/>"+
	    "</td>"+        	    
	    "<td>"+
            creditorAgent+
        "</td>"+
    "</tr>"+        
"</table>";
    
    
var agent5=
"<div id='boxProgress' style='border: 1px solid #1950AE;'>"+
    "<table width='100%'>"+
        "<tr>"+
            "<td width='19%' style='border: 1px solid #195DAE;' align='center' class='SRflag0'>Originator</td>"+
            "<td width='20%' style='border: 1px solid #195DAE;' align='center' class='SRflag1'>Intermediary1</td>"+
            "<td width='20%' style='border: 1px solid #195DAE;' align='center' class='SRflag2'>Intermediary2</td>"+   
            "<td width='20%' style='border: 1px solid #195DAE;' align='center' class='SRflag3'>Intermediary3</td>"+              
            "<td width='19%' style='border: 1px solid #195DAE;' align='center' class='credColor'>Beneficiary</td>"+
        "</tr>"+
    "</table>"+
"</div>"+	
"<table>"+
    "<tr>"+
        "<td>"+
            debtorAgent+
        "</td>"+  
        "<td>" +
           "<div id='GapAgent5'/>" +
        "</td>"+
        "<td>"+
            intermediaryAgent1+
	    "</td>"+  
	    "<td>" +
	       "<div id='GapAgent5'/>" +
	    "</td>"+
        "<td>"+
	        intermediaryAgent2+
	    "</td>"+  
	    "<td>" +
	       "<div id='GapAgent5'/>" +
	    "</td>"+        	    	
		"<td>"+
		    intermediaryAgent3+
		"</td>"+  
		"<td>" +
		   "<div id='GapAgent5'/>" +
		"</td>"+        	    
		"<td>"+
		    creditorAgent+	    
		"</td>"+
    "</tr>"+        
"</table>";


var agent6=
"<div id='boxProgress' style='border: 1px solid #1950AE;'>"+
    "<table width='100%'>"+
        "<tr>"+
            "<td width='14%' style='border: 1px solid #195DAE;' align='center' class='SRflag0'>Originator</td>"+
            "<td width='18%' style='border: 1px solid #195DAE;' align='center' class='SRflag1'>Intermediary1</td>"+
            "<td width='18%' style='border: 1px solid #195DAE;' align='center' class='SRflag2'>Intermediary2</td>"+   
            "<td width='18%' style='border: 1px solid #195DAE;' align='center' class='SRflag3'>Intermediary3</td>"+
            "<td width='18%' style='border: 1px solid #195DAE;' align='center' class='SRflag4'>Intermediary4</td>"+              
            "<td width='14%' style='border: 1px solid #195DAE;' align='center' class='credColor'>Beneficiary</td>"+
        "</tr>"+
    "</table>"+
"</div>"+	
"<table>"+
	"<tr>"+
	    "<td>"+
	        debtorAgent+   
	    "</td>"+  
	    "<td>" +
	       "<div id='GapAgent6'/>" +
	    "</td>"+
	    "<td>"+
	        intermediaryAgent1+   
	    "</td>"+  
	    "<td>" +
	       "<div id='GapAgent6'/>" +
	    "</td>"+
	    "<td>"+
	        intermediaryAgent2+   
	    "</td>"+  
	    "<td>" +
	       "<div id='GapAgent6'/>" +
	    "</td>"+        	    	
		"<td>"+
		    intermediaryAgent3+   
		"</td>"+  
		"<td>" +
		   "<div id='GapAgent6'/>" +
	    "</td>"+ 		   
		"<td>"+
		    intermediaryAgent4+   
		"</td>"+  
		"<td>" +
		   "<div id='GapAgent6'/>" +
		"</td>"+        	    
	    "<td>"+
		    creditorAgent+
		"</td>"+
    "</tr>"+        
"</table>";	
	

var agent7=
"<div id='boxProgress' style='border: 1px solid #1950AE;'>"+
    "<table width='100%'>"+
        "<tr>"+
            "<td width='14%' style='border: 1px solid #195DAE;' align='center' class='SRflag0'>Originator</td>"+
            "<td width='14%' style='border: 1px solid #195DAE;' align='center' class='SRflag1'>Intermediary1</td>"+
            "<td width='14%' style='border: 1px solid #195DAE;' align='center' class='SRflag2'>Intermediary2</td>"+   
            "<td width='14%' style='border: 1px solid #195DAE;' align='center' class='SRflag3'>Intermediary3</td>"+
            "<td width='14%' style='border: 1px solid #195DAE;' align='center' class='SRflag4'>Intermediary4</td>"+ 
            "<td width='14%' style='border: 1px solid #195DAE;' align='center' class='SRflag5'>Intermediary5</td>"+              
            "<td width='14%' style='border: 1px solid #195DAE;' align='center' class='credColor'>Beneficiary</td>"+
        "</tr>"+
    "</table>"+
"</div>"+		
"<table>"+
	"<tr>"+
	    "<td>"+
	        debtorAgent+   
	    "</td>"+  
	    "<td>"+
	        intermediaryAgent1+       
	    "</td>"+  
	    "<td>"+
	        intermediaryAgent2+        
	    "</td>"+          	    	
		"<td>"+
		    intermediaryAgent3+		    
		"</td>"+  
		"<td>"+
		    intermediaryAgent4+	    
		"</td>"+ 
		"<td>"+
	        intermediaryAgent5+        
	    "</td>"+		
		"<td>"+
		    creditorAgent+	    
		"</td>"+
    "</tr>"+        
"</table>";

    
var covAgent1=
"<div id='boxProgress' style='border: 1px solid #1950AE;'>"+
    "<table width='100%'>"+
        "<tr>"+
            "<td width='19%' style='border: 1px solid #195DAE;' align='center' class='SRflag0'>Originator</td>"+
            "<td width='62%' style='border: 1px solid #195DAE;' align='center' class='SRflagc'>gCCTmsg</td>"+
            "<td width='19%' style='border: 1px solid #195DAE;' align='center' class='credColor'>Beneficiary</td>"+
        "</tr>"+
    "</table>"+
"</div>"+	
"<table>"+
    "<tr>"+
        "<td>"+
            covDeptorAgent+ 
        "</td>"+  
        "<td>" +
	        "<br/>" +
	        "<div id='boxProgressCOV' style='border: 1px solid #1950AE;'>"+
		        "<table width='100%' height='100%'>"+
		            "<tr>"+
		                "<td width='100%' style='border: 1px solid #195DAE;' align='center' class='SRflag1'>COV Reim' Agent1</td>"+
		            "</tr>"+
		        "</table>"+
			"</div>"+	
			"<table width='100%'>"+
			    "<tr>"+
			        "<td width = '33%'/>"+
			        "<td width>"+
			            intermediaryAgent1.replace(/발신일시/, "완료일시") +   
			        "</td>"+
			    "</tr>"+
		    "</table>"+     
        "</td>"+
        "<td>"+
            covCreditorAgent+            
        "</td>"+
    "</tr>"+
"</table>";


var covAgent2=
"<div id='boxProgress' style='border: 1px solid #1950AE;'>"+
    "<table width='100%'>"+
        "<tr>"+
            "<td width='19%' style='border: 1px solid #195DAE;' align='center' class='SRflag0'>Originator</td>"+
            "<td width='62%' style='border: 1px solid #195DAE;' align='center' class='SRflagc'>gCCTmsg</td>"+
            "<td width='19%' style='border: 1px solid #195DAE;' align='center' class='credColor'>Beneficiary</td>"+
        "</tr>"+
    "</table>"+
"</div>"+	
"<table>"+
    "<tr>"+
        "<td>"+
            covDeptorAgent+ 
        "</td>"+  
        "<td>" +
            "<br/>" +
	        "<div id='boxProgressCOV' style='border: 1px solid #1950AE;'>"+
		        "<table width='100%' height='100%'>"+
		            "<tr>"+
		            "<td width='50%' style='border: 1px solid #195DAE;' align='center' class='SRflag1'>COV Reim' Agent1</td>"+
		            "<td width='50%' style='border: 1px solid #195DAE;' align='center' class='SRflag2'>COV Reim' Agent2</td>"+        
		            "</tr>"+
		        "</table>"+
		    "</div>"+	
		    "<table width='100%'>"+
		        "<tr>"+
		            "<td width = '20%'/>"+
		            "<td width = '20%'>"+
		                intermediaryAgent1+   
		            "</td>"+
		            "<td width = '20%'/>"+	        
		            "<td width = '20%'>"+
		    	        intermediaryAgent2.replace(/발신일시/, "완료일시") +
		    	    "</td>"+    
		            "<td width = '20%'/>"+	    
		        "</tr>"+
		    "</table>"+	        
        "</td>"+
        "<td>"+
            covCreditorAgent+           
        "</td>"+
    "</tr>"+
"</table>";		
	

var covAgent3=
	"<div id='boxProgress' style='border: 1px solid #1950AE;'>"+
    "<table width='100%'>"+
        "<tr>"+
            "<td width='19%' style='border: 1px solid #195DAE;' align='center' class='SRflag0'>Originator</td>"+
            "<td width='62%' style='border: 1px solid #195DAE;' align='center' class='SRflagc'>gCCTmsg</td>"+
            "<td width='19%' style='border: 1px solid #195DAE;' align='center' class='credColor'>Beneficiary</td>"+
        "</tr>"+
    "</table>"+
"</div>"+	
"<table>"+
    "<tr>"+
        "<td>"+
            covDeptorAgent+ 
        "</td>"+  
        "<td>" +
            "<br/>" +
	        "<div id='boxProgressCOV' style='border: 1px solid #1950AE;'>"+
		        "<table width='100%' height='100%'>"+
		            "<tr>"+
		            "<td width='33%' style='border: 1px solid #195DAE;' align='center' class='SRflag1'>COV Reim' Agent1</td>"+
		            "<td width='33%' style='border: 1px solid #195DAE;' align='center' class='SRflag2'>COV Reim' Agent2</td>"+   
		            "<td width='33%' style='border: 1px solid #195DAE;' align='center' class='SRflag3'>COV Reim' Agent3</td>"+          
		            "</tr>"+
		        "</table>"+
		    "</div>"+
		    "<table width='100%'>"+
		        "<tr>"+
		            "<td width = '10%'/>"+
		            "<td width = '20%'>"+
		                intermediaryAgent1+   
		            "</td>"+   
		            "<td width = '10%'/>"+        
		            "<td width = '20%'>"+
		    	        intermediaryAgent2+   
		    	    "</td>"+   
		            "<td width = '10%'/>"+	    
		            "<td width = '20%'>"+
		                intermediaryAgent3.replace(/발신일시/, "완료일시") + 
		            "</td>"+    
		            "<td width = '10%'/>"+	        
		        "</tr>"+
		    "</table>"+	        
        "</td>"+
        "<td>"+
            covCreditorAgent+           
        "</td>"+
    "</tr>"+
"</table>";		
	
var fromNonGpiCovAgent1=
	"<div id='boxProgress' style='border: 1px solid #1950AE;'>"+
	    "<table width='100%'>"+
	        "<tr>"+
	            "<td width='19%' style='border: 1px solid #195DAE;' align='center' class='SRflag0'>Originator (Debtor Agent)</td>"+
	            "<td width='19%' style='border: 1px solid #195DAE;' align='center' class='SRflag1'>GPI Agent</td>"+
	            "<td width='42%' style='border: 1px solid #195DAE;' align='center' class='SRflagc'>gCCTmsg</td>"+
	            "<td width='19%' style='border: 1px solid #195DAE;' align='center' class='credColor'>Beneficiary</td>"+
	        "</tr>"+
	    "</table>"+
	"</div>"+	
	"<table>"+
	    "<tr>"+
	        "<td>"+
	            covDeptorAgent+ 
	        "</td>"+  
	        "<td>"+
	            intermediaryAgent1ForNonGpi+ 
            "</td>"+  	        
	        "<td>" +
		        "<br/>" +
		        "<div id='boxProgressCOVFromNonGPI' style='border: 1px solid #1950AE;'>"+
			        "<table width='100%' height='100%'>"+
			            "<tr>"+
			                "<td width='100%' style='border: 1px solid #195DAE;' align='center' class='SRflag2'>COV Reim Agent1</td>"+
			            "</tr>"+
			        "</table>"+
				"</div>"+	
				"<table width='100%'>"+
				    "<tr>"+
				        "<td width = '27%'/>"+
				        "<td>"+
				            intermediaryAgent2.replace(/발신일시/, "완료일시") +  
				        "</td>"+
				    "</tr>"+
			    "</table>"+     
	        "</td>"+
	        "<td>"+
	            covCreditorAgent+            
	        "</td>"+
	    "</tr>"+
	"</table>";  

var fromNonGpiCovAgent2=
	"<div id='boxProgress' style='border: 1px solid #1950AE;'>"+
	    "<table width='100%'>"+
	        "<tr>"+
	            "<td width='19%' style='border: 1px solid #195DAE;' align='center' class='SRflag0'>Originator (Debtor Agent)</td>"+
	            "<td width='19%' style='border: 1px solid #195DAE;' align='center' class='SRflag1'>GPI Agent</td>"+
	            "<td width='42%' style='border: 1px solid #195DAE;' align='center' class='SRflagc'>gCCTmsg</td>"+
	            "<td width='19%' style='border: 1px solid #195DAE;' align='center' class='credColor'>Beneficiary</td>"+
	        "</tr>"+
	    "</table>"+
	"</div>"+	
	"<table>"+
	    "<tr>"+
	        "<td>"+
	            covDeptorAgent+ 
	        "</td>"+  
	        "<td>"+
	            intermediaryAgent1ForNonGpi+ 
            "</td>"+  	        
	        "<td>" +
		        "<br/>" +
		        "<div id='boxProgressCOVFromNonGPI' style='border: 1px solid #1950AE;'>"+
			        "<table width='100%' height='100%'>"+
			            "<tr>"+
			                "<td width='50%' style='border: 1px solid #195DAE;' align='center' class='SRflag2'>COV Reim Agent1</td>"+
			                "<td width='50%' style='border: 1px solid #195DAE;' align='center' class='SRflag3'>COV Reim Agent2</td>"+ 
			            "</tr>"+
			        "</table>"+
				"</div>"+	
			    "<table width='100%'>"+
		        "<tr>"+
		            "<td width='3%'/>"+
		            "<td/>"+
		            "<td>"+
		                intermediaryAgent2+   
		            "</td>"+
		            "<td/>"+
		            "<td>"+		            
		    	        intermediaryAgent3.replace(/발신일시/, "완료일시") +  
		    	    "</td>"+        
		        "</tr>"+
		    "</table>"+	     
	        "</td>"+
	        "<td>"+
	            covCreditorAgent+            
	        "</td>"+
	    "</tr>"+
	"</table>";

var fromNonGpiCovAgent3=
	"<div id='boxProgress' style='border: 1px solid #1950AE;'>"+
	    "<table width='100%'>"+
	        "<tr>"+
	            "<td width='14.4%' style='border: 1px solid #195DAE;' align='center' class='SRflag0'>Originator</td>"+
	            "<td width='14.4%' style='border: 1px solid #195DAE;' align='center' class='SRflag1'>GPI Agent</td>"+
	            "<td width='58%'   style='border: 1px solid #195DAE;' align='center' class='SRflagc'>gCCTmsg</td>"+
	            "<td width='14.4%' style='border: 1px solid #195DAE;' align='center' class='credColor'>Beneficiary</td>"+
	        "</tr>"+
	    "</table>"+
	"</div>"+	
	"<table>"+
	    "<tr>"+
	        "<td>"+
	            covDeptorAgent+ 
	        "</td>"+  
	        "<td>"+
	            intermediaryAgent1ForNonGpi+ 
            "</td>"+  	        
	        "<td>" +
		        "<br/>" +
		        "<div id='boxProgressCOVFromNonGPI-over3' style='border: 1px solid #1950AE;'>"+
			        "<table width='100%' height='100%'>"+
			            "<tr>"+
			                "<td width='33%' style='border: 1px solid #195DAE;' align='center' class='SRflag2'>COV Reim Agent1</td>"+
			                "<td width='33%' style='border: 1px solid #195DAE;' align='center' class='SRflag3'>COV Reim Agent2</td>"+ 
			                "<td width='33%' style='border: 1px solid #195DAE;' align='center' class='SRflag4'>COV Reim Agent3</td>"+ 			                
			            "</tr>"+
			        "</table>"+
				"</div>"+	
			    "<table width='100%'>"+
		        "<tr>"+
		            "<td/>"+
		            "<td>"+
		                "<center>"+ 
		                    intermediaryAgent2+  
		                "</center>"+
		            "</td>"+
		            "<td/>"+	
		            "<td>"+
	                    "<center>"+ 
                            intermediaryAgent3+  
                        "</center>"+
		    	    "</td>"+  
		            "<td/>"+	
		            "<td>"+
                        "<center>"+ 
                            intermediaryAgent4.replace(/발신일시/, "완료일시") +  
                        "</center>"+
	    	        "</td>"+  		    	    
		        "</tr>"+
		    "</table>"+	     
	        "</td>"+
	        "<td>"+
	            covCreditorAgent+            
	        "</td>"+
	    "</tr>"+
	"</table>";

var gSrpBox = 
"<div id='boxSrp' style='border: 1px solid Red;'>"+
	"<table>"+
        "<tr/>"+
        "<tr>"+
	       "<td width = '3'/>"+
	       "<td>Tracker취소처리</td>"+
	       "<td width = '10'/>"+
	       "<td>"+
	           "<input id='trkBIC'  name='trkBIC'      type='text' class='box01' size='14' value='' readonly/>"+
	       "</td>"+
	       "<td width='30'/>"+
	       "<td>취소상태</td>"+
	       "<td width = '10'/>"+
	       "<td>"+
	          "<input id='trkStsCd'  name='trkStsCd'    type='text' class='box01' size='5' value='' readonly/>"+
	       "</td>"+
	       "<td width='28'/>"+	
	       "<td>상태내용</td>"+
	       "<td width='24'/>"+	
	       "<td>"+
	          "<input id='trkStsNm'  name='trkStsNm'    type='text' class='box01' size='43' value='' readonly/>"+
	       "</td>"+
	       "<td width ='15'/>" +
	       "<td><div id='mt192Label'>수신MT192</div></td>" +
	       "<td/>" +
	       "<td>" +
	           "<input id='mt192DocId' name='mt192DocId' type='text' class='box01' size='16' value='' readonly/>" +
	           "<a id='mt192Bt' href='javascript:doMT192Query();'><img name='imageField11' src='/GPI/images/common/btn_plus.gif' border='0'></a>"+
	       "</td>" +	
         "</tr>"+
        "<tr>"+
		   "<td/>"+
		   "<td>취소요청기관 BIC</td>"+
		   "<td/>"+
		   "<td>"+
		       "<input id='cancReqBIC'  name='cancReqBIC'  type='text' class='box01' size='14' value='' readonly/>"+
		   "</td>"+
		   "<td/>"+
		   "<td>요청코드</td>"+
		   "<td/>"+
		   "<td>"+
		      "<input id='cancReqStsCd' name='cancReqStsCd' type='text' class='box01' size='5' value='' readonly/>"+
		      "<input id='cancReqRwdCd' name='cancReqRwdCd' type='text' class='box01' size='5' value='' readonly/>"+
		   "</td>"+
		   "<td/>"+
		   "<td>요청내용</td>"+
		   "<td/>"+	
		   "<td>"+
		      "<input id='cancReqStsNm' name='cancReqStsNm' type='text' class='box01' size='43' value='' readonly/>"+
		   "</td>"+
	       "<td/>" +
		   "<td>요청시간</td>"+
	       "<td/>" +
		   "<td>"+
		      "<input id='cancReqStsTm' name='cancReqStsTm' type='text' class='box01' size='20' value='' readonly/>"+
		   "</td>"+		   
	    "</tr>"+	    
        "<tr>"+
		   "<td/>"+
		   "<td>취소응답기관 BIC</td>"+
		   "<td/>"+
		   "<td>"+
		       "<input id='cancResBIC' name='cancResBIC' type='text' class='box01' size='14' value='' readonly/>"+
		   "</td>"+
		   "<td/>"+
		   "<td>응답코드</td>"+
		   "<td/>"+
		   "<td>"+
		      "<input id='cancResStsCd' name='cancResStsCd' type='text' class='box01' size='5' value='' readonly/>"+
		      "<input id='cancResRsnCd' name='cancResRsnCd' type='text' class='box01' size='5' value='' readonly/>"+		      
		   "</td>"+
		   "<td/>"+
		   "<td>응답내용</td>"+
		   "<td/>"+	
		   "<td>"+
		      "<input id='cancResStsNm' name='cancResStsNm' type='text' class='box01' size='43' value='' readonly/>"+
		   "</td>"+
	       "<td/>" +
		   "<td>응답시간</td>"+
	       "<td/>" +
		   "<td>"+
		      "<input id='cancResStsTm' name='cancResStsTm' type='text' class='box01' size='20' value='' readonly/>"+
		   "</td>"+			   
	    "</tr>"+	    
	"</table>"+
"</div>";


var validBox =
"<table>"+
    "<tr>"+
        "<td height='1'/>"+
    "</tr>"+
"</table>"+	
"<div id='boxValid' style='border: 1px solid #1950AE;'>"+
	"<table>"+
	    "<tr/>"+
        "<tr>"+
		   "<td width='3'/>"+
		   "<td>오류발생기관 BIC</td>"+
		   "<td width = '10'/>"+
		   "<td>"+
		       "<input id='invalidBIC'       name='invalidBIC'       type='text' class='box01' size='14' value='' readonly/>"+
		   "</td>"+
		   "<td width='30'/>"+
		   "<td>오류코드</td>"+
		   "<td width = '10'/>"+
	       "<td valign='top'>"+
		       "<input id='gpiMsgErrDstCd'   name='gpiMsgErrDstCd'   type='text'  class='box01' size='5'  value='' readonly/>"+
		       "<input id='gpiMsgErrDstCtnt' name='gpiMsgErrDstCtnt' type='text'  class='box01' size='22' value='' readonly/>"+
		   "</td>"+
		   "<td width='18'/>"+
		   "<td>오류내용</td>"+
		   "<td width = '10'/>"+
		   "<td>"+
		      "<input id='gpiMsgErrCtnt'     name='gpiMsgErrCtnt'    type='text' class='box01'  size='67' value='' readonly/>"+
		   "</td>"+
	    "</tr>"+	
	    "<tr/>"+	    
	"</table>"+
"</div>";

function makeAgentHtml(html, trGb, interAgentCnt, exrtYn)
{
	var box;
	var style;
	var rtnStr;
	var flagc;
	var noCCT;
	
	
    var tagStart = exrtYn == "N" ? "<!--" : "";
    var tagEnd   = exrtYn == "N" ? "-->"  : "";
    
    var covFxStart = exrtYn  == "N" ? "<!--" : "";
    var covFxEnd   = exrtYn  == "N" ? "-->"  : "";    
    
 
    var covStart = trGb.indexOf("CCT") > -1  ? "" : "<!--";
    
      
    if( trGb.indexOf("ONLY") > -1 )
	{
        flagc = "none";
        noCCT = "No Tracking Information for gCCT";
        
        html = html.replace(/nmlStart/, "").replace(/nmlEnd/, "").replace(/timeStart/, "<!--").replace(/timeEnd/, "-->");
        html = html.replace(/nmlForNonGpiStart/, "").replace(/nmlForNonGpiEnd/, "").replace(/timeForNonGpiStart/, "<!--").replace(/timeForNonGpiEnd/, "-->");	
	}
	else
	{
        flagc = "done";
        noCCT = "MT 103";
        
        if( trGb.indexOf("COV") > -1 )
        {
        	html = html.replace(/nmlStart/, "<!--").replace(/nmlEnd/, "-->").replace(/timeStart/, "").replace(/timeEnd/, "");
        	
        	if( trGb.indexOf("ForNonGpi") > -1 )
        	{
        		html = html.replace(/nmlForNonGpiStart/, "<!--").replace(/nmlForNonGpiEnd/, "-->").replace(/timeForNonGpiStart/, "").replace(/timeForNonGpiEnd/, "");
        	}
        	else
        	{
        		html = html.replace(/nmlForNonGpiStart/, "").replace(/nmlForNonGpiEnd/, "").replace(/timeForNonGpiStart/, "<!--").replace(/timeForNonGpiEnd/, "-->");
        	}
        	
        }
        else
        {
            html = html.replace(/nmlStart/, "").replace(/nmlEnd/, "").replace(/timeStart/, "<!--").replace(/timeEnd/, "-->");
            html = html.replace(/nmlForNonGpiStart/, "").replace(/nmlForNonGpiEnd/, "").replace(/timeForNonGpiStart/, "<!--").replace(/timeForNonGpiEnd/, "-->");	
        }
	}	
   
	
	if( interAgentCnt > 3 )
	{
		style    = "style='font-size:8.8px;'";
		dtStyle  = "style='font-size:8.8px;text-align:center;'";
		amtStyle = "style='font-size:8.8px;text-align:right;'";
		
		if( trGb.indexOf("CCT") > -1  )
		{   
			box      = exrtYn == "N" ? "box-gCCT-over3" : "box-gCCT-over3-exrt";
		}
		else
		{
			boxFlag  = exrtYn == "N" ? "box-gCCT-over3" : "box-gCCT-exrt-over3";
			box      = "boxCov-over3";
			tagStart = "<!--";
			tagEnd   = "-->";

			html = html.replace(/boxFlag/gi, boxFlag).replace(/covFxStart/gi, covFxStart).replace(/covFxEnd/gi, covFxEnd).replace(/SRflagc/, flagc).replace(/gCCTmsg/, noCCT);
		}		
	}
	else
	{
		style    = "";
		dtStyle  = "style='text-align:center;'";
		amtStyle = "style='text-align:right;'";
			
		if( trGb.indexOf("CCT") > -1  )
		{   
			box = exrtYn == "N" ? "box-gCCT" : "box-gCCT-exrt";
		}
		else
		{
			boxFlag  = exrtYn == "N" ? "box-gCCT" : "box-gCCT-exrt";
			box      = "boxCov";
			tagStart = "<!--";
			tagEnd   = "-->";
			
			html = html.replace(/boxFlag/gi, boxFlag).replace(/covFxStart/gi, covFxStart).replace(/covFxEnd/gi, covFxEnd).replace(/SRflagc/, flagc).replace(/gCCTmsg/, noCCT);
		}
	}
	   
	rtnStr = html.replace(/dBox/gi, box).replace(/dStyle/gi, style).replace(/dtStyle/gi, dtStyle).replace(/amtStyle/gi, amtStyle).replace(/covStart/gi, covStart).replace(/tagStart/gi, tagStart).replace(/tagEnd/gi, tagEnd);    
	
	return rtnStr;
}

function makeDynamicHtml( trGb, interAgentCnt, flow, SRflag,  progress, exrtYn, valid, BenRecvTm )
{
	var html="";
	var covFlow;
	var agent;

	if( trGb.indexOf("SRP") > -1 )
	{ 
		html = gSrpBox;	
	}

	if( trGb.indexOf("CCT") > -1 )
	{	
		agent  = ["agent2", "agent3", "agent4", "agent5","agent6", "agent7"];
		
		html += makeAgentHtml(eval(agent[interAgentCnt]), trGb, interAgentCnt, exrtYn);
			
		html = setProgress(html, progress, BenRecvTm, SRflag, flow);			

	}
	
	if( trGb.indexOf("COV") > -1 )
    {
		if( flow < 0)
		{
			flow  = (flow * -1);
			
			agent  = [ "dummy", "dummy", "fromNonGpiCovAgent1", "fromNonGpiCovAgent2", "fromNonGpiCovAgent3"];
		}
		else
		{
		    agent  = [ "dummy", "covAgent1", "covAgent2", "covAgent3"];
		}

	    html += makeAgentHtml(eval(agent[interAgentCnt]), trGb, interAgentCnt, exrtYn);
			
	    html  = setProgress(html, progress, BenRecvTm, SRflag, flow);
	}

	if( valid == "N" )
	{  
		html += validBox;
	}

    return html;
}

function setProgress(html, prgs, BenRecvTm, SRflag, flow)
{
	 var credColor  = BenRecvTm == "" ? "not" : "hold";
	 var covColor   = "LimeGreen";
	
	if( prgs.indexOf("TA") > -1 )
	{
		credColor  = "done";
	}
	if( prgs.indexOf("TN") > -1 )
	{
		credColor  = "recv";
	}
	if( prgs.indexOf("TR") > -1  )
	{
		if( BenRecvTm.length > 0 )
		{
			credColor = "canc";
		}
		else
		{
			SRflag[flow] = "canc";
		}
	}
	if( prgs.indexOf("CR") > -1 )
	{
		SRflag[flow] = "canc";
	}
	
	if( prgs.indexOf("CA") > -1 )
	{
		SRflag[flow] = "done";
	}

	html = html.replace(/SRflag0/, SRflag[0]).replace(/SRflag1/, SRflag[1]).replace(/SRflag2/, SRflag[2]).replace(/SRflag3/, SRflag[3]).replace(/SRflag4/, SRflag[4]).replace(/SRflag5/, SRflag[5]);

	return html.replace("credColor", credColor);
}

function getProgress(start, end)
{
	var progress = "none";
	
	if(  start == "org" )
	{
		if( end == "" )
		{
			progress = "none";
		}
		else
		{
			progress = "done";
		}		
	}
	else if( start == "" )
	{
		if( end == "" )
		{
			progress = "none";
		}
		else
		{
			progress = "fromNonGpi";
		}
	}
	else
	{
		if( end == "" )
		{
			progress = "recv";
		}
		else
		{
			progress = "done";
		}	
	}
	
	return progress
}

function getFlow(SRflag, maxCnt)
{
	var flow = 0;
	
    for( var idx = maxCnt ; idx >= 0; idx-- )
    { 
		if( SRflag[idx] != "none" )
		{
			flow = idx;
			break;
		}
    }
    return flow;
}

function getInterval(from, to)
{
	var rtn = "";
	
	if( from.length > 0 && to.length > 0  )
	{
		
		var start = getSecond(from.replace(/[-,:,\s]/g, ""));
	    var end   = getSecond(to.replace(/[-,:,\s]/g, ""));
		var diff  = end - start;
	    var day   = Math.floor(diff / (60*60*24));
	    var hour  = Math.floor((diff % (60*60*24)) / (60*60));
	    var min   = Math.floor(((diff % (60*60*24)) % (60*60)) / (60));
	    
	 
	    if( day > 0 )
	    {
	    	rtn += day + "D";
	    }
	    
	    if( hour > 0 )
	    {
	    	rtn +=  " "+hour + "Hr";
	    }
	    
	    if( min >= 0)
	    {
	    	rtn +=  " "+min + "Min";
	    }
    }

    return rtn.trim();
}

function getSecond(dt)
{
	var yy = dt.substring( 0,  4);
	var mm = dt.substring( 4,  6);
	var dd = dt.substring( 6,  8);
	var hh = dt.substring (8, 10);
	var mi = dt.substring(10, 12);
	var ss = "00";
	
	var ymds = (new Date(yy, parseInt(mm)-1, dd).getTime()) / 1000;
	var hhs  = parseInt(hh) * 3600;
	var mis  = parseInt(mi) * 60;
	
    return ymds+hhs+mis+parseInt(ss);
}
