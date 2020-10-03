export const groups = [
    {
        label: '',
        id: 'default',
        units: [
            {
                label: 'イベント名',
                id: 'name',
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
                id: 'event_date',
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
            }
        ]
    }
];