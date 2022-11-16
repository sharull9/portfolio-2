import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";


export default function ContactMe({}) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {window.location.href = `mailto:arafatulla121@gmail.com?subject=${formData.subject}&body=Hi, I'm ${formData.name}. ${formData.message} (${formData.email})`};
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen flex relative overflow-hidden flex-col text-center md:text-left max-w-full px-10 justify-center mx-auto items-center z-0"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact me
      </h3>
      <div className="pb-20">
        <h4 className="text-2xl text-center pb-3">
          Need Help <span className="font-bold underline">Lets Talk</span>
        </h4>
        <div className="space-y-5 text-center">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="animate-pulse text-[4567de] h-7 w-7" />
            <p className="text-2xl cursor-pointer">+91 96255 75079</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="animate-pulse text-[4567de] h-7 w-7" />
            <p className="text-2xl cursor-pointer">arafatulla121@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="animate-pulse text-[4567de] h-7 w-7" />
            <p className="text-2xl">k-431</p>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto z-10">
        <div className="flex space-x-2">
          <input {...register('name')} placeholder="Name" className="formInput" type="text" />
          <input {...register('email')}  placeholder="E-mail" className="formInput" type="email" />
        </div>
        <input {...register('subject')}  placeholder="Subject" className="formInput" type="text" />
        <textarea {...register('message')}  placeholder="Message" className="formInput" />
        <button
          type="submit"
          className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
        >
          Submit
        </button>
      </form>
      <div className="w-full absolute top-[30%] bg-slate-400/40 left-0 h-[500px] -skew-y-[-21deg] filter blur-sm pointer-events-none"></div>
    </motion.div>
  );
}
