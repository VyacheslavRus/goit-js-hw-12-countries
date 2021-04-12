
import {error} from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';



export default {
     error404() {
        error({
            text: 'Введи больше для совпадения!'
          });
    },

     error() {
        error({
            text: 'Ерунда'
          });
    }
}