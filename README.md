# Silna 
### Your Health Your Way

_My Pitch:_
Silna makes monitoring your health more rewarding. Instead of focusing on the typical (and guilt induced) calorie-in calorie-out approach, it focuses on what you are getting out of the eating experience by keeping track of the minerals, vitamins, protiens, carbs, fats, and water in-take that come from our foods. It can suggest alternative options for your meals in order to recieve the fullest amount of nutrients that your body needs. This application is meant to make tracking your health fun and enlightening, instead of the often negative experience that happens with health talk. 

### The Design
![User's Home Page](https://github.com/katie10o/startup/blob/main/images/silna_roughDraft.png)

### Key Features
- Secure login over HTTPS.
- Ability to enter and log your meals and snacks.
- Ability to select the different types of body essential nutrients and see where you are with subgroup     (updated in real-time).
- A fun illustration that demonstrates where you are at with your goal of obtaining the recommended nutrients (updated in real-time).
- A settings page for you to edit your personal information.
- Not shown in my design - but a log of the foods you've been eating for the past month.
- Also not shown, but the opportunity to share food combinations that have helped you diversify your nutritional intake so that other users can benefit in their health journey as well.


### Technologies 
- HTML: Creation of 4 HTML pages: login page, daily food log page, food log history, and setting. 
- CSS: Adding styling benefits that make my webpage look nice and professional for all screens.
- JavaScript: Interactives like button-pressing for users to enter in their food intake.
- Service: connects to websites that contain the nutritional information for foods.
- DB: Stores meal info and favorite/typical meal options.
- Login: creation of accounts and ability to login securely.
- WebSocket: Sending and seeing recipes or food combos from other users.
- React: using React web framework for routing requests.


### HTML
- 5 HTML pages that represent the login, the main "home" screen, the weekly food log, the settings page, and details on overall food intake.
- Links between all the pages. There are links to various trusted health sources if the user wants more information.
- Textual descriptions prompting the user for inputs and overall organization
- Tables for organization with food essential categories
- A hand-drawn image that will be used to show the overall percentage of weekly food intake (in the process of getting it to work)
- Database representation with user login information, weekly food logs, and overall essential food intake for the day
- Websocket placement for a connection to an API when a user enters their food intake - it will connect to an API for all the nutritional information (I haven't found one yet though.. )

### CSS
- after seeing how much work went into my css, I decided to scale back a bit. I forwent the meal log (since the point of the website is to track nutrients, not meals per se)
- I have header, body, and footer on the main page as well in other pages
- My website is responsive to window resizing
- I have consistant fonts and color schemes throughout the web app
- I have mulitple images that look nice and professional
- I have a mixture of UI's for enjoyment and ease


### JavaScript
-I've created nice elements that allow for optimal user interface
-I have built a sign up, login, and settings page and implemented JavaScript code in preparation for database login 
-I have logistical methods in JavaScript for when users interact with my website
-Though it was not specificed on my website, I know the location of where the websocket will be interacting with my JS code and website (with meal inputs)

### Web App Service
- I became overwhelmed with the amount of work my website needed and decided to cut back on it. Instead of logging the nutrients and meals of the user, I decided to have the user just enter in the meal, recieve the nutrients details or to select a nutrient and recieve foods with that nutrient. 
- I've created a node.js/express HTTP service
- Static middleware for fronted, my html,css, and frontend JS files are being called upon when requests are handled
- I am able to call to third party extentions - I implemented openAI's API to recieve food ideas or food nutrients
- I have backend service endpoints for login and sign up information that stores the data in a global variable - will replace with database 
- There are a few fetch functions calling the backend from the frontend. 

### Startup DB
- MongoDB created and utilized
- I have endpoints that store create account data (first and last name, user email, and password (will implement hash password next)), and meals that they enter. Only one meal can be entered per category per day, so the user can delete a previous meal and add a new one (it will delete the meal entry on the database as well).
- user information and meal inputs are stored and accessed through the mongoDB

### Login Deliverable
- User is able to register - which creates a new user into the database 
- If the user has already registered, then the meals added will only be under their account
- MongoDB stores all the credentials, the password is crypted to be a hash only 
- Restricts functionality, if the user has invaild credentials, it will not allow them to move further on



