# Day 2: Constructor Functions in JavaScript

## 🎯 Learning Goals
- Understanding Constructor Functions
- Why we need Constructor Functions
- How the `new` keyword works
- Best practices and common pitfalls

## 📖 Constructor Functions Explained

### 🔹 What is a Constructor Function?
A constructor function is a special function used to create multiple similar objects.

**Convention:** Constructor function names start with a capital letter (PascalCase)

```javascript
function User(name, email) {
  this.name = name;
  this.email = email;
}
```

### 🔹 How the `new` Keyword Works
When you write `new User("Atik", "atik@example.com")`:

1. JavaScript creates an empty object `{}`
2. Binds `this` to that empty object
3. Executes the function body → properties are assigned to `this`
4. Returns `this` automatically

### 🔹 Why Use Constructor Functions?
- Avoids repetitive code when creating multiple similar objects
- Provides a template for object creation
- Establishes a clear pattern for object instantiation

### 🔹 Two Ways to Add Methods

1. **Directly inside constructor** (inefficient - each instance gets a new function copy)
   ```javascript
   function User(name) {
     this.name = name;
     this.sayHi = function() { // ❌ inefficient
       console.log(`Hi, I am ${this.name}`);
     }
   }
   ```

2. **Using Prototype** (best practice - all instances share the same function)
   ```javascript
   function User(name) {
     this.name = name;
   }
   
   User.prototype.sayHi = function() {
     console.log(`Hi, I am ${this.name}`);
   }
   ```

## ⚠️ Common Mistakes

### Calling Without `new`
```javascript
function User(name) {
  this.name = name;
}
const u1 = User("Atik"); // ❌ Wrong!
console.log(u1); // undefined (no return value)
console.log(globalThis.name); // "Atik" leaks to global scope
```

**Always use the `new` keyword when calling constructor functions!**

### Defining Methods Inside Constructor
```javascript
function User(name) {
  this.name = name;
  this.sayHi = function() { // ❌ inefficient
    console.log(`Hi, I am ${this.name}`);
  }
}
```

**Problem:** Each user instance will create a separate function in memory.

## ✅ Best Practices

1. **Always use `new` with constructor functions**
2. **Define methods on the prototype, not in the constructor**
3. **Use PascalCase naming for constructor functions**
4. **Keep constructors focused on initializing properties**

## 📝 Practice Examples

Check the accompanying JavaScript files in this folder to see these concepts in action.