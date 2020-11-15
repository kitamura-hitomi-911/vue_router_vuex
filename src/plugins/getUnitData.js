import unit_data_event from '@/plugins/unit_data-event';
import UnitData from '@/plugins/UnitData';

let unit_data_obj = {
    event:unit_data_event.map( unit => {
        return new UnitData(unit, 'event');
    })
};

const getUnitData = {
    install(Vue) {
        Vue.prototype.$getUnitData = function (tgt_rsc) {
            return unit_data_obj[tgt_rsc];
        }
    }
}

export default getUnitData;