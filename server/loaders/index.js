const expressLoader = require ('./express');
const mongooseLoader = require ('./mongoose');

module.exports = async (expressApp) => {
    await mongooseLoader();
    console.log("MongoDB Initialized");
    await expressLoader(expressApp);
    console.log('Express Initialized');
}
