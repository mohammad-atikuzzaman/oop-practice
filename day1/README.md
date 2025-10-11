# Day 1: Introduction to Objects in JavaScript

## 📖 What is an Object?

An object is a collection of related **data** and **behavior** bundled together.

- **Properties** = data (values)
- **Methods** = behavior (functions)

### Real-life Example:

A student object might have:

**Properties:** name, roll, age  
**Methods:** read(), introduce()

```javascript
const student = {
  name: "Rahim",
  roll: 101,
  age: 20,
  introduce: function() {
    console.log(`Hi, I am ${this.name}, roll: ${this.roll}`);
  }
};
```

## 🔹 Understanding `this` Keyword

The `this` keyword refers to the current object context.

`this.name` means "the name property of this object."

## ⚠️ Common Mistakes to Avoid

### ❌ Mistake 1: Using Arrow Functions as Methods

```javascript
const person = {
  name: "Atik",
  introduce: () => {
    console.log(`Hi, I am ${this.name}`);
  }
};

person.introduce(); // Output: Hi, I am undefined
```

**Why this happens:**
- Arrow functions don't have their own `this` context
- They capture `this` from the parent scope
- When used as object methods, `this` refers to the global context (window/undefined in strict mode), not the object

**✅ Best Practice:** Use regular functions for object methods.

### ❌ Mistake 2: Destructuring Methods

```javascript
const person = {
  name: "Atik",
  age: 23,
  introduce: function () {
    console.log(`Hi, I am ${this.name}, ${this.age} years old`);
  }
};

const { introduce } = person;
introduce(); // Output: Hi, I am undefined, undefined years old
```

**Why this happens:**
- When destructured, the method loses its connection to the original object
- The `this` inside the method is no longer bound to the object

**✅ Best Practice:** If you need to destructure methods, bind them to the object:

```javascript
const { introduce } = person;
introduce.call(person); // Now it works correctly
```

## 🚀 Best Practices Summary

1. **Don't use arrow functions for object methods** - `this` won't work as expected
2. **Don't destructure methods without binding** - `this` will lose its reference
3. **Always use `this` inside object methods** - to correctly access properties
4. **Use shorthand notation** when property name and value are the same

## 📝 Practice Examples

Check the accompanying JavaScript files in this folder to see these concepts in action.