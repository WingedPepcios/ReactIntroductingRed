import React from 'react';
import Image from '../atoms/Image'
import placeholder from '../assets/gfx/150.png'
import placeholder2 from '../assets/gfx/150a.png'
import placeholder3 from '../assets/gfx/150b.png'

const usersArray = [
    { alt: 'pierwszy', src: placeholder, nazwa: 'Potężny' },
    { alt: 'drugi', src: placeholder2, nazwa: 'Potężniejszy' },
    { alt: 'trzeci', src: placeholder3, nazwa: 'Najpotężniejszy' },
];

const UserAvatar = () => {

    return (
        <>
            {usersArray.map(({ alt, src, nazwa }) =>
                <div>
                    <Image alt={alt} src={src} />
                    <span>{nazwa}</span>
                </div>)}
        </>
    );
}


export default UserAvatar;
