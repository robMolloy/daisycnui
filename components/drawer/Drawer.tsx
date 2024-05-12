export const Drawer = (p: { show: boolean }) => {
  return (
    <ul
      className={`menu bg-base-200 w-56 h-screen block ${
        p.show ? "" : "hidden"
      }`}
    >
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 2</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  );
};
