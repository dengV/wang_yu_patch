
```

// 执行 本地的 js 文件
NSString * sourcePath = [[NSBundle mainBundle] pathForResource:@"sample_dng" ofType: @"js" ];
NSString * scriptStr = [NSString stringWithContentsOfFile: sourcePath encoding: NSUTF8StringEncoding error: nil ];
[JPEngine evaluateScript: scriptStr];

```



<hr>
