import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";


function Layout () {
  const user = null;
  const location = useLocation();

  return user?.token ? (
    <Outlet/>
  ) : (
    <Navigate to="/login" state={{from: location}} replace/>
  )
}
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element="kuch bhi"/>
          <Route path="/profile/:id?" element="Profile Id"/>
        </Route>
        <Route path="/register" element="register Route"/>
        <Route path="/login" element="login Routes"/>
        <Route path="reset-password" element="Reset Password"/>
      </Routes>
    </h1>
  )
}