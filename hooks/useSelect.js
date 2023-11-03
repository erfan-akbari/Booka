

function useSelect() {

    const countries = [
        { id: 1, name: 'Canada', img: '/images/Countries/01.png' },
        { id: 2, name: 'Malaysia', img: '/images/Countries/02.png' },
        { id: 3, name: 'Germany', img: '/images/Countries/03.png' },
        { id: 4, name: 'Netherlands', img: '/images/Countries/04.png' },
        { id: 5, name: 'USA', img: '/images/Countries/05.png' },
        { id: 6, name: 'china', img: '/images/Countries/06.png' },
        { id: 7, name: 'Sweden', img: '/images/Countries/07.png' },
        { id: 8, name: 'India', img: '/images/Countries/08.png' },
    ]

    const mony = [
        { id: 1, name: '($) USD' },
        { id: 2, name: '($) EUR' },
        { id: 3, name: '($) YEN' },
        { id: 4, name: '($) GBP' },
    ]

    const filtersType = [
        { id: 1, name: 'براساس نام (نزولی) ↓' },
        { id: 2, name: 'براساس نام (صعودی) ↑' },
        { id: 3, name: 'براساس قیمت (کم به زیاد) ↑' },
        { id: 4, name: 'براساس قیمت (زیاد به کم) ↓' },
        { id: 5, name: 'براساس محبوبیت (کم به زیاد) ↑' },
        { id: 6, name: 'براساس محبوبیت (زیاد به کم) ↓' },
    ]

    return { countries, mony, filtersType }

}

export default useSelect