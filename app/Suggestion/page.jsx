"use client";
import { Background } from "../components/Background";
import Minibar from "../components/Minibar";
import Navbar from "../components/Navbar";
import SuggestedUser from "../components/SuggestedUser ";

export default function Suggestion() {
  return (
    <div>
      <Minibar />
      <Background />
      <Navbar />
      <SuggestedUser />
    </div>
  );
}
