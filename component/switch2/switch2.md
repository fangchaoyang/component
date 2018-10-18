# 箭头按钮组件

## Features

- 为了便于开发，提取为组件使用

## How to use

### Import

使用以下方式导入组件

```sh
   import switch2 from '../../../../src/component/ui/switch2';
```

### statement

在导入文件后在components中声明组件

```sh
   components: {
       switch2
    },
```

### use
直接以标签的形式引入组件,传入相应参数即可：
switch3Option配置按钮范围 , 
switch3Model配置按钮的当前值 , 
vertical样式可以将按钮横置.
```sh
      <switch2 v-bind="switch3Option" v-model="switch3Model" ></switch2>
      <switch2 v-bind="switch3Option" v-model="switch3Model" v-bind:vertical="vertical"></switch2>

        data() {
            return {
                switch3Option = {
                    datas: ['1', '2', '3', '4']
                };
                switch3Model = '3';
                vertical = true;
            };
        },
```