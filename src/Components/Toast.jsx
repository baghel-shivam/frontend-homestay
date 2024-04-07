import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Toast({ msg }) {
  const notify = () => toast(msg);
  
  useEffect(() => {
    notify();
  }, []);

  return (
    <div>
      <ToastContainer />
    </div>
  );
}
