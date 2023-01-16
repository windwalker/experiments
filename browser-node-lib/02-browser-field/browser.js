var b64encode = require('./local_node_modules/base64_encode_string');
console.log(typeof btoa)
console.log(b64encode('foo'));    // Zm9v
console.log(b64encode('foobar')); // Zm9vYmFy