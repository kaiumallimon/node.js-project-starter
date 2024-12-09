## Node.js Starter

This is a starter repository for node.js backend with javascript and mongodb.


### Project Structure

```bash
|---NODEJS-STARTER # Project root
    |---node-modules/  # dependencies folder
    |---src/ # source folder : contains all the files
        |---configs/ #configs: contains all configurations
            |---db.config.js
        |---features/ # features : contains each features
            |---healthtips/
                |---controllers/
                    |---healthips.controller.js
                |---routes/
                    |---healthtips.route.js
        |---models/ # models: contains mongodb schemas
            |---healthtips.model.js
        |---middlewares/ # middlewares
        |---utils/ # utils
        |---index.js # project root folder
        |---server.js # server info
    |---.env 
    |---.gitignore
    |---package-lock.json
    |---package.json
    |---README.md
```

### Get Started

To get started, Clone this Repository at first with the following command:

```bash
git clone https://github.com/kaiumallimon/node.js-project-starter.git
```

Next, Install all the dependencies(make sure that the latest version of node.js is installed in your computer). To do this, run the following command:

```bash
npm install
```
```bash
Run the following command to check the current policy:

To check : 
**Get-ExecutionPolicy**

To change it temporary : 
**Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass**

Do it permanetly :
**Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser**

Reset after work done :
**Set-ExecutionPolicy Restricted**
```

Now, the project setup is complete. To run the project, you can simply run the following command:

```bash
node src/index.js
```

or you can use nodemon for automatic changes; to use nodemon, run the following commands:

Install Nodemon:
```bash
npm i nodemon -g
```

run the server with nodemon:
```bash
nodemon src/index.js
```


## Author

[Kaium Al Limon](https://www.facebook.com/lemon.exee)