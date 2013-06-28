
/**
 * Create object url.
 */

exports.create = (window.URL && URL.createObjectURL.bind(URL))
  || (window.webkitURL && webkitURL.createObjectURL.bind(webkitURL))
  || window.createObjectURL;

/**
 * Revoke object url.
 */

exports.revoke = (window.URL && URL.revokeObjectURL.bind(URL))
  || (window.webkitURL && webkitURL.revokeObjectURL.bind(webkitURL))
  || window.revokeObjectURL;
