import Link from "next/link";

interface NavLinkProps {
    href: string;
    title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
    return (
        <Link href={href}
            className="block pl-3 py-2 pr-4 text-[#ADB7BE] hover:text-[#e6eef4] hover:border-b hover:border-purple-900 md:p-o hover:text-w hover:shadow-md">
            {title}
        </Link>
    );
};

export default NavLink;
