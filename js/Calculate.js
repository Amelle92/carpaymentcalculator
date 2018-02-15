function CalculateMonthlyPayment() {
	var MSRP = document.getElementById('MSRP').value;
	var MSRP1 = MSRP;
	var MSRP2 = MSRP;
	var MSRP3 = MSRP;
	var EstimatedMiles = document.getElementById('MilesPerYear').value;
				
	// Calculate Monthly Payment Option 1
	var DownPaymentPercent1 = document.getElementById('DownPaymentPercent1').value;
	var Months1 = document.getElementById('Months1').value;
	var Interest1 = document.getElementById('Interest1').value;
	var Incentives1 = document.getElementById('Incentives1').value;
	Interest1 = ((Interest1/12) /100);
	DownPaymentPercent1 = DownPaymentPercent1 / 100;
	var DownPayment1 = MSRP1 * DownPaymentPercent1;
	MSRP1 -= Incentives1;
	MSRP1 -= DownPayment1;
	var MP1 = ((MSRP1*Interest1*Math.pow((1+Interest1),Months1))/((Math.pow((1+Interest1),Months1)-1)));
	document.getElementById('Out1').innerHTML = 
	'<b>Monthly Payment: $' + MP1.toFixed(2) + 
	'</b><br /><b>Total Cost of Loan: $' + (MP1 * Months1).toFixed(2) + 
	'</b><br /><b>$/Mile: $' + (((MP1 * Months1) + DownPayment1) / (EstimatedMiles * (Months1/12))).toFixed(2) + 
	'</b><br /><b>$/Month: $' + (((MP1 * Months1) + DownPayment1) / Months1).toFixed(2) + '</b>';
				
	// Calculate Monthly Payment Option 2
	var DownPaymentPercent2 = document.getElementById('DownPaymentPercent2').value;
	var Months2 = document.getElementById('Months2').value;
	var Interest2 = document.getElementById('Interest2').value;
	var Incentives2 = document.getElementById('Incentives2').value;
	Interest2 = ((Interest2/12) /100);
	DownPaymentPercent2 = DownPaymentPercent2 / 100;
	var DownPayment2 = MSRP2 * DownPaymentPercent2;
	MSRP2 -= Incentives2;
	MSRP2 -= DownPayment2;
	var MP2 = ((MSRP2*(Interest2*Math.pow((1+Interest2),Months2)))/((Math.pow((1+Interest2),Months2)-1)));
	document.getElementById('Out2').innerHTML = 
	'<b>Monthly Payment: $' + MP2.toFixed(2) + 
	'</b><br /><b>Total Cost of Loan: $' + (MP2 * Months2).toFixed(2) + 
	'</b><br /><b>$/Mile: $' + (((MP2 * Months2) + DownPayment2) / (EstimatedMiles * (Months2/12))).toFixed(2) + 
	'</b><br /><b>$Month: $' + (((MP2 * Months2) + DownPayment2) / Months2).toFixed(2); + '</b>';
				
	//Calculate Monthly Lease Payment, Over Charge, Total Cost, $/Mile, and $/Month
	var DownPaymentPercent3 = document.getElementById('DownPaymentPercent3').value;
	DownPaymentPercent3 = DownPaymentPercent3 / 100;
	var DownPayment3 = MSRP3 * DownPaymentPercent3;
	var MonthlyPayment3 = document.getElementById('MonthlyPayment3').value;
	var Months3 = document.getElementById('Months3').value;
	var Overage = document.getElementById('Overage').value;
	var MilesIncluded = document.getElementById('MilesIncluded').value;
	var OverageCharge = 0;
	if((EstimatedMiles * (Months3/12)) > MilesIncluded) {
		OverageCharge = ((EstimatedMiles * (Months3/12)) - MilesIncluded) * Overage;
	}
	document.getElementById('Out3').innerHTML = '<b>Monthly Payment: $' + MonthlyPayment3 +
	'</b><br /><b>Total Cost of Lease: $' + ((MonthlyPayment3 * Months3) + OverageCharge).toFixed(2) +
	'</b><br /><b>$/Mile: $' + (((MonthlyPayment3 * Months3) + DownPayment3 + OverageCharge) / (EstimatedMiles * (Months3/12))).toFixed(2) + 
	'</b><br /><b>$/Month: $' + (((MonthlyPayment3 * Months3) + DownPayment3 + OverageCharge) / Months3).toFixed(2) +
	'</b><br /><b>Overage Charge: $' + OverageCharge.toFixed(2) + '</b>';
}