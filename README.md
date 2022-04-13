# Skimer

## About The Project

University project created for our group to keep track of all of our assignments and exams (events). 
We could see the list of all subjects, upcoming events with it's details and progress bar based on finished and unfinished tasks.

![image](https://user-images.githubusercontent.com/71132144/163250680-b17fcbb8-2260-41bf-82f6-6ced5df49b75.png)

It was our first app built with this tech stack and first "bigger" app at all, and we are aware that some things *sometimes* are not working as intended
(ex. Redirecting to login page when user is not logged in, content doesn't load sometimes, wrong chronological order of events), however we are happy with the results 😄

Live demo: https://skimer-a5934.web.app

Credentials to login: 

<div>Email: test@test.com</div>
<div>Password: test123</div>

### Built With

* [React.js](https://reactjs.org/)
* [Redux](https://redux.js.org)
* [Firebase](https://firebase.google.com)
* [Nodejs](https://nodejs.org/en/)
* [Expressjs](https://expressjs.com)

### Installation

To run the project locally, you need to perform following operations:
1. Clone the repo
   ```sh
   git clone https://github.com/d-wasilewski/Skimer.git
   ```
2. Switch to client directory
   ```sh
   cd ./skimer-client
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
4. Run the app
   ```js
   npm start
   ```


## Usage

1. Our only users are our classmates, so we ommited the registration step and created the accounts for them and for this reason you can only login to 
the application. You can get access to test account in [About The Project](#about-the-project) section

![image](https://user-images.githubusercontent.com/71132144/163254366-8ab0e314-004a-4da6-9ddf-747edb24f872.png)

2. User can click on the subject list to filter events for this specific subject as well as get it's details.

![image](https://user-images.githubusercontent.com/71132144/163253007-ffc2e761-47b6-4476-adf6-72f969559e1a.png)

![image](https://user-images.githubusercontent.com/71132144/163252748-1afec1e0-f435-478d-8735-10660bd2258f.png)

3. There is a timetable in case you forget about the classes

![image](https://user-images.githubusercontent.com/71132144/163253249-48d1a582-b6cf-4825-a181-04ffbdc8f63d.png)

4. Any user can add an event to the public list

![image](https://user-images.githubusercontent.com/71132144/163253457-bae27228-fd78-42a2-808c-5e234716cdf7.png)

5. Only user that created the event can delete it

![image](https://user-images.githubusercontent.com/71132144/163253591-5569ebea-2986-4189-9e46-f2e825ecc8f4.png)

6. By clicking on the profile picture user can change it, we also added a calendar in case somebody forgot what day it is today:)









