"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (u) {
    var todo = u.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logOutput(id, title, completed);
})["catch"](function (err) {
    console.log(err);
});
var logOutput = function (id, title, completed) {
    console.log("\n     id : " + id + ",\n     title : " + title + ",\n     completed : " + completed + "\n\n     Okay\n  ");
};
