function OpptyForm_after_submit(type){
	
 //if (nlapiGetFieldValue('custbody_has_quota') == 'T'){
 	
  if (type == 'recmachcustrecord_mc_oppty_key') {
		
	var totalQuantity = 0;
	var lineCount = nlapiGetLineItemCount(type);
		
		for (var i = 1; i <= lineCount; i++) {
				
				var qty = nlapiGetLineItemValue('recmachcustrecord_mc_oppty_key', 'custrecord_mc_quota_year_total', i) * 1;
				
			/*	var Jan = nlapiGetLineItemValue('recmachcustrecord_mc_oppty_key', 'custrecord_mc_jan',i);
	 			var Feb = nlapiGetLineItemValue('recmachcustrecord_mc_oppty_key', 'custrecord_mc_feb',i);
		 		var Mar = nlapiGetLineItemValue('recmachcustrecord_mc_oppty_key', 'custrecord_mc_mar',i);
		 		var Apr = nlapiGetLineItemValue('recmachcustrecord_mc_oppty_key', 'custrecord_mc_apr',i);
		 		var May = nlapiGetLineItemValue('recmachcustrecord_mc_oppty_key', 'custrecord_mc_may',i);
		 		var Jun = nlapiGetLineItemValue('recmachcustrecord_mc_oppty_key', 'custrecord_mc_jun',i);
		 		var Jul = nlapiGetLineItemValue('recmachcustrecord_mc_oppty_key', 'custrecord_mc_jul',i);
				var Aug = nlapiGetLineItemValue('recmachcustrecord_mc_oppty_key', 'custrecord_mc_aug',i);
				var Sep = nlapiGetLineItemValue('recmachcustrecord_mc_oppty_key', 'custrecord_mc_sep',i);
				var Oct = nlapiGetLineItemValue('recmachcustrecord_mc_oppty_key', 'custrecord_mc_oct',i);
				var Nov = nlapiGetLineItemValue('recmachcustrecord_mc_oppty_key', 'custrecord_mc_nov',i);
				var Dec = nlapiGetLineItemValue('recmachcustrecord_mc_oppty_key', 'custrecord_mc_dec',i);
				
				var projectedTotal = parseFloat(nlapiGetFieldValue('projectedtotal'));
				var value = projectedTotal / 12
		*/
				
			//	value += projectedTota;
				totalQuantity += qty;
			}
				parseFloat(nlapiSetFieldValue('custbody_mc_quota_total', totalQuantity, true));
			/*	parseFloat(nlapiSetFieldValue('custrecord_mc_jan', value, true));
				parseFloat(nlapiSetFieldValue('custrecord_mc_feb', value, true));
				parseFloat(nlapiSetFieldValue('custrecord_mc_mar', value, true));
				parseFloat(nlapiSetFieldValue('custrecord_mc_apr', value, true));
				parseFloat(nlapiSetFieldValue('custrecord_mc_may', value, true));
				parseFloat(nlapiSetFieldValue('custrecord_mc_jun', value, true));
				parseFloat(nlapiSetFieldValue('custrecord_mc_jul', value, true));
				parseFloat(nlapiSetFieldValue('custrecord_mc_aug', value, true));
				parseFloat(nlapiSetFieldValue('custrecord_mc_sep', value, true));
				parseFloat(nlapiSetFieldValue('custrecord_mc_oct', value, true));
				parseFloat(nlapiSetFieldValue('custrecord_mc_nov', value, true));
				parseFloat(nlapiSetFieldValue('custrecord_mc_dec', value, true));
			*/	
	//}
 }
 //if (nlapiGetFieldValue('custbody_has_quota') == 'T'){ //Q1
//	if (type == 'recmachcustrecord_mc_oppty_key') {
	//	var totalQuantity = 0;
		//var lineCount = nlapiGetLineItemCount(type);
		
		
		//var totalQuantity = new Array(0, 0, 0, 0);
		//var qMonth = 0;
		
		//for (var i = 1; i <= nlapiGetLineItemCount(type); i++) {
			//qMonth = parseInt((nlapiGetLineItemValue('recmachcustrecord_mc_oppty_key', 'custrecord_mc_month_list', i) - 1) / 3);
			//totalQuantity[qMonth] += nlapiGetLineItemValue('recmachcustrecord_mc_oppty_key', 'custrecord_mc_quota_year_11', i) * 1;
		//}
		
		//for (var i = 1; i <= 4; i++) 
		//	nlapiSetFieldValue('custbody_mc_quota_q' + i, totalQuantity[i - 1], true);
		
		//var lineIndex = nlapiGetCurrentLineItemIndex(type);
		//var index = Math.ceil(nlapiGetLineItemValue('recmachcustrecord_mc_oppty_key', 'custrecord_mc_month_list', lineIndex)/4);
		//alert(index);
		//*for (var i = index; i <= (index*4); i++) {
			//var val = nlapiGetLineItemValue('recmachcustrecord_mc_oppty_key', 'custrecord_mc_month_list', i);
			//var totVal = nlapiGetFieldValue('custbody_mc_quota_q' + index);
		//	nlapiSetFieldValue('custbody_mc_quota_q' + index, totalQuantity[i - 1], true);
	//	}*/
	//}
//  }

}

