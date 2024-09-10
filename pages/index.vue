<template>
  <div class="h-screen bg-base-100">
    <AppHeader />
    <div>
     <h1 class="bg-slate-500 rounded-md">Welcome to the index.vue</h1>
    </div> 
    <NuxtLink to="/gamedev"><button class="btn">hello there</button></NuxtLink>
    <ul>
     <li><NuxtLink to="/gamedev">gamedev page</NuxtLink></li>
    </ul>
  </div>
  </template>
