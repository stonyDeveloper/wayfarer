import React from "react";
import AdminShell from "../../components/AdminShell";
import Input from "../../components/Input";

const cancel_trip = () => {
  return (
    <AdminShell>
        <div className="w-full">
        <h1 className="text-[30px] mb-[30px]">Cancel Trip</h1>
        <div className="flex flex-col gap-[60px] items-center">
          <div className="flex gap-[50px]">
            <Input
              type={"text"}
              placeholder={"Please enter trip origin"}
              label={"Origin"}
              width={"w-[400px]"}
            />
            <Input
              type={"text"}
              placeholder={"Please enter trip desitination"}
              label={"Destination"}
              width={"w-[400px]"}
            />
          </div>
          <div className="flex gap-[50px]">
            <Input
              type={"date"}
              placeholder={"Select trip date"}
              label={"Date"}
              width={"w-[400px]"}
            />
            <Input
              type={"text"}
              placeholder={"Fare"}
              label={"Fare"}
              width={"w-[400px]"}
            />
          </div>
          
        </div>
        <div className="flex justify-center">
        <input
            className=" mt-[60px] text-white w-[500px] py-[10px] rounded-full cursor-pointer bg-[#004643]"
            type="submit"
          />
        </div>
      </div>
    </AdminShell>
  );
};

export default cancel_trip;
