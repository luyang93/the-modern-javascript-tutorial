// 📁 say.js
function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

function sayBye(user) {
  console.log(`Bye, ${user}!`);
}

export function becomeSilent() { }

export {sayHi, sayBye}; // 导出变量列表

export {sayHi as hi, sayBye as bye};

export {sayHi as default};
