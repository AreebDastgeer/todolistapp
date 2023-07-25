import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

const Attachment = () => {
  const [attachments, setAttachments] = useState([]);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleFiles = (files) => {
    const fileArray = Array.from(files);
    setAttachments([...attachments, ...fileArray]);
  };

  const handleFileInputChange = (event) => {
    handleFiles(event.target.files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    handleFiles(event.dataTransfer.files);
  };

  const removeAttachment = (index) => {
    const updatedAttachments = [...attachments];
    updatedAttachments.splice(index, 1);
    setAttachments(updatedAttachments);
  };

  const fileInputRef = React.createRef();

  return (
    <div className='flex flex-col gap-4 text-desert text-md font-semibold items-center'>
      <div
        className="relative border-2 border-dashed rounded-lg border-gray-300 p-4 w-44 text-center cursor-pointer"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
          accept=".png, .svg .jpg" 
        />
        <IoIosAddCircleOutline
          size={20}
          onClick={handleIconClick}
          style={{ cursor: 'pointer' }}
        />
        <p className='text-sm'>Drag and drop or click to add attachments</p>
      </div>
      {attachments.length > 0 && (
        <div className="flex flex-col gap-2">
          <h3>Attachments:</h3>
          {attachments.map((file, index) => (
            <div key={index} className="flex items-center gap-2">
              <span>{file.name}</span>
              <button
                className="bg-desert text-cream px-2 py-1 rounded hover:bg-cream hover:text-desert"
                onClick={() => removeAttachment(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export {Attachment};
