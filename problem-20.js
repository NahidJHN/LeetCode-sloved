/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [];
  for (const element of s.split("")) {
    if (element === "(" || element === "{" || element === "[") {
      stack.push(element);
    } else {
      if (!stack.length) return false;
      const top = stack.pop();
      if (
        (top === "(" && element === ")") ||
        (top === "{" && element === "}") ||
        (top === "[" && element === "]")
      ) {
        return true;
      }
    }
  }

  return stack.length === 0;
};
console.log(isValid("(])"));
