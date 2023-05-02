import Image from "next/image"
import AddBoard from "../../../public/assets/add.svg"
import Settings from "../../../public/assets/settings.svg"
import Rocket from "../../../public/assets/rocket.svg"
import Logout from "../../../public/assets/logout.svg"
import Home from "../../../public/assets/home.svg"
import Calendar from "../../../public/assets/calendar.svg"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex flex-col h-[100%] w-12 items-center">
      <div className="flex flex-col justify-between gap-4 mt-6">
        <Image alt="new board" src={Rocket} width={30} height={30} />
      </div>

      <div className="flex flex-col justify-between h-[100%] my-12">
        <section className="flex flex-col justify-between gap-4">
          <Link href={"/dashboard"}>
            <Image alt="new board" src={Home} width={30} height={30} />
          </Link>
          <Image alt="new board" src={Calendar} width={30} height={30} />
          <Image alt="new board" src={AddBoard} width={30} height={30} />
        </section>
        <section className="flex flex-col justify-between gap-4">
          <Image alt="new board" src={Settings} width={30} height={30} />
          <Image alt="new board" src={Logout} width={30} height={30} />
        </section>
      </div>
    </nav>
  )
}
export default Navbar
