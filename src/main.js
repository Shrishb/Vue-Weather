import Vue from 'vue'
import App from './App.vue'
import FusionCharts from 'fusioncharts'
import Charts from 'fusioncharts/fusioncharts.charts'
import Widgets from 'fusioncharts/fusioncharts.widgets'
import VueFusionCharts from 'vue-fusioncharts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
import PowerCharts from 'fusioncharts/fusioncharts.powercharts'


Charts(FusionCharts);
PowerCharts(FusionCharts);
Widgets(FusionCharts);
FusionTheme(FusionCharts);

Vue.use(VueFusionCharts, FusionCharts)

FusionCharts.options.creditLabel = false;

new Vue({
  el: '#app',
  render: h => h(App)
})
