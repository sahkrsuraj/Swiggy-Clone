import { useContext } from "react";
import { DataContext } from "./DataContextProvider";
import { Field, Formik, Form } from "formik";
import * as yup from 'yup';

import { LOGIN_IMG } from "../utils/constants";
import { IoClose } from "react-icons/io5";

const LoginPage = ({onClose})=>{

  const {updateName, updateLoginStatus} = useContext(DataContext);

  const initialValues = {
    phoneNumber: "",
    name: "",
    email: "",
  };

  const handleClose=()=>{
    onClose();
  }

  const validationSchema = yup.object({
    phoneNumber: yup.string().required("Enter your phone number")
    .matches(/^\d{10}$/, 'Invalid phone number format'),
    name: yup.string().required("Enter your name"),
    email: yup.string().required("Invalid email address")
  });

  const handleFocus = (e)=>{
    e.target.nextElementSibling.classList.add('labelOnFocus');
  }

  const handleBlur = (e)=>{
    if(e.target.value==='')
      e.target.nextElementSibling.classList.remove('labelOnFocus');
  }

  const onLogin = (values, { setSubmitting }) => {
    updateName(values.name);
    updateLoginStatus("Logout");
    onClose(); 
    setSubmitting(false);
  }

  return(
    <div className="bg-[#282C3F81] flex flex-row-reverse z-[10000] fixed top-0 left-0 bottom-0 right-0 overflow-hidden">
      <div className="bg-inherit"></div>
      <div className="bg-white w-[35%] gap-5 pl-10 pr-40 pt-8">
        <div className="flex flex-col gap-4">
          <span className="cursor-pointer" onClick={handleClose}><IoClose strokeWidth={1} size={26}/></span>
          <div className="flex justify-between mb-16">
            <div className="text-3xl font-medium font-[BasicGrotesque]">Login</div>
            <div className="w-[100px]">
              <img className="w-full h-full" src={LOGIN_IMG} alt="image"/>
            </div>
          </div>
        </div>
        <Formik initialValues={initialValues}  validationSchema={validationSchema} 
          onSubmit={onLogin}
        >
          {({ values, touched, errors })=>(
            <Form className="flex flex-col">
              <div className="block relative border border-[#d4d5d9]">
                <Field className="px-5 pt-6 h-[70px] w-full outline-none" 
                  type="tel" 
                  name="phoneNumber" 
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <label className={`absolute left-0 bottom-6 pl-5 text-lg text-[#93959f] w-full transition duration-200 ease-in ${errors.phoneNumber && touched.phoneNumber ? 'validationError' : ''}${values.name !== '' ? 'labelOnFocus' : ''}`}
                  htmlFor="mobile"
                >
                  {errors.phoneNumber  && touched.phoneNumber ? errors.phoneNumber : "Phone Number"}
                </label>
              </div>
              <div className="block relative border border-[#d4d5d9]">
                <Field className="px-5 pt-6 h-[70px] w-full outline-none" 
                  type="text" 
                  name="name"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <label className={`absolute left-0 bottom-6 pl-5 text-lg text-[#93959f] w-full transition duration-200 ease-in ${errors.name && touched.name ? 'validationError' : ''} ${values.name !== '' ? 'labelOnFocus' : ''}`}
                  htmlFor="name"
                >
                  {errors.name  && touched.name ? errors.name : "Name"}
                </label>
              </div>
              <div className="block relative border border-[#d4d5d9]">
                <Field className="px-5 pt-6 h-[70px] w-full outline-none" 
                  type="email" 
                  name="email"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <label className={`absolute left-0 bottom-6 pl-5 text-lg text-[#93959f] w-full transition duration-200 ease-in ${errors.email && touched.email ? 'validationError' : ''} ${values.name !== '' ? 'labelOnFocus' : ''}`}  
                  htmlFor="email"
                >
                  {errors.email  && touched.email ? errors.email : "Email"}
                </label>
              </div>
              <button className="bg-[#fc8019] text-white h-[50px] w-full px-8 mt-6" type="submit">CONTINUE</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
export default LoginPage;