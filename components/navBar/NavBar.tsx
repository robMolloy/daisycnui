export const NavBar = (p: { onToggleClick: () => void }) => {
  return (
    <div className="navbar bg-base-200 sticky top-0 border-b z-[99]">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={p.onToggleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="hidden md:block">
        <a className="btn btn-ghost text-xl">daisyCN UI</a>
      </div>
      <div className="flex-1" />
      <div className="flex gap-4 pr-4">
        <div className="btn btn-ghost">hello</div>
        <div className="btn btn-ghost">mom</div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <div>Parent &#x25BC;</div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-base-300 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
