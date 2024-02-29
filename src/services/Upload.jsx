import React from 'react'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill, scale} from "@cloudinary/url-gen/actions/resize";
import { cartoonify, outline } from '@cloudinary/url-gen/actions/effect';
import { max } from '@cloudinary/url-gen/actions/roundCorners';
import { outer } from '@cloudinary/url-gen/qualifiers/outlineMode';

const Upload = () => {
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dcv1udmmw'
        }
    });

    const myImage = cld.image('matheus/perfil');

    myImage
    .effect(cartoonify())
    .roundCorners(max())
    .effect(outline().mode(outer()).width(100).color('lightblue'))
    .backgroundColor('lightblue')
    .resize(scale().height(300));

    const myUrl = myImage.toURL();

    return (
        <div>
            <AdvancedImage cldImg={myImage} />
        </div>
    )
}

export default Upload;