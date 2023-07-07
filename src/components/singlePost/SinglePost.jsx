import React from "react";

const SinglePost = () => {
    return (
        <div className="container py-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="embed-responsive embed-responsive-16by9 mb-4">
                        <iframe
                            className="embed-responsive-item"
                            src="https://www.youtube.com/embed/CpVy4Iy7UQw"
                            title="Video"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="col-md-6">
                    <h1 className=" mb-4">
                        Lorem ipsum, dolor sit amet consectetur.
                    </h1>
                    <div className="d-flex justify-content-between mb-3">
                        <span className="text-muted">
                            Author: <b>Akshay</b>
                        </span>
                        <span className="text-muted">1 hour ago</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Cumque, aut. Laudantium officia consequatur commodi.
                        Nisi, quam adipisci! Reiciendis nobis voluptas
                        asperiores, recusandae inventore dicta sed, rerum illum
                        laborum assumenda repellendus. Lorem ipsum dolor sit,
                        amet consectetur adipisicing elit. Molestias veniam qui
                        labore ipsam expedita repudiandae quasi quod rem maiores
                        blanditiis eos eligendi dolor, ipsum, at impedit,
                        perspiciatis unde optio distinctio. Lorem ipsum, dolor
                        sit amet consectetur adipisicing elit. Corrupti
                        veritatis repellat, excepturi in est exercitationem
                        itaque voluptatem doloremque quaerat, quis, error
                        aspernatur assumenda molestiae reprehenderit quo illum
                        rerum voluptatum eligendi?
                    </p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <h3>Comments</h3>
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label
                                        htmlFor="comment"
                                        className="form-label"
                                    >
                                        Leave a comment
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="comment"
                                        rows="3"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-body">
                            <h5 className="card-title">Rajan TV</h5>
                            <p className="card-text">This is a comment.</p>
                        </div>
                    </div>
                    <div className="card mt-3">
                        <div className="card-body">
                            <h5 className="card-title">Vishnu C</h5>
                            <p className="card-text">
                                This is another comment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;
