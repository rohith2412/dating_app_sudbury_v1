if (process.env.NODE_ENV === 'production') {
  console.log = function () {};
  console.debug = function () {};
  console.info = function () {};
}
