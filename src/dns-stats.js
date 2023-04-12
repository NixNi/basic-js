

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  let results = {};
  for (let dom of domains) {
    let parts = dom.split('.');
    let str = '';
    for (let i = parts.length - 1; i >= 0; i--) {
      str += '.' + parts[i];
      results[str] ? results[str] += 1 : results[str] = 1;
    }
  }
  return results;
}

module.exports = {
  getDNSStats
};
