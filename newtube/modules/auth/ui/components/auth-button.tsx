"use client";

import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";

export default function AuthButton() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null; // Or a loading spinner / skeleton
  }

  return (
    <>
      {!isSignedIn ? (
        <SignInButton mode="modal">
          <Button variant="outline" className="text-blue-600 hover:text-blue-500 text-sm font-medium px-4 py-2 rounded-full shadow-none border-blue-500/20">
            <UserCircleIcon className="w-4 h-4 mr-2" />
            Sign In
          </Button>
        </SignInButton>
      ) : (
        <UserButton />
      )}
    </>
  );

}