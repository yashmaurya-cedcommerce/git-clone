import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { storeRepoDetails } from '../redux/git/actions';

export default function Repos() {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    var options = {
        headers: {
            Authorization: `Bearer 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`
        }
    }

    useEffect(() => {
        fetch(`https://api.github.com/users/${state.git.openedProfile.login}/repos`, options)
            .then(res => res.json())
            .then(temp => {
                console.log(temp)
                console.log("useEffect called")
                dispatch(storeRepoDetails(temp))
            })
    }, [])

    return (
        <div className='repoPageContainer'>

            {(state.git.repoDetails.length > 0) ?
                state.git.repoDetails.map((item) => {
                    return (
                        <>
                            <div className='eachRepoDiv'>
                                <p className='eachRepoName'>{item.name} <span className='eachRepoVisibility'>{item.visibility}</span></p>
                                <div className='eachRepoFooter'>
                                    <p className='eachRepoLanguage'>{item.language}</p>
                                    <p className='eachRepoStargazer'><i class="fa-regular fa-star"></i>{item.stargazers_count}</p>
                                    <p className='eachRepoStargazer'>Updated on {item.updated_at}</p>
                                </div>
                            </div>
                        </>
                    )
                }) : ''}

        </div>
    )
}
