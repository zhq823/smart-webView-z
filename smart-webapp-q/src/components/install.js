import Vue from 'vue';
import iEventDialog from './iEventDialog/index';
import iEventPopup from './iEventPopup/index';
import iEventNavBar from './iEventNavBar/index';
import iEventSizer from './iEventSizer/index';
import PublicDialog from './PublicDialog/index';
import iEventSearch from './iEventSearch/index';
import iEventField from './iEventField/index';
import iEventScroll from './iEventScroll/index';
import lillyPopup from './lillyPopup/index';

const modules = [
	iEventDialog,
	iEventPopup,
	iEventNavBar,
	iEventSizer,
	PublicDialog,
	iEventSearch,
	iEventField,
	iEventScroll,
	lillyPopup
]
modules.map((ele) => {
	Vue.use(ele);
})