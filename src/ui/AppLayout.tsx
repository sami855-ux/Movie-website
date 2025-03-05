import { Outlet } from "react-router-dom"
import Header from "../components/Header"

// Code: AppLayout component
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default AppLayout
