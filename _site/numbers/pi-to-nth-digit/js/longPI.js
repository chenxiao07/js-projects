;(function(exports){
    "use strict";

    var b25    = new BigInt('25'),
        b57121 = new BigInt('57121'),
        scaleStr, i;

    var LongPI = function(L){
        var n = Math.floor(L / 1.39793 + 1);
        scaleStr = '1';
        for (i = 0; i < L; i ++){
            scaleStr += '0';
        }
        var scale = new BigInt(scaleStr),
            w = new BigInt('80'),
            v = new BigInt('956'),
            s = new BigInt('0'),
            q;

            w = w.multiply(scale);
            v = v.multiply(scale);

        for(i = 1; i <= n; i ++) {
            w = w.quotient(b25);
            v = v.quotient(b57121);
            q = w.minus(v);
            q = q.quotient(new BigInt(String(2 * i - 1)));
            s = (i % 2 === 1) ? s.plus(q) : s.minus(q);
        }
        return s.digits[0] + '.' + s.digits.slice(1).join('');
    };

    exports.LongPI = LongPI;
})(typeof exports !== 'undefined' ? exports : this);

