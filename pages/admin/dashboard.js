import React, {useEffect} from "react";
import AdminShell from "../../components/AdminShell";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const dashboard = () => {

  return (
    <div>
      <AdminShell>
        sahdad
      </AdminShell>
    </div>
  );
};

export default dashboard;
