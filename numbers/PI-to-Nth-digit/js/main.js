window.addEventListener('load', function(){
    var range = {
            min : 1,
            max : 5000
        },
        length, i, pn, resultBefore;

    document.getElementById('compute').addEventListener('click', function(){
        length = document.getElementById('length').value;
        if (length > range.max || length < range.min){
            alert( "please input a number between"
                 + range.min
                 + " and "
                 + range.max
                 );
            return;
        }
        for (i = 1; i <= length; i ++){
            resultBefore = document.getElementById('result').innerHTML;
            pn = nthOfPi(i);
            document.getElementById('result').innerHTML = resultBefore + pn;
        }
    });

    function nthOfPi(n){
        var av, a, vmax, N, num, den, k, kq, kq2, t, v, s, i;
        var sum;

        N = Math.floor((n + 20) * Math.log(10) / Math.log(2));
        sum = 0;

        for(a = 3; a <= (2 * N); a = next_prime(a)) {
            vmax = Math.floor(Math.log(2 * N) / Math.log(a));
            av = 1;
            for(i = 0; i < vmax; i++){
                av = av * a;
            }

            s   = 0;
            num = 1;
            den = 1;
            v   = 0;
            kq  = 1;
            kq2 = 1;

            for(k = 1; k <= N; k ++){
                t = k;
                if (kq >= a) {
                    while((t % a) === 0){
                        t = t / a;
                        v --;
                    }
                    kq = 0;
                }
                kq ++;
                num = mul_mod(num, t, av);
                t = (2 * k - 1);
                if (kq2 >= a){
                    if (kq2 === a){
                        while ((t % a) === 0){
                            t = t / a;
                            v ++;
                        }
                    }
                    kq2 -= a;
                }
                den = mul_mod(den, t, av);
                kq2 += 2;

                if (v > 0) {
                    t = inv_mod(den, av);
                    t = mul_mod(t, num, av);
                    t = mul_mod(t, k, av);
                    for(i = v; i < vmax; i ++){
                        t=mul_mod(t, a, av);
                    }
                    s += t;
                    if (s >= av){
                        s -= av;
                    }
                }

            }

            t   = pow_mod(10, n - 1, av);
            s   = mul_mod(s, t, av);
            sum = sum + s / av % 1.0;
        }
        pn = Math.floor(sum * 1e9);
        return pn;
    }
    function mul_mod(a, b, m){
        return (a * b) % m;
    }
    function inv_mod(x, y){
        var q,
            u = x,
            v = y,
            a = 0,
            c = 1,
            t;
        while (u !== 0){
          q = v / u;

          t = c;
          c = a - q * c;
          a = t;

          t = u;
          u = v - q * u;
          v = t;
        }
        a=a%y;
        if (a < 0){
            a=y+a;
        }
        return a;
    }
    function pow_mod(a, b, m){
        var r  = 1,
            aa = a;
        while (true){
            if (b & 1){
                r = mul_mod(r, aa, m);
            }
            b = b >> 1;
            if (b === 0){
                break;
            }
            aa = mul_mod(aa, aa, m);
        }
        return r;
    }
    function is_prime(n){
       var r, i;
       if ((n % 2) === 0){
           return 0;
       }

       r = Math.floor(Math.sqrt(n));
       for(i = 3; i <= r; i += 2){
           if ((n % i) === 0){
               return 0;
           }
       }
       return 1;
    }
    function next_prime(n){
        while (!is_prime(n)){
          n++;
        }
        return n;
    }
});
