export function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) {
        return 0;
    }
    else if (guess < correctNumber) {
        return -1;
    }
    else if (guess > correctNumber) {
        return 1;
    } else {
        return;
    }
}

export function hints(numberValue) {
    if (numberValue === 0) {
        return 'You guessed right. Congrats!';
    }
    if (numberValue === -1) {
        return 'Your guess is too LOW!';
    }
    if (numberValue === 1) {
        return 'Your guess is too HIGH!';
    }
}

