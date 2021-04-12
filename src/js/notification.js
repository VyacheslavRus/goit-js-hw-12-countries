
import {error} from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';


export default {
     error404() {
        error({
            text: 'Введи больше для совпадения!', 
            delay: 1000
          });
    },

     error007() {
        error({
            text: 'Ерунда',
            delay: 1000
          });
    }
}