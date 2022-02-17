<template>
  <div>
    <h1>API 概览</h1>
    <p>TextBus 整体架构采用依赖注入 + MVC 设计模式，通过&nbsp;<a target="_blank"
                                                href="https:&#x2F;&#x2F;github.com&#x2F;tbhuabi&#x2F;di">@tanbo/di</a>&nbsp;库实现了分层注入，为了你在使用过程中能正确的访问相关内部实例，你可以参考以下层级结构图，其中：
    </p>
    <ul>
      <li><strong>黑色&nbsp;</strong>部分为内部核心类；</li>
      <li><strong style="color:rgb(18, 150, 219)">蓝色&nbsp;</strong>部分为官方提供的可插拔部分；</li>
      <li><strong style="color:rgb(231, 79, 94)">红色&nbsp;</strong>部分为用户自定义的部分。</li>
    </ul>
    <p>每一个类都可以通过构造函数注入同级或上一级的类，你可以根据自己的需要，注入相关类来实现自己的功能扩展。</p>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-dark">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">Layout&nbsp;</strong><span style="color:rgb(128, 132, 143)">UI 布局类</span>
          </div>
        </div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-dark">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">EditorController&nbsp;</strong><span
              style="font-size:15px;color:rgb(119, 119, 119)">编辑器状态控制类</span></div>
        </div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-dark">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong style="font-size:18px">I18n&nbsp;</strong><span style="font-size:15px;color:rgb(119, 119, 119)">国际化类</span>
          </div>
          <tb-timeline>
            <div class="tb-timeline-item tb-timeline-item-dark">
              <div class="tb-timeline-line"></div>
              <div class="tb-timeline-icon"></div>
              <div class="tb-timeline-content">
                <div><strong style="font-size:18px">UIDialog&nbsp;</strong><span
                    style="font-size:15px;color:rgb(128, 132, 143)">对话框</span></div>
              </div>
            </div>
            <div class="tb-timeline-item tb-timeline-item-dark">
              <div class="tb-timeline-line"></div>
              <div class="tb-timeline-icon"></div>
              <div class="tb-timeline-content">
                <div><strong style="font-size:18px">UIControlPanel&nbsp;</strong><span
                    style="font-size:15px;color:rgb(119, 119, 119)">控制面板</span></div>
              </div>
            </div>
            <div class="tb-timeline-item tb-timeline-item-dark">
              <div class="tb-timeline-line"></div>
              <div class="tb-timeline-icon"></div>
              <div class="tb-timeline-content">
                <div><strong style="font-size:18px">UIMessage&nbsp;</strong><span
                    style="font-size:15px;color:rgb(119, 119, 119)">消息提示</span></div>
              </div>
            </div>
            <div class="tb-timeline-item tb-timeline-item-dark">
              <div class="tb-timeline-line"></div>
              <div class="tb-timeline-icon"></div>
              <div class="tb-timeline-content">
                <div><strong style="font-size:18px">PasteHandlePlugin&nbsp;</strong><span
                    style="font-size:15px;color:rgb(119, 119, 119)">默认粘贴资源上传处理插件</span></div>
                <tb-timeline>
                  <div class="tb-timeline-item tb-timeline-item-dark">
                    <div class="tb-timeline-line"></div>
                    <div class="tb-timeline-icon"></div>
                    <div class="tb-timeline-content">
                      <div><strong style="font-size:18px">Input&nbsp;</strong><span
                          style="font-size:15px;color:rgb(119, 119, 119)">处理 TextBus 输入的类</span></div>
                    </div>
                  </div>
                  <div class="tb-timeline-item tb-timeline-item-dark">
                    <div class="tb-timeline-line"></div>
                    <div class="tb-timeline-icon"></div>
                    <div class="tb-timeline-content">
                      <div><strong style="font-size:18px">TBHistory&nbsp;</strong><span
                          style="font-size:15px;color:rgb(128, 132, 143)">历史记录实现类</span></div>
                    </div>
                  </div>
                  <div class="tb-timeline-item tb-timeline-item-dark">
                    <div class="tb-timeline-line"></div>
                    <div class="tb-timeline-icon"></div>
                    <div class="tb-timeline-content">
                      <div><strong style="font-size:18px">RootComponent&nbsp;</strong><span
                          style="font-size:15px;color:rgb(128, 132, 143)">根组件</span></div>
                    </div>
                  </div>
                  <div class="tb-timeline-item tb-timeline-item-dark">
                    <div class="tb-timeline-line"></div>
                    <div class="tb-timeline-icon"></div>
                    <div class="tb-timeline-content">
                      <div><strong style="font-size:18px">EDITABLE_DOCUMNET&nbsp;</strong><span
                          style="font-size:15px;color:rgb(128, 132, 143)">编辑器 iframe 的 Document 对象</span></div>
                    </div>
                  </div>
                  <div class="tb-timeline-item tb-timeline-item-dark">
                    <div class="tb-timeline-line"></div>
                    <div class="tb-timeline-icon"></div>
                    <div class="tb-timeline-content">
                      <div><strong style="font-size:18px">EDITOR_OPTIONS&nbsp;</strong><span
                          style="font-size:15px;color:rgb(128, 132, 143)">创建编辑器时传入的配置对象</span></div>
                    </div>
                  </div>
                  <div class="tb-timeline-item tb-timeline-item-dark">
                    <div class="tb-timeline-line"></div>
                    <div class="tb-timeline-icon"></div>
                    <div class="tb-timeline-content">
                      <div><strong style="font-size:18px">Editor&nbsp;</strong><span
                          style="font-size:15px;color:rgb(128, 132, 143)">编辑器实例</span></div>
                    </div>
                  </div>
                  <div class="tb-timeline-item tb-timeline-item-dark">
                    <div class="tb-timeline-line"></div>
                    <div class="tb-timeline-icon"></div>
                    <div class="tb-timeline-content">
                      <div><strong style="font-size:18px">OutputRenderer&nbsp;</strong><span
                          style="font-size:15px;color:rgb(128, 132, 143)">输出渲染器</span></div>
                    </div>
                  </div>
                  <div class="tb-timeline-item tb-timeline-item-dark">
                    <div class="tb-timeline-line"></div>
                    <div class="tb-timeline-icon"></div>
                    <div class="tb-timeline-content">
                      <div><strong style="font-size:18px">OutputTranslator&nbsp;</strong><span
                          style="font-size:15px;color:rgb(128, 132, 143)">输出转换器</span></div>
                    </div>
                  </div>
                  <div class="tb-timeline-item tb-timeline-item-dark">
                    <div class="tb-timeline-line"></div>
                    <div class="tb-timeline-icon"></div>
                    <div class="tb-timeline-content">
                      <div><strong style="font-size:18px">Parser&nbsp;</strong><span
                          style="font-size:15px;color:rgb(128, 132, 143)">HTML 解析器</span></div>
                    </div>
                  </div>
                  <div class="tb-timeline-item tb-timeline-item-dark">
                    <div class="tb-timeline-line"></div>
                    <div class="tb-timeline-icon"></div>
                    <div class="tb-timeline-content">
                      <div><strong style="font-size:18px">TBSelection&nbsp;</strong><span
                          style="font-size:15px;color:rgb(128, 132, 143)">TextBus Selection 实现类</span></div>
                    </div>
                  </div>
                  <div class="tb-timeline-item tb-timeline-item-dark">
                    <div class="tb-timeline-line"></div>
                    <div class="tb-timeline-icon"></div>
                    <div class="tb-timeline-content">
                      <div><strong style="font-size:18px">Renderer&nbsp;</strong><span
                          style="font-size:15px;color:rgb(128, 132, 143)">编辑时渲染类</span></div>
                    </div>
                  </div>
                  <div class="tb-timeline-item tb-timeline-item-dark">
                    <div class="tb-timeline-line"></div>
                    <div class="tb-timeline-icon"></div>
                    <div class="tb-timeline-content">
                      <div><strong style="font-size:18px">ComponentInjectors&nbsp;</strong><span
                          style="font-size:15px;color:rgb(128, 132, 143)">组件注入器缓存类</span></div>
                      <tb-timeline>
                        <div class="tb-timeline-item tb-timeline-item-danger">
                          <div class="tb-timeline-line"></div>
                          <div class="tb-timeline-icon"></div>
                          <div class="tb-timeline-content">
                            <div><strong style="font-size:18px">Interceptor<span
                                style="color:rgb(128, 132, 143)">&nbsp;</span></strong><span
                                style="color:rgb(128, 132, 143);font-size:15px">组件编辑事件拦截器</span></div>
                          </div>
                        </div>
                        <div class="tb-timeline-item tb-timeline-item-danger">
                          <div class="tb-timeline-line"></div>
                          <div class="tb-timeline-icon"></div>
                          <div class="tb-timeline-content">
                            <div><strong style="font-size:18px">ComponentSetter</strong><span
                                style="font-size:15px;color:rgb(128, 132, 143)">&nbsp;组件设置器</span></div>
                          </div>
                        </div>
                        <div class="tb-timeline-item tb-timeline-item-danger">
                          <div class="tb-timeline-line"></div>
                          <div class="tb-timeline-icon"></div>
                          <div class="tb-timeline-content">
                            <div><strong style="font-size:18px">DynimacKeymap</strong><span
                                style="font-size:15px;color:rgb(128, 132, 143)">&nbsp;动态快捷键设置</span></div>
                          </div>
                        </div>
                      </tb-timeline>
                    </div>
                  </div>
                  <div class="tb-timeline-item tb-timeline-item-dark">
                    <div class="tb-timeline-line"></div>
                    <div class="tb-timeline-icon"></div>
                    <div class="tb-timeline-content">
                      <div><strong style="font-size:18px">FileUploader&nbsp;</strong><span
                          style="font-size:15px;color:rgb(128, 132, 143)">文件上传中间类</span></div>
                      <tb-timeline>
                        <div class="tb-timeline-item tb-timeline-item-dark">
                          <div class="tb-timeline-line"></div>
                          <div class="tb-timeline-icon"></div>
                          <div class="tb-timeline-content">
                            <div><strong style="font-size:18px">Injector&nbsp;</strong><span
                                style="font-size:15px;color:rgb(128, 132, 143)">反射注入器实例</span></div>
                          </div>
                        </div>
                        <div class="tb-timeline-item tb-timeline-item-primary">
                          <div class="tb-timeline-line"></div>
                          <div class="tb-timeline-icon"></div>
                          <div class="tb-timeline-content">
                            <div><strong style="font-size:18px">Toolbar&nbsp;</strong><span
                                style="font-size:15px;color:rgb(128, 132, 143)">工具条插件</span></div>
                          </div>
                        </div>
                        <div class="tb-timeline-item tb-timeline-item-primary">
                          <div class="tb-timeline-line"></div>
                          <div class="tb-timeline-icon"></div>
                          <div class="tb-timeline-content">
                            <div><strong style="font-size:18px">OutlinesPlugin</strong><span
                                style="font-size:15px;color:rgb(128, 132, 143)">&nbsp;快速导航插件</span></div>
                          </div>
                        </div>
                        <div class="tb-timeline-item tb-timeline-item-primary">
                          <div class="tb-timeline-line"></div>
                          <div class="tb-timeline-icon"></div>
                          <div class="tb-timeline-content">
                            <div><strong style="font-size:18px">FullScreenPlugin</strong><span
                                style="font-size:15px;color:rgb(128, 132, 143)">&nbsp;全屏插件</span></div>
                          </div>
                        </div>
                        <div class="tb-timeline-item tb-timeline-item-primary">
                          <div class="tb-timeline-line"></div>
                          <div class="tb-timeline-icon"></div>
                          <div class="tb-timeline-content">
                            <div><strong style="font-size:18px">DevicePlugin</strong><span
                                style="font-size:15px;color:rgb(128, 132, 143)">&nbsp;文档宽度切换插件</span></div>
                          </div>
                        </div>
                        <div class="tb-timeline-item tb-timeline-item-primary">
                          <div class="tb-timeline-line"></div>
                          <div class="tb-timeline-icon"></div>
                          <div class="tb-timeline-content">
                            <div><strong style="font-size:18px">ComponentStagePlugin&nbsp;</strong><span
                                style="font-size:15px;color:rgb(128, 132, 143)">组件库展示插件</span></div>
                          </div>
                        </div>
                        <div class="tb-timeline-item tb-timeline-item-primary">
                          <div class="tb-timeline-line"></div>
                          <div class="tb-timeline-icon"></div>
                          <div class="tb-timeline-content">
                            <div><strong style="font-size:18px">ImageVideoResizePlugin</strong><span
                                style="font-size:15px;color:rgb(128, 132, 143)">&nbsp;图片和视频拖动缩放插件</span></div>
                          </div>
                        </div>
                        <div class="tb-timeline-item tb-timeline-item-primary">
                          <div class="tb-timeline-line"></div>
                          <div class="tb-timeline-icon"></div>
                          <div class="tb-timeline-content">
                            <div><strong style="font-size:18px">LinkJumpPlugin</strong><span
                                style="font-size:15px;color:rgb(128, 132, 143)">&nbsp;超链接点击跳转</span></div>
                          </div>
                        </div>
                        <div class="tb-timeline-item tb-timeline-item-primary">
                          <div class="tb-timeline-line"></div>
                          <div class="tb-timeline-icon"></div>
                          <div class="tb-timeline-content">
                            <div><strong style="font-size:18px">TableEditPlugin</strong><span
                                style="font-size:15px;color:rgb(128, 132, 143)">&nbsp;表格框选效果插件</span></div>
                          </div>
                        </div>
                        <div class="tb-timeline-item tb-timeline-item-primary">
                          <div class="tb-timeline-line"></div>
                          <div class="tb-timeline-icon"></div>
                          <div class="tb-timeline-content">
                            <div><strong style="font-size:18px">SourcecodeModePlugin</strong><span
                                style="font-size:15px;color:rgb(128, 132, 143)">&nbsp;源代码编辑插件</span></div>
                          </div>
                        </div>
                        <div class="tb-timeline-item tb-timeline-item-danger">
                          <div class="tb-timeline-line"></div>
                          <div class="tb-timeline-icon"></div>
                          <div class="tb-timeline-content">
                            <div><strong style="color:rgb(231, 79, 94);font-size:18px">其它用户自定义插件...</strong></div>
                          </div>
                        </div>
                      </tb-timeline>
                    </div>
                  </div>
                </tb-timeline>
              </div>
            </div>
          </tb-timeline>
        </div>
      </div>
    </tb-timeline>
    <h2>依赖注入示例</h2>
    <p>我们编写一个插件为例，通过依赖注入获取 TextBus 核心类实例。</p>
    <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
        class="tb-code-line"><code><span class="tb-hl-keyword">import</span>&nbsp;{ Injectable, TBPlugin, TBSelection, Inject, EDITABLE_DOCUMENT }&nbsp;<span
        class="tb-hl-keyword">from</span>&nbsp;<span class="tb-hl-string">'@tanbo/textbus'</span>;</code></div><div
        class="tb-code-line"><code><br></code></div><div class="tb-code-line"><code>@<span class="tb-hl-function">Injectable</span>()</code></div><div
        class="tb-code-line"><code><span class="tb-hl-keyword">export</span>&nbsp;<span
        class="tb-hl-keyword">class</span>&nbsp;<span class="tb-hl-class-name">DemoPlugin</span>&nbsp;<span
        class="tb-hl-keyword">implements</span>&nbsp;<span class="tb-hl-class-name">TBPlugin</span>&nbsp;{</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-keyword">constructor</span>(</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// 通过构建函数注入 TextBus Selection 类实例</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-keyword">private</span>&nbsp;selection: TBSelection,</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
        class="tb-hl-comment">// 通过 Inject 装饰器指定 token，注入编辑器的 Documnet 对象</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;@<span class="tb-hl-function">Inject</span>(EDITABLE_DOCUMENT)&nbsp;<span
        class="tb-hl-keyword">private</span>&nbsp;contextDocument: Document</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;) {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code><br></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">setup</span>() {</code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span class="tb-hl-comment">// your code</span></code></div><div
        class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>}</code></div></div><div
        class="tb-pre-lang">Typescript</div></pre>
    <p><br></p>
    <h1>Layout</h1>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">onReady</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code><strong>Observable</strong>&lt;<strong>Document</strong>&gt;</code></span>
          </div>
          <p style="color:rgb(0, 0, 0);font-size:medium">视图初始化完成可订阅对象。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">container</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<strong><code>HTMLElement</code></strong></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">编辑器外层容器。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">topBar</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<strong><code>HTMLElement</code></strong></span></div>
          <p><span style="color:rgb(0, 0, 0);font-size:medium">编辑器顶部条。</span><br></p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">bottomBar</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<strong><code>HTMLElement</code></strong></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">编辑底部条。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">workbench</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<strong><code>HTMLElement</code></strong></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">编辑中间容器。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">scroller</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<strong><code>HTMLElement</code></strong></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">编辑器文档可滚动容器。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">docContainer</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<strong><code>HTMLElement</code></strong></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">编辑器文档容器。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">leftContainer</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<strong><code>HTMLElement</code></strong></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">编辑器左侧扩展区容器。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">rightContainer</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<strong><code>HTMLElement</code></strong></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">编辑器右侧扩展区容器。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">pageContainer</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<strong><code>HTMLElement</code></strong></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">编辑器页面容器。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">dashboard</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<strong><code>HTMLElement</code></strong></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">编辑器面板容器。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">viewer</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<strong><code>HTMLElement</code></strong></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">编辑器视图容器。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">iframe</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<strong><code>HTMLIFrameElement</code></strong></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">编辑器 iframe 元素。</p></div>
      </div>
    </tb-timeline>
    <h1>EditorController&nbsp;</h1>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">onStateChange</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code><strong>Observable</strong>&lt;</code></span><code><span
              style="color:rgb(231, 79, 94)">GlobalStatus</span><span style="color:rgb(0, 0, 0)">&gt;</span></code>
          </div>
          <p style="color:rgb(0, 0, 0);font-size:medium">编辑器状态变化可订阅对象。</p>
          <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
              class="tb-code-line"><code>editorController.onStateChange.<span class="tb-hl-function">subscribe</span>(status =&gt; {</code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-builtin">console</span>.<span
              class="tb-hl-function">log</span>(status);</code></div><div
              class="tb-code-line"><code>})</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
        </div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">readonly</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：</span><code style="color:rgb(231, 79, 94)">boolean</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">设置或读取编辑器是否为只读状态。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">sourceCodeMode</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：</span><code style="color:rgb(231, 79, 94)">boolean</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">设置或读取编辑器是否为源代码编辑模式。</p></div>
      </div>
    </tb-timeline>
    <h1>I18n</h1>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">get</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(path:&nbsp;</code></span><code><span
              style="color:rgb(231, 79, 94)">string</span><span style="color:rgb(0, 0, 0)">) =&gt;&nbsp;</span><span
              style="color:rgb(231, 79, 94)">string</span></code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">通过 path 获取 i18n
            配置中的字段，如果没有自定义配置，则返回默认配置，如果获取到的值不为字符串，则返回空字符串。<br></p>
          <ul>
            <li><code>path</code>&nbsp;访问路径，支持如： a.b、a['b'].c、a[0] 等格式。</li>
          </ul>
        </div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">getContext</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(path:&nbsp;</code></span><code><span
              style="color:rgb(231, 79, 94)">string</span><span
              style="color:rgb(0, 0, 0)">) =&gt;&nbsp;<strong>I18n</strong></span></code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">通过 path 获取 i18n 配置中的上下文，并返回一个新的 i18n 实例</p>
          <ul>
            <li><code>path</code>&nbsp;访问路径，支持如：&nbsp;<code>a.b</code>、<code>a['b'].c</code>、<code>a[0]</code>&nbsp;等格式。
            </li>
          </ul>
        </div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">joinTemplate</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(template:&nbsp;</code></span><code><span
              style="color:rgb(231, 79, 94)">string</span><span style="color:rgb(0, 0, 0)">, ...values:&nbsp;<strong>Array</strong>&lt;</span><span
              style="color:rgb(231, 79, 94)">string</span><span style="color:rgb(0, 0, 0)">&nbsp;|&nbsp;</span><span
              style="color:rgb(231, 79, 94)">number</span><span style="color:rgb(0, 0, 0)">&gt;) =&gt;&nbsp;</span><span
              style="color:rgb(231, 79, 94)">string</span></code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">用于连接模板字符串，模板字符串占位符为:&nbsp;<code>{number}</code>，其中 number
            为占位符索引。</p>
          <ul>
            <li><code>template</code>&nbsp;模板字符串；</li>
            <li><code>values</code>&nbsp;替换占位符的值，根据参数下标位置替换模板字符串的点位符。</li>
          </ul>
          <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
              class="tb-code-line"><code>i18n.<span class="tb-hl-function">joinTemplate</span>(<span
              class="tb-hl-string">'template string {0} is {1}.'</span>, [<span class="tb-hl-string">'key'</span>,&nbsp;<span
              class="tb-hl-string">'value'</span>]);</code></div><div class="tb-code-line"><code><span
              class="tb-hl-comment">// template string key is value.</span></code></div></div><div class="tb-pre-lang">Typescript</div></pre>
        </div>
      </div>
    </tb-timeline>
    <h1>UIDialog</h1>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">dialog</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(element:&nbsp;<strong>HTMLElement</strong>) =&gt;&nbsp;</code></span><code
              style="color:rgb(231, 79, 94)">void</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">通过对话框显示传入内容。</p>
          <ul>
            <li><code>path</code>&nbsp;在对话框内显示的内容。</li>
          </ul>
        </div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">close</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>() =&gt;&nbsp;</code></span><code
              style="color:rgb(231, 79, 94)">void</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">关闭对话框。</p></div>
      </div>
    </tb-timeline>
    <h1>UIControlPanel</h1>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">showPanels</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(views:&nbsp;</code></span><code><span
              style="color:rgb(231, 79, 94)">ComponentControlPanelView</span><span style="color:rgb(0, 0, 0)">[]) =&gt;&nbsp;</span><span
              style="color:rgb(231, 79, 94)">void</span></code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">显示控制面板。</p>
          <ul>
            <li>views 要显示的视图集合，当为空数据时，面板会自动隐藏。</li>
          </ul>
        </div>
      </div>
    </tb-timeline>
    <h1>UIMessage</h1>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content"><p style="font-size:medium"><strong
            style="color:rgb(18, 150, 219)">message</strong><span style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(message:&nbsp;</code></span><code><span
            style="color:rgb(231, 79, 94)">string</span><span style="color:rgb(0, 0, 0)">, time?:&nbsp;</span><span
            style="color:rgb(231, 79, 94)">number</span><span style="color:rgb(0, 0, 0)">) =&gt;&nbsp;</span><span
            style="color:rgb(231, 79, 94)">void</span></code></p>
          <p style="color:rgb(0, 0, 0);font-size:medium">用于显示一条消息。</p>
          <ul>
            <li><code>message</code>&nbsp;要显示的消息；</li>
            <li><code>time</code>&nbsp;显示的时间，默认为 3000ms。</li>
          </ul>
        </div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">info</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;同上。</span></div>
        </div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">success</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;同上。</span></div>
        </div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">warning</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;同上。</span></div>
        </div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">danger</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;同上。</span></div>
        </div>
      </div>
    </tb-timeline>
    <h1>Input</h1>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">value</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：</span><code style="color:rgb(231, 79, 94)">string</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">当前输入框的内容。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">selectionStart</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：</span><code style="color:rgb(231, 79, 94)">number</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">当前输入框内光标位置。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">readonly</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：</span><code style="color:rgb(231, 79, 94)">boolean</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">读取或设置输入框为只读状态。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">addPasteMiddleware</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(middleware:&nbsp;</code></span><code><span
              style="color:rgb(231, 79, 94)">PastePreHandleMiddleware</span><span style="color:rgb(0, 0, 0)">) =&gt;&nbsp;</span><span
              style="color:rgb(231, 79, 94)">void</span></code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">添加粘贴处理中间件。</p>
          <ul>
            <li><code>middleware</code>&nbsp;中间件。</li>
          </ul>
          <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
              class="tb-code-line"><code>input.<span class="tb-hl-function">addPasteMIddleware</span>((previousDOMTree: HTMLElement) =&gt; {</code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">// your code</span></code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-comment">// 当处理完成之后，返回一个新的 DOM 对象。</span></code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;<span
              class="tb-hl-comment">// 也可以返回一个 Promise&lt;HTMLElement&gt;</span></code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;<span
              class="tb-hl-keyword">return</span>&nbsp;previousDOMTree;</code></div><div
              class="tb-code-line"><code>})</code></div></div><div class="tb-pre-lang">Typescript</div></pre>
        </div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">addKeymap</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(keymap:&nbsp;</code></span><code><span
              style="color:rgb(231, 79, 94)">KeymapAction</span><span
              style="color:rgb(0, 0, 0)">) =&gt;&nbsp;</span><span style="color:rgb(231, 79, 94)">void</span></code>
          </div>
          <p style="color:rgb(0, 0, 0);font-size:medium">添加快捷键。</p>
          <pre lang="Typescript" theme="dark"><div class="tb-code-line-number-bg"></div><div class="tb-code-content"><div
              class="tb-code-line"><code>input.<span class="tb-hl-function">addKeymap</span>({</code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;keymap: {</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;key:&nbsp;<span
              class="tb-hl-string">'p'</span>,&nbsp;</code></div><div class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;ctrlkey:&nbsp;<span
              class="tb-hl-boolean">true</span></code></div><div class="tb-code-line"><code>&nbsp;&nbsp;},</code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;<span class="tb-hl-function">action</span>() {</code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;&nbsp;&nbsp;<span
              class="tb-hl-comment">// your code...</span></code></div><div
              class="tb-code-line"><code>&nbsp;&nbsp;}</code></div><div class="tb-code-line"><code>})</code></div></div><div
              class="tb-pre-lang">Typescript</div></pre>
        </div>
      </div>
    </tb-timeline>
    <h1>TBHistory</h1>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">onChange</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code><strong>Observable</strong>&lt;</code></span><code><span
              style="color:rgb(231, 79, 94)">void</span><span style="color:rgb(0, 0, 0)">&gt;</span></code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">当历史记录变化时的可订阅对象。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">onUsed</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code><strong>Observable</strong>&lt;</code></span><code><span
              style="color:rgb(231, 79, 94)">void</span><span style="color:rgb(0, 0, 0)">&gt;</span></code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">当应用历史记录时的可订阅对象。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">canBack</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：</span><code style="color:rgb(231, 79, 94)">boolean</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">是否可回退。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">canForward</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：&nbsp;</span><code style="color:rgb(231, 79, 94)">boolean</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">是否可重做。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">back</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>() =&gt;&nbsp;</code></span><code
              style="color:rgb(231, 79, 94)">void</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">应用上一次历史记录。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">forward</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>() =&gt;&nbsp;</code></span><code
              style="color:rgb(231, 79, 94)">void</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">重做。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">clean</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>() =&gt;&nbsp;</code></span><code
              style="color:rgb(231, 79, 94)">void</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">清除历史记录。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">record</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>() =&gt;&nbsp;</code></span><code
              style="color:rgb(231, 79, 94)">void</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">立即记录当前内容，同时监听内容变化并记录历史。</p></div>
      </div>
    </tb-timeline>
    <h1>Editor</h1>
    <p>请参考<a target="_self"
             href="https:&#x2F;&#x2F;textbus.tanboui.com&#x2F;doc&#x2F;start#%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95">开始</a>文档。
    </p>
    <p><br></p>
    <h1>OutputRenderer</h1>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">render</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>&lt;<strong>T</strong>&nbsp;</code></span><code><strong
              style="color:rgb(18, 150, 219)">extends</strong><span style="color:rgb(0, 0, 0)">&nbsp;<strong>AbstractComponent</strong>&gt;(component:&nbsp;<strong>T</strong>) =&gt;&nbsp;<strong>VElement</strong></span></code>
          </div>
          <p style="color:rgb(0, 0, 0);font-size:medium">应用输出模式把一个组件渲染成虚拟 DOM。</p></div>
      </div>
    </tb-timeline>
    <h1>OutputTranslator</h1>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">transform</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(vDom:&nbsp;<strong>VElement</strong>) =&gt;&nbsp;</code></span><code
              style="color:rgb(231, 79, 94)">string</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">把虚拟 DOM 树转换为 HTML 字符串。</p></div>
      </div>
    </tb-timeline>
    <h1>Parser</h1>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">Parser.parseHTML</strong><span
              style="color:rgb(0, 0, 0)">（静态方法） 类型：<code>(html:&nbsp;</code></span><code><span
              style="color:rgb(231, 79, 94)">string</span><span style="color:rgb(0, 0, 0)">) =&gt;&nbsp;<strong>HTMLElement</strong></span></code>
          </div>
          <p style="color:rgb(0, 0, 0);font-size:medium">把一段 HTML 字符串转换为 DOM 树。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">parse</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(el:&nbsp;<strong>HTMLElement</strong>) =&gt;&nbsp;<strong>Fragment</strong></code></span>
          </div>
          <p style="color:rgb(0, 0, 0);font-size:medium">把 HTMLElement 对象转换为 TextBus 的抽象数据结构。</p></div>
      </div>
    </tb-timeline>
    <h1>TBSelection</h1>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">rangeCount</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：</span><code style="color:rgb(231, 79, 94)">number</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">selection 的选区个数</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">ranges</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code><strong>TBRange</strong>[]</code></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">selection 所包含 range 的集合。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">commonAncestorFragment</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<strong><code>Fragment</code></strong></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">当前 selection 所有 range 的公共父 Fragment。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">commonAncestorComponent</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<strong><code>AbstractComponent</code></strong></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">当前 selection 所有 range 的公共父组件。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">firstRange</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：&nbsp;<strong><code>TBRange</code></strong></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">selection 的第一个 range。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">lastRange</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<strong><code>TBRange</code></strong></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">selection 的最后一个 range。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">collapsed</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：</span><code style="color:rgb(231, 79, 94)">boolean</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">当前选区是否闭合。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">onChange</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code><strong>Observable</strong>&lt;</code></span><code><span
              style="color:rgb(231, 79, 94)">void</span><span style="color:rgb(0, 0, 0)">&gt;</span></code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">选区变化可订阅对象。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">restore</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：&nbsp;<code>() =&gt;&nbsp;</code></span><code
              style="color:rgb(231, 79, 94)">void</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">把抽象的选区位置应用到原生的 Selection。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">toPrevious</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>() =&gt;&nbsp;</code></span><code
              style="color:rgb(231, 79, 94)">void</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">向前移动光标。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">toNext</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>() =&gt;&nbsp;</code></span><code
              style="color:rgb(231, 79, 94)">void</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">向后移动光标。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">toPreviousLine</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>() =&gt;&nbsp;</code></span><code
              style="color:rgb(231, 79, 94)">void</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">将光标移动到上一行。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">toNextLine</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：&nbsp;<code>() =&gt;&nbsp;</code></span><code
              style="color:rgb(231, 79, 94)">void</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">将光标移动到下一行。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">removeAllRanges</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(syncNative =&nbsp;</code></span><code><strong
              style="color:rgb(28, 143, 118)">false</strong><span style="color:rgb(0, 0, 0)">) =&gt;&nbsp;</span><span
              style="color:rgb(231, 79, 94)">void</span></code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">删除所有选区。</p>
          <ul>
            <li><code>syncNative</code>&nbsp;是否同时删除原生选区。</li>
          </ul>
        </div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">addRange</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(range:&nbsp;<strong>TBRange</strong>) =&gt;&nbsp;</code></span><code
              style="color:rgb(231, 79, 94)">void</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">添加一个选区到 selection。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">createRange</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>() =&gt;&nbsp;<strong>TBRange</strong></code></span></div>
          <p><span style="color:rgb(0, 0, 0);font-size:medium">创建一个选区对象并返回。</span><br></p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">getRangePaths</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>() =&gt;&nbsp;</code></span><code><span
              style="color:rgb(231, 79, 94)">RangePath</span><span style="color:rgb(0, 0, 0)">[]</span></code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">获取当前所有选区的位置描述信息。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">usePaths</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(paths:&nbsp;</code></span><code><span
              style="color:rgb(231, 79, 94)">RangePath</span><span
              style="color:rgb(0, 0, 0)">[], fragment:&nbsp;<strong>Fragment</strong>) =&gt;&nbsp;</span><span
              style="color:rgb(231, 79, 94)">void</span></code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">把一组 range 位置数据应用到 fragment。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">clone</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>() =&gt;&nbsp;<strong>TBSelection</strong></code></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">克隆一个 selection 的副本。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">selectAll</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：&nbsp;<code>() =&gt;&nbsp;</code></span><code
              style="color:rgb(231, 79, 94)">void</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">选中当前文档的所有内容。</p></div>
      </div>
    </tb-timeline>
    <h1>TBRange</h1>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">startIndex</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：</span><code style="color:rgb(231, 79, 94)">number</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">range 开始下标位置。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">endIndex</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：</span><code style="color:rgb(231, 79, 94)">number</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">range 结束下标位置。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">startFragment</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<strong><code>Fragment</code></strong></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">range 开始的可编辑片段。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">endFragment</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<strong><code>Fragment</code></strong>;</span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">range 结束的可编辑片段。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">commonAncestorFragment</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<strong><code>Fragment</code></strong></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">range 的公共可编辑片段。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">commonAncestorComponent</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<strong><code>AbstractComponent</code></strong></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">range 的公共组件。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">collapsed</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：</span><code style="color:rgb(231, 79, 94)">boolean</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">range 是否闭合。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">clone</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>() =&gt;&nbsp;<strong>TBRange</strong></code></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">克隆一个副本。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">restore</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>() =&gt;&nbsp;<strong>this</strong></code></span></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">将当前 range 位置应用到文档，注意，因为浏览器的限制，只会让第一个 range 生效，其它的 range
            应用后，在浏览器中不一定可见，但在内存中是确实存在的。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">setStart</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(fragment:&nbsp;<strong>Fragment</strong>, offset:&nbsp;</code></span><code><span
              style="color:rgb(231, 79, 94)">number</span><span style="color:rgb(0, 0, 0)">) =&gt;&nbsp;</span><span
              style="color:rgb(231, 79, 94)">void</span></code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">设置 range 的开始位置。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">setEnd</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(fragment:&nbsp;<strong>Fragment</strong>, offset:&nbsp;</code></span><code><span
              style="color:rgb(231, 79, 94)">number</span><span style="color:rgb(0, 0, 0)">) =&gt;&nbsp;</span><span
              style="color:rgb(231, 79, 94)">void</span></code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">设置 range 的结束位置。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">setPosition</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(fragment:&nbsp;<strong>Fragment</strong>, offset:&nbsp;</code></span><code><span
              style="color:rgb(231, 79, 94)">number</span><span style="color:rgb(0, 0, 0)">) =&gt;&nbsp;</span><span
              style="color:rgb(231, 79, 94)">void</span></code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">同时设置 range 的开始和结束位置。</p></div>
      </div>
    </tb-timeline>
    <h1>Renderer</h1>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">onRendingBefore</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code><strong>Observable</strong>&lt;</code></span><code><span
              style="color:rgb(231, 79, 94)">void</span><span style="color:rgb(0, 0, 0)">&gt;</span></code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">可订阅对象，在视图渲染之前触发。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">onViewUpdated</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code><strong>Observable</strong>&lt;</code></span><code><span
              style="color:rgb(231, 79, 94)">void</span><span style="color:rgb(0, 0, 0)">&gt;</span></code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">可订阅对象，在视图渲染完成时触发。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">render</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>&lt;<strong>T</strong>&nbsp;</code></span><code><strong
              style="color:rgb(18, 150, 219)">extends</strong><span style="color:rgb(0, 0, 0)">&nbsp;<strong>AbstractComponent</strong>&gt;(component:&nbsp;<strong>T</strong>, host:&nbsp;<strong>HTMLElement</strong>) =&gt;&nbsp;<strong>VElement</strong></span></code>
          </div>
          <p style="color:rgb(0, 0, 0);font-size:medium">应用编辑模式，把一个组件渲染到指定的 DOM 容器内，并返回当前组件的虚拟 DOM。</p>
          <ul>
            <li>component 要渲染的组件；</li>
            <li>host 承载渲染结果的 DOM 元素。</li>
          </ul>
        </div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">getPositionByNode</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(node:&nbsp;<strong>Node</strong>) =&gt;&nbsp;</code></span><code
              style="color:rgb(231, 79, 94)">ElementPosition</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">获取原生 DOM 元素在 TextBus 抽象数据中的位置。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">getPositionByVDom</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(vDom:&nbsp;<strong>VElement</strong>&nbsp;|&nbsp;<strong>VTextNode</strong>) =&gt;&nbsp;</code></span><code
              style="color:rgb(231, 79, 94)">ElementPosition</code></div>
          <p style="color:rgb(0, 0, 0);font-size:medium">获取虚拟 DOM 元素在 TextBus 抽象数据中的位置。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">getNativeNodeByVDom</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(vDom:&nbsp;<strong>VElement</strong>&nbsp;|&nbsp;<strong>VTextNode</strong>) =&gt;&nbsp;<strong>Node</strong></code></span>
          </div>
          <p style="color:rgb(0, 0, 0);font-size:medium">通过虚拟 DOM 获取对应的原生 DOM 元素。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">getVDomByNativeNode</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(node:&nbsp;<strong>Node</strong>) =&gt;&nbsp;<strong>VElement</strong>&nbsp;|&nbsp;<strong>VTextNode</strong></code></span>
          </div>
          <p style="color:rgb(0, 0, 0);font-size:medium">通过原生 DOM 获取对应的虚拟 DOM 元素。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">getVElementByFragment</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(fragment:&nbsp;<strong>Fragment</strong>) =&gt;&nbsp;<strong>VElement</strong></code></span>
          </div>
          <p style="color:rgb(0, 0, 0);font-size:medium">获取 fragment 对应的虚拟 DOM 元素。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">getComponentRootVNode</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(component:&nbsp;<strong>AbstractComponent</strong>) =&gt;&nbsp;<strong>VElement</strong></code></span>
          </div>
          <p style="color:rgb(0, 0, 0);font-size:medium">获取组件的根虚拟 DOM 元素。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">getComponentRootNativeNode</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(component:&nbsp;<strong>AbstractComponent</strong>) =&gt;&nbsp;<strong>HTMLElement</strong></code></span>
          </div>
          <p style="color:rgb(0, 0, 0);font-size:medium">获取组件的根原生 DOM 元素。</p></div>
      </div>
    </tb-timeline>
    <h1>FileUploader</h1>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div style="font-size:medium"><strong style="color:rgb(18, 150, 219)">upload</strong><span
              style="color:rgb(0, 0, 0)">&nbsp;类型：<code>(type:&nbsp;</code></span><code><span
              style="color:rgb(231, 79, 94)">string</span><span style="color:rgb(0, 0, 0)">, currentValue?:&nbsp;</span><span
              style="color:rgb(231, 79, 94)">string</span><span style="color:rgb(0, 0, 0)">) =&gt;&nbsp;<strong>Observable</strong>&lt;</span><span
              style="color:rgb(231, 79, 94)">string</span><span style="color:rgb(0, 0, 0)">&gt;</span></code></div>
          <p>TextBus 上传触发类，upload 方法返回一个可订阅对象，并会调用编辑器初始化时用户配置的 uploader 方法，并把用户回传的结果发送给 Obervable。</p>
          <ul>
            <li><code>type</code>&nbsp;资源类型</li>
            <li><code>currentValue</code>&nbsp;当前值</li>
          </ul>
        </div>
      </div>
    </tb-timeline>
    <h1>Fragment</h1>
    <tb-timeline>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong>内容覆盖&nbsp;</strong></div>
          <div><code>from(source:&nbsp;<strong>Fragment</strong>):&nbsp;<span style="color:rgb(231, 79, 94)">void</span></code>
          </div>
          <p>把一个 Fragment 的内容覆盖到当前的 Fragment，同是清空原 Fragment 的内容。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong>合并两个可编辑片段</strong>&nbsp;</div>
          <div><code>concat(fragment:&nbsp;<strong>Fragment</strong>):&nbsp;<span
              style="color:rgb(231, 79, 94)">void</span></code></div>
          <p>把一个 Fragment 的内容拼接到当前 Fragment 内容的后面。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong>在末尾添加内容</strong></div>
          <div><code>append(content:&nbsp;<span style="color:rgb(231, 79, 94)">string</span>&nbsp;|&nbsp;<strong>AbstractComponent</strong>,
            insertAdjacentInlineFormat?:&nbsp;<span style="color:rgb(231, 79, 94)">boolean</span>):&nbsp;<span
                style="color:rgb(231, 79, 94)">void</span></code></div>
          <p>把文本或组件添加在 Fragment 的末尾。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong>切分内容</strong></div>
          <div><code>sliceContents(startIndex?:&nbsp;<span style="color:rgb(231, 79, 94)">number</span>, endIndex?:&nbsp;<span
              style="color:rgb(231, 79, 94)">number</span>): (<span style="color:rgb(231, 79, 94)">string</span>&nbsp;|&nbsp;<strong>AbstractComponent</strong>)[]</code>
          </div>
          <p>从 Fragment 中切出一部分内容，并返回一个数组。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong>在组件前插入内容</strong></div>
          <div><code>insertBefore(contents:&nbsp;<strong>AbstractComponent</strong>&nbsp;|&nbsp;<span
              style="color:rgb(231, 79, 94)">string</span>, ref:&nbsp;<strong>AbstractComponent</strong>):&nbsp;<span
              style="color:rgb(231, 79, 94)">void</span></code></div>
          <p>在当前 Fragment 内的某个组件前插入组件或文本。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong>在组件后插入内容</strong></div>
          <div><code>insertAfter(contents:&nbsp;<strong>AbstractComponent</strong>&nbsp;|&nbsp;<span
              style="color:rgb(231, 79, 94)">string</span>, ref:&nbsp;<strong>AbstractComponent</strong>):&nbsp;<span
              style="color:rgb(231, 79, 94)">void</span></code></div>
          <p>在当前 Fragment 内的某个组件后插入组件或文本。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong>在指定位置插入内容</strong></div>
          <div><code>insert(contents:&nbsp;<strong>AbstractComponent</strong>&nbsp;|&nbsp;<strong>Fragment</strong>&nbsp;|&nbsp;<span
              style="color:rgb(231, 79, 94)">string</span>, index:&nbsp;<span
              style="color:rgb(231, 79, 94)">number</span>):&nbsp;<span
              style="color:rgb(231, 79, 94)">void</span></code></div>
          <p>根据下标，在 Fragment 内插入组件、可编辑片段或文本。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong>克隆</strong>&nbsp;</div>
          <div><code>clone():&nbsp;<strong>Fragment</strong></code></div>
          <p>克隆当前 Fragment，并返回一个副本。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong>清空内容</strong></div>
          <div><code>clean():&nbsp;<span style="color:rgb(231, 79, 94)">void</span></code></div>
          <p>清空 Fragment 的内容。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong>根据下标获取内容</strong></div>
          <div><code>getContentAtIndex(index:&nbsp;<span style="color:rgb(231, 79, 94)">number</span>):&nbsp;<span
              style="color:rgb(231, 79, 94)">string</span>&nbsp;|&nbsp;<strong>AbstractComponent</strong></code></div>
          <p>获取 Fragment 内某一位置的内容。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong>删除内容</strong></div>
          <div><code>remove(startIndex:&nbsp;<span style="color:rgb(231, 79, 94)">number</span>, endIndex?:&nbsp;<span
              style="color:rgb(231, 79, 94)">number</span>):&nbsp;<span
              style="color:rgb(231, 79, 94)">void</span></code></div>
          <p>删除 Fragment 内指定范围的内容。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong>剪切内容</strong></div>
          <div><code>cut(startIndex:&nbsp;<span style="color:rgb(231, 79, 94)">number</span>, endIndex?:&nbsp;<span
              style="color:rgb(231, 79, 94)">number</span>):&nbsp;<strong>Fragment</strong></code></div>
          <p>剪切 Fragment 内指定范围内的内容，并返回一个新的 Fragment。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong>获取 Fragment 内所包含的格式</strong></div>
          <div><code>getFormatKeys():
            (<strong>InlineFormatter</strong>&nbsp;|&nbsp;<strong>BlockFormatter</strong>)[]</code></div>
          <p>获取 Fragment 内所有的 Formatter。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong>获取格式范围</strong></div>
          <div>
            <code>getFormatRanges(token:&nbsp;<strong>InlineFormatter</strong>&nbsp;|&nbsp;<strong>BlockFormatter</strong>):&nbsp;<span
                style="color:rgb(231, 79, 94)">FormatRange</span>[]</code></div>
          <p>根据格式，获取格式在当前 Fragment 内生效的范围。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong>查找组件位置</strong></div>
          <div><code>indexOf(component:&nbsp;<strong>AbstractComponent</strong>):&nbsp;<span
              style="color:rgb(231, 79, 94)">number</span></code></div>
          <p>根据组件，查找组件在当前 Fragment 内的下标位置。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong>应用样式</strong></div>
          <div><code>apply(token:&nbsp;<strong>InlineFormatter</strong>, params:&nbsp;<span
              style="color:rgb(231, 79, 94)">InlineFormatParams</span>, options?:&nbsp;<span
              style="color:rgb(231, 79, 94)">ApplyFormatOptions</span>):&nbsp;<span
              style="color:rgb(231, 79, 94)">void</span>;</code></div>
          <div><code>apply(token:&nbsp;<strong>BlockFormatter</strong>, params:&nbsp;<span
              style="color:rgb(231, 79, 94)">BlockFormatParams</span>, options?:&nbsp;<span
              style="color:rgb(231, 79, 94)">ApplyFormatOptions</span>):&nbsp;<span
              style="color:rgb(231, 79, 94)">void</span>;</code></div>
          <p>给当前 Fragment 应用样式。</p></div>
      </div>
      <div class="tb-timeline-item tb-timeline-item-primary">
        <div class="tb-timeline-line"></div>
        <div class="tb-timeline-icon"></div>
        <div class="tb-timeline-content">
          <div><strong>查找上级组件</strong></div>
          <div><code>getContext&lt;<strong>T</strong>&nbsp;extends&nbsp;<strong>AbstractComponent</strong>&gt;(context:&nbsp;<span
              style="color:rgb(231, 79, 94)">Type</span>&lt;<strong>T</strong>&gt;, filter?:
            (instance:&nbsp;<strong>T</strong>) =&gt;&nbsp;<span
                style="color:rgb(231, 79, 94)">boolean</span>):&nbsp;<strong>T</strong></code></div>
          <p>从当前组件依次向上查找指定组件。</p></div>
      </div>
    </tb-timeline>
    <p><br></p>
  </div>
</template>
