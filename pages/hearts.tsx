import type { NextPage } from "next";
import { useSession, signIn } from "next-auth/react";

const Hearts: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return <div>welcome</div>;
  } else {
    return (
      <div>
        You need to be signed in to see hearts
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
};
export default Hearts;
