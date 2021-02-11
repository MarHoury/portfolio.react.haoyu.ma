import React from 'react'
import { 
  FacebookShareButton, 
  FacebookIcon, 
  TwitterShareButton, 
  TwitterIcon, 
  RedditShareButton, 
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WeiboShareButton,
  WeiboIcon,
} from 'react-share'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Haoyu Mad</p>
            </div>
            <div className="d-flex">
              <a href="tel:0221350625" >+64 22-135-0625</a>
            </div>
            <div className="d-flex">
              <p>marhoury@hotmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="foot-nav">Home</a>
                <br />
                <a className="foot-nav">About Me</a>
                <br />
                <a className="foot-nav">Services</a>
              </div>
              <div className="col">
                <a className="foot-nav">Experience</a>
                <br />
                <a className="foot-nav">Portfolio</a>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-item-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url="https://github.com/MarHoury"
                quote="Full Stack Developer"
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url="https://github.com/MarHoury"
                quote="Full Stack Developer"
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <LinkedinShareButton
                url="https://github.com/MarHoury"
                quote="Full Stack Developer"
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
              <RedditShareButton
                url="https://github.com/MarHoury"
                quote="Full Stack Developer"
                hashtag="#javascript"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <WeiboShareButton
                url="https://github.com/MarHoury"
                quote="Full Stack Developer"
                hashtag="#javascript"
              >
                <WeiboIcon className="mx-3" size={36} />
              </WeiboShareButton>
            </div>
            <p className="pt-3 text-center">Copyright &copy;{new Date().getFullYear()}&nbsp;Haoyu Ma | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
