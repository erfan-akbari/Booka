import { useEffect, useState } from "react";


const useGetMe = () => {

    const [isLoginUser, setIsLoginUser] = useState(false);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        getMe()
    }, [])

    const getMe = async () => {
        const userID = localStorage.getItem('ID')
        if (userID) {
            const res = await fetch(`/api/users/${userID}`)
            const data = await res.json()
            setUserData(data)
            setIsLoginUser(true)
        } else {
            setIsLoginUser(false)
        }
    }

    return { isLoginUser, userData }
}

export default useGetMe;