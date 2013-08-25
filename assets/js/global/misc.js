// <!-- Analytics -->
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-34157798-2', 'leungwensen.github.io');
ga('send', 'pageview');
// <!-- social buttons -->
(function(doc,script){
var js,fjs=doc.getElementsByTagName(script)[0],frag=doc.createDocumentFragment(),
add=function(url, id) {if (doc.getElementById(id)) {return;}
js=doc.createElement(script);js.src=url;id && (js.id = id);frag.appendChild(js);};
add('http://apis.google.com/js/plusone.js');// Google+ button
add('http://connect.facebook.net/en_US/all.js#xfbml=1&appId=502246906455468', 'facebook-jssdk');// Facebook SDK
add('http://platform.twitter.com/widgets.js');// Twitter SDK
fjs.parentNode.insertBefore(frag, fjs);}(document, 'script'));
