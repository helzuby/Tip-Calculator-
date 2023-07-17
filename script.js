function calculateTip() {
    let amount = parseFloat(document.getElementById('billAmount').value);
    let tipPercentage = parseFloat(document.getElementById('percentage').value);
    let numberOfPersons = parseInt(document.getElementById('persons').value);

    let tipAmount = (amount * tipPercentage) / numberOfPersons;
    let total = amount + tipAmount;

    // Checking for the number of persons sharing the bill.
    
    if (numberOfPersons === 1) {
    document.getElementById('each').style.display = 'none';
    } else {
    document.getElementById('each').style.display = 'block';
    }

    // To display the value of the tip.
    
     document.getElementById('total').textContent = tipAmount.toFixed(2);
        }