import React from "react";
import AdminShell from "../../components/AdminShell";
import Input from "../../components/Input";
import { Formik } from "formik";
import useRegisterBus from "../../hooks/useRegisterBus";
import { registerBusSchema } from "../../Trips/Register_Bus/registerBusSchema";
import { ColorRing } from "react-loader-spinner";

const CreateTrip = () => {
  const { handleRegisterBus, isLoading } = useRegisterBus();
  return (
    <Formik
      initialValues={{
        number_plate: "",
        manufacturer: "",
        model: "",
        year: "",
        capacity: "",
      }}
      validationSchema={registerBusSchema}
      onSubmit={(values, { resetForm }) => {
        handleRegisterBus({
          number_plate: values.number_plate,
          manufacturer: values.manufacturer,
          model: values.model,
          year: values.year,
          capacity: values.capacity,
        });
        resetForm({ values: "" });
      }}
    >
      {(formik) => {
        const { touched, errors, isValid, dirty } = formik;
        return (
          <AdminShell>
            <div className="w-full">
              <h1 className="text-[30px] mb-[30px]">Register Bus</h1>
              <form onSubmit={formik.handleSubmit}>
                <div className="grid gap-4 items-center w-fit">
                  <div className="flex gap-[50px]">
                    <Input
                      type={"text"}
                      placeholder={"Manufacturer"}
                      label={"Bus Manufacturer"}
                      width={"w-[400px]"}
                      id="manufacturer"
                      name="manufacturer"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.manufacturer}
                    />
                    <Input
                      type={"text"}
                      placeholder={"Model"}
                      label={"Bus Model"}
                      width={"w-[400px]"}
                      id="model"
                      name="model"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.model}
                    />
                  </div>
                  <div className="flex gap-[50px]">
                    <Input
                      type={"text"}
                      placeholder={"Year"}
                      label={"Year"}
                      width={"w-[400px]"}
                      id="year"
                      name="year"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.year}
                    />
                    <Input
                      type={"text"}
                      placeholder={"Capacity"}
                      label={"Capacity"}
                      width={"w-[400px]"}
                      id="capacity"
                      name="capacity"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.capacity}
                    />
                  </div>
                  <div className="flex">
                    <Input
                      type={"text"}
                      placeholder={"Number Plate"}
                      label={"Number Plate"}
                      width={"w-[400px]"}
                      id="number_plate"
                      name="number_plate"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.number_plate}
                    />
                  </div>
                  <div className="flex justify-center">
                    <input
                      className=" mt-[60px] text-white w-[500px] py-[10px] rounded-full cursor-pointer bg-[#004643]"
                      type="submit"
                    />
                  </div>
                </div>
                {isLoading && (
                  <div className="absolute top-[35%] right-[42%]">
                    <ColorRing
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={[
                        "#004643",
                        "#004643",
                        "##004643",
                        "#004643",
                        "#004643",
                      ]}
                    />
                  </div>
                )}
              </form>
            </div>
          </AdminShell>
        );
      }}
    </Formik>
  );
};

export default CreateTrip;
