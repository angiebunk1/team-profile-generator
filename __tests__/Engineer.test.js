const Engineer = require('../lib/Engineer.js');

test('testing for title', () => {
    const newEngineer = new Engineer();

    expect(newEngineer.title).toBe("Engineer");
})

test('testing for getRole()', () => {
    const newEngineer = new Engineer();

    expect(newEngineer.getRole()).toBe("Engineer");
})

test('testing for github', () => {
    const testValue = 'garycodes31'

    const newEngineer = new Engineer('Dave', '32', 'dave@gmail.com', testValue);

    expect(newEngineer.github).toBe(testValue);
});

test('testing for getGithub()', () => {
    const testValue = 'garycodes31'

    const newEngineer = new Engineer('Dave', '32', 'dave@gmail.com', testValue);

    expect(newEngineer.getGithub()).toBe(testValue);
});

