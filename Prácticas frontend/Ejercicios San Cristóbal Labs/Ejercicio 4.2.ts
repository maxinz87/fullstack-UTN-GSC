function padLeft(value: string, padding: number | string): string{

    if(typeof(padding) === "string")
        return `${Array(padding + 1).join('-')}${value}`
    else if(typeof(padding) === "number")
        return padding + value;
}

console.log('[Ejercicio 4.2]', `
    ${padLeft("45",11)}
    ${padLeft('',0)}
    ${padLeft('hola', '')}
    ${padLeft('mundo', '')}
    ${padLeft('','')}
    ${padLeft('','')}
    `
);
