import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import CreateAds from '../pages/CreateAds';
import MediaAds from '../pages/MediaAds';
import TextAds from '../pages/TextAds'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/createads' element={<CreateAds />} />
            <Route path='/mediaads' element={<MediaAds />} />
            <Route path='/textads' element={<TextAds />} />
        </Routes>
    )
}

export default AllRoutes;