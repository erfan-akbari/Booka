import React from 'react'

function Register() {
  return (
    <div class="min-h-screen bg-gray-50 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 bg-gradient-to-l from-red-400 to-rose-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-2xl font-semibold">ثبت نام</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                  <input autocomplete="off" id="userName" name="userName" type="text" class="peer placeholder-transparent rounded-md h-10 w-full border-b-2 px-5 mx-5 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="نام کاربری" />
                  <label for="userName" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">نام کاربری</label>
                </div>
                <div class="relative">
                  <input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent rounded-md h-10 w-full border-b-2 px-5 mx-5 border-gray-300 text-gray-900 outline-none focus:borer-rose-600" placeholder="ایمیل آدرس" />
                  <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">آدرس ایمیل</label>
                </div>
                <div className="relative">
                  <input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent rounded-md h-10 w-full border-b-2 px-5 mx-5 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="رمز عبور" />
                  <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">رمز عبور</label>
                </div>
                <div class="relative">
                  <button class="bg-rose-500 text-white rounded-md px-2 py-1">ثبت نام</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register