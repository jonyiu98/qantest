# qantest

##
Author: Jon Yiu
Date: 13th Jan 2019
##

###
This project contains the Micoservices API implementation for Qantas Test.
The following APIs are implemented:
  #### create a profile
  POST - https://mb09y52pfg.execute-api.ap-southeast-2.amazonaws.com/dev/profiles
  
  #### Retrieve a profile with a profile id
  GET - https://mb09y52pfg.execute-api.ap-southeast-2.amazonaws.com/dev/profiles/{profileId}
  
  #### Without business requirement, this currently return a list of 20 most recently created profile ids   
  GET - https://mb09y52pfg.execute-api.ap-southeast-2.amazonaws.com/dev/profiles
  
  #### update the profile with specified id
  PUT - https://mb09y52pfg.execute-api.ap-southeast-2.amazonaws.com/dev/profiles/{profileId}
  
  #### delete the profile with specified id
  DELETE - https://mb09y52pfg.execute-api.ap-southeast-2.amazonaws.com/dev/profiles/{profileId}
  
  #### add an address to a specific profile
  POST - https://mb09y52pfg.execute-api.ap-southeast-2.amazonaws.com/dev/profiles/{profileId}/addresses
  
  #### Retrieve an address with an address id
  GET - https://mb09y52pfg.execute-api.ap-southeast-2.amazonaws.com/dev/profiles/addresses/{addressId}
  
  #### Retrieve all address ids associated with a profile
  GET - https://mb09y52pfg.execute-api.ap-southeast-2.amazonaws.com/dev/profiles/{profileId}/addresses
  
  #### Update an address with an address id
  PUT - https://mb09y52pfg.execute-api.ap-southeast-2.amazonaws.com/dev/profiles/addresses/{addressId}
  
  #### delete an address associated with a profile
  DELETE - https://mb09y52pfg.execute-api.ap-southeast-2.amazonaws.com/dev/profiles/{profileId}/{addressId}
  
#####
API Contract Definition can be found in "/qanapi/dev-qanProfileLambda-SIT-swagger.json"
  
######
This project utilises Serverless Framework to deploy api to AWS API Gateway. API logic is implemented with Lambda functions with NodeJS. 
To run,
1. check and configure "/qanapi/serverless.yml" with correct details
2. run "sls deploy" to deploy to AWS. 
