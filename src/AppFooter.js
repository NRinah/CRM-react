import React from 'react';

const AppFooter = () => {
    return (
        <div className="layout-footer" style={{backgroundColor:"white"}}>
            <div className="grid">
                <div className="col-6">
                    <button type="button" className="p-link logo-container">
                        <img src="assets/layout/images/logo-white.png "alt="pahappa-layout" />
                    </button>
                </div>
                <div className="col-6 footer-icons">
                    <button type="button" className="p-link">
                        <i className="pi pi-home"></i>
                    </button>
                    <button type="button" className="p-link">
                        <i className="pi pi-globe"></i>
                    </button>
                    <button type="button" className="p-link">
                        <i className="pi pi-envelope"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AppFooter;
