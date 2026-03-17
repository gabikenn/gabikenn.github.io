function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function getColor(num) {
  if (isPrime(num)) return '#d05353';  // red
  if (num % 2 !== 0) return '#ffb86f'; // yellow
  return '#8ed081';                    // green
}

const container = document.getElementById('number-container');
console.log(document.getElementById('number-container'));


for (let i = 0; i <= 103; i++) {
  //Create a new <div> element
  const box = document.createElement('div');

  // Give it the CSS class for styling
  box.classList.add('number-box');

  // Set the text content to the current number
  box.textContent = i;

  // Set the background color
  box.style.backgroundColor = getColor(i);

  // Append the box to the container
  container.appendChild(box);
}

