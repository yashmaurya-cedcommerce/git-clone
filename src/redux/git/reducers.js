import { ALL_USERS_DATA, SEARCH_ONCHANGE, STORE_PROFILE_DETAILS, STORE_REPO_DETAILS, STORE_SUGGESTIONS, STORE_SUGGESTIONS_DETAILS } from "./types"

export const initialState = {
    searchText: '',
    allUsers: [],
    suggestions: [],
    suggestionDetails: [],
    openedProfile: {},
    repoDetails: []
}

const gitReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_ONCHANGE:
            return {
                ...state,
                searchText: action.payload,
                suggestionDetails: [],
                suggestions: []
            }
        case ALL_USERS_DATA:
            return {
                ...state,
                allUsers: action.payload
            }
        case STORE_SUGGESTIONS:
            var temp = [];
            if (state.searchText === '') {
                temp = [];
            }
            else {
                temp = action.payload
            }
            return {
                ...state,
                suggestions: [...temp]
            }
        case STORE_SUGGESTIONS_DETAILS:
            return {
                ...state,
                suggestionDetails: [...state.suggestionDetails, action.payload]
            }
        case STORE_PROFILE_DETAILS: 
            return {
                ...state,
                openedProfile: action.payload
            }
        case STORE_REPO_DETAILS:
            return {
                ...state,
                repoDetails: action.payload
            }
        default:
            return state
    }
}

export default gitReducer