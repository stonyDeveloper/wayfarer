import * as Yup from  'yup'

export const createTripSchema = Yup.object().shape({
    origin: Yup.string().required('Trip Origin is required!!'),
    destination: Yup.string().required('Trip Destination is required'),
    date: Yup.string().required('Trip Date is required'),
    fare: Yup.string().required('Trip Fare is required'),
    bus_id: Yup.string().min(10 , 'Please Select a bus').required('Please Select Bus ID')
})