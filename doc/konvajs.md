```
image 的层级关系

    layer每次draw之后，兄弟节点的Image的zIndex会按照draw顺序，依次递增
```
 
```
layer

    静态对象放在fastLayer 中
```

```
image

    image 需要压缩，cache （禁用监听事件）
```

```
如何对Konva进行优化

    1，动画层（Layer）和静态层(static layer)分离（静态层放图形或图片，且图片需经过压缩）
    2，图形禁用描边
    3，图形和图片(若无需监听)需禁用事件监听
    4，图形若多次使用，可使用缓存(cache)
```

```
设置目标的旋转中心点

    offset设置的x,y值是相对于目标中心点的x和y值,不是相对于原点设置
```

```
如何动态显示局部图片

    使用konva中sprite(雪碧图),在css样式中设置其background-size: cover，然后实时改变显示图片宽度即可
    案例：乙烷旋转异构体(其中根据旋转角度不同实时改变余弦曲线图片显示的宽度)
```

```
调整两张图片在一个div中层叠放置

    div样式设置position=relative;  第二张图片样式position=absolute;然后调整第二张图片的上下左右位置距离即可
```

```
雪碧图打包后显示不了的问题

    雪碧图在css中设置的为背景图片，打包时路径会出现问题，看不到该图片。 在打包后的css文件中修改其背景图片路径为正确图片路径即可
```

```
拖动图片到浏览器边缘，图片不返回原位置

    为整个dom添加事件监听:  document.addEventListener('myEvent', () => {   } );    在触摸事件时，停止触摸用touchend 或touchcancel
    案例：探究苯甲酸苯甲酯的合成路线
```

```
使用konva做图片的旋转会有性能问题

    将图片放入vue中，放置一个空的canvas容器，位置覆盖住图片，通过鼠标在canvas容器中转到得到的角度，使用css3的图片transform: rotate(angle  deg)来让图片跟着进行旋转
    案例：乙烷旋转异构体 的右侧功能区
```

```
使用konva截取canvas画布中内容，实现截图效果

    使用stage.toImage()方法可实现
    案例：具体可参考 物理R17 探究BVF三者的位置关系  微件
```
