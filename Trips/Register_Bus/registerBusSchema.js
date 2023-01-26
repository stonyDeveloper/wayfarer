import * as Yup from 'yup'

export const registerBusSchema = Yup.object().shape({
    number_plate: Yup.string().required('Enter plate number'),
    manufacturer: Yup.string().required('Enter bus manufacturer'),
    model: Yup.string().required('Enter bus model'),
    year: Yup.string().required('Enter year'),
    capacity: Yup.string().required('Enter bus capacity')
})
