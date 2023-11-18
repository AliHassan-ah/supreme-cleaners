import clsx from "clsx";
import {
  Link,
  //  useLocation
} from "react-router-dom";
const links = [
  //   { name: "Add Service", href: "/dashboard", icon: DashboardIcon },
  { name: "Add Service", href: "/admin-pannel/add-service" },
  { name: "Cretae Blog", href: "/admin-pannel/add-service" },
];

export default function NavLinks() {
  // const { pathname } = useLocation();
  return (
    <>
      {links.map((link) => {
        // const LinkIcon = link?.icon;
        return (
          <Link
            key={link?.name}
            to={link?.href}
            // className={clsx(
            //   "flex h-[48px] grow items-center justify-center gap-2 !hover:text-[#131313] rounded-md p-3 text-sm font-medium hover:bg-sky-100  md:flex-none md:justify-start md:p-2 md:px-3",
            //   {
            //     "bg-sky-100 ": pathname === link?.href,
            //   }
            // )}
          >
            {/* <LinkIcon className="w-6" /> */}
            <p className="hidden md:flex items-center !mb-0 text-[#7D7D7D] hover:text-[#131313] cursor-pointer">
              {link?.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}
