import React from 'react'

const InputFieldDropdown = ({dropdownList, setBusId, gender, setShowDropdown}) => {
  // const dropdownList = ["Male", "Female"]
  const chooseBus = (item) => {
    console.log("working")
    setBusId(item)
    setShowDropdown(false)
  }
  return (
    <div className='drop bg-[#004643] px-[16px] py-[13px] rounded-[5px]'>
        {dropdownList?.map((item, index) => 
          <p onClick={() => chooseBus(item)} className='font-[400] text-[16px] text-[#004643]] leading-[20.16px] py-[10px] pl-[21px] border border-[#FFFFFF] rounded-[5px] mt-[6px] bg-[white] cursor-pointer' key={index}>
            {item}
          </p> 
        )}
    </div>
  )
}

export default InputFieldDropdown