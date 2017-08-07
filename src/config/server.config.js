const SERVER_ENV = {
    'production': { port: process.env.SERVER_PORT },
    'development': { port: 4850 }
};

export default SERVER_ENV;