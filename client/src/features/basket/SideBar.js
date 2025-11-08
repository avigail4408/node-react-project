import React, { useEffect, useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import GetAll from "./GetAll";
import { useLocation } from 'react-router-dom';

export default function SideBar() {
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
      setVisible(true);
    }, [location]);

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} className="w-full md:w-20rem lg:w-30rem">
                <h2>BASKET</h2>
                {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p> */}
                <GetAll></GetAll>
            </Sidebar>
            {/* <Button icon="pi pi-arrow-right" onClick={() => setVisible(true)} /> */}
        </div>
    )
}