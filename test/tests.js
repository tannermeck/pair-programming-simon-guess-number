import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('tests if numbers are identical', expect => {
       //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(2, 2); // use your function here
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
