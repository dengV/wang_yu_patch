

## iOS 远端代码下发， 怎么搞 ？
一般大家都用 JSPatch?

用别人的，总不好。老王造了个轮子，我来推广一下。
##### 老王 Patch, 挺先进的。JavaScript 代码， 采用 WebPack 打包。也参考了 JSPatch ,

怎么设计这个 Patch？
### 从原理上

---

Patch 主要是 干什么的呢？
一般大公司的 App 在运行的过程当中，业务线非常复杂，可能会出现一些问题。
### 这个时候，打补丁比较好
可以远端下发一个文件，开发的 App 通过 加载 这个文件，
实行 这个 代码 补丁。
#### 这个样子，就可以通过远端， 把这个代码， 在开发的 app 运行当中，给执行过来，
OC 可以的，因为是动态语言，有 runtime ,所以才能搞这个 patch。

OC 有自己的消息转发流程。 Runtime 有 `objc_msgSend` 和 `_objc_msgForward`  。
Runtime 有这两个方法，
这两个函数特性，让所有的函数调用都会走这两个方法。
##### 这样就可以干一些 patch 的事情。

### 另外一点， 在 App 中植入了这个 patch ,他所使用的语言，能够被 eval 。
### eval， 判断代码语句可以执行
这样 app 中有一个 context, 可以执行用于 patch 的语言。

<hr>

本文中的 iOS 补丁方案直接运用 这个 JavaScriptCore,
就是使用 JavaScriptCore 提供的 JSContext.
能让 JavaScript 语言 和 Objective-C 之间，有一个接口。然后就可以 JavaScript 与 Objective-C 相互调用了。
（ 苹果自己实现的 ）


#### JSPatch 用到了 FFI，这个库老王 Patch 也使用了 FFI .
FFI， Foreign Function Interface ，就是把一个语言暴露出来的接口，能让其他语言来调用。
Java 的 JNI 标准，与 FFI 比较相似。
FFI ，首先遵从 Coding Convention ,就是定义遵守一些调用的协议和规定。
为什么要有 FFI 呢？
#### 举个 🌰：
我们执行一个函数调用，首先开辟一个栈帧，这个栈帧传递一些什么样的参数？参数的类型是什么？参数 的个数，是多少？包括这个函数里面，执行的一些动作是什么？
FFI 就把遵守的一些调用的协议和规定定义出来。

<hr>

老王 Patch 库的这个自定义 FFI , 就是把想做的 patch 语言， 对接 Objective-C 的执行环境。
需要往里面传递的命令，把这个东西，给规定出来。
#### 这个样子， 在执行这个 Patch 的过程中，就可以按照这个命令，去发相应的消息，让相应的 context ,执行需要 patch 的代码。
#### FFI 就到这里了。 开启预编译。
使用 JSPatch 的过程当中，老王发现，用的非常的不顺手，
为什么他不顺手呢？
老王以为，JSPatch 把 JavaScript 硬生转换成相当于 Objective-C 这种风格的，补丁代码。
其间，还做了很多的语言处理，包括 Bang 说的源函数的处理。
包括 C 语言函数，类似 Ruby 的 Method Mission .
至于其他， 老王以为， JSPatch 都是在后端进行的。
### JavaScript 的 逼真度
要加强Patch, 本身具有的语言的一个平滑性，就是写 JavaScript , 就使用 JavaScript 的写法
### 引出了预编译的过程：
把 JavaScriptContext 的注册接口，抽象出三个层，
#### define， 定义
define, 往 Objective-C 发消息。 不需要参数返回， 可以用 define .
需要定义的，肯定都自己定义的。
抽象出这一层，就可以了。
#### evaluate
需要一个返回值的时候，使用
去执行一些什么任务
#### Callback
老王感觉苹果封装的 JavaScriptContext，可能有一些问题。
比如说， 传递的一些函数对象，开发者封装了两层。那就可能获取不到这个对象了。
这个时候， 需要 Callback 方式，在那个执行环境当中，获取前端的 function 内容。
用 JavaScriptCore 相关的一种回调方式，来取到在当前 JavaScriptContext 环境 当中的一个 function 值。

#### 还有就是指令类型
这个 patch ，是干什么的？ 对所使用的内容， 有哪些指令?
* Patch 就是 执行 一些 Method 函数 的 一些 hook，
* 会修改 一些 property 的值了。
* 会 做一些 block 方面的改动了。
* 访问 父类 super
* 我们 可以 新增 函数，method_create

通过 这些指令，我们可以实现， 想要 patch 到的一些功能

#### 还有关键字转换：这个通过预处理来实现。要完成对一些关键字的处理。
对于 Objective-C 中的 self 关键字， 通常用来代表当前对象的指针。
还需要改 super 关键字， 为 oc_super. 因为 super 在 ECMAScript 6 里面， 也是关键字了，需要回避掉。
original， 是 Patch 中特有的。调用之前的函数，即打补丁之前的这个函数的调用。
#### 一些优化，举个 🌰： JS 写 高阶函数


对 JavaScript 高阶函数做一个平滑处理，否则可能写起来，非常费劲。
```
a.request( 

function(a:id,b:Int):double{},
callback:(string,string) => int,
(num1:string, num2:double) => { return num1 + num2; } 

);
```

request 方法， 有三个参数。三个 function 类型的参数。第一个 function 函数，接收两个参数。第二个参数 callback， 是我们在函数调用上下文中取到的。第三个参数是， ECMAScript 6 中使用的 箭头函数。
最好呢，对这个进行一些支持。
这些操作，是通过预处理的方式，
编译成，能够对接 OC 的 Block 指令的。


然后，才能 正常 完成工作。

#### JSPatch 是很好的参考,
大家都仿照 JSPatch,在 JavaScriptContext 中注册一大堆自己要进行 patch 的函数。
想要用到什么，就去补充什么。
一般都是完全借鉴 Bang 的一些想法。
#### 最好呢？ 要把 JSPatch 的这么一些想法，背后的东西，给抽象出来。


### 缺点，没使用挺好用的 JSExport 协议, JSVirtualMachine


Github 官方 repo 链接：https://github.com/wangyunico/iOSPatchBackend

我的民间 repo , 



