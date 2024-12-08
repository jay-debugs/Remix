import { Form } from "@remix-run/react";
import { EmailInput } from "./EmailInput";
import { NameInput } from "./NameInput";
import { SubButton } from "./SubButton";
import { PasswordInput } from "./PasswordInput";

export function LoginForm({}) {
  return (
    <div className=" h-[100vh] w-full flex items-center justify-center ">
      <div>
        <Form method="post">
          <NameInput />
          <EmailInput />
          <PasswordInput />
          <SubButton />
        </Form>
      </div>
    </div>
  );
}
