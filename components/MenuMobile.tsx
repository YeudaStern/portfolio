import NavLink from "./NavLink";

interface MobileLink {
    path: string;
    title: string;
}

interface MobileLinks {
    links: MobileLink[];
}

const MenuMobile: React.FC<MobileLinks> = ({ links }) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    );
}

export default MenuMobile;
