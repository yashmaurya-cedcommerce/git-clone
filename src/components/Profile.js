import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { storeProfileDetails } from '../redux/git/actions';
import Navbar from './Navbar';
import ProfileDetails from './ProfileDetails';
import ProfileIntro from './ProfileIntro';

export default function Profile() {

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(()=> {
    if(window.sessionStorage.getItem("openedProfile"))
    {
      console.log("already present object")
      dispatch(storeProfileDetails(JSON.parse(window.sessionStorage.getItem("openedProfile"))))
    }
  }, [])

  return (
    <div className='profileContainer'>

      <Navbar />
      {/* {state.git.openedProfile.name} */}
      <div className='mainProfileContainer'>

        <ProfileDetails />
        <ProfileIntro />

      </div>

    </div>
  )
}
