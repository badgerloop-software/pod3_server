# Badgerloop Software: Pod 3 Server
This server will be responsible for handling incoming UDP packet requests
from the pod's sensors, inserting them into the local MySQL database, and
handling HTTP requests for the latest sensor data (by querying the database).

## API Usage
The documentation for the REST API will be updated at https://badgerloop.docs.apiary.io

## Local Development
In your project directory, run ```npm install``` followed by ```npm run start```
You can now access the API via port 3000 on your machine.
