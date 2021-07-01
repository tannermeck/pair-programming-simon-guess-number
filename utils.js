export function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) {
        return 'you guessed right!';
    }
    else if (guess < correctNumber) {
        return 'Your guess is too LOW.';
    }
    else if (guess > correctNumber) {
        return 'Your guess is too HIGH.';
    } else {
        return;
    }
}

