import { Link } from "react-router-dom";
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
              <label>
                <input 
                type="text" 
                name="friendSearch"
                value={form.friendSearch}
                onChange={HandleForm}
                />
                <SearchIcon />
              </label>
          </div>
          <div className={style.TopBarDetailAndIcons}>
              <div className={style.TextLink}>
                {/* <Link to="/Home">Home</Link>
                <Link to="/Home" >TimeLine</Link> */}
              </div>
              <div className={style.IconLinks}> 
                  <div className={style.Icons}>
                      <PersonIcon/>
                      <MessageIcon />
                      <NotificationsIcon/>                   
                  </div>
                  <div className={style.DisplayImage}>
                      <img />
                  </div>
              </div>
          </div>    
        </div>
    )
}

export default TopBarNavigation