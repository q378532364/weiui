
// 解决引入scss文件ts提示不存在模块的问题
declare module '*.scss' {
  const css: {
    classPrefix: string
    [key: string]: string
  }
  export default css;
}


