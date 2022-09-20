import { useSession, signIn, signOut } from "next-auth/react";


const User = () => {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <div className="mt-10 mb-5 flex flex-row items-center">
          <p>Hello {session.user?.email}</p>
          <button
            className="bg-stone  ml-5 text-clay font-bold py-2 px-4 rounded"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      ) : (
        <div className="mt-10 mb-5">
          <p>Not signed in</p>
          <button
            className="bg-stone text-clay font-bold py-2 px-4 rounded"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        </div>
      )}
    </>
  );
};

export default User;
