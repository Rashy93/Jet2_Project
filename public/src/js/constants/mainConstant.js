module.exports = {
  USER: {
    LOGIN: "USER LOGIN",
    LOGOUT: "USER LOGOUT",
    UPDATE: {
      LOGIN: "USER UPDATE LOGIN",
      LOGOUT: "USER UPDATE LOGOUT",
      DELETE: "USER UPDATE DELETE"
    },
    ERROR: {
      LOGIN: "USER ERROR LOGIN",
      LOGOUT: "USER ERROR LOGOUT"
    },
    DELETE: "USER DELETE"
  },
  TIMESHEET: {
    CREATE: "TIMESHEET CREATE",
    UPDATE: {
      // When you press save, use this constant to echo that you want this ONE timesheet to update when EMMITED from store
      ONE: "TIMESHEET UPDATE ONE",
      /*
        On approval user, when you want to view ALL timesheets and recieved back a call from the server,
        EMIT this constant to update the page
      */
      ALL: "TIMESHEET UPDATE ALL"
    }
  }
}
