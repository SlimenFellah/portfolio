// components/About.js
const About = () => {
    return (
      <div id="about" className="text-center lg:text-left lg:flex justify-center items-start p-10">
        <div className="w-full mx-auto sm:w-1/2 lg:w-1/3 lg:mx-auto">
          <img src="/Assets/illus2.png" alt="Illustration 2" />
        </div>
        <div className="w-2/3 lg:w-1/3 mx-auto">
          <h1 className="text-5xl font-semibold my-8">About me :</h1>
          <p className="text-xl mt-8">
            My name is Slimene Fellah, 21 years old<br />
            a computer science student at Esi Algiers, Algeria.<br />
            I am a full stack MERN developer.<br />
            I developed many projects on the web<br />
            which you can visit in the next section.
          </p>
          <div className="flex justify-around h-12 my-4">
            <img className="stack1 mx-1" src="/Assets/m.png" alt="M" />
            <img className="stack2 mx-1" src="/Assets/e.png" alt="E" />
            <img className="stack3 mx-1" src="/Assets/r.png" alt="R" />
            <img className="stack4 mx-1" src="/Assets/n.png" alt="N" />
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  