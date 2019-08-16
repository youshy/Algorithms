const rot13Fast = (str) => {
    return str.split('').map(x => rot13Fast.lookup[x] || x).join('')
}

rot13Fast.input  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
rot13Fast.output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'.split('')
rot13Fast.lookup = rot13Fast.input.reduce((m,k,i) => Object.assign(m, {[k]: rot13Fast.output[i]}), {})

module.export = rot13Fast
