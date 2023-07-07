import React, { useState } from "react";
import "./write.css";

const Write = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
    };

    const handleVideoChange = (e) => {
        const selectedVideo = e.target.files[0];
        setVideo(selectedVideo);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform the necessary actions with the uploaded data
        if (title && content) {
            console.log("Title:", title);
            console.log("Content:", content);
        }
        if (image) {
            console.log("Uploaded image:", image);
            // Handle the uploaded image
        }
        if (video) {
            console.log("Uploaded video:", video);
            // Handle the uploaded video
        }

        // Clear form fields and state after submission
        setTitle("");
        setContent("");
        setImage(null);
        setVideo(null);
    };

    return (
        <div className="write">
            <h2 className="writeTitle">Create a New Blog</h2>
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="imageInput" className="writeLabel">
                        <i className="fas fa-image writeIcon"></i>
                        Upload Image
                    </label>
                    <input
                        type="file"
                        id="imageInput"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                    />
                </div>

                <div className="writeFormGroup">
                    <label htmlFor="videoInput" className="writeLabel">
                        <i className="fas fa-video writeIcon"></i>
                        Upload Video
                    </label>
                    <input
                        type="file"
                        id="videoInput"
                        style={{ display: "none" }}
                        onChange={handleVideoChange}
                    />
                </div>

                <input
                    type="text"
                    placeholder="Title"
                    className="writeInput writeTitleInput"
                    autoFocus={true}
                    value={title}
                    onChange={handleTitleChange}
                />

                <textarea
                    placeholder="Tell your story..."
                    type="text"
                    className="writeInput writeContentInput"
                    value={content}
                    onChange={handleContentChange}
                ></textarea>

                <button type="submit" className="writeSubmit">
                    Publish
                </button>
            </form>
        </div>
    );
};

export default Write;
