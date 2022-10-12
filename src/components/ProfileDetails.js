import React from 'react'
import { useSelector } from 'react-redux';

export default function ProfileDetails() {

    const state = useSelector(state => state);
    // const dispatch = useDispatch();

    return (
        <div className='profileDetailsDiv'>
            <img src={state.git.openedProfile.avatar_url} className="profileImage" alt="" />
            <div className='profileNameDiv'>
                <p className='profileName'>{state.git.openedProfile.name}</p>
                <p className='profileLogin'>{state.git.openedProfile.login}</p>
            </div>
            <div className='profileBtnDiv'>
                <button className='profileBtn'>Follow</button>
                <button className='profileBtn'><i class="fa-regular fa-heart" style={{ color: "#bf3989" }}></i> Sponsor</button>
            </div>
            <div className='profileBioDiv'>
                {state.git.openedProfile.bio}
            </div>
            <div className='profileFollowDiv'>
                <p className='profileFollowers'><i class="fa-solid fa-users"></i> <b>{state.git.openedProfile.followers}</b> followers</p>
                <p className='profileFollowing'><b>{state.git.openedProfile.following}</b> following</p>
            </div>
            <div className='profileExtraDetailDiv'>
                <p className='eachDetailDiv'><p className='extraDetailIcon'><i class="fa-solid fa-location-dot"></i></p> <p className='extraDetailText'>{state.git.openedProfile.location}</p></p>
                <p className='eachDetailDiv'><p className='extraDetailIcon'><i class="fa-regular fa-envelope"></i></p> <p className='extraDetailText'>{state.git.openedProfile.email}</p></p>
                <p className='eachDetailDiv'><p className='extraDetailIcon'><i class="fa-solid fa-link"></i></p> <p className='extraDetailText'>{state.git.openedProfile.blog}</p></p>
                <p className='eachDetailDiv'><p className='extraDetailIcon'><i class="fa-brands fa-twitter"></i></p> <p className='extraDetailText'>{state.git.openedProfile.twitter_username}</p></p>
            </div>
        </div>
    )
}
