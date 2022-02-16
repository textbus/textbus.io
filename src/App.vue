<template>
  <header>
    <div class="ui-container">
      <div class="ui-row">
        <div class="ui-pull-left">
          <div>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div>
          <div class="ui-pull-right">

          </div>
        </div>
      </div>
    </div>
  </header>
  <router-view/>
</template>

<style lang="scss" scoped>
nav {
  height: 50px;
  padding: 10px 0;
}
</style>
