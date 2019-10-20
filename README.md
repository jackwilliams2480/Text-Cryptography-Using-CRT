# ImBroke 
ImBroke is a small financial program that lets users categorize their monthly expenses and calculate how much they should spend within each month. Based on the entered percentages, the program will output monthly limits on spending within each category. 
[Live page](https://jackwilliams2480.github.io/ImBroke/index.html)
## Backend
The goal of the java application is to implement a class that allocates the user's money from their bank account to several categories of expenses like buying groceries, dining, academics, recreational activities,etc.
What we use in the main imBroke class is a bank account object that holds all the user's bank infromation
For security purposes, the user is given a username and password which are both alphanumeric.
After passing the security tests the user is able to see their current bank account balance are given the options to allocate several proportions from their account to several provided categories.
once the user enters the preferred categories the code allows them to go through each category and assign a percentage for the amount of money to be allocated to that specific category
after going through the entire process the code returns the amount of money available for each category and also displays the savings left for the user

## ErrorCases
If the user enter wrong login details or bank account number the loop displays an error message and asks the user to reenter or break out of the program
If the all the percentages add up to be greater than 100% the program displays an error message saying spending greater than balance

## Frontend
The main page prompts for a login using your bank account and password. From here the java backend would come into play by letting the user enter all of his expenses using the balance from the bank account. Then using the calculated values the website will showcase a bargraph and table of the inputed values. 
Attempted to implement AWS Lex chatbot to the website.

- [x] java backend supported
- [x] list syntax required
- [x] error cases and linked bankaccount
- [ ] connecting backend to frontend -> live website editable table
