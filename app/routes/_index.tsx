import { LoginForm } from "../components/LoginForm";
import { v4 as uuid } from "uuid";
import type { MetaFunction } from "@remix-run/node";
import { addUser, userFinder, user} from "../utils/User";
import { useActionData, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { ActionData } from "../utils/types";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  // never do this will result in an error -> """" console.log("Form Data", formData); """" <- never do this
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!name || !email || !password) {
    return Response.json({ error: "All fields are required" }, { status: 400 });
  }

  // First check if user exists
  const existingUser = userFinder(email as string, password as string);
  
  if (existingUser) {
    return Response.json({ user: existingUser }, { status: 200 });
  }

  // If user doesn't exist, create new user
  const newUser = {
    id: uuid() , // Generate random ID starting from 6
    name: name as string,
    email: email as string,
    password: password as string,
  };

  addUser(newUser , existingUser);
  return Response.json({ user: newUser }, { status: 200 });
};

// const ActionData  = useActionData<ActionData>()

export default function Index() {
  const ActionData = useActionData<ActionData>()
  const Navigate = useNavigate()

  useEffect(() => {
    if (ActionData?.user) {
      localStorage.setItem("user", JSON.stringify(ActionData.user))
      Navigate(`/profile/${ActionData?.user?.id}`)
    }
  },[ActionData , Navigate])

  return (
    <>
      <LoginForm />
    </>
  );
}
