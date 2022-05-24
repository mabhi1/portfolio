import React, { useState, useRef } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BiSend } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { GoLocation, GoAlert } from "react-icons/go";
import { AiOutlineCheck } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const classes = {
    item: "flex mb-10",
    icons: "h-5 text-xl m-2 mr-5 dark:text-slate-50",
    heading: "dark:text-slate-50",
    description: "text-slate-500",
    input: " bg-teal-100 m-1 p-4 rounded resize-none text-slate-600 hover:shadow transition duration-200 dark:hover:shadow dark:hover:shadow-slate-50",
    submit: "bg-teal-700 p-2 px-3 cursor-pointer rounded text-slate-50 m-1 flex hover:shadow-teal-500/50 hover:shadow-md transition-all duration-200",
    alert: "hidden flex rounded shadow-lg p-3 px-5 text-slate-50 fixed top-[85px] right-2 animate-[alert_500ms_ease-in-out]",
};
const Contact = () => {
    const [error, setError] = useState(false);
    const [alert, setAlert] = useState(null);
    const form = useRef();
    let name;
    let message;
    let email;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.value === "" || email.value === "" || message.value === "") {
            setAlert("All fields are required");
            setError(true);
            let alert = document.getElementById("alert");
            alert.classList.remove("hidden");
            alert.classList.add("bg-red-500");
            alert.classList.add("shadow-red-500/50");
            setTimeout(() => {
                setAlert(null);
                alert.classList.add("hidden");
                alert.classList.remove("bg-red-500");
                alert.classList.remove("shadow-red-500/50");
            }, 1500);
        } else {
            emailjs.sendForm("service_5uh2m5o", "template_3xeptuc", form.current, "IvWTeDQIgeJ6LRxbB").then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
            setAlert("Message sent");
            setError(false);
            let alert = document.getElementById("alert");
            alert.classList.remove("hidden");
            alert.classList.add("bg-emerald-500");
            alert.classList.add("shadow-emerald-500/50");
            name.value = "";
            email.value = "";
            message.value = "";
            setTimeout(() => {
                setAlert(null);
                alert.classList.add("hidden");
                alert.classList.remove("bg-emerald-500");
                alert.classList.remove("shadow-emerald-500/50");
            }, 1500);
        }
    };
    return (
        <div id="contact" className="min-h-screen md:min-h-[85vh] lg:min-h-screen">
            <div className="pt-24 md:pt-40 lg:pt-28 text-center mx-5 md:mx-20 lg:mx-40">
                <div className="text-2xl mb-8 md:mb-16">Contact Me</div>
            </div>
            <div className="font-['Helvetica'] m-auto w-3/4 md:p-10 text-slate-700 flex flex-col md:items-center lg:flex-row">
                <div>
                    <div className={classes.item}>
                        <BiPhoneCall className={classes.icons} />
                        <div>
                            <h1 className={classes.heading}>Call Me</h1>
                            <h2 className={classes.description}>+1-201-238-8847</h2>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <MdOutlineMail className={classes.icons} />
                        <div>
                            <h1 className={classes.heading}>Email</h1>
                            <h2 className={classes.description}>mishraabhishek226@gmail.com</h2>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <GoLocation className={classes.icons} />
                        <div>
                            <h1 className={classes.heading}>Location</h1>
                            <h2 className={classes.description}>Jersey City, New Jersey - 07307</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <form ref={form} className="flex flex-wrap lg:ml-20">
                        <input
                            type="text"
                            ref={(node) => (name = node)}
                            name="name"
                            placeholder="Name"
                            required
                            className={"w-full md:w-[45%] lg:w-[40%]" + classes.input}
                        />
                        <input
                            type="email"
                            ref={(node) => (email = node)}
                            name="email"
                            placeholder="Email"
                            required
                            className={"w-full md:w-[52%] lg:w-[50%]" + classes.input}
                        />
                        <textarea
                            type="text"
                            ref={(node) => (message = node)}
                            name="message"
                            placeholder="Message"
                            required
                            className={"w-full lg:w-[91.5%] h-[130px]" + classes.input}
                        />
                        <button type="submit" className={"group " + classes.submit} onClick={handleSubmit}>
                            Send Message <BiSend className="m-1 group-hover:translate-x-1 transition-all duration-200" />
                        </button>
                        <div id="alert" className={classes.alert}>
                            {alert ? (
                                <>
                                    {error ? <GoAlert className="m-1 mr-2" /> : <AiOutlineCheck className="m-1 mr-2" />}
                                    {alert}
                                </>
                            ) : null}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
