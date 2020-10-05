import {create} from 'vue-modal-dialogs';
import ResponseTypeSelector from './ResponseTypeSelector.overlay';
import Dialog from './Dialog';
const openDialog = create({
    component: Dialog,
    wrapper: 'dialogs'
});

export default {
    install(Vue) {

        Vue.prototype.$slideUps = {

            openResponseTypeSelector: create({
                component: ResponseTypeSelector,
                wrapper: 'slideUps'
            })
        };
        Vue.prototype.$confirm = ({message, title, yep, nope, icon, cls, showYep, showNope}) => {
            return openDialog({
                message,
                title,
                yep,
                nope,
                icon,
                cls,
                showYep,
                showNope
            });
        };
    }
}