# cloud-drive

This is cloud storage. Operations, registration, authentication, authorization are implemented for users. Authorization is performed using jwt berer tokens. Also the ability to change the profile icon.

For cloud storage, the following operations are implemented: uploading files, downloading files, creating directories, placing files in them.

Express.js is used as a backend framework. React + Redux is used as a frontend framework. MongoDB is used as storage.

To start the project, you need to install node, in the server and client directories, write the command

`````````console
npm install
`````````

Then, in order to run the project locally, you need to configure the .env config in the server directory. It stores settings for jwt, mongo, files folder and static folder. And then write the command in the console.

`````````console
npm start
`````````

Or via docker. Then you need to install docker and write the command in the root directory

`````````console
docker-compose-up
`````````

The API is documented via swagger. It is available at:
http://localhost:8000/api-docs

<img width="1680" alt="Screenshot 2022-08-09 at 00 17 55" src="https://user-images.githubusercontent.com/91548851/183518082-638c65df-8a86-4350-85a5-a4c876ae87dd.png">



https://user-images.githubusercontent.com/91548851/183493247-2cf66127-a494-4bdf-9b1d-122b8eaf2632.mov

