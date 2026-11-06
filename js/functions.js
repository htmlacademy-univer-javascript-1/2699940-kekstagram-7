function isStringLengthValid(string, maxLength) {
  return string.length <= maxLength;
}
function isPalindrome(string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }

  return normalizedString === reversedString;
}
function extractNumber(value) {
  const stringValue = value.toString();
  let digits = '';

  for (let i = 0; i < stringValue.length; i++) {
    const digit = parseInt(stringValue[i], 10);

    if (!Number.isNaN(digit)) {
      digits += stringValue[i];
    }
  }

  return digits === '' ? NaN : parseInt(digits, 10);
}
window.isStringLengthValid = isStringLengthValid;
window.isPalindrome = isPalindrome;
window.extractNumber = extractNumber;
