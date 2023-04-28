import { Field, Form, Formik } from 'formik';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <button type="submit" disabled={isSubmitting}>
            <span>Search</span>
          </button>
          <Field
            name="name"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      )}
    </Formik>
  );
};
