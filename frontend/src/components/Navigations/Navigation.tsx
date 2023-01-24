import { Link } from "react-router-dom";
import Zoro from "../../assets/zoro.png"
import style from "./Navigations.module.scss";
import {frienddata} from "../../interfaces/data";
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import {useForm} from "../../customsHooks/DynamicFormControlled";
import NotificationsIcon from '@mui/icons-material/Notifications';

const TopBarNavigation = () => {
    const {form,HandleForm} = useForm(frienddata);
    return(
        <div className={style.Container}>
          <div className={style.TopBartitle}>
              <h2>SocialMedia</h2>
          </div>  
          <div className={style.TopBarSearchBar}>
              <div className={style.TopBarSearchBarDesign}>
                <label>
                    <input
                    type="text" 
                    name="friendSearch"
                    value={form.friendSearch}
                    className={style.searchBar}
                    onChange={HandleForm}
                    autoFocus
                    />
                    <div className={style.SearchIcon}>
                        <SearchIcon />
                    </div>
                </label>
              </div>
          </div>
          <div className={style.TopBarDetailAndIcons}>
              <div className={style.TextLink}>
                <Link to="/Home">Home</Link>
                <Link to="/Home" >TimeLine</Link>
              </div>
              <div className={style.IconLinks}> 
                  <div className={style.Icons}>
                      <div className={style.badge}>
                          <PersonIcon className={style.badgeIcons}/>
                      </div>
                      <div className={style.badge}>
                          <NotificationsIcon className={style.badgeIcons}/>                   
                      </div>
                      <div className={style.badge}>
                          <MessageIcon className={style.badgeIcons}/>  
                      </div>
                  </div>
                  <div className={style.DisplayImage}>
                      <img 
                        // src={Zoro} 
                        alt="profile Image" 
                        className={style.NavProfileImage}/>
                  </div>
              </div>
          </div>    
        </div>
    )
}

export default TopBarNavigation