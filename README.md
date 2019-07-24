# react-slidePage

## Introduction

react-slidePage is a fullscreen scrolling component of React, Based on [slidePage](https://github.com/lipten/slidePage)

### Demo

* [simple](http://lipten.link/projects/slidePage3/examples/simple.html)
* [custom](http://lipten.link/projects/slidePage3/examples/custom.html)

### Usage

#### Install

```bash
$ npm i -S react-slidepage
```

Work on a React instance:

```JSX
require('react-slidepage/lib/index.css');
import { SlideContainer, SlidePage } from 'react-slidepage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {name: 'Page1', class: 'page1'}
        {name: 'Page2', class: 'page2'}
      ]
    }
  }
  render() {
    return (
      <SlideContainer>
        {
          this.state.list.map((item, index) => {
            return (
              <SlidePage className={item.class}>
                {item.name}
              </SlidePage>
            )
          })
        }
      </SlideContainer>
    )
  }
}
```

## Props

SlideContainer:

<table>
  <thead>
  <tr>
    <th>name</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>page</td>
      <td>Number</td>
      <td>1</td>
      <td>初始页码</td>
    </tr>
    <tr>
      <td>useAnimation</td>
      <td>Boolean</td>
      <td>true</td>
      <td>是否开启动画</td>
    </tr>
    <tr>
      <td>refresh</td>
      <td>Boolean</td>
      <td>true</td>
      <td>每次滚动进入是否重新执行动画</td>
    </tr>
    <tr>
      <td>useWheel</td>
      <td>Boolean</td>
      <td>true</td>
      <td>是否开启鼠标滚轮滑动</td>
    </tr>
    <tr>
      <td>useSwipe</td>
      <td>Boolean</td>
      <td>true</td>
      <td>是否开启移动端触控滑动</td>
    </tr>
  </tbody>
</table>

### Events Props

SlideContainer:

<table>
  <thead>
  <tr>
    <th>name</th>
    <th>description</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>before</td>
      <td>每次全屏滚动前触发事件，回调三个参数(origin, direction, target)，分别是滚动前的page序号、方向('next'/'prev')、滚动后的page序号</td>
    </tr>
    <tr>
      <td>after</td>
      <td>次全屏滚动后触发事件，回调三个参数(origin, direction, target)，参数释义同上</td>
    </tr>
  </tbody>
</table>

# License
MIT
