import { ArrowRight, BookOpen, LibraryBig, Pickaxe, TrendingUp } from "lucide-react"
import { Link } from "react-router"
import { NumberTicker } from "../components/magicui/number-ticker"
import { motion } from "motion/react"

export const Landing = () => {

    const characteristics = [
        {
            icon: <TrendingUp className="size-6 text-blue-600" />,
            title: "Rutas de aprendizaje",
            text: "Sigue un camino estructurado desde cero hasta nivel avanzado en Frontend, Backend o Fullstack."
        },
        {
            icon: <LibraryBig className="size-6 text-blue-600" />,
            title: "Stack moderno",
            text: "Aprende tecnologías demandadas como React, TypeScript, Node.js, Express y bases de datos."
        },
        {
            icon: <Pickaxe className="size-6 text-blue-600" />,
            title: "Proyectos reales",
            text: "Desarrolla aplicaciones prácticas como e-commerce, redes sociales y dashboards interactivos."
        }
    ]

    const reviews = [
        {
            user: "María González",
            occupation: "Frontend Developer",
            review: "Gracias a los cursos de React y TypeScript logré mejorar mi portafolio y conseguir entrevistas rápidas."
        },
        {
            user: "Carlos Ruiz",
            occupation: "Backend Developer",
            review: "El curso de Node.js con bases de datos fue directo al grano y muy aplicable en mi trabajo."
        },
        {
            user: "Ana Martín",
            occupation: "Fullstack Developer",
            review: "Los proyectos prácticos me ayudaron a dominar el flujo completo: frontend, backend y despliegue."
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
            className="fixed z-10 w-full p-4 bg-white shadow-xs">
            <div className="flex items-center justify-between mx-auto max-w-6xl">
                <div className="flex gap-2 items-center">
                    <BookOpen className="stroke-blue-600" />
                    <p className="font-bold text-blue-800">Eido Academy</p>
                </div>
                <Link to="/courses"
                    className="hover:text-blue-600 hover:-translate-y-0.5 transition-all text-sm"
                >Ver Cursos</Link>
            </div>
        </motion.header>
        <section className="flex items-center justify-center min-h-svh px-4 bg-blue-50">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-10 max-w-6xl mx-auto">
                <div className="flex gap-1 px-4 py-2 rounded-lg bg-blue-100">
                    🚀 <span className="font-medium text-blue-600">Plataforma educativa lider</span>
                </div>
                <h1 className="text-center font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl">Aprende nuevas habilidades en <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500">Eido Academy</span></h1>
                <p className="text-center md:text-lg xl:text-xl text-gray-600 max-w-lg md:max-w-2xl">Aprende a programar y desarrolla tu carrera en tecnología. Cursos de Frontend, Backend, Fullstack, Bases de datos y más en un solo lugar.
                </p>
                <button className="flex items-center gap-2 px-4 py-2 text-lg rounded-lg bg-blue-600 text-white shadow-2xl shadow-blue-500 cursor-pointer active:scale-95 hover:bg-blue-800 transition-all group">
                    Explorar cursos <ArrowRight className="group-hover:translate-x-0.5 transition-all" />
                </button>
            </motion.div>
        </section>
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="space-y-2">
                        <div className="text-4xl font-bold text-blue-600"><NumberTicker className="text-4xl font-bold text-blue-600" value={10} />+</div>
                        <div className="text-gray-600">Cursos Disponibles</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl font-bold text-blue-600"><NumberTicker className="text-4xl font-bold text-blue-600" value={200} />+</div>
                        <div className="text-gray-600">Estudiantes Activos</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl font-bold text-blue-600"><NumberTicker className="text-4xl font-bold text-blue-600" value={94} />%</div>
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
                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {
                        characteristics.map((characteristic, index) => (
                            <div
                                key={index} className="flex flex-col items-center gap-2 px-8 py-12 rounded-lg bg-white transition-all shadow-sm">
                                <div className="flex items-center justify-center p-4 rounded-full bg-blue-100">{characteristic.icon}</div>
                                <span className="text-lg font-semibold">{characteristic.title}</span>
                                <span className="text-sm text-gray-600">{characteristic.text}</span>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </section>
        <section className="flex flex-col gap-10 items-center justify-center py-24 px-4 bg-white">
            <h2 className="font-bold text-3xl px-4 text-center">Lo que dicen nuestros usuarios</h2>
            <div className="max-w-6xl mx-auto px-4">
                <motion.div initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        reviews.map((review, index) => (
                            <div key={index} className="flex flex-col gap-2 px-8 py-12 rounded-lg bg-white transition-all shadow">
                                <p>⭐⭐⭐⭐⭐</p>
                                <span className="text-lg font-semibold">{review.user}</span>
                                <span className="text-sm text-gray-600">{review.occupation}</span>
                                <p className="text-gray-700">"{review.review}"</p>
                            </div>
                        ))
                    }
                </motion.div>
            </div>
        </section>
        <section className="flex flex-col gap-8 items-center justify-center py-24 px-4 bg-blue-600 text-white">
            <h2 className="font-bold text-3xl px-4 text-center">¿Listo para comenzar tu viaje de aprendizaje?</h2>
            <p className="text-center md:text-xl text-gray-200 max-w-lg md:max-w-2xl">Conviértete en desarrollador de software y da el siguiente paso en tu carrera. Aprende las tecnologías más demandadas del mercado laboral.
            </p>
            <button className="flex items-center font-semibold gap-2 px-4 py-2 rounded-lg bg-white text-blue-600 shadow-2xl shadow-white cursor-pointer active:scale-95 hover:bg-gray-100 transition-all group">
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
                        <li className="hover:text-white transition-colors">Frontend (React, Vue, Angular)</li>
                        <li className="hover:text-white transition-colors">Backend (Node.js, Express, APIs)</li>
                        <li className="hover:text-white transition-colors">Bases de Datos (SQL, MongoDB, PostgreSQL)</li>
                        <li className="hover:text-white transition-colors">Fullstack & DevOps</li>
                    </ul>
                </div>
            </div>
            <div className="w-full max-w-6xl mx-auto border-b-1 pb-1 border-b-gray-400" />
            <div className="border-t border-gray-800 text-center text-sm text-gray-400">
                <p>&copy; 2025 Eido Academy. Todos los derechos reservados.</p>
            </div>
        </footer>
    </main >
}