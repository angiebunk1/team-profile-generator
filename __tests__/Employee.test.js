const Employee = require('../lib/Employee.js');

test('testing for employee name', () => {
    const testValue = 'Trisha'

    const newEmployee = new Employee(testValue);

    expect(newEmployee.name).toBe(testValue);
});

test('testing for emloyee id', () => {
    const testValue = '32'

    const newEmployee = new Employee('Dave', testValue);

    expect(newEmployee.id).toBe(testValue);
});

test('testing for employee email', () => {
    const testValue = 'myname@gmail.com'

    const newEmployee = new Employee('Dave', '16', testValue);

    expect(newEmployee.email).toBe(testValue);
});

test('testing for employee title', () => {

    const newEmployee = new Employee();

    expect(newEmployee.title).toBe("Employee");
});

test('testing for employee getName()', () => {
    const testValue = 'Trisha'

    const newEmployee = new Employee(testValue);

    expect(newEmployee.getName()).toBe(testValue);
});

test('testing for emloyee getId()', () => {
    const testValue = '32'

    const newEmployee = new Employee('Dave', testValue);

    expect(newEmployee.getId()).toBe(testValue);
});

test('testing for employee getEmail()', () => {
    const testValue = 'myname@gmail.com'

    const newEmployee = new Employee('Dave', '16', testValue);

    expect(newEmployee.getEmail()).toBe(testValue);
});

test('testing for employee getRole()', () => {

    const newEmployee = new Employee();

    expect(newEmployee.getRole()).toBe("Employee");
});