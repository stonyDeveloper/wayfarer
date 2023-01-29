import { useRef } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Popover,
  PopoverHeader,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
} from "@chakra-ui/react";
import Link from "next/link";

const PopOver = () => {
  const initialFocusRef = useRef();
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement="bottom"
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <div className="cursor-pointer">
          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </div>
      </PopoverTrigger>
      <PopoverContent
        color="white"
        bg="blue.800"
        borderColor="blue.800"
        w={"200px"}
      >
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          Buses
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody px={"10px"}>
          <Link href="/admin/register_bus">
            <p className="hover:text-[#004643] hover:bg-white py-1 px-2 rounded-md">
              Register Bus
            </p>
          </Link>
          <Link href="/admin/register_bus">
            <p className="hover:text-[#004643] hover:bg-white py-1 px-2 rounded-md">
              Register Bus
            </p>
          </Link>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PopOver;
