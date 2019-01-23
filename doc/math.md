```
画虚线

需求效果：
绘制的虚线在模型内部或背面，在正面可见。

解决方案：
首先保证除线之外的模型是不透明的，然后需要看不见的线材质设置成透明材质，就可以了，具体可参考简单组合体的三视图案例。
```
```
画曲线	

需求效果：
绘制的曲线在模型内部或背面，在正面可见	

解决方案：
首先保证除线之外的模型是不透明的，然后需要看不见的线材质设置成透明材质，就可以了，具体可参考球面距离经纬度案例。
```
```
绘制文字	

需求效果：
绘制的文字在模型内部或背面，在正面可见。

解决方案：
在创建文字方法中添加一句代码即可  text.material.depthTest = !1。
```
```
3D建模模型透明设置无效	
需求效果：
外部的模型透明后内部模型可见模型

解决方案：
需要建模的时候，里面的模型附加给外面的模型，才能让外面的模型给透明时能看见里面的模型，或者导出两个模型，将要设置透明的后加到scene中， 具体可以参考空间足球受力问题微件，空间小球受力问题微件。
```
```
3D模型画实线虚线的方法	

需求效果：
画边框线条，在看不见的时候实线变成虚线。

解决方案：
需要在建模的时候，本身模型是一个模型，实线是一个模型。虚线是一个模型，需要分别导出，即最好拿到手的是三个模型，然后加入到同一个场景中或Object3D中。
```
```
ThreeJs 

需求效果：
线条加粗(因webGL线宽设置不支持大多数平台，所以线条加粗需要使用特殊手段)

解决方案：	
使用封装好的方法line, 在IOS系统中需要重新进行适配(调整线条的粗细)。
```