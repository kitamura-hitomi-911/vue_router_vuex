<template>
    <div class="event_form" v-if="is_disp">
        <dl>
            <dt>イベント名</dt>
            <dd>{{event.name}}</dd>
        </dl>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: 'EventForm',
        props: {
            is_disp: {
                type: Boolean,
                required: true
            }
        },
        computed: {
            event(){
                let _event = this.getEvents({url_name: this.url_name});
                return _event.length ? _event[0] : null;
            },
            ...mapGetters('events', ['getEvents'])
        },
        method: {
            ...mapActions('events', ['getAllEvents', 'updateEvents'])
        }
    };
</script>

<style lang="scss">
    .event_form {


    }
</style>