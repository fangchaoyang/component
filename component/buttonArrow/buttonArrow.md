# 圆角按钮组件

## Features

- 为了便于开发，提取为组件使用

## How to use

### Import

使用以下方式导入组件

```sh
   import buttonArrow from '../../../../src/component/ui/buttonArrow';
```

### statement

在导入文件后在components中声明组件

```sh
   components: {
       buttonArrow
    },
```

### use
直接以标签的形式引入组件,传入相应参数即可：
steps 提供一个回调函数会在点击按钮的时候触发相应的回调函数

```sh
       <buttonArrow v-bind:steps="stepArry" ></buttonArrow>

        computed: {
            stepArry() {
                 return [
                            () => {},
                            () => {},
                            () => {}
                        ];
            }
        }
```