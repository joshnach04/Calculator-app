calculateLoan();
function calculateLoan()
{
    const lamt=document.getElementById("lamount").value;
    const rate=document.getElementById("irate").value;
    const mon=document.getElementById("months").value;
    

    const monthlyRate = rate / 100 / 12;

    // Monthly payment formula (EMI)
    const monthpay = (lamt * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -mon));

    // Display result
    document.getElementById("payment").innerHTML = `Monthly Payment: ${monthpay.toFixed(2)}`;
}