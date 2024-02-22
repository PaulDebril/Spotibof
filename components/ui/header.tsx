import React from 'react';

const Header: React.FC = () => {
    return (
        <header className='flex items-center gap-40 bg-black h-14'>
            <h1 className='text-green-500 font-bold '>Spotibof</h1>
            <input className='rounded-lg' type="text" placeholder="Search..." />
        </header>
    );
};

export default Header;
