import { Auth } from "@repo/ui/auth";

export const Signup = () => {
  return (
    <div className="h-screen flex justify-center flex-col ">
      <div className="flex justify-center 	">
        <Auth type="signup" />
      </div>
    </div>
  );
};

export default Signup;
