// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  (function innerFunc(className, node) {
    if (node.classList && node.nodeType === 1 && node.classList.contains(className)) {
      result.push(node);
    }
    if (node.childNodes.length > 0) {
      for (var i = 0; i < node.childNodes.length; i++) {
        innerFunc(className, node.childNodes[i]);
      }
    }
  })(className, document.body);
  return result;
};
