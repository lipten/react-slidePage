import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css'
import cx from 'classnames'
require('../../lib/index.css');
import {SlideContainer, SlidePage} from '../../lib';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.initPage = 1
    this.state = {
      list: [
        {name: 'Page1 - 自定义动画', class: 'page1', hasStep: true},
        {name: 'Page2 - 定制分页', class: 'page2', hasTips: true},
        {name: 'Page3 - 侦测内容长度滚动', class: 'page3', hasList: true},
        {name: 'Page4 - 动态添加page', class: 'page1', isAdd: true},
      ],
      curPage: this.initPage,
    }
  }
  onBefore(origin, direction, target) {
    this.setState({curPage: target})
  }
  prevPage() {
    this.refs['SlideContainer'].slidePrev()
  }
  nextPage() {
    this.refs['SlideContainer'].slideNext()
  }
  slideTo(page) {
    this.refs['SlideContainer'].slideTo(page)
    this.setState({curPage: page})
  }
  addPage() {
    const list = this.state.list
    list.push({name: 'Page' + (list.length+1) + ' - 删除最后Page', class: 'page4', isRemove: true})
    this.setState({list: list}, () => {
      this.refs['SlideContainer'].update()
    })
  }
  removePage() {
    const list = this.state.list
    // 每次删除最后一个page
    list.splice(list.length - 1, 1);
    this.setState({
      list: list,
      // 当删除到当前位置的page则自动跳转到第一个page，没有删除当前page则保持当前位置
      curPage: this.state.curPage === (list.length + 1) ? 1 : this.state.curPage
    }, () => {
      this.refs['SlideContainer'].update()
    })
  }
  render() {
    let {list, curPage} = this.state;
    return (
      <div id={styles['custom-slidePage']}>
        <SlideContainer page={this.initPage} ref="SlideContainer" before={this.onBefore.bind(this)}>
          {
            list.map((item, index) => {
              return (
                <SlidePage className={cx(styles['slide-page'], styles[item.class])} key={index}>
                  <h2>{item.name}</h2>
                  { item.hasStep && <div className={cx('step', styles['step1'], styles['flash'])} data-delay="1000"></div> }
                  { item.hasStep && <div className={cx('step', styles['step2'], styles['fadeIn'])} data-delay="500"></div> }

                  { item.hasTips && <p className={styles['middle']}>通过before事件和slideTo方法<br/>定制实现右侧的分页器 -- ></p> }
				          { item.hasTips && <p className={styles['tips']}>通过开放的事件接口和方法可以实现很多定制功能</p> }

                  {
                    item.hasList && 
                    <ul>
                      <li>滚动内容 - 第1条</li>
                      <li>滚动内容 - 第2条</li>
                      <li>滚动内容 - 第3条</li>
                      <li>滚动内容 - 第4条</li>
                      <li>滚动内容 - 最后1条内容</li>
                    </ul>
                  }

                  { item.isAdd && <button className={styles['add']} onClick={this.addPage.bind(this)}>添加page</button> }
                  { item.isRemove && <button className={styles['remove']} onClick={this.removePage.bind(this, index)}>删除page</button> }
                </SlidePage>
              );
            })
          }
        </SlideContainer>
        <div className={styles['pagination']}>
          <div className={styles['prev-page']} onClick={this.prevPage.bind(this)}>&Lambda;</div>
          {
            list.map((item, index) => {
              return <a key={index}
                  onClick={this.slideTo.bind(this,index+1)}
                  className={cx({[styles['active']]: curPage === index+1})}></a>
            })
          }
          <div className={styles['next-page']} onClick={this.nextPage.bind(this)}>V</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('example'));
