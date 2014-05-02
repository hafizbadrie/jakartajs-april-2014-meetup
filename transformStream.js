var split   = require('split'),
    through = require('through'),
    tr      = through(function (line) {
      var strLine = line.toString();
      if (index%2 === 1) {
        this.queue(strLine.toLowerCase() + "\n");
      } else {
			  this.queue(strLine.toUpperCase() + "\n");
      }
      index++;
    }),
    index   = 1;

process.stdin
.pipe(split())
.pipe(tr)
.pipe(process.stdout);
