<template>
  <div class="navbar">
    <div class="navbar-wrap container">
      <div class="navbar-logo">
        <img src="../assets/Logo.png" alt="Logo" />
      </div>
      <div class="navbar-panel">
        <ul class="navbar-panel-list">
          <li class="navbar-panel-item">Home</li>
          <li class="navbar-panel-item">Service</li>
          <li class="navbar-panel-item">Feature</li>
          <li class="navbar-panel-item">Product</li>
          <li class="navbar-panel-item">Testimonial</li>
          <li class="navbar-panel-item">FAQ</li>
        </ul>
      </div>
      <div class="navbar-account">
        <div class="navbar-login">
          <a href="" class="navbar-login-link">Login</a>
        </div>
        <div class="navbar-register">
          <a href="" class="navbar-register-link">Register</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.navbar {
  width: 100%;
  height: 84px;
  background-color: #f5f7fa;
}
.navbar-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 84px;
}
.container {
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 1200px;
}

.navbar-panel-list {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar-panel-item {
  padding: 0 20px;
  font-size: 16px;
}

.navbar-account {
  display: flex;
  align-items: center;
}

.navbar-login {
  padding: 0 10px;
}
.navbar-register-link {
  padding: 0 10px;
}
.navbar-login-link {
  color: #28cb8b;
  cursor: pointer;
  text-decoration: none;
}
.navbar-register-link {
  color: #fff;
  cursor: pointer;
  text-decoration: none;
}
.navbar-register {
  margin-left: 10px;
  background-color: #28cb8b;
  width: 90px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
}

@media only screen and (max-width: 1200px) {
  .navbar-panel {
    display: none;
  }
}
</style>
<script setup lang="ts"></script>
