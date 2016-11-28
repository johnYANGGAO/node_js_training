const crypto = require('crypto');
var identify = 'top_security'
const cipher = crypto.createCipher('aes192', identify);

var encrypted = '';

cipher.on('readable', () => {

  var data = cipher.read();
  if (data)
    encrypted += data.toString('hex');
});


cipher.on('end', () => {
  console.log(encrypted);
  
 
});

cipher.write('guess who i am  , hello , i am YongGao !');
cipher.end();

// ============================piped streams======================================

// const fs = require('fs');
// const cipher = crypto.createCipher('aes192', identify);

// const input = fs.createReadStream('test.js');//含有要加密的内容文件
// const output = fs.createWriteStream('test.enc');

// input.pipe(cipher).pipe(output);


// // ====================================decrypt=============================================

// var enc ='c2ca988faa6f048332ee2c6cea684865fdb05380068f4c5366028f3bbe27c9e680c58c028ed899ec4963403c6bed3b32'

// const decipher = crypto.createDecipher('aes192', identify);

// var decrypted = '';
// decipher.on('readable', () => {
//   var data = decipher.read();
//   if (data)
//     decrypted += data.toString('utf8');
// });
// decipher.on('end', () => {
//   console.log(decrypted);
// });

// decipher.write(enc, 'hex');
// decipher.end();

// =======================================fs============================

// const fs = require('fs');
// const decipher = crypto.createDecipher('aes192', identify);

// const input = fs.createReadStream('test.enc');
// const output = fs.createWriteStream('test_read_enc.js');

// input.pipe(decipher).pipe(output);


// ==========================sign========================================

// var  unsigned_data = 'some data to sign'
// const sign = crypto.createSign('sha256');

// sign.update(unsigned_data);

// const private_key = '-----BEGIN EC PRIVATE KEY-----\n' +
//         'MHcCAQEEIF+jnWY1D5kbVYDNvxxo/Y+ku2uJPDwS0r/VuPZQrjjVoAoGCCqGSM49\n' +
//         'AwEHoUQDQgAEurOxfSxmqIRYzJVagdZfMMSjRNNhB8i3mXyIMq704m2m52FdfKZ2\n' +
//         'pQhByd5eyj3lgZ7m7jbchtdgyOF8Io/1ng==\n' +
//         '-----END EC PRIVATE KEY-----\n';
/*
hexadecimal (also base 16, or hex) is a positional numeral system with a radix, 
or base, of 16. It uses sixteen distinct symbols, most often the symbols 0–9 to represent 
values zero to nine, and A, B, C, D, E, F (or alternatively a, b, c, d, e, f) to represent
values ten to fifteen.
*/
// var signed_data = sign.sign(private_key).toString('hex') 
// console.log(signed_data);



