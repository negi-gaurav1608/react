import React from 'react'

function Dashboard() {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 my-3'>
                <div className='p-6 flex flex-row-end justify-center h-auto justify-content-center align-items-center'>
                    <img src="https://icon-library.com/images/generic-user-icon/generic-user-icon-13.jpg" height="70px" width="70px"
                    alt="user"/>
                </div>
                <div className='p-6 mr-2 bg-gray-100 sm:rounded-lg align-items-center justify-content-center'>
                    <p>
                        username
                    </p>
                    <p>
                        email
                    </p>
                    <p>
                        position
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
