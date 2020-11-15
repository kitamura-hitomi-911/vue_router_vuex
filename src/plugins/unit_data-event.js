export default [
    {
        label: 'ID',
        unit_id: 'id',
        items: [
            {
                name: 'id',
                label: '',
                form_type: 'input_text',
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
                list: [
                    {
                        label: 'その1',
                        value: 1
                    },
                    {
                        label: 'その2',
                        value: 2
                    },
                    {
                        label: 'その3',
                        value: 3
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
];