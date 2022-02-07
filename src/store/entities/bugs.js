import { createSelector, createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { STATUS } from "../../constants";

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugsAdded: (bugs, action) => {
      bugs.push({
        id: Number((Math.random() * 10000).toFixed(0)),
        title: action.payload.title,
        description: action.payload.description,
        resolved: false,
        status: STATUS.new,
        createdOn: Date.now(),
        modifiedOn: Date.now()
      })
    },
    bugsResolved: (bugs, action) => {
      const index = bugs.findIndex(bug => bug.id === action.payload.bugId)
      bugs[index].resolved = true
      bugs[index].status = STATUS.resolved
      bugs[index].modifiedOn = Date.now()
    },
    bugsRemoved: (bugs, action) => {
     return bugs.filter(bug => bug.id !== action.payload.bugId)
    }
  }
})

export const getBugsSelector = createSelector(
  state => state.entities.bugs,
  bugs => bugs
)

export const getResolvedBugsSelector = createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => bug.resolved === true)
)

export const getUnresolvedBugsSelector = createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => bug.resolved === false)
)

export const getRecentlyRaisedBugsSelector = createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => moment().diff(moment(bug.modifiedOn), 'minutes') < 10).slice(0, 3)
)

export const { bugsAdded, bugsResolved, bugsRemoved } = slice.actions
export default slice.reducer