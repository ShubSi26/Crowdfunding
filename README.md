# CrowdFunding Application

![](https://github.com/ShubSi26/Crowdfunding-MEAN-Stack/blob/master/images/Screenshot%202024-06-22%20185600.jpg)
Live demo link - https://project-crowdfund.onrender.com/ 

May take loading time upto 30s

## Technology Used
![](https://skillicons.dev/icons?i=angular,express,nodejs,mongodb,ts,js,npm,css,html,bootstrap) <img src = "https://jwt.io/img/pic_logo.svg" width = 50px> <img src = "https://zod.dev/logo.svg" width = 50px>

| | |
|---------|---------|
| `Angular` | `Express` |
| `NodeJs`  | `MongoDB` |
| `TypeScript` | `TypeScript` |
| `CSS` | `HTML` |
| `ZOD` | `JWT` |

## Features
- ## Authentication
   The user can create its account and can perform operations like Login ans SignUp in the account. When the user Login Or SignUp, it will be provided a JWT Key which will be used for Authentication purpose.
- ## Add Project
  If the user is authenticated, he/she can navigate to the profile section where the project can be added and details of previously added project can be viewed.
- ## Update Project
  In the profile scetion, when the user click on the update, it will be navigated to the update page and where the updated information can be filled and by clicking on submit to save changes.
- ## Delete Project
  In the profile section, if the deletion button is clicked, the project will be deleted.
- ## View Projects
  When navigated on progct, the user can see all the projects he have added and other people have added.
- ## Payment
  When the user is on project detail page and when clicked on support button, it will be navigated to payment page where after filling the details and amount, if the user is authenticated the the a popup will apear that payment is done. The amount will be added to the project and owner can check it through the profile page.
## Software Required
- Install MongoDB
- Install Node.js
- Install Angular
- Browser for interface
## Setup
- In the express folder, create a file name secret.js with the following code

  ```
   module.exports = {
       jwtSecret: "your-secret-key",
       mongourl: "your-mongodb-url"
   };
   ```
- Replace "your-mongodb-url" with your working mongodb url and "your-secret-key" with your secret key.
- Go to each folder and run command `npm i` to install all dependencies.
- After creating secret.js, run command node server.js.
- Change directory to croudf folder and run commnad ng serve.
