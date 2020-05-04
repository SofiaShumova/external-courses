function bind(func, context, ...param) {
    return function (...args) {
        return func.call(context, ...param.concat(args) );
    }
}