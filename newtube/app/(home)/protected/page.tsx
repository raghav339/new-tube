import {auth} from "@clerk/nextjs/server";

export default async function ProtectedPage()
{
  await auth.protect();
  return <div>Protected Page</div>;
}