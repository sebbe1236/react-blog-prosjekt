import React, { useEffect, useState } from "react";
import Heading from "../../layout/Header";
import { useForm } from "react-hook-form";
function Contact() {
  const [formSuccessMessage, SetSuccessMessage] = useState(false);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
    SetSuccessMessage(true);
  };

  return (
    <>
      <Heading heading="Fill in the form below to contact me" />
      <div className="text-center p-3 m-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input {...register("firstName", { required: true, minLength: 5 })} placeholder="Enter your first name" />
            {errors.firstName && <span>Must be over 5 characters</span>}
          </div>
          <div>
            <input
              {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i, minLength: 5 })}
              placeholder="Enter your last name"
            />
            {errors.lastName && <span>Must be over 5 characters</span>}
          </div>
          <div>
            <input
              {...register("subject", { required: true, pattern: /^[A-Za-z]+$/i, minLength: 7 })}
              placeholder="Enter subject"
            />
            {errors.subject && <span>Must be over 5 characters</span>}
          </div>
          <div>
            <textarea {...register("description", { required: true, minLength: 20 })} />
            {errors.description && <span>description must be over 20 letters long.</span>}
          </div>
          <input type="submit" />
        </form>
      </div>
      {formSuccessMessage && <span>Form successfully sent</span>}
    </>
  );
}

export default Contact;
