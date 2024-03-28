/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./LandingPage.css";
import { useEffect } from "react";

// Import slika
import imgTopGrid from "./img/grid1-top.png";
import imgBottomGrid from "./img/grid1-bottom.png";
import walletImg from "./img/wallet.png";
import nftImg from "./img/NFT.webp";
import sellGlobalImg from "./img/SELLGLOBAL.png";
import artMilica1 from "./img/ART FROM MILICA1.png";
import artMilica2 from "./img/ART FROM MILICA2.png";
import artMilica3 from "./img/ART FROM MILICA3.png";
import bg1 from "./img/bg1.png";
import user3Img from "./img/User3.png";
import user1Img from "./img/User1.png";
import bg2 from "./img/bg2.png";
import user4Img from "./img/User4.png";
import bg3 from "./img/bg3.png";
import user2Img from "./img/User2.png";
import bg4 from "./img/bg4.png";

function LandingPage() {
  useEffect(() => {
    const menu = document.querySelector(".menu");
    const menuBtn = document.querySelector(".menu-btn");

    const toggleMenu = () => {
      menu.classList.toggle("menu-open");
    };

    menuBtn.addEventListener("click", toggleMenu);

    return () => {
      menuBtn.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <div className="body">
      <div className="header">
        <div className="container">
          <div className="nav">
            <a href="index.html" className="brand">
              SG3
            </a>
            <ul className="menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="marketplace">Marketplace</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Artists</a>
              </li>
              <li>
                <a href="" className="btn btn-primary">
                  {" "}
                  Log In{" "}
                </a>
              </li>
            </ul>
            <a href="/marketplace" className="btn btn-primary">
              {" "}
              Log In{" "}
            </a>
            <button className="menu-btn">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <div className="header-body">
            <div>
              <div>
                <p>
                  Discover your hidden talent at Serbian Gallery3 and Start
                  selling your unique artworks globally
                </p>
                <span className="bar"></span>
                <h1>Create NFTS</h1>
              </div>
              <div>
                <h1>Buy & Sell NFTS</h1>
                <span className="bar"></span>
                <p>
                  Don't miss out on this opportunity to achieve success in the
                  digital art world
                </p>
              </div>
              <div className="btn-group">
                <a href="#" className="btn btn-primary">
                  Join Us
                </a>
                <a href="#" className="btn btn-secondary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <img src={imgTopGrid} className="grid-img" />
        </div>
      </div>

      <div className="container">
        <img src={imgBottomGrid} className="grid-img" />
        <section className="services">
          <div className="heading">
            <h2>What is SG3 Mission?</h2>
            <p>
              Our mission is to empower Serbian artists by providing an
              innovative and global platform to express their creativity through
              digital artwork. We are committed to supporting their growth in
              the digital art industry by granting access to global markets and
              offering opportunities to gain recognition and substantial income.
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <div className="light"></div>
              <img src={walletImg} alt="wallet" />
              <h3>Set up your Wallet</h3>
              <p>NFT's are transforming the way commerce is transacted</p>
            </div>
            <div className="card">
              <div className="light"></div>
              <img src={nftImg} alt="camera" />
              <h3>Create your NFT</h3>
              <p>NFT's are transforming the way commerce is transacted</p>
            </div>
            <div className="card">
              <div className="light"></div>
              <img src={sellGlobalImg} alt="gift" />
              <h3>Sell your NFT Globally</h3>
              <p>NFT's are transforming the way commerce is transacted</p>
            </div>
          </div>
        </section>

        <section className="featured">
          <div className="heading">
            <h2>Featured Artworks</h2>
          </div>
          <div className="cards">
            <div className="card">
              <img className="art-img" src={artMilica1} />
              <div className="light"></div>
              <h3 className="art-title">Blue Pearl Beads</h3>
              <div className="favourites">
                <div>
                  <img src={user1Img} alt="artwork" />
                  <img src={user2Img} alt="artwork" />
                  <img src={user3Img} alt="artwork" />
                  <small> 2+ </small>
                </div>
                <div>
                  <span>Favourite This</span>
                </div>
              </div>
              <div className="bid">
                <div>
                  <p>Current Bid</p>
                  <h3>
                    <i className="fab fa-ethereum"></i>
                    3.65ETH
                  </h3>
                </div>
                <div>
                  <p>Ends In</p>
                  <h3>1H.33M</h3>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="art-img" src={artMilica2} />
              <div className="light"></div>
              <h3 className="art-title">Blue at the White</h3>
              <div className="favourites">
                <div>
                  <img src={user1Img} alt="artwork" />
                  <img src={user2Img} alt="artwork" />
                  <img src={user3Img} alt="artwork" />
                  <small> 2+ </small>
                </div>
                <div>
                  <span>Favourite This</span>
                </div>
              </div>
              <div className="bid">
                <div>
                  <p>Current Bid</p>
                  <h3>
                    <i className="fab fa-ethereum"></i>
                    12.65ETH
                  </h3>
                </div>
                <div>
                  <p>Ends In</p>
                  <h3>33M</h3>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="art-img" src={artMilica3} />
              <div className="light"></div>
              <h3 className="art-title">Color Crystal</h3>
              <div className="favourites">
                <div>
                  <img src={user1Img} alt="artwork" />
                  <img src={user2Img} alt="artwork" />
                  <img src={user3Img} alt="artwork" />
                  <small> 2+ </small>
                </div>
                <div>
                  <span>Favourite This</span>
                </div>
              </div>
              <div className="bid">
                <div>
                  <p>Current Bid</p>
                  <h3>
                    <i className="fab fa-ethereum"></i>
                    2.65ETH
                  </h3>
                </div>
                <div>
                  <p>Ends In</p>
                  <h3>10H.33M</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="explore">
          <div className="grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <h2>Explore our top NFT</h2>
            <p>
              Explore our marketplace now and find your dream NFT! Discover a
              world of unique digital assets created by talented artists. Your
              perfect NFT awaits!
            </p>
            <div className="stats">
              <div>
                <small>NFT</small>
                <h3>1305K</h3>
                <p>The Largest NFT Marketplace in the world</p>
              </div>
              <div>
                <small>Users</small>
                <h3>505K</h3>
                <p>New Users in every minute join with us</p>
              </div>
            </div>
          </div>
        </section>

        <section className="artists">
          <div className="heading">
            <h2>Meet Our Top Artis</h2>
            <p>
              NFT's are transforming the way commerce is transacted, contracts
              are enforced, investments are held, and value is transferred.
              Every tree in the forest knows about creating value and value is
              transferred every tout reciprocity.
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <img src={bg1} className="bg-img" />
              <img src={user3Img} className="profile-img" />
              <h3>Sulistio Murti M</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span> 5.0 </span>
              </div>
              <p>Serbian Gallery3 is the best place for your unique talante</p>
              <p>Sulistio</p>
              <button className="card-btn">Follow</button>
            </div>
            <div className="card">
              <img src={bg2} className="bg-img" />
              <img src={user1Img} className="profile-img" />
              <h3>Milica</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span> 5.0 </span>
              </div>
              <p>
                Serbian Gallery3 is the place for artis make what their want
              </p>
              <p>Milica</p>
              <button className="card-btn">Follow</button>
            </div>

            <div className="card">
              <img src={bg3} className="bg-img" />
              <img src={user4Img} className="profile-img" />
              <h3>Milovan</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span> 5.0 </span>
              </div>
              <p>
                SG3 is the best place to sell your NFT and for your unique skill
              </p>
              <p>Milovan</p>
              <button className="card-btn">Follow</button>
            </div>

            <div className="card">
              <img src={bg4} className="bg-img" />
              <img src={user2Img} className="profile-img" />
              <h3>Marko</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span> 5.0 </span>
              </div>
              <p>
                Serbian Gallery3 aka SG3 is the best place for me to make my art
                globally
              </p>
              <p>Marko</p>
              <button className="card-btn">Follow</button>
            </div>
          </div>
        </section>
      </div>

      <section className="trial">
        <h2>About US</h2>
        <p>
          Serbian Gallery3 is a digital marketplace enabling artists in Serbia
          to sell their artworks in the form of NFTs (Non-Fungible Tokens) to
          customers worldwide. The platform provides a space for artists to
          showcase and market their artworks to a vast global audience, allowing
          them to reach a broader market than they might through traditional
          means. Through Serbian Gallery3, artists can leverage blockchain
          technology to provide security, authenticity, and digital ownership
          that cannot be replicated for buyers of their artworks. Thus, the
          platform serves as an innovative and inclusive venue for Serbian
          artists to enter the global digital art market with unlimited
          potential.
        </p>
        <a href="#" className="btn btn-primary">
          {" "}
          Join us now{" "}
        </a>
      </section>

      <div className="container">
        <div className="footer">
          <div>
            <h2>Serbian Gallery</h2>
            <p>Studentski Grad 147, Beograd, Serbia 11000</p>
            <hr />
            <h3>Get our latest updates</h3>
            <form>
              <div className="input-wrap">
                <input type="email" placeholder="Enter your Email" />
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Protocol Explore</a>
              </li>
              <li>
                <a href="#">System Token</a>
              </li>
              <li>
                <a href="#">Optimize Time</a>
              </li>
              <li>
                <a href="#">Visual Checking</a>
              </li>
              <li>
                <a href="#">Activity Log</a>
              </li>
              <li>
                <a href="#">System Auto Since</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Information</h3>
            <ul>
              <li>
                <a href="#">Market Explore</a>
              </li>
              <li>
                <a href="#">Ready Token</a>
              </li>
              <li>
                <a href="#">Main Option</a>
              </li>
              <li>
                <a href="#">File Checking</a>
              </li>
              <li>
                <a href="#">Blog Grid</a>
              </li>
              <li>
                <a href="#">Fix Bug</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">Upload Files</a>
              </li>
              <li>
                <a href="/marketplace">Marketplace</a>
              </li>
              <li>
                <a href="#">Item Details</a>
              </li>
              <li>
                <a href="#">Recent Activity</a>
              </li>
              <li>
                <a href="#">Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Social Media</h3>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Linkedin</a>
              </li>
              <li>
                <a href="#">Whatsapp</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Telegram</a>
              </li>
            </ul>
          </div>
          <script src="index.js"></script>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
