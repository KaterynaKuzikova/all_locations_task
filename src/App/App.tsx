import React, { useState } from 'react';
import { useGetLocationsQuery  } from '../utils/locationApi';
import Modal from '../Modal/Modal';
import { Location } from '../utils/locationApi';
import './App.css';
import time_zone from "../assets/Timezone.svg";
import views from "../assets/Views.svg";
import users from "../assets/Users.svg";
import edit from "../assets/Edit.svg";
import { formatCreatedAt } from '../utils/utils';


const App: React.FC = () => {
  const { data: locations = [], error, isLoading } = useGetLocationsQuery();
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    if (selectedLocation) {
      const updatedLocation: Location = {
        ...selectedLocation,
        views: selectedLocation.views + 1,
      };
  
      setSelectedLocation(prevLocation => ({
        ...prevLocation!,
        views: updatedLocation.views,
      }));
    }
  
    setModalOpen(false);
  };
  
  
  
  if (isLoading) {
    return <p>Loading location data...</p>;
  }

  if (error) {
    return <p>Error fetching location data...</p>;
  }

  return (
    <div>
      <div className='header'>
        <p className='title_1'>All locations</p>
        <p className='title_2'>Acme locations</p>
      </div>
      {locations.length > 0 ? (
        <div className='location-list'>
          {locations.map(location => (
            <div
              key={location.id}
              className="location-item"
              onClick={() => handleLocationClick(location)}
            >
              <div className='location-item-header'>
                <p className='name'>{location.name}</p>
                <div className='img-around'>
                  <img src={edit} alt="edit" className="edit-icon" />
                </div>
              </div>
              <div className='info'>
              <p>
                <img src={users} alt="users" />
                {location.userCount} {location.userCount === 1 ? 'User' : 'Users'}
              </p>
                <p><img src={time_zone} alt="time_zone" />{formatCreatedAt(location.createdAt)}</p>
                <p><img src={views} alt="views" />{location.views} {location.views === 1 ? 'View' : 'Views'}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No location data available.</p>
      )}
      <Modal location={selectedLocation} onClose={handleCloseModal} isOpen={isModalOpen}/>
    </div>
  );
};

export default App;
