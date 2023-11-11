# sql-query builder

This is a simple SQL query builder utility that allows you to construct SQL queries using JavaScript code in a more convenient and expressive way. The code is written in JavaScript and employs the use of a Proxy object to create SQL query strings dynamically.

## Usage
```javascript
let query = sql.select('*').from('users').where({ id: 1, name: 'John' });
console.log(query.toString());
//output: SELECT * FROM users WHERE id=1,name='John'

//Select
sql.select('id', 'password').from('users').toString();
//output: SELECT id,password FROM users

//Insert
sql.insertInto('users')[''](['a','b','c']).values(['$1', '$2', '$3']).toString();
//output: INSERT INTO users  (a,b,c) VALUES ($1,$2,$3)

//Update
sql.update('users').set({name: '$1'}).where({id: 1}).toString();
//output: UPDATE users SET name='$1' WHERE id=1

//Delete
sql.deleteFrom('users').where({id: 1}).toString();
//output: DELETE FROM users WHERE id=1

//Where
sql.select('*').from('users').where({id: 1}).or({id: 2}).toString();
//output: SELECT * FROM users WHERE (id=1) OR (id=2)
```
