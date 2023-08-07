import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';
import data from '../assets/flags/Roles.json';

function Roles(){

    const [setDisplayBasic] = useState(false);
    const [displayConfirmation, setDisplayConfirmation] = useState(false);
    const  navigate = useNavigate();

    const confirmationDialogFooter = (
        <>
            <Button type="button" label="No" icon="pi pi-times" onClick={() => setDisplayConfirmation(false)} className="p-button-text" />
            <Button type="button" label="Yes" icon="pi pi-check" onClick={() => setDisplayConfirmation(false)} className="p-button-text" autoFocus />
        </>
    );

    return (
    <><div className='grid'>
            <div className="row">
                <span className="p-input-icon-right">
                    <InputText style={{ width:'550px', marginleft:'100px'}} type="text" placeholder="Search Term" />
                    <Button icon="pi pi-search" style={{ backgroundColor: "#239B47" }} className="mr-2 mb-2"></Button>
                </span>
            </div>
            <Button type="button" label="Export" icon="pi pi-arrow-circle-up" onClick={() =>  {navigate("/AddUser")}} style={{ backgroundColor: "#239B47", float: "right" }} />

            <Button type="button" label="Add New" icon="pi pi-plus" onClick={() =>  {navigate("/AddUser")}} style={{ backgroundColor: "#239B47", float: "right" }} />

            <Button type="button" label="Back" className="mr-2 mb-2" style={{backgroundColor:'#239B47'}}></Button>
        </div>

        <><h5>Roles</h5>
        <DataTable value={data}>
            <Column field="No" header="No." style={{ flexGrow: 1, flexBasis: '160px' }} frozen></Column>
            <Column field="Role" header="Role" style={{ flexGrow: 1, flexBasis: '100px' }}></Column>
            <Column field="description" header="Description" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
            <Column field="permissions" header="Permissions" style={{ flexGrow: 1, flexBasis: '200px' }}></Column>
            <Column field="action" header="Action" style={{ flexGrow: 1, flexBasis: '200px' }} body={() => <><><Button type="button" icon="pi pi-pencil" onClick={() => setDisplayBasic(true)}style={{backgroundColor:"#239B47"}}></Button></><Button type="button" icon="pi pi-trash" className="p-button-danger" onClick={() => setDisplayConfirmation(true)}></Button></>}></Column>
        </DataTable>
        <Dialog header="Confirmation" visible={displayConfirmation} onHide={() => setDisplayConfirmation(false)} style={{ width: '350px' }} modal footer={confirmationDialogFooter}>
                            <div className="flex align-items-center justify-content-center">
                                <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                                { (
                                <span>Are you sure you want to delete <b>{data.name}</b>?</span>
                                )}
                            </div>
                            </Dialog>
      </></>

            );
};
export default Roles;
