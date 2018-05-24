
```


[JPEngine startEngine];
[JPEngine evaluateScript: @"\
var alertView = require('UIAlertView').alloc().init();\
alertView.setTitle('Alert_邓');\
alertView.setMessage('AlertView From JS File');\
alertView.addButtonWithTitle('OK');\
alertView.show();\
"];



//      var alertView = require('UIAlertView').alloc.init();\
//      我擦，         alloc   后面 ， 还要 加 括号

```



<hr>


<hr>
