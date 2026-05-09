"use client";

import Link from "next/link";
import { usePathname} from "next/navigation";


const Header = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h4 className="navbar-brand">
            Auth-Next
          </h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link
                  className={
                    pathname === "/" ? "active nav-link " : " nav-link"
                  }
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={
                    pathname === "/posts" ? " nav-link active" : " nav-link"
                  }
                  href="/posts"
                >
                  Posts
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="navigation">
              <Link href={"/login"} className="btn btn-outline-success mx-3" type="submit">
                Login
              </Link>
              <Link className="btn btn-outline-danger" type="submit" href={"/register"}>
                Register
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
