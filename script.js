
const billTotalInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('tipInput');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotal = document.getElementById('perPersonTotal');

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

const calculateBill = () => {
  const bill = Number(billTotalInput.value);
  
  const tip = Number(tipInput.value)/100;

  const tipAmount = bill * tip;
  
  const totalAmount = tipAmount + bill;
  
  const perPerson = totalAmount / numberOfPeople;
  // update the DOM
  perPersonTotal.innerText = `$${perPerson.toFixed(2)}`;
}

// ** Splits the bill between more people **
const increasePeople = () => {
  numberOfPeople += 1;

  // update the DOM with the new number of people
  numberOfPeopleDiv.innerText = numberOfPeople;

  // calculate the bill based on the new number of people
    calculateBill();
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
    // base case
    if(numberOfPeople <= 1){
      return;
    }
    numberOfPeople -= 1;

  // update the DOM with the new number of people
  numberOfPeopleDiv.innertext = numberOfPeople;
  
    calculateBill();
}