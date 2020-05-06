### Welcome to use MarkDown

### 一、可选链背景：
 * 1、可选链操作符是一个新的js api，它允许读取一个被连接对象的深层次的属性的值而无需明确校验链条上每一个引用的有效性。
 * 2、目前处于Stage 3提案阶段，暂时不可以直接使用，可以通过babel编译器使用。
 * 3、js代码中可以直接使用，如：if(a?.b?.c?.d) { ... }，但是Vue Template模板中无法直接使用可选链。

### 二、解决Vue Template模板中无法使用可选链的问题
 * 1:安装依赖  cnpm install  @babel/plugin-proposal-optional-chaining -S；
 * 2:在babel.config.js中  的 plugins中添加 "@babel/plugin-proposal-optional-chaining"；
 * 3:main.js引入该方法 => Vue.prototype.$$ = optionalChaining。

### 三、使用案例
 * 1、使用之前：new Vue({ template: '<div v-if="a && a.b && a.b.c">{{ a.b.c.d }}</div>' }) 层层判断有值，否则会报错xx undefined；
 * 2、使用之后：new Vue({ template: '<div>{{ $$(a, 'b', 'c', 'd') }}</div>' })。

### 四、兼容性
 * 跟vue兼容性一样，不支持 IE8 及以下版本。