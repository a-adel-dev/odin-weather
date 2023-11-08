export default function containsSnowButNotPossible(message) {
  // Define regular expressions for "rain" and "possible"
  const snowRegExp = /\bsnow\b/i; // The 'i' flag makes it case-insensitive
  const possibleRegExp = /\bpossible\b/i;

  // Check if "rain" is present and "possible" is not present
  return snowRegExp.test(message) && !possibleRegExp.test(message);
}
