var levelTrigger = (function() {
  var state = null

  return {
    getState: function () {
      return state
    },

    flipflop: function (data, write) {
      state = write ? data : state
    }
  }
})()

levelTrigger.flipflop(0, 1)
levelTrigger.flipflop(1, 1)
levelTrigger.flipflop(0, 0)
var result = levelTrigger.getState()
console.log(result)