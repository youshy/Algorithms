module.export = (str) => {
  const input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  let index     = x => input.indexOf(x);
  let translate = x => index(x) > -1 ? output[index(x)] : x;
  return str.split('').map(translate).join('');
}
