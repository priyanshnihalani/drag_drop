import React, { useState } from "react";

const App = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleDrop = (event) => {
    event.preventDefault();
    setError("");

    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        setImage(reader.result);
      };

    } else {
      setError("Please drop a valid image file.");
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{position: "absolute", top:"50%", left: "50%", transform: "translate(-50%, -50%)"}}>
      <div
        style={{
          border: "2px dashed #ccc",
          borderRadius: "10px",
          width: "300px",
          height: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "20px auto",
        }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {image ? (
          <img
            src={image}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        ) : (
          <>
            {error ? <></> : <p>Drag and drop an image here</p>}
            {error ? <p style={{ color: "red" }}>{error}</p> : <></>}
          </>

        )}
      </div>
    </div>
  );
};

export default App;
