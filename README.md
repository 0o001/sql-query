# sql-query
 
# SQL Query Builder README

This is a simple SQL query builder utility that allows you to construct SQL queries using JavaScript code in a more convenient and expressive way. The code is written in JavaScript and employs the use of a Proxy object to create SQL query strings dynamically.

## Usage
```javascript
let query = sql.select('*').from('users').where({ id: 1, name: 'John' });
console.log(query.toString());
//output: SELECT * FROM users WHERE id=1,name='John'
```
