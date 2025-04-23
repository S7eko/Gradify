import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import classes from "./blogDetails.module.css";

const BlogDetails = () => {
  // State management
  const [state, setState] = useState({
    blog: null,
    isLoading: true,
    error: null,
  });

  const navigate = useNavigate();
  const { id } = useParams();

  // API endpoint
  const API_ENDPOINT = `https://skillbridge.runasp.net/api/Blogs/${id}`;

  // Helper functions
  const updateState = (newState) => {
    setState(prev => ({ ...prev, ...newState }));
  };

  // Data fetching function
  const fetchBlogDetails = async () => {
    try {
      updateState({ isLoading: true, error: null });
      const response = await fetch(API_ENDPOINT);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      updateState({ blog: data, isLoading: false });
    } catch (error) {
      console.error("Error fetching blog details:", error);
      updateState({ error: error.message, isLoading: false });
      Swal.fire({
        title: "Error!",
        text: error.message || "Failed to load blog details",
        icon: "error",
        confirmButtonText: "OK"
      });
    }
  };

  // Effects
  useEffect(() => {
    if (!id) {
      updateState({ error: "No blog ID provided", isLoading: false });
      return;
    }
    fetchBlogDetails();
  }, [id]);

  // Render loading state
  if (state.isLoading) {
    return (
      <div className={classes.loadingContainer}>
        <div className={classes.loader}>Loading...</div>
      </div>
    );
  }

  // Render error state
  if (state.error) {
    return (
      <div className={classes.errorContainer}>
        <p>Error: {state.error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  // Render blog details
  return (
    <div className={classes.blogDetails}>
      {state.blog ? (
        <>
          {/* Blog details section */}
          <div className={classes.blogImage}>
            <img
              src={state.blog.image}
              alt={state.blog.title}
              onError={(e) => {
                e.target.src = "/default-blog-image.jpg";
              }}
            />
          </div>

          <div className={classes.blogInfo}>
            <h1><strong>Title:</strong> {state.blog.title}</h1>
            <h2 className={classes.category}>{state.blog.category}</h2>
            <p><strong>Author:</strong> {state.blog.author}</p>
            <p><strong>Published on:</strong> {new Date(state.blog.publishDate).toLocaleDateString()}</p>
            <p><strong>Read Time:</strong> {state.blog.readTime} minutes</p>

            <div className={classes.excerpt}>
              <strong>Excerpt:</strong>
              <p>{state.blog.excerpt}</p>
            </div>

            <div className={classes.content}>
              <strong>Content:</strong>
              {state.blog.contentBlocks?.map((block, index) => (
                <div key={index} className={classes.contentBlock}>
                  <p>{block.text}</p>
                  {block.image && (
                    <img
                      src={block.image}
                      alt={`Content image ${index}`}
                      onError={(e) => {
                        e.target.src = "/default-content-image.jpg";
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className={classes.actionButtons}>
            <button className={classes.backButton} onClick={() => navigate("/ShowBlog")}>
              Back to Blogs
            </button>
          </div>
        </>
      ) : (
        <p className={classes.notFound}>Blog not found</p>
      )}
    </div>
  );
};

export default BlogDetails;
