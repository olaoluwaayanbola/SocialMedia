import {Link} from "react-router-dom"
import style from "./SideNav.module.scss"
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
      <div className={style.Container} >
          <div className={style.ContainerWrapper}>
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
                    <Link to="/Bookmark">Bookmark</Link> 
                </li>
                <li>
                    <HelpOutline/>
                    <Link to="/Questions">Questions</Link> 
                </li>
                <li>
                    <WorkOutline />
                    <Link to="/Jobs">Jobs</Link> 
                </li>
                <li>
                    <Event/>
                    <Link to="/Events">Events</Link> 
                </li>
                <li>
                    <School/>
                    <Link to="/Courses">Courses</Link> 
                </li>
            </ul> 
          </div>
      </div>  
    )
}

export default SideNav