import React, { useEffect } from "react";

function Toast({ toast, setToast }) {
  useEffect(() => {
    if (toast.show) {
      const timeout = setTimeout(() => setToast({ ...toast, show: false }), 2000);
      return () => clearTimeout(timeout);
    }
  }, [toast, setToast]);

  if (!toast.show) return null;
  return (
    <div className={`toast toast-${toast.type}`}>
      {toast.message}
    </div>
  );
}

export default Toast;
