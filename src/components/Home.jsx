import "../style/Home.css";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen overflow-hidden flex justify-center md:justify-around items-center flex-col-reverse md:flex-row"
    >
      <p className="text-white text-2xl md:text-3xl text-center sm:text-start">
        Hi, I'm Ahmed Hussein <br />
        and I'm a <br />
        <span className="text-amber-400">Front end Developer</span>
      </p>
      <div className="mycircle w-52 h-52 lg:w-96 lg:h-96 relative rounded-full flex justify-center items-center mb-24 md:mb-0"></div>
    </section>
  );
};

export default Home;
