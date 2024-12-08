import { Form } from "@remix-run/react";
import { EmailInput } from './EmailInput';
import { NameInput } from './NameInput';
import { SubButton } from './SubButton';

export function LoginForm({}) {
  return <div className=" h-[100vh] w-full flex items-center justify-center ">
      <div>
        <Form>
          <NameInput />
          <EmailInput />
          <SubButton />
        </Form>
      </div>
    </div>;
}
  