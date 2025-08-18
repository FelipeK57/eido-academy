import { Menu } from "./components/Menu"

export const CoursesList = () => {
    return <main className="flex flex-col bg-blue-50 min-h-screen">
        <Menu />
        <section className="mt-22 w-full max-w-6xl mx-auto">
            <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-2xl">Catálogo de Cursos</h2>
                <p className="text-gray-600">Descubre y aprende con nuestros cursos especializados</p>
            </div>
        </section>
    </main>
}