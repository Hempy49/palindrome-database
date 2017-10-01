# palindrome-database

### Instructions
- Download Postman from [here](https://www.getpostman.com/) and open it
- ``$ mkdir palindrome-database``
- ``$ cd palindrome-database``
- ``$ git clone`` the repo
- ``$ npm install``
- ``$ npm test`` to run the tests
- ``$ node server.js``
- copy 'http://localhost:3000/api/palindromes' to the request URL section in Postman
- choose 'POST' request, select the 'Body' tab and add some text in the 'value' field
- click on 'send' to see if the input is a palindrome or not
![post](https://i.imgur.com/uLsI9xJ.png "POST request")
- repeat as many times as you want
- choose 'GET' request and click on 'send' - you should now see a list with the last 10 palindromes added in the last 10 minutes

### Next steps
- Refactoring. This implies the creation of a controller which will act as a middleman between the model and the routes
- Introducing a database schema to store the data and lighten the model of the filtering logic
- Add more checks for input validation and error handling
