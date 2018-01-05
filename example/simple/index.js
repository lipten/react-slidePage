import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css'
import cx from 'classnames'
import {SlideContainer, SlidePage} from 'src';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {name: 'Page1 - 简单示例', class: 'page1', hasStep: true},
        {name: 'Page2 - 内容滚动', class: 'page2', hasList: true},
        {name: 'Page3 - 更多示例', class: 'page3', hasBtn: true},
      ],
    }
  }
  goCustom() {
    location.href = '../custom/index.html'
  }
  render() {
    let {list} = this.state;
    return (
      <SlideContainer>
        {
          list.map((item, index) => {
            return (
              <SlidePage className={cx(styles['slide-page'], styles[item.class])} key={index}>
                <h2>{item.name}</h2>
                {
                  index == 0 &&
                  <div>
                    <div className={cx('step', styles['step1'], styles['flash'])} data-delay="1000"></div>
                    <div className={cx('step', styles['step2'], styles['fadeIn'])} data-delay="500"></div>
                  </div>
                }
                {
                  !!item.hasList && 
                  <ul>
                    <li>滚动内容 - 第1条</li>
                    <li>滚动内容 - 第2条</li>
                    <li>滚动内容 - 第3条</li>
                    <li>滚动内容 - 第4条</li>
                    <li>滚动内容 - 最后1条内容</li>
                  </ul>
                }
                {
                  !!item.hasBtn && 
                  <button className={styles['add']} onClick={this.goCustom}>更多示例</button>
                }
              </SlidePage>
            );
          })
        }
        </SlideContainer>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('example'));
