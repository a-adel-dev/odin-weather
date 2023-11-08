export default function containsRainButNotPossible(message) {
  // Define regular expressions for "rain" and "possible"
  const rainRegExp = /\b(rain|drizzle)\b/i; // The 'i' flag makes it case-insensitive
  const possibleRegExp = /\bpossible\b/i;

  // Check if "rain" is present and "possible" is not present
  return rainRegExp.test(message) && !possibleRegExp.test(message);
}
