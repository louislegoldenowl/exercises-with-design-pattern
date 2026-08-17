/**
 * *****************************************
 * 📝 UNCOMMENT THE PRACTICE SECTION CODE YOU WANT BELOW AND START YOUR SOLUTION
 * *****************************************
 *
 * The following lines are currently commented out.
 * Uncomment them to start implementing your solution.
 * Happy coding! 🚀
 */

/*=========== START PRACTICE 1 ===============*/

abstract class Shape {
    abstract calculateArea(): number;
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }

    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Rectangle extends Shape {
    constructor(public height: number, public width: number) {
        super();
    }

    calculateArea(): number {
        return this.height * this.width;
    }
}

class Triangle extends Shape {
   constructor(public a: number, public b: number, public c: number) {
        super();
    }

    calculateArea(): number {
        // Using Heron's formula
        const s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }
}

class Square extends Shape {
    constructor(public length: number) {
        super();
    }

    calculateArea(): number {
        return this.length * this.length;
    }
}

class AreaCalculator {
    constructor(private shapes: Shape[]) {}

    calculateArea(): number {
        return this.shapes.reduce((total, shape) => total + shape.calculateArea(), 0);
    }
}

let shapes: Shape[] = [
    new Circle(5),
    new Rectangle(4, 5),
    new Triangle(3, 4, 5),
    new Square(5),
];
const shapesInstance = new AreaCalculator(shapes);
console.log(shapesInstance.calculateArea());
/*=========== END PRACTICE 1 ===============*/



/*=========== START PRACTICE 2 ===============*/
enum EmployeeType {
    FullTime,
    PartTime,
    Intern,
    Freelancer
}

abstract class Employee {
    constructor(public name: string, public type: EmployeeType) { }

    abstract calculateSalary(): number;
}

class FullTimeEmployee extends Employee {
    constructor(name: string) {
        super(name, EmployeeType.FullTime);
    }

    calculateSalary(): number {
        return 5000;
    }
}

class PartTimeEmployee extends Employee {
    constructor(name: string) {
        super(name, EmployeeType.PartTime);
    }

    calculateSalary(): number {
        return 3000;
    }
}

class InternEmployee extends Employee {
    constructor(name: string) {
        super(name, EmployeeType.Intern);
    }

    calculateSalary(): number {
        return 1000;
    }
}

class FreelancerEmployee extends Employee {
    workingHours: number;
    hourlyRate: number;

    constructor(name: string, workingHours: number, hourlyRate: number = 40) {
        super(name, EmployeeType.Freelancer);
        this.workingHours = workingHours;
        this.hourlyRate = hourlyRate;
    }

    calculateSalary(): number {
        return this.workingHours * this.hourlyRate;
    }
}

const fullTimeEmployee = new FullTimeEmployee("Alice");
console.log(`${fullTimeEmployee.name}'s salary is ${fullTimeEmployee.calculateSalary()}`);

const internEmployee = new InternEmployee("Bob");
console.log(`${internEmployee.name}'s salary is ${internEmployee.calculateSalary()}`);
/*=========== END PRACTICE 2 ===============*/