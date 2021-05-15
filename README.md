# AWS Lambda serverless working
This repo was created to demonstrate the working of Nodejs express lambda function when invoked using the api gateway.

This application is similar to any node app which can be run on local using the command **node app.js**

It can also be invoked using api gateway whose main file is **lambda.js**

It uses an npm package called **aws-serverless-express** (similar popular package **serverless-http**) which directs the request coming from api gateway to appropriate express route.

## Api Gateway setup
- Create a proxy resource with a greedy path variable of {proxy+}.
- Set the ANY method on the proxy resource.
- Integrate the resource and method with a backend using the Lambda integration type
- Deploy this API