/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import React, { useEffect, useState } from 'react';
import Registration from '../registration_info/Registration';
const Courses = () => {

    const [alldata, setAlldata] = useState([])
    const [selected, setSelected] = useState([])
    const [credit, setCredit] = useState(0)
    const [remaining, setRemaining] = useState(20)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setAlldata(data))
    }, [])

    const handleSelect = (course) => {
        const Find = selected.find(i => i.id == course.id);
        if (Find) {
            Swal.fire({
                icon: 'error',
                title: 'Already enrolled !!',
                text: ' You cannot enroll one course more than once',

            })
            // alert('Already Enrolled')
        }
        else {
            const newremain = remaining - course.credit_hour;
            const newcredit = credit + course.credit_hour;

            if (newcredit > 20) {
                if (newremain < 0) {
                    console.log('negative!')
                    Swal.fire({
                        icon: 'error',
                        title: 'Remaining Credit hour exceeds your limit',
                        text: 'you have crossed the limit of 20',

                    })

                }

                Swal.fire({
                    icon: 'error',
                    title: 'Credit hour exceeds your limit',
                    text: 'you have crossed the limit of 20',

                })

            }

            else {

                setSelected([...selected, course])
                setCredit(credit + course.credit_hour)
                setTotal(total + course.price)
                setRemaining(newremain)
            }


        }




    }
    return (
        <div>

            <h1 className='text-center font-bold text-[32px] mt-[50px] mb-[50px] text-[#1C1B1B]'>Course Registration</h1>
            <div className='main-container lg:container lg:m-auto flex flex-col-reverse items-center lg:items-start lg:flex-row gap-[24px]'>
                <div className="course-container grid place-items-center grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-6">

                    {
                        alldata.map((i, idx) => (
                            <div key={idx} className="course bg-white rounded-xl w-[312px] h-[400px] p-[15px]">
                                <img className='mb-[16px]' src={i.img} alt="" />
                                <h1 className='font-bold mb-[12px]'>{i.info}</h1>
                                <div className='h-[100px]'>
                                    <p className='font-[400] text-[grey] text-[14px] mb-[19px]'><small>{i.description}</small></p>
                                </div>
                                <div className='price flex justify-between'>
                                    <p><svg className='inline' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 1V23" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg> Price: {i.price}  </p>


                                    <div className='credit_bookmark flex gap-4'>
                                        <svg className='inline-block' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 6.04201C10.3516 4.56337 8.2144 3.74695 6 3.75001C4.948 3.75001 3.938 3.93001 3 4.26201V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.04201C13.6483 4.56328 15.7856 3.74686 18 3.75001C19.052 3.75001 20.062 3.93001 21 4.26201V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.997 13.6484 18.8134 12 20.292M12 6.04201V20.292" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />

                                        </svg>
                                        <p>Credit: {i.credit_hour} hr</p>
                                    </div>

                                </div>
                                <button onClick={() => handleSelect(i)} className='bg-[#2F80ED] text-white w-[280px] mt-[16px] py-2 rounded-xl'>Select</button>

                            </div>
                        ))
                    }


                </div>
                <div className="registration-container w-[312px] bg-white rounded-xl">
                    <Registration selected={selected} remaining={remaining} credit={credit} total={total}></Registration>
                </div>
            </div>
        </div >
    );
};

export default Courses;
