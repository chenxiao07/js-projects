# clock.js

a clock written in pure javascript using canvas. see [demo](http://leungwensen.github.io/graphics-and-multimedia/clock.js/)

## usage

in your xxx.html file:
```html
    <html>
    <head>
        ...
        <script type="text/javascript" src="clock.js"></script>
        ...
    </head>
    <body>
        ...
        <canvas id="sample"></canvas>
        ...
    </body>
        <script type="text/javascript">
            var options = {
                canvas       : document.getElementById('sample'),
                intervalTime : 50
            };
            var clock = new Clock(options);
            clock.draw();
        </script>
    </html>
```

