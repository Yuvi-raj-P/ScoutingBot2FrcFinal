
document.addEventListener('DOMContentLoaded', (event) => {
    const signInForm = document.querySelector('.sign-in-form');
    
    signInForm.addEventListener('submit', (event) => {
      // Prevent the default form submission
      event.preventDefault();
      
      // Fetch the JSON data from the URL
      fetch('https://raw.githubusercontent.com/Yuvi-raj-P/ScoutingFRC-Bot/main/accounts.json')
        .then(response => response.json())
        .then(jsonData => {
          // Get the username and password input fields
          const usernameInput = document.querySelector('.input-field[type="text"]');
          const passwordInput = document.querySelector('.input-field[type="password"]');
          
          // Retrieve the values from the input fields
          const username = usernameInput.value;
          const password = passwordInput.value;
          
          // Check if the inputted credentials match any in the JSON data
          const account = jsonData.find(account => account.username === username && account.password === password);
          
          if (account) {
            document.querySelector('.forms-wrap').innerHTML = '<h1 class="hello-text">Hello</h1>';
            console.log('Logged in');
          } else {
            alert('Username or password is incorrect');
          }
        })
        .catch(error => console.error('Error:', error));
    });

  });


  