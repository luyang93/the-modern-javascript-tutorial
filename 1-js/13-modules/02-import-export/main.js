// 📁 main.js
import {sayHi, sayBye} from './say.js';
import * as say from './say.js';
import {sayHi as hi, sayBye as bye} from './say.js';
import * as say2 from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

say.sayHi('John');
say.sayBye('John');

hi('John'); // Hello, John!
bye('John'); // Bye, John!

say2.hi('John'); // Hello, John!
say2.bye('John'); // Bye, John!

import User from './user.js';

let user = new User('John');
console.log(user.name);

import {default as User2, sayHi as sayHi2} from './user.js';

let user2 = new User2('John');
console.log(user2);

import * as user_ from './user.js';

let User3 = user_.default;
let user3 = new User3('John');
console.log(user3);

export {sayHi, sayBye} from './say.js';
export {default as User} from './user.js';

import './say.js';
