function greet() {
  const name = document.getElementById('name').value;
  const greeting = `Hi, ${name || 'stranger'}!`;
  document.getElementById('greeting').innerText = greeting;
  return greeting; // return for testing
}

if (typeof module !== 'undefined') {
  module.exports = greet;
}
