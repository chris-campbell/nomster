App.tally = App.cable.subscriptions.create("TallyChannel", {
  connected() {},


  disconnected() {},


  received(data) {
    if (data) {
      let placeID = data.places
      console.log(data)
      $('.score-value').replaceWith("<span class='score-value'>" + data.content + "</span>")
    }
  }
});
