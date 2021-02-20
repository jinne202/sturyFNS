import React from 'react';
import NavLayout from '../components/NavLayout';
import MessagePage from '../components/MessagePage/MessagePage';

const message = () => {
    return (
        <div>
          <NavLayout>
              <MessagePage/>
          </NavLayout>
        </div>
    )
}

export default message;