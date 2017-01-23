# Description of the idea

Micro Kudos is going to be a JavaScript implementation in order to store the 
Kudos for the users. It's architecture is going to be based on serverless micro functions,
the Kudos platform allows the user to store positive stuff based on the details of the 
users. 

Micro kudos is going to be deployed using a utility called `now`
 which is very **easy to use**. Micro kudos provide a really nice functional interface
for us, to build and practice different concepts such as Test Driven Development, Redis database and mostly functional programming too, which can be really
helpful for us in the long run.

### Things to improve on

#### Structure of the Redis database
The structure of the data stored in the redis can be made more consistent and optimized.
Right now, we are using two different structures to maintain the urls as well as to maintain the hash of redis links,
this will lead to performing not very efficient database operations, the memory use 
can be reduced without even reducing, without impacting the performance of the given operations, we should 
try hard to keep operations at Max O(log N) and never reach O(N) time complexity.

#### Better method support

Even though we wan't to keep it very minimalistic, there should be better method support for 
the following methods, so the people who wan't clarity in their applications, can 
make a better use of this method support.
- POST
- DELETE
- PUT


#### More data support

More advanced features to be used can include

#### Authentication support
Connecting with a database, and reading the authentication tokens from the database,
in order to only accept the requests if authenticated.

#### Metadata support
In order to make this data more useful for the applications, we can make available following features, meta data
for applications will be highly useful especially details such as, 
- Date Liked
- Referrer
- IP Address
etc. all the data that can be actually helpful to the user, should be made available 

#### Batch operations support
The operations such as getting the count of the urls should be enabled in batch, so we can load
the count of the all the urls in a single request which will immensely reduce the round trips 
we need to make to get the counts. 

The batch operations can be in the form of POST requests which can be really helpful