function opprtForm_fieldChanged(type, name, lineitem){

 	if (type == 'recmachcustrecord_mc_oppty_key') {
 	
 		var Jan = nlapiGetCurrentLineItemValue(type, 'custrecord_mc_jan');
 		var Feb = nlapiGetCurrentLineItemValue(type, 'custrecord_mc_feb');
 		var Mar = nlapiGetCurrentLineItemValue(type, 'custrecord_mc_mar');
 		var Apr = nlapiGetCurrentLineItemValue(type, 'custrecord_mc_apr');
 		var May = nlapiGetCurrentLineItemValue(type, 'custrecord_mc_may');
 		var Jun = nlapiGetCurrentLineItemValue(type, 'custrecord_mc_jun');
 		var Jul = nlapiGetCurrentLineItemValue(type, 'custrecord_mc_jul');
		var Aug = nlapiGetCurrentLineItemValue(type, 'custrecord_mc_aug');
		var Sep = nlapiGetCurrentLineItemValue(type, 'custrecord_mc_sep');
		var Oct = nlapiGetCurrentLineItemValue(type, 'custrecord_mc_oct');
		var Nov = nlapiGetCurrentLineItemValue(type, 'custrecord_mc_nov');
		var Dec = nlapiGetCurrentLineItemValue(type, 'custrecord_mc_dec');
 		//var total = nlapiGetCurrentLineItemValue(type, 'custrecord_mc_quota_year_total');
 		
 		var calc = Jan * 1 + Feb * 1 + Mar * 1 + Apr * 1 + May * 1 + Jun * 1 + Jul * 1 + Aug * 1 + Sep * 1 + Oct * 1 + Nov * 1 + Dec * 1;
 		
 		if (name == 'custrecord_mc_jan' || name == 'custrecord_mc_feb' || name == 'custrecord_mc_mar' || name == 'custrecord_mc_apr' || name == 'custrecord_mc_may' || name == 'custrecord_mc_jun' || name == 'custrecord_mc_jul'|| name == 'custrecord_mc_aug'|| name == 'custrecord_mc_sep'|| name == 'custrecord_mc_oct'|| name == 'custrecord_mc_nov' || name == 'custrecord_mc_dec') {
 			nlapiSetCurrentLineItemValue(type, 'custrecord_mc_quota_year_total', calc, true);
 		}
 	}
	
	
	if(name == 'projectedtotal') {
		var monthSuff = new Array();
		monthSuff['1'] = 'jan';
		monthSuff['2'] = 'feb';
		monthSuff['3'] = 'mar';
		monthSuff['4'] = 'apr';
		monthSuff['5'] = 'may';
		monthSuff['6'] = 'jun';
		monthSuff['7'] = 'jul';
		monthSuff['8'] = 'aug';
		monthSuff['9'] = 'sep';
		monthSuff['10'] = 'oct';
		monthSuff['11'] = 'nov';
		monthSuff['12'] = 'dec';
		
		var forecastTotal = nlapiGetFieldValue('custbody_mc_quota_total');  
		var theMachine = 'recmachcustrecord_mc_oppty_key';
		
		if (forecastTotal == '' || forecastTotal == 0.00) {
			var expectedClose = nlapiGetFieldValue('expectedclosedate');
			var expectedCloseDateValue = nlapiStringToDate(expectedClose);
			var year = expectedCloseDateValue.getFullYear();
			var month = expectedCloseDateValue.getMonth() + 1;			
			var lineCount = nlapiGetLineItemCount(theMachine);
			var lineNumber = -1;
			
			for (var i = 1; i <= lineCount; i++) {
				var lineYear = nlapiGetLineItemText(theMachine, 'custrecord_mc_month_list', i);
				
				if (lineYear == year) {
					var lineNumber = i;
					break;
				}
			}
			
			if(lineNumber > 0) {
				var projectedTotal = nlapiGetFieldValue('projectedtotal');
				if(projectedTotal != '') {
					projectedTotal = parseFloat(projectedTotal).toFixed(2);
				}
				nlapiSelectLineItem(theMachine, lineNumber);
				nlapiSetCurrentLineItemValue(theMachine, 'custrecord_mc_' + monthSuff[month.toString()], projectedTotal, true);	
				nlapiCommitLineItem(theMachine);			
			}
					
		}
	}
 
}	


function opprtForm_Recalc(type) {
	if (type == 'recmachcustrecord_mc_oppty_key') {
		var totalForecast = 0.00;
		var lineCount = nlapiGetLineItemCount(type);
		
		for(var i = 1; i <= lineCount; i++) {
			var totalOfLine = nlapiGetLineItemValue(type, 'custrecord_mc_quota_year_total', i);
			if(totalOfLine != '') {
				var totalOfLineValue = parseFloat(totalOfLine);
				totalForecast += totalOfLineValue;
			}			
		}
		
		nlapiSetFieldValue('custbody_mc_quota_total', totalForecast.toFixed(2));
	}
}


function Oppty_afterSave(){
	
		
		var projectedtotal = parseFloat(nlapiGetFieldValue('projectedtotal'));
		var totalQuota = parseFloat(nlapiGetFieldValue('custbody_mc_quota_total'));
		
		var id2011 = nlapiGetLineItemValue('recmachcustrecord_mc_oppty_key','id', 1);	
		nlapiSetFieldValue('custbody_mc_revenue_forecast_report', id2011, true);
		if (projectedtotal > 0) {
			if (totalQuota != projectedtotal) {
				alert("The total quota amount is not equal to the total opportunity amount");
				return false;
			}
			return true;
		}return true;
}

function setField_2011_afterSave(type, name){
	if (type == 'recmachcustrecord_mc_oppty_key') {
	
		var id2011 = nlapiGetLineItemValue(type, 'id', 1);
		nlapiSetFieldValue('custbody_mc_revenue_forecast_report', id2011, false);
		
		return true;
		
	}
} 
