import "./feacture_EventID.css";
import beach from "./beach.png";

const FeatureeventID = () => {
  return (
    
    <div className="Feacture_ID">
      <div className="ID">
      <div className="IDtext">
        <h1 className="IDTopic">6 Simple Steps to Writing a Compelling Event Description</h1>

        <p className="IDTopic">Don’t forget to add inviting photos to your description; perhaps you have photos from
          a similar prior event to include. Generally try to avoid stock photos as they are less compelling than photos of
          real events and attendees. Consider commissioning a designer to make neat graphics for you to use on social media
          to promote the event. Some events even have their own logo. If you are going to promote your event offline as well,
          you may want invitations or posters designed and printed. Before engaging a designer, look at all of the places you’ll
          need to post the image. Consider that you’ll need different dimensions for different social platforms. For example, you
          may want a horizontal header image to include on your Facebook event, a square image for Instagram and something more vertical
          for a story.</p></div>

      <div className="IDvenue">
        <span>date duration</span>
        <span>time duration</span>
        <button>Join</button>
      </div>
    </div>
    
    <div className="Pics">
        <div className="IDfeaturedItem">
          <img src={beach} alt="" className="IDfeaturedImg" />
        </div>

        <div className="IDfeaturedItem">
          <img src={beach} alt="" className="IDfeaturedImg" />
        </div>

        <div className="IDfeaturedItem">
          <img src={beach} alt="" className="IDfeaturedImg" />
        </div>
        

      </div>
      </div>
    
  );
};

export default FeatureeventID;