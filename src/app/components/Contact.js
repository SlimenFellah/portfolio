// components/Contact.js
const Contact = () => {
    return (
      <div id="contact" className="text-center my-20 p-8">
        <h1 className="font-semibold text-5xl">Contact me</h1>
        <h3 className="font-normal text-lg">I will respond ASAP</h3>
        <form className="flex flex-col my-4 mx-auto w-3/4 md:w-1/2">
          <input className="border p-2 my-2" type="text" placeholder="Name" />
          <input className="border p-2 my-2" type="email" placeholder="Email" />
          <textarea className="border p-2 my-2" placeholder="Your message"></textarea>
          <button type="submit" className="p-2 bg-slate-800 text-white rounded-lg">Send</button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  