import { Form } from "@remix-run/react";
import { SubButton } from "./SubButton";
import { Input } from "./Input";

export function LoginForm({}) {
  return (
    <div className=" h-[100vh] w-full flex items-center justify-center ">
      <div>
        <Form method="post">
          <Input htmlfor="name"> Name </Input>
          <Input htmlfor="email"> Email </Input>
          <Input htmlfor="password" className="mb-32"> Password </Input>
          <SubButton />
        </Form>
      </div>
    </div>
  );
}
