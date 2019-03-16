import {createDrawerNavigator} from 'react-navigation';
import { PageOne } from './assets/components/Page1';
import { PageTwo } from './assets/components/Page2';


export default  MyApp=createDrawerNavigator({
    PageOne:{
        screen :PageOne
    },
    PageTwo:{
        screen :PageTwo
    }
  });
