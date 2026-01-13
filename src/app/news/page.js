export default function News() {
  return (
    <div className="">
      <div className="navbar bg-indigo-50 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-3xl ">PH News</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <a>Politics</a>
            </li>
            <li>
              <a>Education</a>
            </li>
             <li>
              <a>Cultural</a>
            </li>
            <li>
              <a>Economics</a>
            </li>
            <li>
              <a>Sports</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
