# cloud-drive

This is cloud storage. Operations, registration, authentication, authorization are implemented for users. Authorization is performed using jwt berer tokens. Also the ability to change the profile icon.

For cloud storage, the following operations are implemented: uploading files, downloading files, creating directories, placing files in them.

Express.js is used as a backend framework. React + Redux is used as a frontend framework. MongoDB is used as storage.

To start the project, you need to install node, in the server and client directories, write the command

`````````console
npm install
`````````

And then you can run it with the command

`````````console
npm start
````````

Or via docker. Then you need to install docker and write the command in the root directory

`````````
docker-compose-up
````````

The API is documented via swagger. It is available at:
http://localhost:8000/api-docs


https://user-images.githubusercontent.com/91548851/183493247-2cf66127-a494-4bdf-9b1d-122b8eaf2632.mov

