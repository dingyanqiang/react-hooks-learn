import { projectEnvironment } from '@/constant';

//postMessage滚动到页面或者iframe顶部
export function scrollTo(x: number = 0, y: number = 0) {
  if(window.top && window.top.frames.length) {
    //window.top.scrollTo(x, y);
    console.log('postMessage:','rollTop');
    window.top.postMessage('rollTop', projectEnvironment.host);
  } else {
    window.scrollTo(x, y);
  }
}

//postMessage设置iFrame高度
export function postMessage() {
  if(window.top && window.top.frames.length) {
    let root = document.getElementById('root');
    
    if(window['J_Timer']) {
      clearTimeout(window['J_Timer']);
    }
    window['J_Timer'] = setTimeout(() => {
      let height = root.offsetHeight + 10;
      console.log('postMessage:',height);
      window.top.postMessage(height, projectEnvironment.host);
    }, 300);

  }
}