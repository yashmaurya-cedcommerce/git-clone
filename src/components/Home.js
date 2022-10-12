import React, { useEffect } from 'react';
import { TextField } from '@shopify/polaris';
import { useDispatch, useSelector } from 'react-redux';
import { allUsersData, searchOnchange, storeProfileDetails, storeSuggestions, storeSuggestionsDetails } from '../redux/git/actions';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearchChange = (value) => {
        dispatch(searchOnchange(value));
    }

    const searchBtnClicked = (event) => {
        var subStringCheck = '';
        var tempSuggestions = [];
        state.git.allUsers.map((item) => {
            subStringCheck = item.login.slice(0, state.git.searchText.length)
            if (subStringCheck.toLowerCase() === state.git.searchText.toLowerCase()) {
                tempSuggestions.push(item.login)
            }
        })
        window.sessionStorage.setItem("searchText", state.git.searchText);
        dispatch(storeSuggestions(tempSuggestions));
        window.sessionStorage.setItem("suggestions", JSON.stringify(tempSuggestions));
    }

    const openProfile = (event, index) => {
        var temp = state.git.suggestionDetails[index];
        dispatch(storeProfileDetails(state.git.suggestionDetails[index]));
        window.sessionStorage.setItem("openedProfile", JSON.stringify(temp));
        navigate("/profile")
    }

    useEffect(() => {
        fetch('https://api.github.com/users', options)
            .then(res => res.json())
            .then(temp => {
                dispatch(allUsersData(temp))
            })
        if (window.sessionStorage.getItem("searchText")) {
            dispatch(searchOnchange(window.sessionStorage.getItem("searchText")));
        }
        if (window.sessionStorage.getItem("suggestions")) {
            var tempArr = JSON.parse(window.sessionStorage.getItem("suggestions"))
            dispatch(storeSuggestions(tempArr))
        }
    }, [])

    useEffect(() => {
        state.git.suggestions.map((item) => {
            fetch(`https://api.github.com/users/${item}`, options)
                .then(res => res.json())
                .then(temp => {
                    dispatch(storeSuggestionsDetails(temp))
                })
        })

    }, [state.git.suggestions])

    var options = {
        headers: {
            Authorization: `Bearer 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`
        }
    }

    return (
        <div className='homeContainer'>

            <p className='homeHeading'>Get Github Profile Cards</p>

            <div className='searchContainer'>
                <TextField
                    placeholder='Search a Github User'
                    value={state.git.searchText}
                    onChange={handleSearchChange}
                    autoComplete="on"
                />
                <button className='searchBtn' onClick={(event) => searchBtnClicked(event)}><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>

            <div className='resultsContainer'>

                {(state.git.suggestionDetails.length > 0) ?
                    state.git.suggestionDetails.map((item, index) => {
                        return (
                            <div className='eachResultDiv' key={index}>

                                <div className='eachResultImageDiv'>
                                    <img src={item.avatar_url} alt="" />
                                </div>

                                <div className='eachResultDetailsDiv'>
                                    <div className='resultNameFlex'>
                                        <p className='resultName'>
                                            {item.login}
                                        </p>
                                        <button className='viewProfileBtn' onClick={(event) => openProfile(event, index)}>
                                            View Profile
                                        </button>
                                    </div>
                                    <p className='resultMotto'>
                                        {item.bio}
                                    </p>

                                    <div className='statsDiv'>

                                        <p className='statDiv'>{item.followers} followers</p>
                                        <p className='statDiv'>{item.following} following</p>
                                        <p className='statDiv'>{item.public_repos} repos</p>

                                    </div>

                                </div>

                            </div>
                        )
                    }) : ''}

            </div>

        </div>
    )
}
