import { Button } from 'primereact/button';
import React, {useRef, useState} from 'react';    
import { confirmPopup } from 'primereact/confirmpopup';
import { Dropdown } from 'primereact/dropdown';
function AddUser(){
    const [dropdownItem, setDropdownItem] = useState(null);
    const dropdownItems = [
        { name: 'Male', code: 'option 1' },
        { name: 'Female', code: 'option 2' }
    ];
    const toast = useRef(null);
    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };
    
    const confirm1 = (event) => {
    confirmPopup({
        target: event.currentTarget,
        message: 'Are you sure you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept,
        reject
    });
    }
    return(
<div class="card">
    <h5>System user's Details</h5>
    <div class="field">
        <label for="clientid">Username</label>
        <input id="clientid" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
    </div>
    <div class="field">
        <label for="clientname">First Name</label>
        <input id="clientname" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
    </div>
    <div class="field">
        <label for="location">Last Name</label>
        <input id="location" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
    </div>
    <div class="field">
        <label for="contact">Contact</label>
        <input id="contact" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
    </div>
    <div className="field col-12 md:col-3">
         <label htmlFor="state">Gender</label>
         <Dropdown id="state" value={dropdownItem} onChange={(e) => setDropdownItem(e.value)} options={dropdownItems} optionLabel="name" placeholder="Select One"></Dropdown>
    </div>

    <div class="field">
        <label for="action">Password</label>
        <input id="action" type="text" class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"/>
    </div>
    <div className="card flex flex-wrap gap-2 justify-content-center">
                <Button onClick={confirm1} icon="pi pi-check" label="Save" style={{backgroundColor:"#239B47"}}></Button>
            </div> 
</div>
);
};
export default AddUser;
