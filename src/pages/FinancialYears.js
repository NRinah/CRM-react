import React, { useState, useEffect, } from 'react';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import FinancialYearService from '../service/FinancialYearService';
import Form from './Form';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const FinancialYears = () => {
    const [FinancialYear, setFinancialYear] = useState(null);
    const financialYearService = new FinancialYearService();
    const [displayBasic, setDisplayBasic] = useState(false);
    const [displayConfirmation, setDisplayConfirmation] = useState(false);

    useEffect(() => {

        financialYearService.getFinancialYears().then((data) => {
            setFinancialYear(getFinancialYears(data));
        });
    },);

    const getFinancialYears = (data) => {
        return [...(data || [])].map((d) => {
            d.date = new Date(d.date);
            return d;
        });
    };

    const basicDialogFooter = <Button type="button" label="Dismiss" onClick={() => setDisplayBasic(false)} icon="pi pi-check" className="p-button-secondary" />;

    const confirmationDialogFooter = (
        <>
            <Button type="button" label="No" icon="pi pi-times" onClick={() => setDisplayConfirmation(false)} className="p-button-text" />
            <Button type="button" label="Yes" icon="pi pi-check" onClick={() => setDisplayConfirmation(false)} className="p-button-text" autoFocus />
        </>
    );
    return (
        <div className="layout-dashboard">
            <div className="grid">
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="overview-box sales" style={{ backgroundColor: "green" }}>
                        <span className="overview-title" style={{ color: "white" }}>All</span>
                        <div className='overview-numbers'style={{color:"white"}}>3</div>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="overview-box views" style={{ backgroundColor: "yellow" }}>
                        <span className="overview-title" style={{ color: "white" }}>Active</span>
                        <div className='overview-numbers'style={{color:"white"}}>1</div>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="overview-box users" style={{ backgroundColor: "purple" }}>
                        <span className="overview-title" style={{ color: "white" }}>Inactive</span>
                        <div className='overview-numbers'style={{color:"white"}}>1</div>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="overview-box checkin" style={{ backgroundColor: "white" }}>
                        <span className="overview-title" style={{ color: "black" }}>Closed</span>
                        <div className='overview-numbers'style={{color:"black"}}>1</div>
                    </div>
                </div>
            </div>

            <div className='grid'>
                <div className="col-12 lg:col-6 xl:col-3">
                    <span className="p-input-icon-right">
                        <InputText type="text" placeholder="Search Term" />
                    </span>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <span className="p-input-icon-right">
                        <InputText type="text" placeholder="From Date Created" />
                    </span>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <span className="p-input-icon-right">
                        <InputText type="text" placeholder="To Date created" />
                    </span>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <Button icon="pi pi-search" style={{ backgroundColor: "#07A089" }} className="mr-2 mb-2"></Button>
                </div>


            </div>
            <div className="col-12">
                <div className="card">
                    <Dialog header="Financial Year Form" visible={displayBasic} style={{ width: '30vw' }} modal footer={basicDialogFooter} onHide={() => setDisplayBasic(false)}>
                        <Form />
                    </Dialog>
                    <Button type="button" label="Add New" icon="pi pi-plus" onClick={() => setDisplayBasic(true)} style={{ backgroundColor: "#07A089", float: "right" }} />
                    <h5>Financial Years</h5>
                    <DataTable value={FinancialYear}>
                        <Column field="id" header="No." style={{ flexGrow: 1, flexBasis: '160px' }} frozen></Column>
                        <Column field="name" header="Name" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
                        <Column field="status" header="Status" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="startDate" header="Start Date" style={{ flexGrow: 1, flexBasis: '200px' }} ></Column>
                        <Column field="endDate" header="End Date" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="createdOn" header="Created" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
                        <Column field="action" header="Action" style={{ flexGrow: 1, flexBasis: '200px' }} body={() =><><><Button type="button" icon="pi pi-pencil" onClick={() => setDisplayBasic(true)}></Button></><Button type="button" icon="pi pi-trash" className="p-button-danger" onClick={() => setDisplayConfirmation(true)}></Button></>}></Column>
                    </DataTable>
                    <Dialog header="Confirmation" visible={displayConfirmation} onHide={() => setDisplayConfirmation(false)} style={{ width: '350px' }} modal footer={confirmationDialogFooter}>
                            <div className="flex align-items-center justify-content-center">
                                <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                                {(
                                <span>Are you sure you want to delete <b>{FinancialYear.name}</b>?</span>
                                )}
                            </div>
                            </Dialog>
                </div>
            </div>
        </div>
    );
};

export default FinancialYears;
