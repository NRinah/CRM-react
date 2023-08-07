import React from 'react';
import { classNames } from 'primereact/utils';

const AppInlineProfile = (props) => {
    const profileClassName = classNames('layout-profile', { 'layout-profile-active': props.inlineMenuActive });

    return (
        <div className={profileClassName}>
            <button type="button" onClick={props.onProfileButtonClick} className="p-link layout-profile-button">
                <img src="assets/layout/images/prof-avatar.png" alt="babylon-layout" />
                <div className="layout-profile-userinfo">
                    <span className="layout-profile-name">Administrator</span>
                </div>
                <i className="layout-profile-icon pi pi-angle-down"></i>
            </button>
        </div>
    );
};

export default AppInlineProfile;
