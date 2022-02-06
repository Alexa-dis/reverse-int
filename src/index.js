module.exports = function reverse (n) {
    if (n > 0) {
       return +(n.toString(10).split('').reverse().join('')) 
    } else {
        return +((n * -1).toString(10).split('').reverse().join(''))
    }
  ;
}
