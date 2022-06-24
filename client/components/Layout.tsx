import React from "react";
import Mode from "./Mode";

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <div className="bg-gradient-to-br from-pink via-soft-pink to-pinky-gray h-screen w-screen flex justify-center items-center">
      {children}
    </div>
  );
}
