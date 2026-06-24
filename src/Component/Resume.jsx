import React, { useState, useRef } from "react";
import "../Style/Resume.css";
function Resume({ pdfRef }) {
  const [name, setName] = useState("Your Name");
  const [post, setPost] = useState("Fullstack Developer");
  const [email, setEmail] = useState("example@gmail.com");
  const [phone, setPhone] = useState("9361683457");
  const [linkedin, setLinkedin] = useState("https://www.linkedin.com");
  const handleLinkedInClick = () => {
    window.open(linkedin, "_blank", "noopener,noreferrer");
  };
  const [about, setAbout] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cumque nihil consequatur beatae esse debitis sunt aliquid modi suscipit, natus facere reprehenderit odio doloribus tempore pariatur asperiores. Similique, ut magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo cumque nihil consequatur beatae esse debitis sunt aliquid modi suscipit, natus facere reprehenderit odio doloribus tempore pariatur asperiores. Similique.",
  );
  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "MySQL",
  ]);
  const [newSkill, setNewSkill] = useState("");
  const addSkill = () => {
    if (newSkill == "") {
      return;
    } else {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };
  const deleteSkill = (indexToDelete) => {
    setSkills(skills.filter((_, index) => index !== indexToDelete));
  };

  const [eddegree, setEddegree] = useState(
    "Btech in Computer Science and Engineering",
  );
  const [edclg, setEdclg] = useState(
    "Patel College of Science and Technology, Indore",
  );
  const [passyear, setPassyear] = useState("2024-2027");
  const [degree2, setDegree2] = useState("Second degree");
  const [college2, setCollege2] = useState("College Name");
  const [passyear2, setPassyear2] = useState("Passing Year");
  const [showSecondField, setShowSecondField] = useState(false);

  const [projectTitle, setProjectTitle] = useState("Project Name");
  const [projectLink, setProjectLink] = useState("https://www.google.com/");
  const handleProjectInClick = () => {
    window.open(projectLink, "_blank", "noopener,noreferrer");
  };
  const [projectDesc, setProjectDesc] = useState(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis alias veritatis ipsam tenetur qui porro. Omnis, inventore. Corrupti, nobis impedit aliquam eligendi dolores provident alias error! Dolores distinctio illum deserunt",
  );

  const [projectTitle2, setProjectTitle2] = useState("Second Project Name");
  const [projectDesc2, setProjectDesc2] = useState(
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis alias veritatis ipsam tenetur qui porro. Omnis, inventore. Corrupti, nobis impedit aliquam eligendi dolores provident alias error! Dolores distinctio illum deserunt",
  );
  const [projectLink2, setProjectLink2] = useState("https://www.google.com/");
  const handleProjectInClick2 = () => {
    window.open(projectLink2, "_blank", "noopener,noreferrer");
  };

  const [certificates, setCertificates] = useState([
    {
      name: "",
      link: "",
    },
  ]);
  const [newName, setNewName] = useState("");
  const [newLink, setNewLink] = useState("");
  const addCertificate = () => {
    if (newName.trim() === "" || newLink.trim() === "") return;
    setCertificates([
      ...certificates,
      {
        name: newName,
        link: newLink,
      },
    ]);
    setNewName("");
    setNewLink("");
  };

  const deleteAllCertificates = () => {
    setCertificates([]);
  };

  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s",
  );
  const fileRef = useRef();
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };
  return (
    <div className="main-page">
      <div className="left">
        <h1>Edit Details</h1>
        <div className="name">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            required
          />
        </div>
        <div className="post">
          <label htmlFor="">Position:</label>
          <input
            type="text"
            onChange={(e) => setPost(e.target.value)}
            placeholder="Enter Position"
            required
          />
        </div>
        <div className="left-info">
          <label htmlFor="">Phone no.</label>
          <input
            type="phone"
            onChange={(e) => setPhone(e.target.value)}
            maxLength={10}
            placeholder="Enter Phoneno"
          />
          <br />
          <label htmlFor="">Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Linkedin:</label>
          <input
            type="url"
            placeholder="Linkedin URL"
            onChange={(e) => setLinkedin(e.target.value)}
          />
        </div>
        <div className="about">
          <label htmlFor="">About:</label>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            placeholder="Summary"
            required
          ></textarea>
        </div>
        <div className="skill-area">
          <div className="btn">
            <label htmlFor="">Skills:</label>
            <button onClick={addSkill}>+ Add</button>
          </div>
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add Skills"
          />
          <div className="skill">
            {skills.map((item, ind) => (
              <div key={ind} className="skills">
                <p>{item}</p>
                <i
                  className="fa-solid fa-trash-can"
                  onClick={() => deleteSkill(ind)}
                ></i>
              </div>
            ))}
          </div>
        </div>
        <div className="education">
          <div className="head">
            <label htmlFor="">Education</label>
            <button onClick={() => setShowSecondField(true)}>
              + Add Field
            </button>
          </div>
          <input
            type="text"
            placeholder="Degree"
            onChange={(e) => setEddegree(e.target.value)}
          />
          <input
            type="text"
            placeholder="College Name"
            onChange={(e) => setEdclg(e.target.value)}
          />
          <input
            type="text"
            placeholder="Passing Date"
            onChange={(e) => setPassyear(e.target.value)}
          />
          {showSecondField && (
            <div>
              <input
                type="text"
                placeholder="Degree 2"
                onChange={(e) => setDegree2(e.target.value)}
              />
              <input
                type="text"
                placeholder="College 2"
                onChange={(e) => setCollege2(e.target.value)}
              />
              <input
                type="text"
                placeholder="Passing Date"
                onChange={(e) => setPassyear2(e.target.value)}
              />
            </div>
          )}
        </div>
        <div className="projects">
          <label htmlFor="">Project</label>
          <div className="pro1">
            <small>Project 1</small>
            <input
              type="text"
              placeholder="Project Name"
              onChange={(e) => setProjectTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Project link"
              onChange={(e) => setProjectLink(e.target.value)}
            />
            <textarea
              name=""
              id=""
              placeholder="Project Description"
              onChange={(e) => setProjectDesc(e.target.value)}
            ></textarea>
          </div>
          <div className="pro2">
            <small>Project 2</small>
            <input
              type="text"
              placeholder="Project Name"
              onChange={(e) => setProjectTitle2(e.target.value)}
            />
            <input
              type="text"
              placeholder="Project link"
              onChange={(e) => setProjectLink2(e.target.value)}
            />
            <textarea
              name=""
              id=""
              placeholder="Project Description"
              onChange={(e) => setProjectDesc2(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="certificate">
          <label htmlFor="">Certificate</label>
          <input
            type="text"
            placeholder="Certificate Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="url"
            placeholder="Certificate Link"
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
          />
          <button onClick={addCertificate}>Add Certificate</button>&nbsp;&nbsp;
          <button onClick={deleteAllCertificates}>Delete All</button>
        </div>
      </div>
      <div className="right" ref={pdfRef}>
        <div className="top">
          <div className="name">
            <div className="img">
              <img
                src={image}
                alt=""
                width="200"
                onClick={() => fileRef.current.click()}
                style={{ cursor: "pointer" }}
              />
              <input
                type="file"
                ref={fileRef}
                accept="image/*"
                onChange={handleChange}
                style={{ display: "none" }}
              />
            </div>
            <div className="con">
              <h1>{name}</h1>
              <h2>{post}</h2>
            </div>
          </div>
          <div className="contact">
            <p>
              <i className="fa-regular fa-envelope"></i>&nbsp;
              {email}
            </p>
            <p>
              <i className="fa-solid fa-phone"></i>&nbsp;+91 {phone}
            </p>
            <p onClick={handleLinkedInClick}>
              <i className="fa-brands fa-linkedin"></i>
              &nbsp;https://www.linkedin.com
            </p>
          </div>
        </div>
        <hr />
        <h4>About</h4>
        <p>{about}</p>
        <hr />
        <h4 style={{ margin: "5px 0px" }}>Skills</h4>
        <div className="skill">
          {skills.map((item, ind) => (
            <span key={ind}>{item}</span>
          ))}
        </div>
        <hr />
        <h4>Education</h4>
        <div className="education">
          <div className="one">
            <p>
              <b>
                <small>{eddegree}</small>
              </b>
            </p>
            <p>
              <small>{edclg}</small>
            </p>
            <p>
              <small>
                <i>{passyear}</i>
              </small>
            </p>
          </div>
          {showSecondField && (
            <div className="two">
              <p>
                <b>
                  <small>{degree2}</small>
                </b>
              </p>
              <p>
                <small>{college2}</small>
              </p>
              <p>
                <small>
                  <i>{passyear2}</i>
                </small>
              </p>
            </div>
          )}
        </div>
        <hr />
        <h4>Projects</h4>
        <div className="project">
          <p>
            <small>
              <b>{projectTitle}</b>
            </small>
            &nbsp;
            <small
              onClick={handleProjectInClick}
              style={{
                cursor: "pointer",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              link
            </small>
          </p>
          <p>
            <small>{projectDesc}</small>
          </p>
          <p onClick={handleProjectInClick2}>
            <small>
              <b>{projectTitle2}</b>
            </small>
            &nbsp;
            <small
              onClick={handleProjectInClick2}
              style={{
                cursor: "pointer",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              link
            </small>
          </p>
          <p>
            <small>{projectDesc2}</small>
          </p>
        </div>
        <hr />
        <h4>Certificates</h4>
        <div className="certificate">
          {certificates.map((cert, index) => (
            <div key={index}>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                {cert.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume;
