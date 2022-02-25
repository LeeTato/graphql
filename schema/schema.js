const graphql = require('graphql');
const _ = require('lodash');

const {GraphQLObjectType,// import from graphql
       GraphQLString,
       GraphQLInt,
       GraphQLSchema} = graphql

const cars = [    // data in database
    {"id": "23", "carName":"honda", "price":20000},
    {"id": "47", "carName":"acura", "price":30000},
    {"id": "13", "carName":"ford", "price":40000}
   
]

const CarsType = new GraphQLObjectType({ // data type for the above data and the model 
    name: 'Cars',
    fields:{
        id:{type: GraphQLString},
        carName:{type: GraphQLString},
        price:{type: GraphQLInt}
    }
})

const RootQuery = new GraphQLObjectType({  // the root query use for to speacify how we will use the data
    name: 'RootQueryType',                   
    fields:{
        car:{ //this is the name we use to use the object  
            type: CarsType,
            args:{id:{type:GraphQLString}},
            resolve(parentValue, args){
                return _.find(cars,{id:args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})