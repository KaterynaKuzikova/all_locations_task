import React from 'react';
import './Modal.css'; 
import { Location } from '../utils/locationApi';
import users from "../assets/Users.svg";
import time_zone from "../assets/Timezone.svg";
import views from "../assets/Views.svg";
import close from "../assets/Close.svg";
import { formatCreatedAt } from '../utils/utils';

interface Props {
  location: Location | null;
  onClose: () => void;
  isOpen: boolean;
}

const Modal: React.FC<Props> = ({ location, onClose, isOpen }) => {
  if (!location || !isOpen) return null;

  const formattedDescription = location.description.charAt(0).toUpperCase() + location.description.slice(1);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className='modal-header'>
          <p className='modal-name'>{location.name}</p>
          <img src={close} alt="close" onClick={onClose}/>
        </div>
        <div className='modal-info'>
          <p>
            <img src={users} alt="users" />
            {location.userCount} {location.userCount === 1 ? 'User' : 'Users'}
          </p>
          <p><img src={time_zone} alt="time_zone" />{formatCreatedAt(location.createdAt)}</p>
          <p><img src={views} alt="views" />{location.views} {location.views === 1 ? 'View' : 'Views'}</p>
          <p className='decription_title'>Description:</p>
          <p className='description'>{formattedDescription}</p>
        </div>
        <button  className='btn-done' onClick={onClose}>Done</button>
      </div>
    </div>
  );
};

export default Modal;
