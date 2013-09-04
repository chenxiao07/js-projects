# bigInt.js
javascript library for big integer

see example in homepage [demo](http://leungwensen.github.io/js-projects/numbers/bigInt.js/)

see pi-calculating example using bigInt.js [demo](http://leungwensen.github.io/js-projects/numbers/pi-to-nth-digit/)

## usage
```javascript
    var (int1, int2, result, flag, str);

    // new
    int1 = new BigInt('12123456903451234569069011234569011111234569023456902345690234569023456902345690');
    int2 = new BigInt('12123456903451234569069011234569011111234569023456902345690234569023456902345690');

    // operation
    result = int1.plus(int2);     // int1 + int2
    result = int1.minus(int2);    // int1 - int2
    result = int1.multiply(int2); // int1 * int2
    result = int1.mod(int2);      // int1 % int2
    result = int1.quotient(int2); // int1 / int2

    // misc
    flag   = int1.isEqual(int2);       // int1 == int2
    flag   = int1.isNotEqual(int2);    // int1 != int2
    flag   = int1.isGreaterThan(int2); // int1 > int2
    flag   = int1.isLessThan(int2);    // int1 < int2
    flag   = int1.isNegative;          // int1 < 0
    str    = int1.originStr;           // stringify(int1)
    result = int1.clone();             // clone(int1)
    result = int1.complement();        // -int1
```

## download
[download](https://raw.github.com/leungwensen/js-projects/master/assets/js/numbers/bigInt.js)
