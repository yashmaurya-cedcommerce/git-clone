import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useDispatch, useSelector } from 'react-redux';
import Repos from './Repos';

export default function ProfileIntro() {

    const [value, setValue] = React.useState('1');
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='profileIntroContainer'>

            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Overview" value="1" />
                            <Tab label="Repositories" value="2" />
                            <Tab label="Projects" value="3" />
                            <Tab label="Packages" value="3" />
                            <Tab label="Stars" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">

                        <p className='overviewHeading'>Hi, I'm {state.git.openedProfile.name}</p>
                        <hr style={{ opacity: "35%" }} />
                        <p className='dummyText'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                        </p> 
                        <br />
                        <p className='dummyText'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                        </p>

                    </TabPanel>
                    <TabPanel value="2">
                        <Repos />
                    </TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box>

        </div>
    )
}
