import { ALL_USERS_DATA, SEARCH_ONCHANGE, STORE_PROFILE_DETAILS, STORE_REPO_DETAILS, STORE_SUGGESTIONS, STORE_SUGGESTIONS_DETAILS } from "./types"

export const searchOnchange=(value)=> {
    return {
        type: SEARCH_ONCHANGE,
        payload: value
    }
}

export const allUsersData=(data)=> {
    return {
        type: ALL_USERS_DATA,
        payload: data
    }
}

export const storeSuggestions =(data)=> {
    return {
        type: STORE_SUGGESTIONS,
        payload: data
    }
}

export const storeSuggestionsDetails=(data)=> {
    return {
        type: STORE_SUGGESTIONS_DETAILS,
        payload: data
    }
}

export const storeProfileDetails=(data)=> {
    return {
        type: STORE_PROFILE_DETAILS,
        payload: data
    }
}

export const storeRepoDetails=(data)=> {
    return {
        type: STORE_REPO_DETAILS,
        payload: data
    }
}