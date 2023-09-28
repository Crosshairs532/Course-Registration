/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Registration = ({ selected, credit, remaining, total }) => {


    return (
        <div className='flex flex-col p-[24px] text-left'>
            <h1 className='font-bold text-lg text-[#2f80ed]'>Credit Hour Remaining :{remaining} hr</h1>
            <hr className='w-[264px] mt-[16px] mb-[16px] h-[1px] ' />
            <h1 className='font-bold text-lg text-left'>Course Name:</h1>
            <h1 className='mt-6 mb-6'>Number of Enrolled courses: {selected.length}</h1>
            <div className='course_name text-[grey] text-xs text-[400] text-left'>
                <ul>
                    {
                        selected.map((i, idx) => <li className='mb-2' key={idx}>{idx + 1}.{i.info}</li>)
                    }

                </ul>
            </div>
            <hr className='w-[264px] mt-[16px] mb-[16px] h-[1px] ' />
            <h1 className='text-xs font-[500]'>Total Credit Hour : {credit}</h1>
            <hr className='w-[264px] mt-[16px] mb-[16px] h-[1px] ' />

            <h1 className='text-xs font-[500]'>Total Price : {total}USD</h1>

        </div>
    );
};

export default Registration;