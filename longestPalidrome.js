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
