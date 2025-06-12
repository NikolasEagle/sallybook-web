import Form from "next/form";

interface Props {
  kind: string;
}

export default function FormRegister({ kind }: Props) {
  return (
    <Form
      action={`http://${process.env.NEXT_PUBLIC_HOST_SERVER_AUTH}:${process.env.NEXT_PUBLIC_PORT_SERVER_AUTH}/register`}
    ></Form>
  );
}
