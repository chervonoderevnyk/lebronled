const baseURL = 'http://owu.linkpc.net/carsAPI/v1'

const cars = '/cars'

const urls = {
    cars: {
        base: cars,
        buId: (id: string): string => `${cars}/${id}`
    }
}

export {baseURL, urls}


