import React from 'react';
import { Helmet } from 'react-helmet';


export const SEO = ({ title, description }) => {
    return <Helmet>
                <title>{title}</title>
                <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600&display=swap" rel="stylesheet" />
                <meta name="description" content={description} />
                <meta name="keywords" content="веганство веган продукты кооператив маллакто Москва" />
            </Helmet>
}