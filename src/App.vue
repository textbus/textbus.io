<template>
  <header>
    <div class="ui-container">
      <div class="ui-pull-left ui-clearfix">
        <h1 class="logo ui-pull-left">
          <router-link to="/"><img src="./assets/logo.png" alt="TextBus logo"></router-link>
        </h1>
        <nav class="ui-pull-left">
          <ul>
            <li>
              <router-link to="/docs">文档</router-link>
            </li>
            <li>
              <router-link to="/">API</router-link>
            </li>
            <li>
              <router-link to="/">新闻</router-link>
            </li>
            <li>
              <router-link to="/">商业授权</router-link>
            </li>
            <li>
              <router-link to="/">赞助</router-link>
            </li>
            <li>
              <router-link to="/">关于</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="ui-pull-right">
        <nav>
          <ul>
            <li>
              <router-link to="/">QQ 群</router-link>
            </li>
            <li>
              <a href="https://github.com/textbus/textbus" target="_blank"><span class="icon-github"></span> Github</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <main>
    <router-view/>
  </main>
  <footer>
    <div class="ui-container">

    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "./scss/varibles";

header {
  height: 70px;
  padding: 10px 0;
  background: #171f26;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 10;
}

.logo {
  margin: 0;
  line-height: 50px;

  img {
    width: 110px;
  }
}

nav {
  line-height: 50px;
  font-size: 15px;

  a {
    color: #fff;
    opacity: 0.7;
    text-decoration: none;
    transition: color .2s;

    &:hover {
      color: $color-primary;
    }
  }
}

ul {
  list-style: none;
  margin: 0;
  overflow: hidden;

  li {
    float: left;
    padding: 10px 20px;
    line-height: 30px;
  }
}

main {
  padding-top: 70px;
  padding-bottom: 200px;
  min-height: 100%;
}

footer {
  height: 200px;
  background: #171f26;
  margin-top: -200px;
}
</style>
