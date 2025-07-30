"use client";
import { GetAPI } from "@/api/api";
import { log } from "console";
import { useEffect, useState } from "react";

export default function AdminPage() {
const [contacts, setContacts] = useState<any[]>([{}]);
  const UpdateContacts = async () => {
    const response = await GetAPI('/contacts');
    console.log(response);
    setContacts(response);
  }
  useEffect(() => {
    UpdateContacts();
  }, []);
  return (
    <>
      <h1>Contact Submissions</h1>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Reason</th>
            <th style={thStyle}>Message</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(contacts) && contacts.map((item, index) => (
            <tr key={index}>
              <td style={tdStyle}>{item.name}</td>
              <td style={tdStyle}>{item.email}</td>
              <td style={tdStyle}>{item.reason}</td>
              <td style={tdStyle}>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={UpdateContacts} style={{ marginTop: '16px' }}>Update</button>
    </>
  );
}

const thStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  backgroundColor: '#f2f2f2',
  textAlign: 'left' as const,
};

const tdStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};