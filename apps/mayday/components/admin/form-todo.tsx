import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

const Schema = Yup.object().shape({
  todo_name: Yup.string().required(),
  type: Yup.number().required(),
  description: Yup.string(),
  created_by: Yup.string().required(),
});
const FormTodo = () => {
  const { t: translation } = useTranslation();
  const formik = useFormik({
    initialValues: {
      todo_name: '',
      type: '',
      description: '',
      created_by: '',
    },
    validationSchema: Schema,
    onSubmit: async ({ todo_name, type, description, created_by }) => {
      try {
        console.log(todo_name);
      } catch (err: any) {
        console.error(err);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-1"></div>
      <div className="mt-3 space-y-3">
        <p className="text-sm">{translation('welcome')}</p>
      </div>
    </form>
  );
};

export default FormTodo;
