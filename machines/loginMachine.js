const loginMachine = Machine({
  id: "login",
  initial: "idle",
  states: {
    idle: {
      on: { CLICK_LOGIN: "authorize" }
    },
    authorize: {
      on: {
        VALID_CREDENTIALS: "success",
        INVALID_CREDENTIALS: "failure",
        TIMEOUT: "failure.timeout"
      },
      meta: {
        message: "Loading..."
      }
    },
    success: {
      meta: {
        message: "The request succeeded!"
      }
    },
    failure: {
      initial: "mismatch",
      states: {
        mismatch: {
          meta: {
            message: "The request failed."
          }
        },
        timeout: {
          meta: {
            message: "The request timed out."
          }
        }
      },
      meta: {
        alert: "Uh oh."
      }
    }
  }
});
