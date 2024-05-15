import React from 'react'

export default function NavBar(){
    return(
        <>

<div className="navbar bg-base-100" data-theme="luxury">
  <div className="flex-1">
    <a href='/' className="btn btn-ghost text-xl">Kaizer Chiefs Fan Zone</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a href='/Upcoming'>Match Schedule & Results</a></li>
      <li>
      </li>
    </ul>
  </div>
</div>
        </>
    )
}