import React, { useState } from 'react'
import Router from 'next/router'
import swal from 'sweetalert';
import { Result } from 'postcss';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitHandle = async (event) => {
    event.preventDefault()

    if (username && password) {
      const res = await fetch(`/api/auth/login`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        })
      })
      const data = await res.json()

      if (res.status === 200) {
        swal({
          title: ' ورود با موفقیت انجام شد',
          icon: "success",
          button: 'تایید'
        }).then(result => {
          if (Result) {
            localStorage.setItem('ID', data._id)
            Router.push('/')
          }
        })
      } else {
        swal({
          title: 'کاربری با این مشخصات یافت نشد ',
          icon: "error",
          button: 'تایید'
        })
      }

      setUsername('')
      setPassword('')

    } else {
      swal({
        title: "لطفا تمامی فیلد هارا تکمیل کنید",
        icon: "warning",
        button: "تایید",
      });
    }

  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-rose-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
                ورود
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input value={username} onChange={e => setUsername(e.target.value.trim())} autoComplete="off" id="userName" name="userName" type="text" className="peer placeholder-transparent rounded-md h-10 w-full border-b-2 px-5 mx-5 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="نام کاربری" />
                  <label htmlFor="userName" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">نام کاربری</label>
                </div>
                <div className="relative">
                  <input value={password} onChange={e => setPassword(e.target.value.trim())} autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent rounded-md h-10 w-full border-b-2 px-5 mx-5 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="رمز عبور" />
                  <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">رمز عبور</label>
                </div>
                <div className="relative">
                  <button onClick={submitHandle} className="bg-rose-500 text-white rounded-md px-2 py-1">ارسال</button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-gray-400 font-semibold">
          حساب کاربری ندارید
            <Link className='text-blue-500 font-bold hover:underline px-2 hover:text-blue-800' href={`/register`}>
               ثبت نام
            </Link>
             کنید 
          </div>
          <p className="text-gray-400 font-semibold my-2">
            رمز عبور یا نام کاربری خود را فراموش کرده اید؟
          </p>
          <p className="text-gray-400 font-semibold my-2 flex items-center gap-1 flex-row-reverse justify-end">
            <FcGoogle />  ورود از طریق گوگل
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login