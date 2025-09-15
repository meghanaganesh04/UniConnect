import { useState } from "react";
import { Bell, Mail, Search, Home, Users, Briefcase, MessageSquare } from "lucide-react";
import "./LinkedInClone.css"; 

const LinkedInClone = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="app">
      <header className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            <div className="logo">UniConnect</div>

            {/* Search Bar */}
            <div className="search-bar">
              <Search className="icon" />
              <input type="text" placeholder="Search" />
            </div>
          </div>

          <div className="navbar-right">
            <div
              className={`nav-item ${activeTab === "home" ? "active" : ""}`}
              onClick={() => setActiveTab("home")}
            >
              <Home />
              <span>Home</span>
            </div>

            <div
              className={`nav-item ${activeTab === "network" ? "active" : ""}`}
              onClick={() => setActiveTab("network")}
            >
              <Users />
              <span>Network</span>
            </div>

            <div
              className={`nav-item ${activeTab === "jobs" ? "active" : ""}`}
              onClick={() => setActiveTab("jobs")}
            >
              <Briefcase />
              <span>Jobs</span>
            </div>

            <div
              className={`nav-item ${activeTab === "messaging" ? "active" : ""}`}
              onClick={() => setActiveTab("messaging")}
            >
              <MessageSquare />
              <span>Messaging</span>
            </div>

            <div className="nav-item">
              <Bell />
              <span>Notifications</span>
            </div>

            <div
              className="profile"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img
                src="https://placehold.co/32x32"
                alt="profile"
                className="profile-pic"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="sidebar">
          <div className="card profile-card">
            <img
              src="https://placehold.co/80x80"
              alt="profile"
              className="profile-pic-lg"
            />
            <h3>Alex Johnson</h3>
            <p>Senior Product Designer</p>
            <p className="connections">Connections: 500+</p>
          </div>

          <div className="card">
            <h4>Recent</h4>
            <p>#uxdesign</p>
            <p>#productmanagement</p>
            <p>#careergrowth</p>
          </div>
        </div>

        <div className="feed">
 
          <div className="card create-post">
            <div className="create-top">
              <img
                src="https://placehold.co/48x48"
                alt="profile"
                className="profile-pic"
              />
              <input type="text" placeholder="Start a post" />
            </div>
            <div className="create-actions">
              <button>📷 Photo</button>
              <button>🎥 Video</button>
              <button>📄 Document</button>
              <button>✏️ Write Article</button>
            </div>
          </div>

          <div className="card post">
            <div className="post-header">
              <img src="https://placehold.co/48x48" alt="user" className="profile-pic" />
              <div>
                <h4>Sarah Chen</h4>
                <p>Product Manager at TechCorp • 2h ago</p>
              </div>
            </div>
            <p>Just wrapped up an incredible product launch!</p>
            <img src="https://placehold.co/600x300" alt="post" className="post-img" />
            <div className="post-footer">
              <span>👍 128 • 24 comments</span>
            </div>
            <div className="post-actions">
              <button>👍 Like</button>
              <button>💬 Comment</button>
              <button>↪ Share</button>
              <button>📤 Send</button>
            </div>
          </div>

          <div className="card post">
            <div className="post-header">
              <img src="https://placehold.co/48x48" alt="user" className="profile-pic" />
              <div>
                <h4>Mark Taylor</h4>
                <p>UX Designer • 5h ago</p>
              </div>
            </div>
            <p>
              Sharing some insights from our latest design system implementation.
            </p>
            <div className="post-box">
              <h5>Design System Principles</h5>
              <p>
                Accessibility, consistency, and scalability should be at the core
                of every design system...
              </p>
            </div>
            <div className="post-footer">
              <span>👍 89 • 15 comments</span>
            </div>
            <div className="post-actions">
              <button>👍 Like</button>
              <button>💬 Comment</button>
              <button>↪ Share</button>
              <button>📤 Send</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LinkedInClone;
