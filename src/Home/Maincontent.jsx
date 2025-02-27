import React from "react";
import { RxAvatar } from "react-icons/rx";
import { GrFavorite } from "react-icons/gr";
import { FaFacebookMessenger } from "react-icons/fa6";
import { VscSave } from "react-icons/vsc";
import { HiDotsHorizontal } from "react-icons/hi";

const imagesLinks = [
  "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
  "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
  "https://m.media-amazon.com/images/I/710GjkD28nL._AC_UF1000,1000_QL80_.jpg",
  "https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg",
  "https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw=",
  "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
  "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
  "https://m.media-amazon.com/images/I/710GjkD28nL._AC_UF1000,1000_QL80_.jpg",
  "https://img.freepik.com/premium-photo/wide-angle-shot-single-tree-growing-clouded-sky-sunset-surrounded-by-grass_181624-22807.jpg",
  "https://media.istockphoto.com/id/1550071750/photo/green-tea-tree-leaves-camellia-sinensis-in-organic-farm-sunlight-fresh-young-tender-bud.jpg?s=612x612&w=0&k=20&c=RC_xD5DY5qPH_hpqeOY1g1pM6bJgGJSssWYjVIvvoLw="

];

const MainContent = () => {
  return (
    <div className="container">
      <div className="content-center">
        {imagesLinks.map((image, index) => (
          <div key={index} className="mb-4">
            <div className="card mt-3">
              <div className="card-header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <RxAvatar size={20} className="me-2" />
                  <span>Name {index + 1}</span>
                </div>
                <HiDotsHorizontal size={20} />
              </div>
              <img src={image} className="card-img-top img-fluid" alt={`Image ${index + 1}`} />
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <GrFavorite size={20} className="me-3" />
                  <FaFacebookMessenger size={20} />
                </div>
                <VscSave size={20} />
              </div>
              {/* Comment Section */}
              <div className="card-footer">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a comment..."
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
