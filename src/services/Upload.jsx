import React from 'react'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";

const Upload = () => {
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dcv1udmmw'
        }
    });

    const myImage = cld.image('docs/models');

    myImage.resize(fill().width(250).height(250));

    return (
        <div>
            <AdvancedImage cldImg={myImage} />
        </div>
    )
}

export default Upload;