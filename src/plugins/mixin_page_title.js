export const mixin_page_title = {
  data(){
    return {
      page_title_replace_settings:[] // view側で設定されれれば置換処理が入る
    }
  },
  methods:{
    setPageTitle (to){
      let _title = '',
        _site_title = 'Backoffice',
        _route = to || this.$route;
      
      if(_route.meta.title){
        let _page_title = _route.meta.title;
        this.page_title_replace_settings.forEach(replace_setting => {
          let _re = new RegExp(replace_setting.replaced_str, 'g');
          _page_title = _page_title.replace(_re,replace_setting.replace_str);
        });
        _title = _page_title + ' | ' + _site_title;
      } else {
        _title = _site_title;
      }
      document.title = _title;
    }
  },
  watch:{
    '$route':{
      handler(to){
        this.setPageTitle(to);
      },
      immediate:true
    }
  }
}