/**
 * Created by pooja on 8/4/16.
 */

Object.defineProperty(global, '__stack', {
    get: function () {
        var orig = Error.prepareStackTrace;
        Error.prepareStackTrace = function (_, stack) {
            return stack;
        };
        var err = new Error;
        Error.captureStackTrace(err, arguments.callee);
        var stack = err.stack;
        Error.prepareStackTrace = orig;
        return stack;
    }
});

Object.defineProperty(global, '__line', {
    get: function () {
        return __stack[3].getLineNumber();
    }
});


Object.defineProperty(global, '__fileName', {
    get: function () {
        return __stack[3].getFileName();
    }
});





