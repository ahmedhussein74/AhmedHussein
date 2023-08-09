import "../style/Animation.css";

const Animation = () => {
  return (
    <div>
      <ul className="circles w-full h-full absolute overflow-hidden top-0 left-0">
        <li className="w-20 h-20 absolute block list-none"></li>
        <li className="w-5 h-5 absolute block list-none"></li>
        <li className="w-5 h-5 absolute block list-none"></li>
        <li className="w-16 h-16 absolute block list-none"></li>
        <li className="w-5 h-5 absolute block list-none"></li>
        <li className="w-28 h-28 absolute block list-none"></li>
        <li className="w-40 h-40 absolute block list-none"></li>
        <li className="w-6 h-6 absolute block list-none"></li>
        <li className="w-4 h-4 absolute block list-none"></li>
        <li className="w-40 h-40 absolute block list-none"></li>
      </ul>
    </div>
  );
};

export default Animation;
