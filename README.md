# Micro Kudos

[![Greenkeeper badge](https://badges.greenkeeper.io/abdulhannanali/micro-kudos.svg)](https://greenkeeper.io/)
Instance of the application deployed on now available [here](https://micro-kudos-zycpfowbly.now.sh/https://facebook.com?increment=true)

<!--Badges come here-->
[![micro logo](https://cldup.com/JDmmHX3uhF.svg)](https://github.com/zeit/micro)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
![Travis CI Build Status](https://api.travis-ci.org/abdulhannanali/micro-kudos.svg?branch=master)

A serverless Kudos microservice for site, along with a simple method to 
take back the kudos too, by providing a randomly generated id, which 
can be used to unlike or as I say dekudo the url. It just reduces the count.

## Architecture

The Micro Kudos uses `redis` to persist the Kudos it receives, we use `redis` cos it's fast,
scalable and even I can understand it. There are a few optimizations we are planning to 
do in the future, modifications around the data structures we are using now, will be awesome to have.

We use [Micro by Zeit](https://github.com/zeit/micro) as a backbone of this
project. This project was inspired by Micro analytics which let's you collect simple analytics about your 
website. The Micro kudos is similar but is more catered to (Like/Unlike) type of functionality.

## Contribution
There are a few things that would be really awesome to have, check out [idea.md](idea.md). This project 
needs more contributions and it would be awesome to see in a production ready environment, along with all
the neat stuff that goes with a production ready applications.

Some other things that have a high priority are:

- Add tests using Jest
- Add [Travis CI](https://travis-ci.org) build Task, in order to make sure, this project, is always working just fine
- Redesign the application architecture and way the requests are being made in the application
- Implement some of the well suited ideas in [idea.md](idea.md) while keeping the architecture simple as it's a microservice.
- Work on better document for the operations used for this application
- Make the database part, more modular and use adapters such as the one available for Micro Analytics.
- Reach to **1.0**

### LICENSE
MIT LICENSE. See [LICENSE](LICENSE) for more details