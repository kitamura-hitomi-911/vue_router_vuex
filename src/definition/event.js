let groups = [
    {
        label: '',
        group_id: 'default',
        units: [
            {
                label:'ID',
                unit_id:'id',
                items:[
                    {
                        name: 'id',
                        label: '',
                        form_type:'input_text',
                        is_editable: false
                    }
                ]
            },
            {
                label: 'イベント名',
                unit_id: 'name',
                items: [
                    {
                        name: 'name',
                        label: '',
                        form_type: 'input_text',
                        required: true
                    }
                ]
            },
            {
                label: '開催日時',
                unit_id: 'event_date',
                items: [
                    {
                        name: 'start_date',
                        label: '開始',
                        form_type: 'input_date_hour',
                        required: true,
                    },
                    {
                        name: 'end_date',
                        label: '終了',
                        form_type: 'input_date_hour',
                        required: true
                    }
                ]
            },
            {
                label: '選択肢',
                unit_id: 'checkboxtest',
                items: [
                    {
                        name: 'checkboxtest',
                        label: '',
                        form_type: 'input_checkbox',
                        list:[
                            {
                                label:'その1',
                                value:1
                            },
                            {
                                label:'その2',
                                value:2
                            },
                            {
                                label:'その3',
                                value:3
                            },
                        ],
                        required: true
                    }
                ]
            },
            {
                label: '説明',
                unit_id: 'desc',
                items: [
                    {
                        name: 'desc',
                        label: '',
                        form_type: 'textarea',
                        required: true
                    }
                ]
            },
        ]
    }
];


const model = {
    group:[
        {
            key:'group_id',
            is_required:true,
        },
        {
            key:'label',
            is_required:true,
            allow_empty:true
        },
        {
            key:'units',
            is_required:true,
            type:'next_level_ary'
        },
    ],
    unit:[
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
            type:'next_level_ary'
        },
    ],
    item:[
        {
            key:'name',
            is_required:true
        },
        {
            key:'label',
            is_required:true,
            allow_empty:true
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

    ]
};

/**
 * group,unit,item いずれかの設定データを受け取り、該当するmodelデータの型にして返す。
 * @param base_data
 * @param model_data
 * @returns {{formated_data: null, next_level_key: string}|{formated_data: Object, next_level_key: string}}
 */
function createFormatedDataByModel(base_data, model_data){
    let model_name = [{ key:'group_id',model_name:'group'},{ key:'unit_id',model_name:'unit'},{ key:'name',model_name:'item'}].reduce((ret, obj) => {
        return base_data[obj.key] !== void 0 ? obj.model_name : ret;
    },'');
    let next_level_key = '';
    if(!model_name){
        console.error('group_id、unit_id、name いずれも指定されていないためモデルが判別できません');
        return {formated_data:null,next_level_key:''};
    }

    return {formated_data:model_data[model_name].reduce((ret,model) => {
        if(model.type === 'next_level_ary'){
            if(base_data[model.key] === void 0 || !base_data[model.key].length){
                console.error(model_name + 'に' + model.key + 'は必須です')
            }
            ret[model.key] = [];
            next_level_key = model.key;
        }else if(base_data[model.key] !== void 0){
            ret[model.key] = Array.isArray(base_data[model.key])?base_data[model.key].map(_tmp_obj=>{
                // TODO: String、 Number でなければ、という制御も追加。
                return Object.assign({},_tmp_obj);
            }) : base_data[model.key];
            if(!model.allow_empty && base_data[model.key] === ''){
                console.error(model_name + 'の' + model.key + 'は、値の指定が必要です')
            }
        }else if(model.is_required){
            if(model.default_value){
                ret[model.key] = model.default_value;
            }else{
                console.error(model_name + 'に' + model.key + 'は必須です',base_data);
            }
        }
        // TODO: 元の設定データないに使われてないkey名があればconsoleで表示
        return ret;
    },{}),next_level_key};
}

groups = groups.reduce(function setData(ret_ary,current_level_data){
    let {formated_data,next_level_key} = createFormatedDataByModel(current_level_data,model);
    if(next_level_key){
        formated_data[next_level_key] = current_level_data[next_level_key].reduce( setData ,[]);
    }
    formated_data && ret_ary.push(formated_data);
    return ret_ary;
},[]);

export default groups