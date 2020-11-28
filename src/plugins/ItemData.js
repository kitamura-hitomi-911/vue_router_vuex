
const model = {
    event:[
        {
            key:'name',
            is_required:true
        },
        {
            key:'label',
            is_required:true,
            default_value:''
        },
        {
            key:'form_type',
            is_required:true
        },
        {
            key:'list'
        },
        {
            key:'is_editable',
            is_required:true,
            default_value:true
        },

    ],
    tour:[]
}


export default class ItemData {
    constructor(item_data, type) {
        model[type].forEach(setting => {
            if(item_data[setting.key] === void 0){
                if(setting.is_required){
                    if(setting.default_value !== void 0){
                        this[setting.key] = setting.default_value;
                    }else{
                        console.error('設定必須な'+ setting.key +'の指定がありません @'+type);
                    }
                }
            }else{
                this[setting.key] = item_data[setting.key];
            }
        });
    }
    setList(list){
        this.list = list;
    }
}