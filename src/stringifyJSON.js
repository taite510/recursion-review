// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';
  (function innerFunc (obj) {
    if (Array.isArray(obj)) {
      if (obj.length === 0) {
        result += '[]';
      }
      for (var i = 0; i < obj.length; i++) {
        if (i === 0) {
          result += '[';
        }
        innerFunc(obj[i]);
        if (i !== obj.length - 1) {
          result += ',';
        }
        if (i === obj.length - 1) {
          result += ']';
        }
      }
    } else if (typeof obj === 'number') {
      result += obj;
    } else if (obj === null) {
      result += 'null';
    } else if (typeof obj === 'boolean') {
      result += obj;
    } else if (typeof obj === 'string') {
      result += '"' + obj + '"';
    } else if (typeof obj === 'function') {
      //do nothing
    } else {
      if (Object.keys(obj).length === 0) {
        result += '{}';
      } else {
        result += '{';
        var keys = Object.keys(obj);
        for (var i = 0; i < keys.length; i++) {
          if (i ===  keys.length - 1) {
            result += '"' + keys[i] + '"' + ':' + innerFunc(obj[keys[i]])
          } else {
            result += '"' + keys[i] + '"' + ':' + innerFunc(obj[keys[i]]) + ', '
          }
        }
        result += '}';
      }



      // else {
      //   result += '{';
      //   for (var key in obj) {
      //     result += '\'' + key + '\': ' + innerFunc(obj[key])
      //   }
      //   result += '}';
      // }
    }
  })(obj);
  return result;
};
