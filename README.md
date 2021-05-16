# REST-API
This is a REST API. 

### Setup Guidlines

#### STEP 1

 ```sh
 git clone https://github.com/payalpatra/REST-API.git
   ```

#### STEP 2
###### (Make sure to run this in the root directory) 

 ```sh
   npm install
   ```

#### STEP 3
###### (Create .env file in the root directory with the following Variable) 

  ```sh
   DATABASE_URL = MONGO_URI =mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.ifcel.mongodb.net/<DBNAME>?retryWrites=true&w=majority
   ```

* ##### Starting the server
###### (Make sure to run this in the root directory)
```sh
 nodemon server
   ```

