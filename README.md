# ng-echarts-lazyload
<b>make chart lazyload ability for ng-echarts</b>

<b>this plugin depend on the <a href="https://github.com/jquery/jquery">jquery</a> and <a href="https://github.com/liekkas/ng-echarts">ng-echarts</a> , turned from <a href="https://github.com/tuupola/jquery_lazyload">jquery.lazyload</a></b>

You can use it in Angular App only with the two below usage steps:

<b>1. add the jquery plugin file and directive file:</b>
  <br />
  \<script src="path/to/ng-echarts.lazyload.js"\>\</script\>
  <br />
  \<script src="path/to/ui-ng-echarts-lazyload.js"\>\</script\>

<b>2. add "ng-echarts-lazyload" attribute to the ng-echarts element within the page.</b>
  <br />
   \<ng-echarts ng-echarts-lazyload ec-config="yourEcConfig" ec-option="yourEcOption"\>\</ng-echarts\>

<b>Otherwise, you can also use it with jquery directly without the angular directive file.</b>
<br />
\<script src="path/to/ng-echarts.lazyload.js"\>\</script\>
<br />
\<script\>
$('ng-echarts').ngEcharts_lazyload();
\</script\>
