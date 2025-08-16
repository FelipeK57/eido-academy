import { ArrowRight, BookOpen, LibraryBig, Pickaxe, TrendingUp } from "lucide-react"
import { Link } from "react-router"
import { NumberTicker } from "../components/magicui/number-ticker"
import { motion } from "motion/react"

export const Landing = () => {

    const characteristics = [
        {
            icon: <TrendingUp className="size-6 text-blue-600" />,
            title: "Progreso visible",
            text: "Monitorea tu avance y celebra tus logros a lo largo del camino."
        },
        {
            icon: <LibraryBig className="size-6 text-blue-600" />,
            title: "Variedad",
            text: "Accede a una amplia gama de cursos en diferentes áreas del conocimiento."
        },
        {
            icon: <Pickaxe className="size-6 text-blue-600" />,
            title: "Practica",
            text: "Aplica tus conocimientos en proyectos reales y mejora tus habilidades."
        }
    ]

    const reviews = [
        {
            user: "María González",
            occupation: "Desarrolladora Frontend",
            review: "Los cursos de React me ayudaron a conseguir mi trabajo actual. El contenido es excelente y muy práctico."
        },
        {
            user: "Carlos Ruiz",
            occupation: "Diseñador Gráfico",
            review: "La plataforma es muy intuitiva y los instructores explican de manera clara y concisa."
        },
        {
            user: "Ana Martín",
            occupation: "Marketing Digital",
            review: "He aprendido más en 3 meses aquí que en años de estudio autodidacta. Totalmente recomendado."
        }
    ]

    return <main className="flex flex-col">
        <motion.header
            initial={{
                y: -200
            }}
            animate={{
                y: 0
            }}
            transition={{
                type: "spring",
                stiffness: 350,
                damping: 60,
                duration: 0.5
            }}
            className="fixed w-full p-4 bg-white shadow-xs">
            <div className="flex items-center justify-between mx-auto max-w-6xl">
                <div className="flex gap-2 items-center">
                    <BookOpen className="stroke-blue-600" />
                    <p className="font-bold text-blue-800">Eido Academy</p>
                </div>
                <div className="hidden md:flex gap-10">
                    <Link to="/courses"
                        className="hover:text-blue-600 hover:-translate-y-0.5 transition-all"
                    >Cursos</Link>
                    <Link to="/admin"
                        className="hover:text-blue-600 hover:-translate-y-0.5 transition-all"
                    >Administración</Link>
                </div>
            </div>
        </motion.header>
        <section className="flex items-center justify-center min-h-svh px-4 bg-blue-50">
            <motion.div
                initial={{
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1
                }}
                transition={{
                    type: "spring",
                    duration: 1
                }}
                viewport={{
                    once: true
                }}
                className="flex flex-col items-center gap-10 max-w-6xl mx-auto">
                <div className="flex gap-1 px-4 py-2 rounded-lg bg-blue-100">
                    🚀 <span className="font-medium text-blue-600">Plataforma educativa lider</span>
                </div>
                <h1 className="text-center font-bold text-4xl sm:text-5xl md:text-7xl">Aprende nuevas habilidades en <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500">Eido Academy</span></h1>
                <p className="text-center md:text-xl text-gray-600 max-w-lg md:max-w-2xl">Descubre miles de cursos online diseñados por expertos. Desde programación hasta diseño, encuentra el conocimiento que necesitas para impulsar tu carrera profesional.</p>
                <button className="flex items-center gap-2 px-4 py-2 text-lg rounded-lg bg-blue-600 text-white cursor-pointer active:scale-95 hover:bg-blue-800 transition-all group">
                    Explorar cursos <ArrowRight className="group-hover:translate-x-0.5 transition-all" />
                </button>
            </motion.div>
        </section>
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="space-y-2">
                        <div className="text-4xl font-bold text-blue-600"><NumberTicker className="text-4xl font-bold text-blue-600" value={50} />+</div>
                        <div className="text-gray-600">Cursos Disponibles</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl font-bold text-blue-600"><NumberTicker className="text-4xl font-bold text-blue-600" value={10000} />+</div>
                        <div className="text-gray-600">Estudiantes Activos</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl font-bold text-blue-600"><NumberTicker className="text-4xl font-bold text-blue-600" value={95} />%</div>
                        <div className="text-gray-600">Satisfacción</div>
                    </div>
                </div>
            </div>
        </section>
        <section className="flex flex-col gap-10 items-center justify-center py-24 px-4 bg-blue-50">
            <div className="flex flex-col gap-4 px-4 items-center">
                <h2 className="font-bold text-3xl text-center">¿Por qué elegir Eido Academy?</h2>
                <p className="text-center md:text-xl text-gray-600 max-w-lg md:max-w-2xl">Ofrecemos una experiencia de aprendizaje única con herramientas modernas y contenido de calidad.</p>
            </div>
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {
                        characteristics.map((characteristic, index) => (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: 1,
                                }}
                                transition={{
                                    type: "spring",
                                    duration: 1,
                                    delay: (index + 1) * 0.2,
                                }}
                                viewport={{
                                    once: true
                                }}
                                key={index} className="flex flex-col items-center gap-2 px-8 py-12 rounded-lg bg-white border-1 border-gray-200 transition-all hover:shadow-sm">
                                <div className="flex items-center justify-center p-4 rounded-full bg-blue-100">{characteristic.icon}</div>
                                <span className="text-lg font-semibold">{characteristic.title}</span>
                                <span className="text-sm text-gray-600">{characteristic.text}</span>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
        <section className="flex flex-col gap-10 items-center justify-center py-24 px-4 bg-white">
            <h2 className="font-bold text-3xl px-4 text-center">Lo que dicen nuestros usuarios</h2>
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        reviews.map((review, index) => (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: 1,
                                }}
                                transition={{
                                    type: "spring",
                                    duration: 1,
                                    delay: (index + 1) * 0.2,
                                    ease: "easeIn"
                                }}
                                viewport={{
                                    once: true
                                }}
                                key={index} className="flex flex-col gap-2 px-8 py-12 rounded-lg bg-white border-1 border-gray-200 transition-all hover:shadow-sm">
                                <p>⭐⭐⭐⭐⭐</p>
                                <span className="text-lg font-semibold">{review.user}</span>
                                <span className="text-sm text-gray-600">{review.occupation}</span>
                                <p className="text-gray-700">"{review.review}"</p>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
        <section className="flex flex-col gap-8 items-center justify-center py-24 px-4 bg-blue-600 text-white">
            <h2 className="font-bold text-3xl px-4 text-center">¿Listo para comenzar tu viaje de aprendizaje?</h2>
            <p className="text-center md:text-xl text-gray-200 max-w-lg md:max-w-2xl">Únete a miles de estudiantes que ya están transformando sus carreras con Eido Academy.</p>
            <button className="flex items-center font-semibold gap-2 px-4 py-2 rounded-lg bg-white text-blue-600 cursor-pointer active:scale-95 hover:bg-gray-100 transition-all group">
                Comenzar ya <ArrowRight className="group-hover:translate-x-0.5 transition-all" />
            </button>
        </section>
        <footer className="flex flex-col py-8 px-4 gap-6 bg-blue-950 text-white">
            <div className="flex justify-between gap-4 w-full max-w-6xl mx-auto">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 items-center">
                        <BookOpen className="stroke-blue-50" />
                        <p className="font-bold text-blue-100">Eido Academy</p>
                    </div>
                    <p className="text-sm max-w-xs text-gray-200">
                        La plataforma educativa que transforma tu futuro profesional.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-semibold">Cursos en:</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-white transition-colors">
                            Desarrollo Web
                        </li>
                        <li className="hover:text-white transition-colors">
                            Programación
                        </li>
                        <li className="hover:text-white transition-colors">
                            Diseño
                        </li>
                        <li className="hover:text-white transition-colors">
                            Marketing
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full max-w-6xl mx-auto border-b-1 pb-1 border-b-gray-400" />
            <div className="border-t border-gray-800 text-center text-gray-400">
                <p>&copy; 2025 Eido Academy. Todos los derechos reservados.</p>
            </div>
        </footer>
    </main >
}