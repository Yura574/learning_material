"use strict";


function calculate() {
    const amount = document.getElementById('amount');
    const annual = document.getElementById('annual');
    const repayment = document.getElementById('repayment');
    const zipcode = document.getElementById('zipcode');
    const monthlyPayment = document.getElementById('monthlyPayment');
    const totalPayment = document.getElementById('totalPayment');
    const totalInterest = document.getElementById('totalInterest');

    const principal = parseFloat(amount.value);
    const interest = parseFloat(annual.value) / 100 / 12;
    const payments = parseFloat(repayment.value) * 12;

    const x = Math.pow(1 + interest, payments);
    const monthly = (principal * x * interest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.innerHTML = monthly.toFixed(2)
        totalPayment.innerHTML = (monthly * payments).toFixed(2);
        totalInterest.innerHTML = ((monthly * payments) - principal).toFixed(2);

        save(amount.value, annual.value, repayment.value, zipcode.value);

        // try {
        //     getLenders(amount.value, annual.value, repayment.value, zipcode.value)
        // } catch (e) {
        // }

        chart(principal, interest, monthly, payments);
    } else {
        monthlyPayment.innerHTML = '';
        totalPayment.innerHTML = '';
        totalInterest.innerHTML = '';
        // chart();
    }
}

function save(amount, annual, repayment, zipcode) {
    if (window.localStorage) {
        localStorage.loan_amount = amount;
        localStorage.loan_annual = annual;
        localStorage.loan_repayment = repayment;
        localStorage.loan_zipcode = zipcode;
    }
}

window.onload = function () {
    if (window.localStorage && localStorage.loan_amount) {
        document.getElementById('amount').value = localStorage.loan_amount;
        document.getElementById('annual').value = localStorage.loan_annual;
        document.getElementById('repayment').value = localStorage.loan_repayment;
        document.getElementById('zipcode').value = localStorage.loan_zipcode;
    }
}

function chart(principal, payments, interest, monthly) {
    const graph = document.getElementById('graph')
    graph.width = graph.width;

    if (arguments.length === 0 || !graph.getContext) return;
    const g = graph.getContext('2d');
    const width = graph.width, height = graph.height;

    function paymentToX(n) {
        return n * width / payments;
    }

    function amountToY(a) {
        return height - (a * height / (monthly * payments * 1.05));
    }

    g.moveTo(paymentToX(0), amountToY(0));
    g.lineTo(paymentToX(payments), amountToY(monthly * payments))

    g.lineTo(paymentToX(payments), amountToY(0));
    g.closePath();
    g.fillStyle = '#f88';
    g.fill();
    g.font = 'bold 12px sans-serif'
    g.fillText('Total Interest Payments', 20, 20);

    let equity = 0;
    g.beginPath();
    g.moveTo(paymentToX(0), amountToY(0));
    for (let p = 1; p <= payments; p++) {
        let thisMonthsInterest = (principal - equity) * interest;
        equity += (monthly - thisMonthsInterest);
        g.lineTo(paymentToX(p), amountToY(equity))
    }
    g.lineTo(paymentToX(payments), amountToY(0));
    g.closePath();
    g.fillStyle = '#192';
    g.fill();
    g.fillText('Total Equity', 20, 35);

    let bal = principal;
    g.beginPath();
    g.moveTo(paymentToX(0), amountToY(bal));
    for (let p = 1; p <= payments; p++) {
        let thisMonthsInterest = bal * interest;
        bal -= (monthly - thisMonthsInterest);
        g.lineTo(paymentToX(p), amountToY(bal))
    }
    g.lineWidth = 3;
    g.stroke();
    g.fillStyle = '#000';
    g.fillText('Loan balance', 20, 50);

    g.textAlign = 'center';
    const y = amountToY(0);
    for (let year = 1; year * 12 <= payments; year++) {
        let x = paymentToX(year * 12);
        g.fillRect(x - 0.5, y - 3, 1, 3);
        if (year === 1) {
            g.fillText('Year', x, y - 5);
        }
        if (year % 5 === 0 && year*12 !== payments){
            g.fillText(String(year), x, y-5)
        }
    }
    g.textAlign = 'right';
    g.textBaseline = 'middle';
    let ticks = [monthly*payments, principal];
    let rightEdge = paymentToX(payments);
    for (let i =0; i <ticks.length; i++){
        let y  = amountToY(ticks[i]);
        g.fillRect(rightEdge -3, y-0.5, 3, 1);
        g.fillText(String(ticks[i].toFixed(0)), rightEdge-5, y);
    }
}


