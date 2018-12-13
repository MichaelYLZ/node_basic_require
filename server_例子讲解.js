'use strict';

let jsonData = require('./student.json');

console.log(jsonData); 

/*
It works exactly like the readFileSync , 

but it is a globally available method that you can use anywhere, 
which has its advantages.

缺点-
--01
Require is synchronous function and 
is called only once, 
which means 
the calls receive a cached result. 

If the file is updated 
you can't re-read it 
using this method.

--02
Your file must have '.json' extension, 
so it can't be as flexible. 

Without the proper extension 
require doesn't treat the file 
as JSON file.









*/