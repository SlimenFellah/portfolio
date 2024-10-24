// components/Work.js
const Work = () => {
    return (
      <div id="work" className="relative w-full">
        <h1 className="text-5xl text-center md:text-left p-12 font-semibold">My work</h1>
        <div id="workArea" className="bg-bg1is bg-repeat p-12">
          {/* Needy Project */}
          <div id="project" className="w-11/12 mx-auto my-4 p-8 text-center rounded-lg shadow-md bg-cyan-600 opacity-90 hover:opacity-100">
            <h1 className="text-2xl font-medium mb-2">Needy</h1>
            <img src="/Assets/needyW.JPG" alt="Needy project" />
            <p className="my-4">
              Needy is a website I built for my project at university. I built it from scratch, and it took me several months to accomplish, but the final result was very satisfying.
            </p>
            <div className="flex justify-center items-center h-12">
              <img src="/Assets/logosBw/mongo.png" className="invert mx-1 h-10" alt="MongoDB" />
              <img src="/Assets/logosBw/express.png" className="invert mx-1 h-10" alt="Express" />
              <img src="/Assets/logosBw/node.png" className="invert mx-1 h-10" alt="Node.js" />
              <img src="/Assets/logosBw/html.png" className="invert mx-1 h-10" alt="HTML" />
              <img src="/Assets/logosBw/tailwind.png" className="invert mx-1 h-7" alt="Tailwind CSS" />
            </div>
            <div className="flex justify-around">
              <a className="p-4 bg-white text-cyan-600 rounded-lg" href="https://needy.onrender.com/" target="_blank" rel="noopener noreferrer">Demo</a>
              <a className="p-4 bg-white text-cyan-600 rounded-lg" href="https://github.com/SlimenFellah/needy" target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
          {/* Portfolio Project */}
          <div id="project" className="w-11/12 mx-auto my-4 p-8 text-center rounded-lg shadow-md bg-slate-700 opacity-90 hover:opacity-100">
            <h1 className="text-2xl font-medium mb-2">My Portfolio</h1>
            <img src="/Assets/portfolio.JPG" alt="Portfolio project" />
            <p className="my-4">
              This portfolio website is built with Next.js. I wanted it to be minimalistic yet functional.
            </p>
            <div className="flex justify-center items-center h-12">
              <img src="/Assets/logosBw/next.png" className="invert mx-1 h-10" alt="Next.js" />
              <img src="/Assets/logosBw/react.png" className="invert mx-1 h-10" alt="React" />
              <img src="/Assets/logosBw/tailwind.png" className="invert mx-1 h-7" alt="Tailwind CSS" />
            </div>
            <div className="flex justify-around">
              <a className="p-4 bg-white text-slate-700 rounded-lg" href="#" target="_blank" rel="noopener noreferrer">Demo</a>
              <a className="p-4 bg-white text-slate-700 rounded-lg" href="#" target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
          {/* Add more projects as needed */}
        </div>
      </div>
    );
  };
  
  export default Work;
  