import React from "react";
export default function Navbar() {
    const links = [
        {
            href: "/",
            label: "Home",
        },
        {
            href: "/",
            label: "About",
        },
        {
            href: "/",
            label: "Contact",
        },
        {
            href: "/",
            label: "Exemple 1",
        },
        {
            href: "/",
            label: "Exemple 2",
        },
    ];
    return (
        <>
            <nav>
                <ul
                    style={{
                        display: "flex",
                        gap: "1rem",
                    }}
                >
                    {links.map((link, index) => {
                        return (
                            <li
                                key={index}
                                style={{ listStyle: "none", width: "75%" }}
                            >
                                <a href={link.href}>{link.label}</a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}
