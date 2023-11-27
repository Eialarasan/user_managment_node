import express from 'express';
import ProcessRoutes from './ProcessRoutes';
import userRouters from './User/index'

let userRouter = express.Router(ProcessRoutes);
if (userRouters && userRouters.length > 0) {
    userRouter = ProcessRoutes(userRouter, userRouters);
} else {
    console.error('There is no user route configured')
}




export {
    userRouter
}