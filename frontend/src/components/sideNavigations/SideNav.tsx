import style from "./SideBar.module.scss"
import {Link} from "react-router-dom"
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
const SideNav = () => {
    
    return(
      <div>
        <ul>
            <li>
                <RssFeed/>
                <Link to="/Feed">Feed</Link> 
            </li>
            <li>
                <Chat/>
               <Link to="/chats">Chats</Link> 
            </li>
            <li>
                <PlayCircleFilledOutlined/>
               <Link to="/video">Video</Link> 
            </li>
            <li>
                <Group/>
               <Link to="/Groups">Groups</Link> 
            </li>
            <li>
                <Bookmark/>
               <Link to="/Questions">Questions</Link> 
            </li>
            <li>
                <HelpOutline/>
               <Link to="/Jobs">Jobs</Link> 
            </li>
            <li>
                <Event/>
               <Link to="/Events">Events</Link> 
            </li>
            <li>
                <WorkOutline/>
               <Link to="/Courses">Courses</Link> 
            </li>
        </ul> 
      </div>  
    )
}

export default SideNav