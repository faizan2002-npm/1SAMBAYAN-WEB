import { getRequest } from "../../api/request";
import { useEffect, useState } from 'react';
import images from "./images";
import React from 'react'

const SiteSettingsFunction = () => {
    const [siteSettings, setSiteSettings] = useState();
    const getSiteSetting = async () => {
        try {
            const token = localStorage.getItem("TOKEN");
            // console.log("token", token);
            // var params = props.location.search.slice(5);
            const response = await getRequest(
                `/api/secure/site/`,
                token
            );
            setSiteSettings({
                aboutSite: response.result.data.site[0].footer,
                city: response.result.data.site[0].address.city,
                street: response.result.data.site[0].address.street,
                latitude: response.result.data.site[0].address.latitude,
                longitude: response.result.data.site[0].address.longitude,
                zip: response.result.data.site[0].zip,
                Copyright_text: response.result.data.site[0].copyright,
                videoURL: response.result.data.site[0].videoURL,
                loop: response.result.data.site[0].video.videoSettings.loop,
                controls: response.result.data.site[0].video.videoSettings.controls,
                autoPlay: response.result.data.site[0].video.videoSettings.autoPlay,
                muted: response.result.data.site[0].video.videoSettings.muted,
                siteEmail: response.result.data.site[0].email,
                SITE_LOGO: response.result.data.site[0].logo,
                siteOwner: response.result.data.site[0].siteOwner,
                sitePhone: response.result.data.site[0].phone,
                SITE_SLOGAN: response.result.data.site[0].slogan,
                SITE_TITLE: response.result.data.site[0].name,
                Site_Link: response.result.data.site[0].url,
                FB_link: response.result.data.site[0].socialMediaLinks.Facebook,
                TW_link: response.result.data.site[0].socialMediaLinks.Twitter,
                igUrl: response.result.data.site[0].socialMediaLinks.Instagram,
                waUrl: response.result.data.site[0].socialMediaLinks.LinkedIn
            });
            // console.log("siteSettings", siteSettings);

            // console.log("Get Site Setting Response", response.result.data.site[0].video.videoSettings);
        } catch (error) {
            console.log("Get Site Setting Error", error);
        }
    };

    useEffect(() => {
        getSiteSetting();
    }, []);
    const SiteSettingsArray = [...siteSettings];
    console.log("SiteSettings", SiteSettingsArray);

}
SiteSettingsFunction();

// export default {
//     SiteSettingsFunction
// };