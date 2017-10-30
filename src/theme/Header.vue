<template>
      <nav class="nav has-shadow">
        <div class="container">
          <router-link to="/" exact>
            <img src="http://bit.ly/vue-img"
              alt="Vue SPA" />
          </router-link>
          <router-link to="/about" class="nav-item is-tab" exact>
            About
          </router-link>

          <router-link to="/category/my-category-1" class="nav-item is-tab">
            Category 1
          </router-link>

          <router-link to="/category/my-category-2" class="nav-item is-tab">
            Category 2
          </router-link>
          
        </div>
      </nav>
</template>