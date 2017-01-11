exports.methods = function (api, path) {
  if (api['paths'][path]) {
    return Object
      .keys(api['paths'][path])
      .map(function (method) {
        return method.toUpperCase()
      })
  } else {
    return []
  }
}
