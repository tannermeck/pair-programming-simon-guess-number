import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('FAIL test to see if numbers are identical', expect => {
       //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(2, 1); // use your function here
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('FAIL test to see if numbers are LESS than', expect => {
    //Arrange
 // Set up your arguments and expectations
    const expected = -1;
 
 //Act 
 // Call the function you're testing and set the result to a const
    const actual = compareNumbers(18, 1); // use your function here
 

 //Expect
 // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('FAIL test to see if numbers are MORE than', expect => {
    //Arrange
 // Set up your arguments and expectations
    const expected = 1;
 
 //Act 
 // Call the function you're testing and set the result to a const
    const actual = compareNumbers(12, 19); // use your function here
 

 //Expect
 // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});