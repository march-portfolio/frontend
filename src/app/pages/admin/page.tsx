"use client";
import { PostAPI } from "@/api/api";
import { useState } from "react";

export default function ContactPage() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    reason: "",
    message: ""
  });
  const UpdateContacts = async () => {
    const response = await PostAPI('contacts', contact);
    setContact(response);}
  return (
    <>
    <div>{String(contact)}</div>
    <button onClick={() => UpdateContacts()}>update</button>  
    </>
  )
}