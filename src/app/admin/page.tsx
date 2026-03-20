"use client";
import { GetAPI } from "@/api/api";
import { useEffect, useState } from "react";
import "./admin.scss";

export default function AdminPage() {
  const [contacts, setContacts] = useState<any[]>([]);
  const UpdateContacts = async () => {
    const response = await GetAPI("/contacts");
    setContacts(response);
  };
  useEffect(() => {
    UpdateContacts();
  }, []);
  return (
    <>
      <h1>Contact Submissions</h1>
      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Reason</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(contacts) &&
            contacts.map((item, index) => (
              <tr key={index}>
                <td>{item.data?.name}</td>
                <td>{item.data?.email}</td>
                <td>{item.data?.reason}</td>
                <td>{item.data?.message}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <button onClick={UpdateContacts} className="contact-button">
        Update
      </button>
    </>
  );
}
