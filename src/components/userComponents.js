console.log('userComponent loaded');


import { Baselogger, ElasticLogger, MongoLogger } from "../corssCuttingConcern/logger/logger.js";
import User from "../models/user.js";
import UserServices from "../services/userServices.js";

let logger1=new MongoLogger()


let userServices=new UserServices(logger1)

let user1=new User(1,'Toby','Lingard','Berlin')
let user2=new User(2,'Ceff','Hakimi','Ankara')



userServices.add(user1)
userServices.add(user2)
console.log(userServices.list());
console.log(userServices.getById(2));