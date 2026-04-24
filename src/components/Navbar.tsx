export default function Navbar() {
  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 px-8 border-b border-base-200">
      <div className="flex-1">
        <a className="text-2xl font-black tracking-tighter text-primary">SyncUp.</a>
      </div>
      <div className="flex-none gap-4">
        {/* User Profile / Login Button */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar online">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img alt="User" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Juma" />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-base-200">
            <li><a className="font-bold">Profile</a></li>
            <li><a>Settings</a></li>
            <li><a className="text-error font-bold">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}