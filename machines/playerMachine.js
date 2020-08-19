const playerMachine = Machine({
  id: "player",
  initial: "loading",
  states: {
    loading: {
      on: {
        RESOLVE: "ready",
        REJECT: "error"
      },
      meta: {
        message: "Loading..."
      }
    },
    ready: {
      on: {
        CLICK_SONG: "playing",
        LIKE_PLAYLIST: "add",
        CLICK_NEXT: "next",
        ClIcK_BACK: "back"
      }
    },
    next: {
      // load next song
      // go back to ready/playing
      on: {
        RESOLVE: "playing",
        REJECT: "error"
      },
      meta: {
        message: "switching songs"
      }
    },
    back: {
      // load last song
      // go back to ready/playing
      on: {
        RESOLVE: "playing",
        REJECT: "error"
      },
      meta: {
        message: "switching songs"
      }
    },
    playing: {
      on: {
        CLICK_SONG: "playing",
        LIKE_PLAYLIST: "add",
        CLICK_NEXT: "next",
        ClIcK_BACK: "back"
      },
      meta: {
        message: "The request succeeded!"
      }
    },
    add: {
      meta: {
        message: "Added to liked songs"
      }
    },
    error: {
      meta: {
        message: "Error loading playlist"
      }
    }
  }
});
