window.PR_SHOULD_USE_CONTINUATION=!0;
(function(){function L(a){function l(a){var f=a.charCodeAt(0);if(92!==f)return f;var b=a.charAt(1);return(f=q[b])?f:"0"<=b&&"7">=b?parseInt(a.substring(1),8):"u"===b||"x"===b?parseInt(a.substring(2),16):a.charCodeAt(1)}function g(a){if(32>a)return(16>a?"\\x0":"\\x")+a.toString(16);a=String.fromCharCode(a);if("\\"===a||"-"===a||"["===a||"]"===a)a="\\"+a;return a}function h(a){for(var f=a.substring(1,a.length-1).match(RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]","g")),
a=[],b=[],o="^"===f[0],c=o?1:0,i=f.length;c<i;++c){var j=f[c];if(/\\[bdsw]/i.test(j))a.push(j);else{var j=l(j),d;c+2<i&&"-"===f[c+1]?(d=l(f[c+2]),c+=2):d=j;b.push([j,d]);65>d||122<j||(65>d||90<j||b.push([Math.max(65,j)|32,Math.min(d,90)|32]),97>d||122<j||b.push([Math.max(97,j)&-33,Math.min(d,122)&-33]))}}b.sort(function(a,b){return a[0]-b[0]||b[1]-a[1]});f=[];j=[NaN,NaN];for(c=0;c<b.length;++c)i=b[c],i[0]<=j[1]+1?j[1]=Math.max(j[1],i[1]):f.push(j=i);b=["["];o&&b.push("^");b.push.apply(b,a);for(c=
0;c<f.length;++c)i=f[c],b.push(g(i[0])),i[1]>i[0]&&(i[1]+1>i[0]&&b.push("-"),b.push(g(i[1])));b.push("]");return b.join("")}function x(a){for(var f=a.source.match(RegExp("(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)","g")),b=f.length,d=[],c=0,i=0;c<b;++c){var j=f[c];"("===j?++i:"\\"===j.charAt(0)&&(j=+j.substring(1))&&j<=i&&(d[j]=-1)}for(c=1;c<d.length;++c)-1===d[c]&&(d[c]=++r);for(i=c=0;c<
b;++c)j=f[c],"("===j?(++i,void 0===d[i]&&(f[c]="(?:")):"\\"===j.charAt(0)&&(j=+j.substring(1))&&j<=i&&(f[c]="\\"+d[i]);for(i=c=0;c<b;++c)"^"===f[c]&&"^"!==f[c+1]&&(f[c]="");if(a.ignoreCase&&s)for(c=0;c<b;++c)j=f[c],a=j.charAt(0),2<=j.length&&"["===a?f[c]=h(j):"\\"!==a&&(f[c]=j.replace(/[a-zA-Z]/g,function(a){a=a.charCodeAt(0);return"["+String.fromCharCode(a&-33,a|32)+"]"}));return f.join("")}for(var r=0,s=!1,k=!1,p=0,d=a.length;p<d;++p){var e=a[p];if(e.ignoreCase)k=!0;else if(/[a-z]/i.test(e.source.replace(/\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi,
""))){s=!0;k=!1;break}}for(var q={b:8,t:9,n:10,v:11,f:12,r:13},m=[],p=0,d=a.length;p<d;++p){e=a[p];if(e.global||e.multiline)throw Error(""+e);m.push("(?:"+x(e)+")")}return RegExp(m.join("|"),k?"gi":"g")}function M(a){function l(a){switch(a.nodeType){case 1:if(g.test(a.className))break;for(var e=a.firstChild;e;e=e.nextSibling)l(e);e=a.nodeName;if("BR"===e||"LI"===e)h[s]="\n",r[s<<1]=x++,r[s++<<1|1]=a;break;case 3:case 4:e=a.nodeValue,e.length&&(e=p?e.replace(/\r\n?/g,"\n"):e.replace(/[ \t\r\n]+/g,
" "),h[s]=e,r[s<<1]=x,x+=e.length,r[s++<<1|1]=a)}}var g=/(?:^|\s)nocode(?:\s|$)/,h=[],x=0,r=[],s=0,k;a.currentStyle?k=a.currentStyle.whiteSpace:window.getComputedStyle&&(k=document.defaultView.getComputedStyle(a,null).getPropertyValue("white-space"));var p=k&&"pre"===k.substring(0,3);l(a);return{sourceCode:h.join("").replace(/\n$/,""),spans:r}}function B(a,l,g,h){l&&(a={sourceCode:l,basePos:a},g(a),h.push.apply(h,a.decorations))}function w(a,l){var g={},h;(function(){for(var s=a.concat(l),k=[],p=
{},d=0,e=s.length;d<e;++d){var q=s[d],m=q[3];if(m)for(var r=m.length;0<=--r;)g[m.charAt(r)]=q;q=q[1];m=""+q;p.hasOwnProperty(m)||(k.push(q),p[m]=null)}k.push(/[\0-\uffff]/);h=L(k)})();var x=l.length,r=function(a){for(var k=a.basePos,p=[k,"pln"],d=0,e=a.sourceCode.match(h)||[],q={},m=0,n=e.length;m<n;++m){var f=e[m],b=q[f],o=void 0,c;if("string"===typeof b)c=!1;else{var i=g[f.charAt(0)];if(i)o=f.match(i[1]),b=i[0];else{for(c=0;c<x;++c)if(i=l[c],o=f.match(i[1])){b=i[0];break}o||(b="pln")}if((c=5<=b.length&&
"lang-"===b.substring(0,5))&&!(o&&"string"===typeof o[1]))c=!1,b="src";c||(q[f]=b)}i=d;d+=f.length;if(c){c=o[1];var j=f.indexOf(c),y=j+c.length;o[2]&&(y=f.length-o[2].length,j=y-c.length);b=b.substring(5);B(k+i,f.substring(0,j),r,p);B(k+i+j,c,C(b,c),p);B(k+i+y,f.substring(y),r,p)}else p.push(k+i,b)}a.decorations=p};return r}function t(a){var l=[],g=[];a.tripleQuotedStrings?l.push(["str",/^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/,
null,"'\""]):a.multiLineStrings?l.push(["str",/^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/,null,"'\"`"]):l.push(["str",/^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/,null,"\"'"]);a.verbatimStrings&&g.push(["str",/^@\"(?:[^\"]|\"\")*(?:\"|$)/,null]);var h=a.hashComments;h&&(a.cStyleComments?(1<h?l.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,null,"#"]):l.push(["com",/^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/,
null,"#"]),g.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,null])):l.push(["com",/^#[^\r\n]*/,null,"#"]));a.cStyleComments&&(g.push(["com",/^\/\/[^\r\n]*/,null]),g.push(["com",/^\/\*[\s\S]*?(?:\*\/|$)/,null]));a.regexLiterals&&g.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|\\!|\\!=|\\!==|\\#|\\%|\\%=|&|&&|&&=|&=|\\(|\\*|\\*=|\\+=|\\,|\\-=|\\->|\\/|\\/=|:|::|\\;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\@|\\[|\\^|\\^=|\\^\\^|\\^\\^=|\\{|\\||\\|=|\\|\\||\\|\\|=|\\~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C[\\s\\S]|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+/)")]);
(h=a.types)&&g.push(["typ",h]);a=(""+a.keywords).replace(/^ | $/g,"");a.length&&g.push(["kwd",RegExp("^(?:"+a.replace(/[\s,]+/g,"|")+")\\b"),null]);l.push(["pln",/^\s+/,null," \r\n\t "]);g.push(["lit",/^@[a-z_$][a-z_$@0-9]*/i,null],["typ",/^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/,null],["pln",/^[a-z_$][a-z_$@0-9]*/i,null],["lit",/^(?:0x[a-f0-9]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+\-]?\d+)?)[a-z]*/i,null,"0123456789"],["pln",/^\\[\s\S]?/,null],["pun",/^.[^\s\w\.$@\'\"\`\/\#\\]*/,null]);
return w(l,g)}function D(a,l){function g(a){switch(a.nodeType){case 1:if(n.test(a.className))break;if("BR"===a.nodeName)h(a),a.parentNode&&a.parentNode.removeChild(a);else for(a=a.firstChild;a;a=a.nextSibling)g(a);break;case 3:case 4:if(p){var b=a.nodeValue,d=b.match(r);if(d){var c=b.substring(0,d.index);a.nodeValue=c;(b=b.substring(d.index+d[0].length))&&a.parentNode.insertBefore(s.createTextNode(b),a.nextSibling);h(a);c||a.parentNode.removeChild(a)}}}}function h(a){function b(a,d){var e=d?a.cloneNode(!1):
a,f=a.parentNode;if(f){var f=b(f,1),g=a.nextSibling;f.appendChild(e);for(var h=g;h;h=g)g=h.nextSibling,f.appendChild(h)}return e}for(;!a.nextSibling;)if(a=a.parentNode,!a)return;for(var a=b(a.nextSibling,0),e;(e=a.parentNode)&&1===e.nodeType;)a=e;d.push(a)}var n=/(?:^|\s)nocode(?:\s|$)/,r=/\r\n?|\n/,s=a.ownerDocument,k;a.currentStyle?k=a.currentStyle.whiteSpace:window.getComputedStyle&&(k=s.defaultView.getComputedStyle(a,null).getPropertyValue("white-space"));var p=k&&"pre"===k.substring(0,3);for(k=
s.createElement("LI");a.firstChild;)k.appendChild(a.firstChild);for(var d=[k],e=0;e<d.length;++e)g(d[e]);l===(l|0)&&d[0].setAttribute("value",l);var q=s.createElement("OL");q.className="linenums";for(var m=Math.max(0,l-1|0)||0,e=0,A=d.length;e<A;++e)k=d[e],k.className="L"+(e+m)%10,k.firstChild||k.appendChild(s.createTextNode(" ")),q.appendChild(k);a.appendChild(q)}function n(a,l){for(var g=l.length;0<=--g;){var h=l[g];z.hasOwnProperty(h)?window.console&&console.warn("cannot override language handler %s",
h):z[h]=a}}function C(a,l){if(!a||!z.hasOwnProperty(a))a=/^\s*</.test(l)?"default-markup":"default-code";return z[a]}function E(a){var l=a.langExtension;try{var g=M(a.sourceNode),h=g.sourceCode;a.sourceCode=h;a.spans=g.spans;a.basePos=0;C(l,h)(a);var n=/\bMSIE\b/.test(navigator.userAgent),l=/\n/g,r=a.sourceCode,s=r.length,g=0,k=a.spans,p=k.length,h=0,d=a.decorations,e=d.length,a=0;d[e]=s;var q,m;for(m=q=0;m<e;)d[m]!==d[m+2]?(d[q++]=d[m++],d[q++]=d[m++]):m+=2;e=q;for(m=q=0;m<e;){for(var A=d[m],f=d[m+
1],b=m+2;b+2<=e&&d[b+1]===f;)b+=2;d[q++]=A;d[q++]=f;m=b}for(d.length=q;h<p;){var o=k[h+2]||s,c=d[a+2]||s,b=Math.min(o,c),i=k[h+1],j;if(1!==i.nodeType&&(j=r.substring(g,b))){n&&(j=j.replace(l,"\r"));i.nodeValue=j;var t=i.ownerDocument,u=t.createElement("SPAN");u.className=d[a+1];var w=i.parentNode;w.replaceChild(u,i);u.appendChild(i);g<o&&(k[h+1]=i=t.createTextNode(r.substring(b,o)),w.insertBefore(i,u.nextSibling))}g=b;g>=o&&(h+=2);g>=c&&(a+=2)}}catch(v){"console"in window&&console.log(v&&v.stack?
v.stack:v)}}var u=["break,continue,do,else,for,if,return,while"],v=[[u,"auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],F=[v,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
G=[v,"abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],H=[G,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],v=[v,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],I=
[u,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],J=[u,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],u=[u,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],K=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,
N=/\S/,O=t({keywords:[F,H,v,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END"+I,J,u],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),z={};n(O,["default-code"]);n(w([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\s\S]*?(?:-\->|$)/],["lang-",/^<\?([\s\S]+?)(?:\?>|$)/],["lang-",/^<%([\s\S]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",
/^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),"default-markup,htm,html,mxml,xhtml,xml,xsl".split(","));n(w([["pln",/^[\s]+/,null," \t\r\n"],["atv",/^(?:\"[^\"]*\"?|\'[^\']*\'?)/,null,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/],
["pun",/^[=<>\/]+/],["lang-js",/^on\w+\s*=\s*\"([^\"]+)\"/i],["lang-js",/^on\w+\s*=\s*\'([^\']+)\'/i],["lang-js",/^on\w+\s*=\s*([^\"\'>\s]+)/i],["lang-css",/^style\s*=\s*\"([^\"]+)\"/i],["lang-css",/^style\s*=\s*\'([^\']+)\'/i],["lang-css",/^style\s*=\s*([^\"\'>\s]+)/i]]),["in.tag"]);n(w([],[["atv",/^[\s\S]+/]]),["uq.val"]);n(t({keywords:F,hashComments:!0,cStyleComments:!0,types:K}),"c,cc,cpp,cxx,cyc,m".split(","));n(t({keywords:"null,true,false"}),["json"]);n(t({keywords:H,hashComments:!0,cStyleComments:!0,
verbatimStrings:!0,types:K}),["cs"]);n(t({keywords:G,cStyleComments:!0}),["java"]);n(t({keywords:u,hashComments:!0,multiLineStrings:!0}),["bsh","csh","sh"]);n(t({keywords:I,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py"]);n(t({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["perl",
"pl","pm"]);n(t({keywords:J,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb"]);n(t({keywords:v,cStyleComments:!0,regexLiterals:!0}),["js"]);n(t({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]);n(w([],[["str",/^[\s\S]+/]]),["regex"]);window.prettyPrintOne=function(a,
l,g){var h=document.createElement("PRE");h.innerHTML=a;g&&D(h,g);E({langExtension:l,numberLines:g,sourceNode:h});return h.innerHTML};window.prettyPrint=function(a){function l(){for(var g=window.PR_SHOULD_USE_CONTINUATION?k.now()+250:Infinity;p<h.length&&k.now()<g;p++){var m=h[p],n=m.className;if(0<=n.indexOf("prettyprint")){var n=n.match(e),f,b;if(b=!n){b=m;for(var o=void 0,c=b.firstChild;c;c=c.nextSibling)var i=c.nodeType,o=1===i?o?b:c:3===i?N.test(c.nodeValue)?b:o:o;b=(f=o===b?void 0:o)&&"CODE"===
f.tagName}b&&(n=f.className.match(e));n&&(n=n[1]);b=!1;for(o=m.parentNode;o;o=o.parentNode)if(("pre"===o.tagName||"code"===o.tagName||"xmp"===o.tagName)&&o.className&&0<=o.className.indexOf("prettyprint")){b=!0;break}b||((b=(b=m.className.match(/\blinenums\b(?::(\d+))?/))?b[1]&&b[1].length?+b[1]:!0:!1)&&D(m,b),d={langExtension:n,sourceNode:m,numberLines:b},E(d))}}p<h.length?setTimeout(l,250):a&&a()}for(var g=[document.getElementsByTagName("pre"),document.getElementsByTagName("code"),document.getElementsByTagName("xmp")],
h=[],n=0;n<g.length;++n)for(var r=0,s=g[n].length;r<s;++r)h.push(g[n][r]);var g=null,k=Date;k.now||(k={now:function(){return+new Date}});var p=0,d,e=/\blang(?:uage)?-([\w.]+)(?!\S)/;l()};window.PR={createSimpleLexer:w,registerLangHandler:n,sourceDecorator:t,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ"}})();
