function indexOfIgnoreCase(s1, s2) {
  // If s2 is an empty string, return 0
  if (s2 === "") return 0;

  // If s1 is empty and s2 is not, return -1
  if (s1 === "") return -1;

  // Convert both strings to lowercase for case-insensitive comparison
  const lowerS1 = s1.toLowerCase();
  const lowerS2 = s2.toLowerCase();

  // Use indexOf to find the first occurrence
  return lowerS1.indexOf(lowerS2);
}
