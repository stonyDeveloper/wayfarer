import AdminShell from "../../components/AdminShell";
import Input from "../../components/Input";
import "react-datetime/css/react-datetime.css";
import { createTripSchema } from "../../Trips/Create_Trip/createTripSchema";
import { Form, Formik } from "formik";
import useCreateTrip from "../../hooks/useCreateTrip";
import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContext";
import Cookies from "js-cookie";
import InputFieldDropdown from "../../components/InputFieldDropdown";
import { ColorRing } from "react-loader-spinner";

const CreateTrip = () => {
  const { showDropdown, setShowDropdown } = useContext(DataContext);
  const { handleCreatetrip, isLoading } = useCreateTrip();
  const availableBuses = Cookies.get("available_buses")
    ? JSON.parse(Cookies.get("available_buses"))
    : null;
  console.log(availableBuses, "Available");
  const [busId, setBusId] = useState("Bus ID");

  return (
    <Formik
      initialValues={{
        origin: "",
        destination: "",
        trip_date: "",
        fare: "",
        bus_id: busId,
      }}
      validationSchema={createTripSchema}
      onSubmit={(values, { resetForm }) => {
        console.log({
          origin: values.origin,
          destination: values.destination,
          trip_date: values.date,
          fare: values.fare,
          bus_id: busId,
        });
        handleCreatetrip({
          origin: values.origin,
          destination: values.destination,
          trip_date: values.date,
          fare: values.fare,
          bus_id: busId,
        });
        // resetForm({ values: "" });
        // setBusId("Bus ID")
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
                    <div>
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
                      {touched.origin && errors.origin && (
                        <p className="text-red-600">{errors.origin}</p>
                      )}
                    </div>

                    <div>
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
                      {touched.destination && errors.destination && (
                        <p className="text-red-600">{errors.destination}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-[50px]">
                    <div>
                      <Input
                        type={"date"}
                        placeholder={"Select trip date"}
                        label={"Date"}
                        width={"w-[400px]"}
                        min={new Date().toISOString().split("T")[0]}
                        id="trip_date"
                        name="trip_date"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.trip_date}
                      />
                      {touched.date && errors.date && (
                        <p className="text-red-600">{errors.date}</p>
                      )}
                    </div>

                    <div>
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
                      {touched.fare && errors.fare && (
                        <p className="text-red-600">{errors.fare}</p>
                      )}
                    </div>
                  </div>
                  <div className="relative">
                    Bus ID
                    <div
                      className="w-[400px]  h-[40px] rounded-md border-[1px] border-[#C0C0C0] border-solid  px-[24px] flex items-center justify-between mt-[16px] cursor-pointer relative"
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      <div className="text-[#9BA3AF]">{busId}</div>
                      <div className="text-[30px] cursor-pointer text-[#9BA3AF]">
                        <i
                          onClick={() => setShowDropdown(!showDropdown)}
                          className="fa fa-angle-down"
                        ></i>
                      </div>
                      {/* {availableBuses.map((bus) => <p>{bus}</p>)} */}

                      <input
                        type="text"
                        className=" w-[330px] h-[30px] rounded-md absolute outline-none"
                        placeholder=""
                        value={busId}
                        readOnly
                        id="bus_id"
                        name="bus_id"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    {touched.bus_id && errors.bus_id && busId == "Bus ID" ? (
                      <p className="text-red-600">{errors.bus_id}</p>
                    ) : (
                      ""
                    )}
                    {showDropdown && (
                      <div className="w-[400px] absolute top-[90px]">
                        <InputFieldDropdown
                          dropdownList={availableBuses}
                          setBusId={setBusId}
                          setShowDropdown={setShowDropdown}
                        />
                      </div>
                    )}
                  </div>

                  <div className="text-center">
                    <input
                      className="mt-[60px] text-white w-[500px] py-[10px] rounded-full cursor-pointer bg-[#004643]"
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
