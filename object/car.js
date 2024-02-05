const car = {
    name:"Toyota Premio",
    model: 2018,
    weight: "1000kg",
    color: "Purple",
    start: function(){
        console.log("Car has started");
    },
    drive: function(){
        console.log("Car is driving");
    },
};
console.log(car.name);
console.log(car.model);
console.log(car.weight);
console.log(car.color);
car.start();
car.drive();