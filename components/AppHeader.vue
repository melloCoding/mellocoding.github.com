<template>
  <nav class="navbar bg-primary top-0 mb-5 absolute">
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <!--Main buttion for return to home-->
        <NuxtLink to="/">
          <div class="navbar-start">
            <div class="btn btn-ghost text-xl">Jeffrey Mello</div>
          </div>
        </NuxtLink>
        <li>
          <details>
            <summary>Parent</summary>
            <ul class="bg-primary rounded-t-none p-2">
              <li><NuxtLink to="/gamedev.vue">Game Devlopment</NuxtLink></li>
              <li><a>Link 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </nav>
</template>
