import React, { useState, useRef} from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { confirmPopup } from 'primereact/confirmpopup';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';       

    function Form(){
        const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };
        const [dropdownItem, setDropdownItem] = useState(null);
    const dropdownItems = [
        { name: 'Active', code: 'Active' },
        { name: 'Inactive', code: 'Inactive' },
        { name: 'Closed', code: 'Closed' }
    ];

     
    const confirm1 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    };

    const confirm2 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };
        return(
            <form style={{ width: '100%', margin: 'auto' }}>
    <div className="card p-fluid">
                    <div className="field">
                        <label htmlFor="name1">Name</label>
                        <InputText id="name1" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="startDate">Start Date</label>
                        <InputText id="start" type="text" />
                    </div>
                    <div className="field">
                        <label htmlFor="endDate">End Date</label>
                        <InputText id="end" type="text" />
                    </div>
                    <div className="field col-12 md:col-3">
                            <label htmlFor="status">Status</label>
                            <Dropdown id="status" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
                        </div>
            <Toast ref={toast} />
            <confirmPopup />
            <div className="card flex flex-wrap gap-2 justify-content-center">
                <Button onClick={confirm1} icon="pi pi-check" label="Save" style={{backgroundColor:"#07A089"}}></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete" className="p-button-danger p-button-outlined"></Button>
            </div>             
                </div>
                </form>
    );
    }
    export default Form;