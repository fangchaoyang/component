# 箭头按钮组件

## Features

- 为了便于开发，提取为组件使用

## How to use

### Import

使用以下方式导入组件

```sh
   import buttonPrimary from '../../../../src/component/ui/buttonPrimary';
```

### statement

在导入文件后在components中声明组件

```sh
   components: {
       buttonPrimary
    },
```

### use
直接以标签的形式引入组件,传入相应参数即可：
title表示按钮显示的值 ,
type = 'ellipse'表示圆角按钮 ,
active属性为按钮高亮样式 ,
event_disabled属性为按钮不可点击样式.

```sh
       <buttonPrimary  v-bind:title="title" type="ellipse" v-bind:class="{active: isActive, event_disabled: isDisabled}" ></buttonPrimary>

        data() {
            return {
               title: '椭圆按钮',
               isActive: false,
               isDisabled: false,
            };
        },
```