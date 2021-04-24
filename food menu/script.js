const menu = {
  // setting the courses object
  _courses: {
    // creating property arrays
    appetizers: [],
    mains: [],
    desserts: [],
  },

  // courses ends here
  // creating getter and setter methods 
    get: function() {
      return this.appetizers;
      return this.mains;
      return this.desserts;
    },
    // setters
    set: function(appetizers) {
      this.appetizers = appetizers;
    },

    set: function(mains) {
      this.appetizers = mains;
    },

    set: function(desserts) {
      this.desserts = desserts;
    },

  // getter for courses
  get courses() {
     return {
       appetizers: this._courses.appetizers,
       mains: this._courses.mains,
       desserts: this._courses.desserts,
     };
  },

  // adding dishes to the course
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    console.log(courseName, Object.keys(this._courses));
    this._courses[courseName].push(dish);
  },

  // generating a random meal
  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
     return dishes[randomIndex];
  },
 
//  generating a random meal
  generateRandomMeal ()  {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return 'The total price for ' + appetizer.name + ', ' + main.name + ', ' + dessert.name + ' is ' + totalPrice
  }
};

menu.addDishToCourse('appetizers', 'french fries', 20);
menu.addDishToCourse('appetizers', 'mandazi', 167);
menu.addDishToCourse('appetizers', 'Mahamri', 99);

menu.addDishToCourse('mains', 'pilau', 220);
menu.addDishToCourse('mains', 'biriani', 320);
menu.addDishToCourse('mains', 'shawarma', 67);

menu.addDishToCourse('desserts', 'bhajia', 89);
menu.addDishToCourse('desserts', 'tende', 14);
menu.addDishToCourse('desserts', 'viazi', 9);

// generating a random meal
let meal = menu.generateRandomMeal();

console.log(meal);
