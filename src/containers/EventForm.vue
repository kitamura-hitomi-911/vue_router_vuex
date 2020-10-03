<template>
    <div class="event_form" v-if="is_disp">
        <dl v-for="unit in units" :key="unit.id">
            <dt>{{unit.label}}</dt>
            <dd>
                <div class="form_item" v-for="item in unit.items" :key="item.name">
                    {{item.label}}{{event[item.name]}}
                </div>
            </dd>
        </dl>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {groups} from '@/definition/event';

    export default {
        name: 'EventForm',
        data(){
            return {
                groups
            }
        },
        props: {
            is_disp: {
                type: Boolean,
                required: true
            },
            url_name:{
                type:[String,Number]
            }
        },
        computed: {
            event(){
                let _event = this.url_name ? this.getEvents({url_name: this.url_name}) : [];
                return _event.length ? _event[0] : null;
            },
            units(){
                return this.groups.length ? this.groups[0].units : [];
            },
            ...mapGetters('events', ['getEvents'])
        },
        method: {

        }
    };
</script>

<style lang="scss">
    .event_form {


    }
</style>