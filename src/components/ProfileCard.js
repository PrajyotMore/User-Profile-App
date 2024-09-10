import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileModal from "./ProfileModal";
const ProfileCard = () => {
  const ProfileStaticInfo = {
    comments: [
      {
        name:'Prajyot',
        text: "",
        likes: 241,
      }, {
        name:'Prathamesh',
        text: "",
        likes: 133,
      }
    ]
  }
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(profile);
  useEffect(() => {
    // api call
    const fetchProfileData = async () => {
      try {
        const response = await axios.post(
          "https://dev.elred.io/noSessionProfileDetails?userCode=66961e8dcc9a8155d09b8c9b"
        );

        setProfile(response.data.result);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchProfileData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="profile-container">
        <div className="profile-header">Profile</div>
      {profile.map((item) => (
        <div className="user-info">
         <div className="logo">
          <img src={item.dpURL} className="avatar"/>
          </div>
          <h1>{item.firstname + " " + item.lastname}</h1>
          <p>{item.title[0].value}</p>
          <p>{item.location.city + " " +item.location.country}</p>
        </div>
      ))}
      <div className="mini-modal">
      <ProfileModal profile={profile}/>
      </div>
      <div className="share-cards">
            <img className="share-icon"/>
      </div>
      <div className="card-rating">
        <div>
           Ratings
        </div>
        <hr className="divider" />
        <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        </div>
      </div>
      <div className="card-comments">
        <h3>Comments</h3>
        {
          ProfileStaticInfo.comments.map((comment,index)=> (
            <div key={index} className="comment">
              <p>
                <strong>{comment.name}</strong> : {comment.text}
              </p>
              <p className="likes">{comment.likes} likes</p>
              </div>
          ))
        }
      </div>
    </div>
  );
};

export default ProfileCard;
