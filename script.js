const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const btn = document.querySelector('.count');
const error = document.querySelector('.error');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');

const evaluate = () => {
  if (price.value === '' || people.value === '') {
    error.textContent = 'Fill in the blanks!';
  } 

  else if (tip.value > 0) {
    const costPerPerson = (price.value / people.value) * tip.value;
    cost.textContent = costPerPerson.toFixed(2);
    costInfo.style.display = 'block';
    error.textContent = '';
  } 

  else if (tip.value === '0') {
    const costPerPerson = price.value / people.value;
    cost.textContent = costPerPerson.toFixed(2);
    costInfo.style.display = 'block';
    error.textContent = '';
  }
};

btn.addEventListener('click', evaluate);
