# MEAN20240325

### This is a general description about what you should do. The team lead should write the detailed tickets and assign them to team members. The Jira board will be checked during code review.
## Team Assignments (Finish as a team)
### Apr. 30
1. Create Validators for Login Page
    * Create Custom Async Validator for Username field. If username is not existed, display error message 
        * API: http://localhost:4231/api/register/checkExistByUsername/:username
    * Password should have minimum length of 8
2. Create Validators for Register Page
    * Create Custom Async Validator for Username field. If username is not existed, display error message.
        * API: http://localhost:4231/api/register/checkExistByUsername/:username
    * Create Custom Async Validator for Email field. If email is already used, display error message
        * API: http://localhost:4231/api/register/checkExistByEmail/:userEmail
    * Password must have at least 1 uppercase, 1 lowercase, 1 special character
    * Password confirm should have exact the same input as Password Field, display error message if not. Display error if password is too short
### Apr. 29
1. Use Reactive Forms to bind all the input fields in Login Page, Register Page and Profile Page
2. Create a service which enables user to register for a new account with correct information. Check the server code to learn which model you need to use as http request body
    * API: http://localhost:4231/api/register/createNewAccountAPI 
    * API Method: post
    * Check the server code to learn which model you need to use as http request body
3. Create a service which enables user to login only with the correct combination. Check the server code to learn which model you need to use as http request body
    * API: http://localhost:4231/api/login
    * API Method: post
4. Create a service which enable user to post a new story. Check the server code to learn which model you need to use as http request body
    * API: http://localhost:4231/api/news
    * API Method: post
5. Create a service which enable user to post new comments in story. Check the server code to learn which model you need to use as http request body
    * API: http://localhost:4231/api/news/addComment/:id
    * API Method: post
    
### Apr. 26
1. Please clone the backend repo from [AngularTrainingBackEnd](https://github.com/JRAntra/AngularTrainingBackEnd.git)
2. Create a service to retrieve data from server, and display it on NewsFeed page. API used: http://localhost:4231/api/users/getAllUsers
3. Create a service to retrieve user information and display it on Admin page. API used: http://localhost:4231/api/news


### Apr. 25
1. Routing system for all modules with path. Create navigation bar that can navigate to different pages.
### Apr. 24
1. Create main and sub modules for your project following the [best practice](https://medium.com/@shijin_nath/angular-right-file-structure-and-best-practices-that-help-to-scale-2020-52ce8d967df5)
2. Create components and implement the layouts and styles following your UI design 


## Individual Assignments (Everyone should do)
### Apr. 24
1. Create a custom directive that will auto hide the element after 5 seconds. When applying the directive to a host element, the host element will disappear after 5 seconds after the component has been initialized
2. Create custom pipe which will display only the first 20 characters of a string; if length is greater than 20 characters, add “…“ after the sub string

