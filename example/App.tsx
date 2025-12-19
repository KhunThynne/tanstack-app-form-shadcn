import { useAppForm } from "../dist";

export default function App() {
  const form = useAppForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  return (
    <>
      <form>test</form>
    </>
  );
}
