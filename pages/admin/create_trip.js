import React from "react";
import AdminShell from "../../components/AdminShell";
import Input from "../../components/Input";
import "react-datetime/css/react-datetime.css";
import { createTripSchema } from "../../Trips/Create_Trip/createtripSchema";
import { Form, Formik } from "formik";
import useCreateTrip from "../../hooks/useCreateTrip";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const CreateTrip = () => {
  const { handleCreatetrip, isLoading }  = useCreateTrip()
  const { availableBuses } = useContext(DataContext)
  console.log?.(availableBuses, "Available Buses")
  

  return (
    <Formik
      initialValues={{ origin: "", destination: "", date: "", fare: "", bus_id: "" }}
      validationSchema={createTripSchema}
      onSubmit={(values, { resetForm }) => {
        handleCreatetrip({
          origin: values.origin,
          destination: values.destination,
          date: values.date,
          fare: values.fare,
          bus_id: values.bus_id,
        })
        resetForm({ values: '' })
      }}

    >
      {(formik) => {
        const { touched, errors, isValid, dirty } = formik;
        return (
          <AdminShell>
          <div className="w-full">
            <h1 className="text-[30px] mb-[30px]">Create New Trip</h1>
            <form onSubmit={formik.handleSubmit}>
            <div className="grid gap-5 w-fit">
              <div className="flex gap-[50px]">
                <Input
                  type={"text"}
                  placeholder={"Please enter trip origin"}
                  label={"Origin"}
                  width={"w-[400px]"}
                  id="origin"
                  name="origin"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.origin}
                />
                {touched.origin && errors.origin && (<p className="text-red-600">{errors.origin}</p>)}
                <Input
                  type={"text"}
                  placeholder={"Please enter trip desitination"}
                  label={"Destination"}
                  width={"w-[400px]"}
                  id="destination"
                  name="destination"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.destination}
                />
                {touched.destination && errors.destination && (<p className="text-red-600">{errors.destination}</p>)}
              </div>
              <div className="flex gap-[50px]">
                <Input
                  type={"date"}
                  placeholder={"Select trip date"}
                  label={"Date"}
                  width={"w-[400px]"}
                  min={new Date().toISOString().split('T')[0]}
                  id="date"
                  name="date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.date}
                />
                {touched.date && errors.date && (<p className="text-red-600">{errors.date}</p>)}
                <Input
                  type={"text"}
                  placeholder={"Fare"}
                  label={"Fare"}
                  width={"w-[400px]"}
                  id="fare"
                  name="fare"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.fare}
                />
                {touched.fare && errors.fare && (<p className="text-red-600">{errors.fare}</p>)}
              </div>
              <div className="w-[400px]  h-[40px] rounded-md border-[1px] border-[#C0C0C0] border-solid">
                {/* {availableBuses} */}
              </div>

              {/* <Input
                  type={"text"}
                  placeholder={"Bus ID"}
                  label={"Bus ID"}
                  width={"w-[400px]"}
                  id="bus_id"
                  name="bus_id"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.bus_id}
                /> */}
              <div className="text-center">
                <input
                  className="mt-[60px] text-white w-[500px] py-[10px] rounded-full cursor-pointer bg-[#004643]"
                  type="submit"
                />
              </div>
            
            </div>
            </form>
          </div>
        </AdminShell>
        )
      }}
   
    </Formik>

  );
};

export default CreateTrip;
