import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-teal-500">
            <footer className="rounded-lg dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href={"/"} >TAN&apos;S RESUME</Link>
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <a href="#information" className="hover:underline me-4 md:me-6">Information</a>
                        </li>
                        <li>
                            <a href="#experience" className="hover:underline me-4 md:me-6">Experience</a>
                        </li>
                        <li>
                            <a href="#skills" className="hover:underline me-4 md:me-6">Skills</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline me-4 md:me-6">Contact</a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:underline">Projects</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
