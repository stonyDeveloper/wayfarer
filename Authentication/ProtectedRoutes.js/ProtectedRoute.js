const ProtectedRoute = ({ router, children }) => {
    const user = Cookies.get("user_data") ? JSON.parse(Cookies.get("user_data")) : []


    return children;
  };
  export default ProtectedRoute;