import React from 'react'

function AddressForm({ setActiveStep }) {
    return (
        <div className='my-10'>
            <div className="w-full md:w-96 md:max-w-full mx-auto">
                <div className="p-6 shadow-lg border bg-gray-50 sm:rounded-md">
                    <form
                        method="POST"
                        action="https://herotofu.com/start"
                        enctype="multipart/form-data"
                    >
                        <label className="block mb-6">
                            <span className="text-gray-700">نام*</span>
                            <input name="name" type="text"
                                className=" block  w-full mt-1 border-gray-300  rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder="Joe Bloggs"
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">نام خانوادگی*</span>
                            <input
                                name="address1"
                                type="text"
                                className=" block  w-full mt-1 border-gray-300  rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder=""
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">تلفن*</span>
                            <input
                                name="address2"
                                type="text"
                                className=" block  w-full mt-1 border-gray-300  rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder=""
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">ایمیل*</span>
                            <input
                                name="city"
                                type="text"
                                className=" block  w-full mt-1 border-gray-300  rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder=""
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">شهر</span>
                            <input
                                name="state"
                                type="text"
                                className=" block  w-full mt-1 border-gray-300  rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder=""
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">استان*</span>
                            <input
                                name="zip"
                                type="text"
                                className=" block  w-full mt-1 border-gray-300  rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder=""
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">شهر*</span>
                            <input
                                name="country"
                                type="text"
                                className=" block  w-full mt-1 border-gray-300  rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder=""
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">آدرس*</span>
                            <input
                                name="telephone"
                                type="text"
                                className=" block  w-full mt-1 border-gray-300  rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                placeholder=""
                            />
                        </label>
                        <label className="block mb-6">
                            <span className="text-gray-700">کد پستی*</span>
                            <textarea
                                name="message"
                                className=" block  w-full mt-1 border-gray-300  rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                rows="3"
                                placeholder="floor/door lock code/etc."
                            ></textarea>
                        </label>
                        <div className="mb-6">
                            <button
                                type="submit"
                                className="h-10  px-5 text-indigo-100 bg-indigo-500 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800 "
                                onClick={() => setActiveStep(2)}
                            >
                                ادامه
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddressForm