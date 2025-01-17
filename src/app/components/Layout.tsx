import { Outlet } from '@tanstack/react-router'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <div className="bg-[#6756BD] h-screen py-6 px-5">
      <main className="grid grid-cols-[20%_1fr] h-full bg-[#ffffff66] rounded-[50px] max-w-[1316px] mx-auto backdrop-blur-2xl pl-5 py-4 pr-4">
        <Sidebar />
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
