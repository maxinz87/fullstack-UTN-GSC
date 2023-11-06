function padLeft(value, padding) {
    if (typeof (padding) === "string")
        return "".concat(Array(padding + 1).join('-')).concat(value);
    else if (typeof (padding) === "number")
        return padding + value;
}
console.log('[Ejercicio 4.2]', "\n    ".concat(padLeft("45", 11), "\n    ").concat(padLeft('', 0), "\n    ").concat(padLeft('hola', ''), "\n    ").concat(padLeft('mundo', ''), "\n    ").concat(padLeft('', ''), "\n    ").concat(padLeft('', ''), "\n    "));
console.log(Array("45" + 1).join(' '));
