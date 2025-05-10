import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const defaultValues = {
  name: "",
  tel: "",
};

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "It's too short")
    .max(30, "It's too long!")
    .required("Required"),
  tel: Yup.string()
    .min(3, "It's too short")
    .max(30, "It's too long!")
    .required("Required"),
});

export default function ContactForm({ contactAdd }) {
  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={(values, actions) => {
        contactAdd(values);
        actions.resetForm();
      }}
      validationSchema={ContactsSchema}
    >
      <Form className={css.form}>
        <Field
          className={css.name}
          type="text"
          name="name"
          placeholder="name"
        />
        <ErrorMessage className={css.error} name="name" component="span" />
        <Field
          className={css.tel}
          type="tel"
          name="tel"
          placeholder="phone number"
        />
        <ErrorMessage className={css.error} name="tel" component="span" />

        <button type="submit" className={css.addBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
