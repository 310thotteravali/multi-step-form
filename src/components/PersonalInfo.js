import React from "react";
function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="personal-up-container">
      <input
        type="text"
        placeholder="First Name..."
        value={formData.firstName}
        onChange={(event) => {
          setFormData({ ...formData, firstName: event.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Last Name..."
        value={formData.lastName}
        onChange={(event) =>
          setFormData({ ...formData, lastName: event.target.value })
        }
      />
      <input type="text" placeholder="Username..." />
    </div>
  );
}
export default PersonalInfo;
