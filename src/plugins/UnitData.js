import ItemData from '@/plugins/ItemData';

const model = {
    event:[
            {
                key:'unit_id',
                is_required:true
            },
            {
                key:'label',
                is_required:true
            },
            {
                key:'items',
                is_required:true,
                type:'item_ary'
            },
        ],
    tour:[]
}

export default class UnitData {
    constructor(unit_data, type) {
        model[type].forEach(setting => {
            if(unit_data[setting.key] === void 0){
                if(setting.is_required){
                    if(setting.default_value !== void 0){
                        this[setting.key] = setting.default_value;
                    }else{
                        console.error('設定必須な'+ setting.key +'の指定がありません @'+type);
                    }
                }
            }else{
                if(setting.type === 'item_ary'){
                    this[setting.key] = unit_data[setting.key].map( item => {
                        return new ItemData(item, type);
                    });
                }else{
                    this[setting.key] = unit_data[setting.key];
                }
            }

        });
    }
}