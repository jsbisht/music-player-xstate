const homepageMachine = Machine({
  id: "homepage",
  initial: "idle",
  states: {
    idle: {
      on: { SELECTION: "playlist" }
    },
    playlist: {
      meta: {
        message: "Loading..."
      }
    }
  }
});
