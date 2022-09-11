// 📁 user.js
export default class User { // 只需要添加 "default" 即可
  constructor(name) {
    this.name = name;
  }
}

export function sayHi(user) {
  console.log(`Hello, ${user}!`);
}
