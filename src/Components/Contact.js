import CloseIcon from "@mui/icons-material/Close";
import HubIcon from "@mui/icons-material/Hub";
import MapIcon from "@mui/icons-material/Map";
import CallIcon from "@mui/icons-material/Call";
import SendIcon from "@mui/icons-material/Send";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ebd359j",
        "template_xdyzkjh",
        form.current,
        "Xl_bMOAgBlREeleuV"
      )
      .then(
        (result) => {
          console.log(result);
          toast.success("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
          alert(error.text);
        }
      );
  };

  return (
    <div
      className="bg-gray-800  text-white py-8  "
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <p className=" capitalize text-xl text-thin text-[#9f9f9f]  text-center">
        Feel free to contact me anytimes
      </p>
      <h1 className="  text-center text-2xl lg:text-4xl ">Contact Me</h1>

      <div className="w-11/12 lg:w-[85%] mx-auto pt-6 flex lg:gap-4 gap-6 justify-between flex-col lg:flex-row sm:top-[65%] sm:mt-0 max-md:top-full  ">
        <div className="md:px-12 w-full lg:w-[59%] lg:pl-5 lg:pr-10 rounded-2xl shadow-2xl ">
          <div className="flex">
            <h1 className="font-bold text-2xl">Send us a message</h1>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid gap-3 md:grid-cols-2 mt-5">
              <input
                className="w-full bg-[#161616] text-[#777] mt-2 p-3  focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Name"
                name="name"
                autoComplete="off"
                required
              />
              <input
                className="w-full bg-[#161616] text-[#777] mt-2 p-3  focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                name="email"
                autoComplete="off"
                required
              />
              <input
                className="w-full bg-[#161616] text-[#777] mt-2 p-3 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subject"
                name="subject"
                autoComplete="off"
                required
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message"
                name="message"
                className="w-full h-32 bg-[#161616] text-[#777] mt-2 p-3  focus:outline-none focus:shadow-outline "
                autoComplete="off"
                required
              />
            </div>
            <div className="my-2 w-1/2 lg:w-1/4 ">
              <button
                className="bg-[#009e66] text-gray-100 p-3 rounded-full w-full
                      focus:outline-none focus:shadow-outline hover:bg-[#117351]"
                type="submit"
                value="Send"
              >
                <span>
                  <SendIcon sx={{ marginLeft: "3px" }} />
                  Send
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="lg:pl-10 pl-4 py-3 px-2 rounded-2xl shadow-2xl flex w-full lg:w-[40%]">
          <div>
            <h1 className="font-bold text-2xl   pb-5">Contact Info</h1>
            <p className="text-[#9f9f9f]">
              Always available for work if the right project
              <br /> comes along, Feel free to contact me!
            </p>
            <ul className="mt-3">
              <li>
                <div className="flex pl-2 ">
                  <span className=" pt-2 pr-8">
                    <HubIcon sx={{ color: "#009e66", fontSize: "35px" }} />
                  </span>
                  <div className="border-l pl-8 pt-2">
                    <h6>Name</h6>
                    <span className="text-[#9f9f9f]">Tanvir Islam</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex pl-2">
                  <span className="pt-4 pr-8">
                    <MapIcon sx={{ color: "#009e66", fontSize: "35px" }} />
                  </span>
                  <div className="border-l pl-8 pt-4">
                    <h6>Location</h6>
                    <span className="text-[#9f9f9f]">Barguna, Bangladesh</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex pl-2">
                  <span className="pt-4 pr-8">
                    <CallIcon sx={{ color: "#009e66", fontSize: "35px" }} />
                  </span>
                  <div className="border-l pl-8 pt-4">
                    <h6>Call Me</h6>
                    <span className="text-[#9f9f9f]">
                      <a href="tel:+8801723410727">+880 1723410727</a>
                    </span>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex pl-2 ">
                  <span className="pt-4 pr-8">
                    <SendIcon sx={{ color: "#009e66", fontSize: "35px" }} />
                  </span>
                  <div className="border-l pl-8 pt-4 max-sm:break-all">
                    <h6>Email Me</h6>
                    <span className="text-[#9f9f9f] ">
                      <a href="mailto:tanvir12islam34@gmail.com">
                        tanvir12islam34@gmail.com
                      </a>
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
