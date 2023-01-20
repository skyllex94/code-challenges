function getLongest(left, right, s) {
  while (left > 0 && right < s.length) {
    if (s[left] !== s[right]) break;
    left--;
    right++;
  }
  return [left + 1, right];
}

var longestPalindrome = function (s) {
  let max = [0, 1];

  for (let i = 0; i < s.length; i++) {
    let even = getLongest(i - 1, i, s);
    let odd = getLongest(i - 1, i + 1, s);
    let curMax = even[1] - even[0] > odd[1] - odd[0] ? even : odd;
    max = max[1] - max[0] > curMax[1] - curMax[0] ? max : curMax;
  }

  console.log(s.slice(max[0], max[1]));
};

longestPalindrome("abasdfsddsf");

// var longestPalindrome = function (s) {
//     let buffer = "";
//     let max = "";

//     for (let i = 0; i < s.length; i++) {
//       buffer += s[i];
//       for (let j = 0; j < buffer.length; j++) {
//         if (buffer[j] === buffer[buffer.length - 1]) {
//           let subSplit = [...buffer].splice(
//             buffer.indexOf(buffer[j]),
//             buffer.length
//           );

//           let normal = subSplit.join("").toString();
//           let rev = subSplit.reverse().join("").toString();
//           if (rev === normal) {
//             console.log("rev", rev);
//             console.log("normal", normal);
//             max = max.length > normal.length ? max : normal;
//           }
//         }
//       }
//     }
//     console.log(buffer);
//     console.log("max:", max);
//   };
// =================================================================

// function isPalindrome(str) {
//     let rev = str.split("").reverse().join("");
//     return str === rev;
//   }

//   var longestPalindrome = function (s) {
//     let buffer = "";
//     let lngst = "";

//     for (let i = 0; i < s.length; i++) {
//       buffer += s[i];
//       console.log("buffer:", buffer);
//       for (let j = 0; j < buffer.length; j++) {
//         if (buffer[j] === buffer[buffer.length - 1]) {
//           let substr = buffer.substring(j, i + 1);
//           let split = [...buffer]
//             .splice(buffer.indexOf(buffer[j]), buffer.length)
//             .join("");
//           console.log("split:", split);
//           if (isPalindrome(substr)) {
//             lngst = lngst.length >= substr.length ? lngst : substr;
//             console.log("lngst:", lngst);
//           }
//         }
//       }
//     }
//     return lngst;
//   };

var isPalindrome = function (str) {
  let left =
    str.length % 2 === 1
      ? Math.floor(str.length / 2)
      : Math.floor(str.length / 2 - 1);
  let right = Math.floor(str.length / 2);

  const res = checkPalindrome(str, left, right);
  console.log("res:", res);
  return res;
};

function checkPalindrome(str, left, right) {
  let result = false;
  while (left >= 0 && right <= str.length) {
    if (str[left] !== str[right]) {
      result = false;
      break;
    } else if (str[left] === str[right] && left === 0) {
      result = true;
    }

    left--;
    right++;
  }

  return result;
}

// Amazing solution to the issue, simply reverse the str
// and check if it equals the the original one - got the idea from the best result
// and done the implementation myself

var isPalindromeAmazing = function (str) {
  if (str.length === 0) return false;
  const reversed = str.split("").reverse().join("");
  var result = str === reversed ? true : false;
  return result;
};

isPalindromeAmazing("");

// ----------------------------------------

// Runtime - Beats 98%, Space - Beats %70
var isPalindromeNum = function (num) {
  let str = num.toString();
  let left =
    str.length % 2 === 1
      ? Math.floor(str.length / 2)
      : Math.floor(str.length / 2 - 1);
  let right = Math.floor(str.length / 2);
  console.log("left:", left);
  console.log("right:", right);

  const res = checkPali(left, right, str);
  console.log("res:", res);
  return res;
};

function checkPali(left, right, str) {
  while (left >= 0 && right <= str.length) {
    if (str[left] !== str[right]) return false;
    if (str[left] === str[right] && left === 0) return true;

    left--;
    right++;
  }
}

// isPalindromeNum(112424211);
