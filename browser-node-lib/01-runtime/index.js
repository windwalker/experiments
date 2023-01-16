if (process.browser) {
    module.exports = function (string) {
      return btoa(string);
    };
} else {
    module.exports = function (string) {
      return Buffer.from(string, 'binary').toString('base64');
    };
}