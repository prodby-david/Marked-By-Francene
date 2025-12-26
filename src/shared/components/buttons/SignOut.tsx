'use client'

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

export default function SignOutButton () {
    
  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/signin' });
  };

  return (
    <Button variant={'destructive'} onClick={handleSignOut}>Sign Out</Button>
  );
}