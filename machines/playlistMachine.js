const playlistMachine = Machine({
  id: "playlist",
  initial: "loading",
  states: {
    loading: {
      on: {
        RESOLVE: "idle",
        REJECT: "error"
      },
      meta: {
        message: "Loading..."
      }
    },
    idle: {
      on: {
        CLICK_SONG: "success",
        LIKE_PLAYLIST: "add"
      }
    },
    success: {
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
