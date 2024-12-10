import { redirect } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { findUser, user } from "../utils/User";

export const loader = async ({ params }: { params: { id: string } }) => {
  const user = findUser(Number(params.id));
  if (!user) {
    return redirect("/");
  }

  return new Response(JSON.stringify(user), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const profile = () => {
  const user = useLoaderData<user>();
  return (
    <>
      <div>hello {user.name}</div>
    </>
  );
};

export default profile;
