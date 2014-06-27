//Node.js Query String "Hello World"

var queryString=require ('querystring');

var string={ 
name:'Steven Fleming',
location:'Washington DC',
message:'Hello World' };

var result=queryString.stringify(string);
console.log(result);