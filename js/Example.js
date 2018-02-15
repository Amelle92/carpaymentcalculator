function Example() {
	document.getElementById('MSRP').value = 25000;
	document.getElementById('MilesPerYear').value = 5100;
	document.getElementById('DownPaymentPercent1').value = 11;
	document.getElementById('Months1').value = 36;
	document.getElementById('Interest1').value = .50;
	document.getElementById('Incentives1').value = 1000;
	document.getElementById('DownPaymentPercent2').value = 12;
	document.getElementById('Months2').value = 36;
	document.getElementById('Interest2').value = .70;
	document.getElementById('Incentives2').value = 1500;
	document.getElementById('DownPaymentPercent3').value = 5;
	document.getElementById('MonthlyPayment3').value = 650;
	document.getElementById('Months3').value = 36;
	document.getElementById('Overage').value = .20;
	document.getElementById('MilesIncluded').value = 15000;
	CalculateMonthlyPayment();
}