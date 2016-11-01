/**
 * Export path parameter to JSON object
 */

export function pathParamsToJson(params) {
  let hash,
      myJson = {},
      hashes = params.slice(params.indexOf('?') + 1).split('&');

  for (var i=0;i<hashes.length;i++) {
      hash = hashes[i].split('=');
      myJson[hash[0]] = hash[1];
  }
  return myJson;
}