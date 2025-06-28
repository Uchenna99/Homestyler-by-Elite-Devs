import React from "react";
import designersData from '../Designs.json';
import '../Stylesheets/designers.css';

const Designers = () => {
    return (
        <>
            <div className="w-full h-fit flex flex-col items-center py-16 gap-7 ">

                <p className="text-xl font-semibold ">OUR TOP DESIGNERS</p>


                <div className="designer-wrap">
                    {designersData.designers.map((designer) => (
                        <div className="designer-card" key={designer.id} style={{backgroundImage:`url(${designer.profileImage})`}}>
                            <div className="prof-card">
                                <div className="prof-det">
                                    <p>Name: {designer.name}</p>
                                </div>
                                <div className="prof-det">
                                    <p>Price: {designer.rates}</p>
                                </div>
                                <div className="prof-det">
                                    <p>Email: {designer.contact.email}</p>
                                </div>
                                <div className="prof-det">
                                    <p>Phone: {designer.contact.phone}</p>
                                </div>
                                <div className="prof-det">
                                    <p>Description: {designer.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    );
}

export default Designers;
