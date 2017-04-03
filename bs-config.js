module.exports = {
    port: process.env.PORT || 3000,
    "open": true,
    "logLevel": "silent",
    "notify" : false,
    server:{
        baseDir: "src",
        routes: {
            "/node_modules": "node_modules"
        },
        "middleware": {
           "0": null
        }
    }
};
