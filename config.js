const config = {
    "development":{
        "host":"localhost",
        "dbport":"27017",
        "port":"4014",
        "username":"root",
        "password":"",
        "userdb":"",
        "passworddb":"",
        "authSource":"",   
        "database":"navedkitchen1",
        "secretkey":"96848-43962-42988-92565",
        "sealpass":"YyjtEzbGFLlpGLbtT0NnykqBAPFyWnSx"
    },
    "staging":{
        "host":"10.137.159.54",
        "dbport":"27017",
        "port":"4014",
        "username":"mealdaay",
        "password":"Mealdaay123$",
        "authSource":"admin",
        "userdb":"mealdaay",
        "passworddb":"Mealdaay123$",
        "database":"navedkitchen1",
        "secretkey":"96848-43962-42988-92565",
        "sealpass":"YyjtEzbGFLlpGLbtT0NnykqBAPFyWnSx"
    },

    "production":{
        "host":"db.mealdaay.com",
        "dbport":"27017",
        "port":"4014",
        "authSource":"admin",
        "userdb":"mealdaay",
        "passworddb":"Mealdaay123$",
        "username":"root",
        "password":"",
        "database":"navedkitchen1",
        "secretkey":"96848-43962-42988-92565",
        "sealpass":"YyjtEzbGFLlpGLbtT0NnykqBAPFyWnSx"
    }
    
};
module.exports = config;