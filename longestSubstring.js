var lengthOfLongestSubstring = function (s) {
  let buffer = [""];
  let longestSubstring = 0;

  for (let i = 0; i < s.length; i++) {
    buffer[buffer.length - 1] += s[i];
    for (let j = 0; j < buffer[buffer.length - 1].length; j++) {
      const splitBefore = buffer[buffer.length - 1].slice(0);
      const splitAfter = buffer[buffer.length - 1].slice(j + 1);

      if (buffer[buffer.length - 1][j] === s[i + 1]) {
        buffer[buffer.length - 1] = splitBefore;
        buffer.push(splitAfter);
      }

      if (
        splitBefore.length > splitAfter.length &&
        splitBefore.length > longestSubstring
      ) {
        longestSubstring = splitBefore.length;
      }
      if (
        splitAfter.length > splitBefore.length &&
        splitAfter.length > longestSubstring
      ) {
        longestSubstring = splitAfter.length;
      }
    }
  }

  console.log(buffer);
  console.log(longestSubstring);
  return longestSubstring;
};

lengthOfLongestSubstring("sdflksd");

// let bufferLongest = 0;
// let buffer = "";
// let pass = true;
// let currLongest = 0;
// let longest = 0;

// for (let i = 0; i < s.length; i++) {
//   if (pass) {
//     buffer += s[i]; // pw []
//     console.log("buffer:", "|" + buffer + "|" + " length: " + buffer.length);
//     currLongest += 1;
//     console.log("currLongest:", currLongest);
//   } else {
//     pass = true;
//     bufferLongest = buffer.length; // -- 2

//     if (currLongest >= bufferLongest) {
//       longest = currLongest;
//     } else {
//       if (longest <= bufferLongest) {
//         longest = bufferLongest;
//         console.log("going in here");
//       }
//     }
//   }

//   for (let j = 0; j < buffer.length; j++) {
//     // [0 - a, 1 - a, 2 - b]
//     if (buffer[j - 1]) {
//       if (buffer[j - 1] && buffer[j] !== s[i + 1]) {
//         continue;
//       } else {
//         pass = false;
//       }
//     } else {
//       if (buffer[j] !== s[i + 1]) {
//         continue;
//       } else {
//         pass = false;
//       }
//     }
//   }
// }

// if (currLongest < buffer.length) {
//   currLongest = buffer.length;
// }

// if (currLongest >= longest) {
//   console.log("result:", currLongest);
//   return currLongest;
// } else {
//   console.log("result:", longest);
//   return longest;
// }
