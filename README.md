# wang_yu_patch
enpowered by wang yu



<hr>


<hr>

JSPatch , 远程控制

<hr>




> https://github.com/libffi/libffi


> Some programs may not know at the time of compilation what arguments are to be passed to a function. For instance, an interpreter may be told at run-time about the number and types of arguments used to call a given function. Libffi can be used in such programs to provide a bridge from the interpreter program to compiled code.

Libffi 


> FFI stands for Foreign Function Interface. A foreign function interface is the popular name for the interface that allows code written in one language to call code written in another language. The libffi library really only provides the lowest, machine dependent layer of a fully featured foreign function interface. A layer must exist above libffi that handles type conversions for values passed between the two languages.


### What is libffi? 写的挺精彩的

<hr>


<hr>

目测搞热修复最 niubinish 的，自然是 bang.


### [bang590/JSPatch](https://github.com/bang590/JSPatch)



<hr>





<hr>




# 这是一个民间 repo , 用于 代码设计，  源码 分析与 解读
# 起源于 王宇的 作品，这是文档/ demo 加强版

> 老王在 elema 的分享 : [如何编写 iOS Patch](http://www.itdks.com/dakalive/detail/10298), IT 大咖说，还是有用的


<hr>


感觉 加一个 虚拟机 ， 会好一些。
JSVirtualMachine


JSExport


<hr>


官方 repo :


[wangyunico/iOSPatchBackend](https://github.com/wangyunico/iOSPatchBackend)



[wangyunico/patch-loader-Draft](https://github.com/wangyunico/patch-loader-Draft)

<hr>


<hr>

<hr>


> 效果是这样滴， 下发前后， 按钮点击的颜色有变化


### 前端代码这样起:

> npm run build






<hr>


<hr>



20180503 以前的感想



#### 确实是有源码，但是没有服务端的配置。

Webpack 的服务器配置，要我自己写。
起不了 node.



参考链接:   [Xcode 7.3 cannot create __weak reference in file using manual reference counting
](https://stackoverflow.com/questions/36147625/xcode-7-3-cannot-create-weak-reference-in-file-using-manual-reference-counting)




