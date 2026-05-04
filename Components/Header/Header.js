"use client";

import { usePathname, useRouter } from "next/navigation";


const Header = () => {
  const pathname = usePathname();
  const router = useRouter()

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <h4 className="navbar-brand" href="#">
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
                <a
                  className={
                    pathname === "/" ? "active nav-link " : " nav-link"
                  }
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    pathname === "/posts" ? " nav-link active" : " nav-link"
                  }
                  href="/posts"
                >
                  Posts
                </a>
              </li>
            </ul>
            <form className="d-flex" role="navigation">
              <button className="btn btn-outline-success mx-3" type="submit" onClick={()=>router.push("/auth/login")}>
                Login
              </button>
              <button className="btn btn-outline-danger" type="submit" onClick={()=>router.push("/auth/register")}>
                Register
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
