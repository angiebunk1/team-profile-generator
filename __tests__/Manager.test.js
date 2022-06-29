const Manager = require('../lib/Manager.js');

test('testing for title', () => {
    const newManager = new Manager();

    expect(newManager.title).toBe("Manager");
})

test('testing for getRole()', () => {
    const newManager = new Manager();

    expect(newManager.getRole()).toBe("Manager");
})

test('testing for office number', () => {
    const testValue = '964'

    const newManager = new Manager('Dave', '32', 'dave@gmail.com', testValue);

    expect(newManager.officeNumber).toBe(testValue);
});

test('testing for getOfficeNumber()', () => {
    const testValue = '964'

    const newManager = new Manager('Dave', '32', 'dave@gmail.com', testValue);

    expect(newManager.getOfficeNumber()).toBe(testValue);
});