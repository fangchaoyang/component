```
隐藏加载框

在静态资源加载完成后调用ViewController.hideLoading()方法关闭loading加载框
```
 
```
调试vconsole

标题增加id='title'
默认加载vconsole框，点击6下title 显示vconsole
```

```
尽量不要[动态]改变右侧控制面板的高度

当右侧控制面板高度超出屏幕尺寸出现滚动条时，如需要动态改变控制面板高度，使用ViewController.getInstance().scrollerUpdate();来更新滚动条
```

```
启用手势缩放功能

默认关闭手势缩放内容区域功能，如需开启调用ViewController.getInstance().scaleViewContent() 方法
```

```
自定义加载框

实现LoadingInterface接口，并在create()方法之前实例化到window['customLoading'] 
```

```
层级关系
(待完善)
横屏提示的z-index =10，loading图的z-index = 999，习题框架的题目模块z-index = 9
```