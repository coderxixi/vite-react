import { log } from "console";

export function myVitePlugin(option){
  console.log('myviteplugin中插件打印:',option);
  return {
    name:'my-vite-plugin',
     // command 为 `serve`(开发环境) 或者 `build`(生产环境)
     transformIndexHtml(html) {
      return html.replace(
        /<title>(.*?)<\/title>/,
        `<title>${option.name}</title>`
      )
    },
  config(config, { command }) {
    // 生产环境中修改 root 参数
 
  },
    load(id){
   
    },
    // resolveId(id){
    //   console.log('resolveId',id);
    // },
    // transform(id){
    //   console.log('transform',id);
    // },
    // buildEnd(id){
    //   console.log('buildEnd',id)
    // },
    // closeBundle(id){
    //   console.log('closeBundle',id)
    // }
  }
}