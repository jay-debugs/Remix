import { LoginForm } from '../components/LoginForm';

import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


export const action = async ({request}: {request: Request}) => {
  const formData = await request.formData();
  // never do this will result in an error -> """" console.log("Form Data", formData); """" <- never do this
  const name = formData.get("name");
  const email = formData.get("email");
  
}


export default function Index() {
  return (
    <>
      <LoginForm />
    </>
  );
}






