var env = process.env.NODE_ENV || 'development';


process.env.MONGODB_URI = 'mongodb://elwindly:7ImmuraN500@ds050539.mlab.com:50539/todo';

if(env ==='development'){
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
}else if(env ==='test'){
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}

