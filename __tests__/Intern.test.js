const Intern = require('../lib/Intern.js');

test('testing for title', () => {
    const newIntern = new Intern();

    expect(newIntern.title).toBe("Intern");
})

test('testing for getRole()', () => {
    const newIntern = new Intern();

    expect(newIntern.getRole()).toBe("Intern");
})

test('testing for school', () => {
    const testValue = 'University'

    const newIntern = new Intern('Dave', '32', 'dave@gmail.com', testValue);

    expect(newIntern.school).toBe(testValue);
});

test('testing for getSchool()', () => {
    const testValue = 'University'

    const newIntern = new Intern('Dave', '32', 'dave@gmail.com', testValue);

    expect(newIntern.getSchool()).toBe(testValue);
});