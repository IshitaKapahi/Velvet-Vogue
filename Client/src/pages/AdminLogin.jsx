import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const AdminLogin = () => {
  return (
    <div className=" w-[68vw] lg:w-[25vw] mx-auto my-32 grid gap-3">
      <h1 className="text-2xl font-bold text-center">
        Login Into Your Account
      </h1>
      <form action="" className=" grid gap-3">
        <Input placeholder="Username Here..." type="text" name="username" />
        <Input placeholder="Password Here..." type="password" name="password" />

        <Button>Login</Button>
      </form>
    </div>
  );
};

export default AdminLogin;
