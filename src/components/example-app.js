Polymer({
  is: 'example-app',
  properties: {
    apiRoot: {
        type: String,
        value: window.API_ROOT
    },
    route: Object,
    jsonldData: {
        type: String,
        observer: 'setJSONLDFromBackend'
    }
  },
  second() {
    this.set('routeData.page', 'second');
  },
  home() {
    this.set('routeData.page', '');
  },
  setJSONLDFromBackend: function(jsonldData) {
      var script = document.getElementById('json-ld-script');
      script.text = jsonldData;
  },
});
