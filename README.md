How to run:

1. Extract content of zip package into empty directory.

2. "cd" into directory from terminal.

3. Run "npm i" to install dependencies.

4. Run "npm start" to start application.

5. Application can be accessed via http://localhost:3000 on your browser.

Tech stack
- Frontend: HTML, CSS, AngularJS
	- HTML and CSS were used to display and format the user facing portion of the application. This included the attendance percentage threshold field and the corresponding table of students who were below it.
	- AngularJS was used to read and parse the JSON file of student data. It performed the calculations to determine which student(s) are below the attendance percentage threshold as well as allowing said threshold to be modifiable.
- Backend: Node.js
	- Node.js is used with the Express module to service this app as a web application running on localhost.