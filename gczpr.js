//顶部广告
document.write('<style>@media only screen and (min-width:0px) and (max-width:980px){.bottom_fixed{ position:fixed; bottom:0px; width:100%; z-index:9999;} .bottom_fixed div{ width:30px; height:30px; text-align:center; line-height:30px; background:#CCC; right:0; top:-30px; position:absolute; cursor:pointer;}.bottom_fixed div:hover{ background:#F66; color:#FFF}.bottom_fixed a img{ width:100%;} .max30h { max-height:28px !important; } .max170h { max-height:170px !important; } } .topwz{margin-top: 10px;line-height: 30px;} .topwz span{font-weight: bold;margin-right: 10px;font-size:16px;} .topwz a {font-size: 16px;margin-right: 19px;display: inline-block;white-space: nowrap;} .topwz a:last-child {margin: 0px;}</style>');
$('#play_show').before($('#topbox'));

function randomsort(a, b) {
    return Math.random()>.5 ? -1 : 1;
}


$('#topbox').append(''+
'<a href="https://v53773.com:33005" rel="external nofollow" target="_blank"><img  src="https://n0211.com/4f830a383727431188822fbf253410ec.gif"></a>'+
'<a href="https://v53773.com:33005" rel="external nofollow" target="_blank"><img  src="https://n0211.com/4f830a383727431188822fbf253410ec.gif"></a>'+
'<a href="https://v53773.com:33005" rel="external nofollow" target="_blank"><img  src="https://n0211.com/4f830a383727431188822fbf253410ec.gif"></a>'+
'<a href="https://h5723.com:30021" rel="external nofollow" target="_blank"><img  src="https://n0211.com/3a6247843b784c72893764c9655bf968.gif"></a>'+
'<a href="https://h5723.com:30021" rel="external nofollow" target="_blank"><img  src="https://n0211.com/3a6247843b784c72893764c9655bf968.gif"></a>'+
'<a href="https://h5723.com:30021" rel="external nofollow" target="_blank"><img  src="https://n0211.com/3a6247843b784c72893764c9655bf968.gif"></a>'+
'<a href="https://m4430.com:35003" rel="external nofollow" target="_blank"><img  src="https://n0299.com/8b5c7b443ed541c8a3f3c438f29546ac.gif"></a>'+
'<a href="https://m4430.com:35003" rel="external nofollow" target="_blank"><img  src="https://n0299.com/8b5c7b443ed541c8a3f3c438f29546ac.gif"></a>'+
'<a href="https://m4430.com:35003" rel="external nofollow" target="_blank"><img  src="https://n0299.com/8b5c7b443ed541c8a3f3c438f29546ac.gif"></a>'+
'<a href="https://x9428.com:5443?register=1" rel="external nofollow" target="_blank"><img  src="https://n0277.com/a3bb9719239a44a388a4e46b0a419575.gif"></a>'+
'<a href="https://x9428.com:5443?register=1" rel="external nofollow" target="_blank"><img  src="https://n0277.com/a3bb9719239a44a388a4e46b0a419575.gif"></a>'+
'<a href="https://x9428.com:5443?register=1" rel="external nofollow" target="_blank"><img  src="https://n0277.com/a3bb9719239a44a388a4e46b0a419575.gif"></a>'+
'<a href="https://v2770.com:8663" rel="external nofollow" target="_blank"><img  src="https://n0422.com/74e43e0f24f1476396b8c90650411d13.gif"></a>'+
'<a href="https://v2770.com:8663" rel="external nofollow" target="_blank"><img  src="https://n0422.com/74e43e0f24f1476396b8c90650411d13.gif"></a>'+
'<a href="https://v2770.com:8663" rel="external nofollow" target="_blank"><img  src="https://n0422.com/74e43e0f24f1476396b8c90650411d13.gif"></a>'+
'<a href="https://u7011.com:789" rel="external nofollow" target="_blank"><img  src="https://upr3m2.com/3a73d9f170444e98967adfbc6a664ffd.gif"></a>'+
'<a href="https://0115t.com:30653" rel="external nofollow" target="_blank"><img  src="https://othbhe2.com/ce448e4023d1403690627f29171c4e33.gif"></a>'+
'<a href="https://2756s.com:1688" rel="external nofollow" target="_blank"><img  src="https://mjrvkv5.com/1498bd45e79c48b8818856dcb6b5c385.gif"></a>'+
'<a href="https://2756s.com:1688" rel="external nofollow" target="_blank"><img  src="https://mjrvkv5.com/1498bd45e79c48b8818856dcb6b5c385.gif"></a>'+
'<a href="https://2756s.com:1688" rel="external nofollow" target="_blank"><img  src="https://mjrvkv5.com/1498bd45e79c48b8818856dcb6b5c385.gif"></a>'+
'<a href="https://8116j.com:8825" rel="external nofollow" target="_blank"><img  src="https://fpvdxd5.com/66c18d2892d14ee9bd9882be6e06d221.gif"></a>'+
'');

function shuffle(arr){
  var len = arr.length;
  for(var i = 0; i < len - 1; i++){
    var idx = Math.floor(Math.random() * (len - i));
    var temp = arr[idx];
    arr[idx] = arr[len - i - 1];
    arr[len - i -1] = temp;
  }
  return arr;
}

var arrapp = ['<a href="https://lidaokj.top/?channelCode=nhJBe" target="_blank">初潮成人直播</a>',
				'<a href="https://jflanflad.top/?channelCode=MQ77" target="_blank">花芯秒播App</a>',
				  '<a href="https://35z.cc/?channelCode=rrdyfl" target="_blank">软软成人直播APP</a>',
				  '<a href="https://9156349e.com/?ch=offl2cy" target="_blank">91次元成漫APP</a>',
				  '<a href="https://ch4x9n7g.com/?_c=offl1mh" target="_blank">51成漫APP</a>',
				  '<a href="https://dstv8.top//?channelCode=dsxk_5" target="_blank">大神成人直播APP</a>',
				  '<a href="https://d.dyfoev.com?channel=tdy626j1" target="_blank">抖阴成人短视频</a>',
				  '<a href="https://楼凤阁.com/" target="_blank">楼凤阁找小姐</a>'];
var wzhtml='<div class="topwz"><span>站长推荐：</span>';
$.each(shuffle(arrapp),function(index,value){
     wzhtml+=value;
});
wzhtml=wzhtml+'</div>';

$('#topbox').append(wzhtml);

