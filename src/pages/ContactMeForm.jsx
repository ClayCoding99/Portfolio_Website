import { useRef, useState } from 'react';
import { IoArrowDown, IoSend } from 'react-icons/io5';
import emailjs from 'emailjs-com'; // Import emailjs directly from its package
import Modal from '../components/Modal';
import {AnimatePresence, motion} from "framer-motion";
import { IoMdArrowDropright } from 'react-icons/io';


const messageVariants = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  pop: {
    opacity: [1, 0.7, 1],
    transition: { duration: 0.3, repeat: Infinity, repeatType: 'reverse' }
  },
  exit: {
    opacity: 0,
  }
};

export default function ContactMeForm() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const maxMessageLength = 300;

  const [modalContent, setModalContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [charLimitMessage, setCharLimitMessage] = useState(null);
  const [animationState, setAnimationState] = useState("initial");

  const errorMessageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formValues.name.trim() || !formValues.email.trim() || !formValues.message.trim()) {
      setModalContent({
        title: 'Failed to send',
        icon: 'error',
        content: 'Please ensure no values are blank when submitting.',
        buttonText: 'Ok',
      });
      return;
    }

    // Sending email using emailjs
    setIsLoading(true);
    emailjs.sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_KEY, // Replace with your service key
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_KEY, // Replace with your template key
        e.target,
        import.meta.env.VITE_EMAIL_JS_USER_KEY // Replace with your user key
      )
      .then((response) => {
        setIsLoading(false);
        setModalContent({
          title: 'Success',
          icon: 'success',
          content:
            'The message has been successfully sent to my inbox. Thank you for your time; I will get back to you as soon as I can.',
          buttonText: 'Ok',
        });
        setFormValues({ name: '', email: '', message: '' }); // Clear form after successful submission
      })
      .catch((error) => {
        setIsLoading(false);
        setModalContent({
          title: 'Failed to send',
          icon: 'error',
          content: `Failed to send an email: ${error}`,
          buttonText: 'Ok',
        });
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log("test 0");

    if (name === 'message') {
      if (value.length === maxMessageLength) {
        console.log("test");
        setCharLimitMessage('You have reached the maximum character limit.');
        setAnimationState("show");
      } else if (value.length > maxMessageLength) {
        setCharLimitMessage('You have reached the maximum character limit.');
        setAnimationState("pop");
        return;
      } else {
        setCharLimitMessage(null);
        setAnimationState("exit");
      }
    }

    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="px-4 relative bg-gradient-to-b from-dark to-background border-t-4 border-b-4 border-primaryLight">
      <form
        className="my-16 max-w-[1200px] mx-auto border-4 border-secondaryLight rounded-lg bg-background z-50 grid lg:grid-cols-3 grid-cols-1 shadow-[4px_4px_8px] shadow-light"
        onSubmit={handleSubmit}
      >
        <div className="bg-secondaryLight z-50 grid place-items-center lg:py-0 py-2">
          <div className="w-1/2 mx-auto text-center">
            <h2 className="text-dark">
              <i>Send me an email!</i>
            </h2>
            <IoMdArrowDropright className="lg:h-40 rotate-90 lg:rotate-0 h-20 flex justify-center w-full text-dark" />
          </div>
        </div>
        <div className="col-span-2 w-full px-8 flex flex-col gap-4 py-4 z-50">
          <label htmlFor="name">Name:</label>
          <input
            className="placeholder:text-black"
            onChange={handleChange}
            name="name"
            value={formValues.name}
            placeholder="Enter your name:"
            id="name"
            type="text"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            className="placeholder:text-black"
            onChange={handleChange}
            name="email"
            value={formValues.email}
            placeholder="Enter your email: "
            id="email"
            type="email"
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            className="placeholder:text-black"
            onChange={handleChange}
            name="message"
            value={formValues.message}
            placeholder={`Comments (max ${maxMessageLength} characters):`}
            required
          />

          <AnimatePresence>
            {charLimitMessage && (
              <motion.p
                ref={errorMessageRef}
                className="text-red-500 text-lg"
                variants={messageVariants}
                initial="initial"
                animate={animationState}
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                {charLimitMessage}
              </motion.p>
            )}
          </AnimatePresence>

          <button type="submit" className="btn btn-secondary md:w-1/3 w-full text-2xl">
            Submit
          </button>
        </div>
      </form>

      <Modal
        isOpen={modalContent !== null}
        close={() => setModalContent(null)}
        title={modalContent?.title}
        content={modalContent?.content}
        icon={modalContent?.icon}
        buttonText={modalContent?.buttonText}
      />

      <Modal isOpen={isLoading} close={() => setIsLoading(false)} title="Sending email..." icon="loading" />
    </div>
  );
}