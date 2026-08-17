import {
	AreaCalculator,
	Circle,
	EmployeeType,
	FreelancerEmployee,
	FullTimeEmployee,
	InternEmployee,
	PartTimeEmployee,
	Rectangle,
	Square,
	Triangle,
} from '../../Solid/2.Ocp/main';

describe('AreaCalculator', () => {
	test('calculates the total area of all supported shapes', () => {
		const calculator = new AreaCalculator([
			new Circle(5),
			new Rectangle(4, 5),
			new Triangle(3, 4, 5),
			new Square(5),
		]);

		const expectedArea = Math.PI * 25 + 20 + 6 + 25;

		expect(calculator.calculateArea()).toBeCloseTo(expectedArea);
	});

	test('returns 0 when there are no shapes', () => {
		const calculator = new AreaCalculator([]);

		expect(calculator.calculateArea()).toBe(0);
	});
});

describe('Employee salary calculation', () => {
	test('calculates salaries for all employee types including freelancer', () => {
		const fullTimeEmployee = new FullTimeEmployee('Alice');
		const partTimeEmployee = new PartTimeEmployee('Bob');
		const internEmployee = new InternEmployee('Carol');
		const freelancerEmployee = new FreelancerEmployee('Dave', 10);

		expect(fullTimeEmployee.type).toBe(EmployeeType.FullTime);
		expect(partTimeEmployee.type).toBe(EmployeeType.PartTime);
		expect(internEmployee.type).toBe(EmployeeType.Intern);
		expect(freelancerEmployee.type).toBe(EmployeeType.Freelancer);

		expect(fullTimeEmployee.calculateSalary()).toBe(5000);
		expect(partTimeEmployee.calculateSalary()).toBe(3000);
		expect(internEmployee.calculateSalary()).toBe(1000);
		expect(freelancerEmployee.calculateSalary()).toBe(400);
	});
});
