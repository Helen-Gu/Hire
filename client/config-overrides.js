const { override, fixBabelImports, addLessLoader } = require("customize-cra");
/*
    customize-cra takes advantage of react-app-rewired's config-overrides.js file. 
    By importing customize-cra functions and exporting a few function calls wrapped in our override function, 
    you can easily modify the underlying config objects (webpack, webpack-dev-server, babel, etc.) 
    that make up create-react-app.
*/

module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true, // change importing css to less
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { "@primary-color": "#1DA57A" },
    })
);



