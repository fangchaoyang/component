```
虚线/实线

    WebGLRenderer在window下不支持设置lineWidth；有两个解决方案：
    1.使用libs目录中的CanvasRender可以设置线宽，缺点是整体字会变大且在mac os 上性能表现很差;
    2.使用THREE.MeshLine组件；推荐使用第二种(详情可见svn中src/three目录下DashLine工具类中方法)。
```
 
```
3d模型嵌套（透过外部模型看到内部模型）

    首先将外部模型设为透明，然后将内部模型的渲染顺序(renderOrder)值设定为大于外部模型的renderOrder值即可（如Object.renderOrder=1）,
    还需要对mesh的material.depthTest属性设置为false（如：mesh.material.depthTest=false;）
```

```
为模型绑定事件(如拖拽、触摸等)

    如果想对模型进行交互添加事件，需要在文件中导入three-dragcontrols（如：const dragcontrols = require('three-dragcontrols').default;）
    然后就可以对模型添加监听事件（注：绑定的模型需要添加到数组中，然后将事件绑定给数组），如 const dargControls = new dragcontrols([Object],
    camera, renderer.domElement);dargControls.addEventListener( 'dragstart',  ( event: any ) => {} ); 如果使用这种方式绑定事件需要将
    控制器换为three-trackballcontrols（导入方式如：const TrackballControls = require('three-trackballcontrols');）具体设置请看案例
```

```
将世界(屏幕)坐标转换为three.js坐标

    getMousePos(event: any, x: number, y: number) {
        const vector = new Vector3();
        vector.set((x / document.getElementById('box').getBoundingClientRect().width
        ) * 2 - 1,
            (-y / document.getElementById('box').getBoundingClientRect().height) * 2 + 1, 0);
        vector.unproject(this.camera);
        const dir = vector.sub(this.camera.position).normalize();
        const distance = -this.camera.position.z / dir.z;
        const pos = this.camera.position.clone().add(dir.multiplyScalar(distance));
        return {
            x: pos.x,
            y: pos.y
        };
    }
```

```
加载图片不显示的问题(具体报错显示：)Access to Image at 'file:///C:/workSpace/dist/widget/math/r14/zxdfcdxs/sub_static/jiantou.png'
from origin 'null' has been blocked by CORS policy: Invalid response. Origin 'null' is therefore not allowed access.

    将项目放在nginx上启动图片显示正常
```
