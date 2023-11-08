export default function getAbbreviatedDayName(dateString) {
  const date = new Date(dateString);
  const options = { weekday: 'short' };
  return date.toLocaleDateString('en-US', options);
}
