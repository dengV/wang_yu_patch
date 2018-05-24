
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



```
[JPEngine startEngine];
//  "wang_yu_patch/JS_Patch/js_patch/Resources_dng/sample_dng.js"
// 这个是 path, 路径， 不知道 怎么用


//@"https://github.com/dengV/wang_yu_patch/blob/master/JS_Patch/js_patch/Resources_dng/sample_dng.js";
// 直接 用上面的 网络链接， 然后 he he 了。

NSURLSession * session = [NSURLSession sharedSession];
NSString * urlString = @"https://raw.githubusercontent.com/dengV/wang_yu_patch/master/JS_Patch/js_patch/Resources_dng/sample_dng.js";
urlString = @"https://raw.githubusercontent.com/dengV/wang_yu_patch/master/JS_Patch/js_patch/Resources_dng/0.js";
urlString = @"https://raw.githubusercontent.com/dengV/wang_yu_patch/master/JS_Patch/js_patch/Resources_dng/1.js";

urlString = @"https://raw.githubusercontent.com/dengV/wang_yu_patch/master/JS_Patch/js_patch/Resources_dng/true.js";
NSURLRequest * urlRequest = [[NSURLRequest alloc] initWithURL:  [[NSURL alloc] initWithString: urlString ] cachePolicy: NSURLRequestReloadIgnoringLocalCacheData timeoutInterval: 360];

//  https://raw.githubusercontent.com/dengV/wang_yu_patch/master/JS_Patch/js_patch/Resources_dng/sample_dng.js
/*   NSURLSessionDataTask * sessionTask = [session dataTaskWithURL:  [[NSURL alloc] initWithString: urlString ] completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
NSString * scriptStr = [[NSString alloc] initWithData: data encoding: NSUTF8StringEncoding ];

[JPEngine evaluateScript: scriptStr];

}];

*/


NSURLSessionDataTask * sessionTask = [session dataTaskWithRequest: urlRequest completionHandler:^(NSData * _Nullable data, NSURLResponse * _Nullable response, NSError * _Nullable error) {
NSString * scriptStr = [[NSString alloc] initWithData: data encoding: NSUTF8StringEncoding ];

[JPEngine evaluateScript: scriptStr];

}];


[sessionTask resume];






// 妈的， 我请求， 还有一个 缓存时延
// 虽然 我在 github  上面 改了数据， 然而没有什么卵用
// 果断 配置 网络缓存请求， 使用    忽略本地缓存数据，直接请求服务端.
// 问题 还在。     github ， raw 的问题？      , github 有问题， 加 文件， 不就可以啦。
//                       有问题\\
// 在线 分发解决了， 然后就是 解决 分发写入 硬盘的持久化了。


```
