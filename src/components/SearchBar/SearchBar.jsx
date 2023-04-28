import { Formik } from 'formik';
import { Button, Field, Form } from './SearchBar.styled';

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
          <Button type="submit" disabled={isSubmitting}>
            <span>Search</span>
          </Button>
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
