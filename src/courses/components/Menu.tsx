import { BookOpen, MenuIcon } from "lucide-react"
import { Link } from "react-router"

export const Menu = () => {
    return <header className="fixed z-10 w-full p-4 bg-white shadow-xs">
        <div className="flex items-center justify-between mx-auto max-w-6xl">
            <button className="p-2 bg-blue-600 text-white rounded-lg active:scale-95 hover:bg-blue-800 transition-all cursor-pointer">
                <MenuIcon />
            </button>
            <div className="hidden md:flex gap-2 items-center">
                <BookOpen className="stroke-blue-600" />
                <p className="font-bold text-blue-800">Eido Academy</p>
            </div>
            <input type="search" placeholder="Buscar cursos..." className="px-4 py-2 text-sm border border-gray-300 rounded-lg w-full max-w-[200px] md:max-w-sm" />
            <Link className="hidden md:flex hover:text-blue-600 hover:-translate-y-0.5 transition-all text-sm" to="/courses/my-progress">Progreso</Link>
        </div>
    </header>
}