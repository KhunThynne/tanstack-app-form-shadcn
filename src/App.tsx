import { createAppForm } from "./hooks";

const {useAppForm} = createAppForm();
export default function App() {
  const form = useAppForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit({ value }) {
      alert(JSON.stringify(value));
    },
  });
  const { handleSubmit } = form;
  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await handleSubmit();
        }}
      >
        <form.AppField name="name">
          {(field) => {
            return (
              <field.Input
                label="Config"
                description="Can set config json data"
              />
            );
          }}
        </form.AppField>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
