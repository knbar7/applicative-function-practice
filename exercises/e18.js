/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

import { maxBy } from './e17.js';

export function getGreatestDiscoveryYear(data) {
  const asteroids = data.asteroids;

  const yearCounts = asteroids.reduce((counts, asteroid) => {
    const discoveryYear = asteroid.discoveryYear;
    counts[discoveryYear] = (counts[discoveryYear] || 0) + 1;
    return counts;
  }, {});

  const years = Object.keys(yearCounts);
  const yearWithMostDiscoveries = maxBy(years, year => yearCounts[year]);

  return parseInt(yearWithMostDiscoveries);
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
