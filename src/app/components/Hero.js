// components/Hero.js
const Hero = () => {
    return (
      <div className="p-10 text-center lg:text-left lg:flex items-center justify-between">
        <div className="mx-auto lg:w-1/2 flex flex-col">
          <h1 className="my-2 font-bold text-5xl">Al salam alikom</h1>
          <h1 className="my-2 font-bold text-5xl">I am Slimene Fellah</h1>
          <h3 className="my-2 font-medium text-2xl h-14">
            <span className="typewriter"></span>
            <span className="cursor">|</span>
          </h3>
          <a
            id="seeWorkBtn"
            className="text-black mx-auto lg:mx-0 p-4 my-2 rounded-lg bg-white w-fit font-medium text-lg"
            href="#work"
          >
            See my work
          </a>
        </div>
        <div className="w-full mx-auto sm:w-1/2 lg:w-1/3 lg:mx-auto">
          <img src="/Assets/illus1.png" alt="Illustration 1" />
        </div>
      </div>
    );
  };
  
  export default Hero;
  