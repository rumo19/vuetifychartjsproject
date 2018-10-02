<template>
  <div id="app">
   <app-toolbar> </app-toolbar>
<router-view/>
    <app-footer> </app-footer>
    
  </div>
</template>

<script>
import AppFooter from './components/AppFooter'
import AppToolbar from './components/AppToolbar'
export default {
  name: 'App',
  components: {
    AppFooter,
    AppToolbar
  }
}
</script>

<style>

</style>
