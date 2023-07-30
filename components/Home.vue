<template>
  <div class="home">
    <div class="home-banner">
      <div class="home-wrap container">
        <div class="home-banner-left">
          <div class="home-banner-left-title">Lessons and insights</div>
          <div class="home-banner-left-sub">from 8 years</div>
          <div class="home-banner-left-span">
            Where to grow your business as a photographer: site or social media?
          </div>
          <div class="home-banner-left-register">
            <a href="" class="home-banner-left-register-link">Register</a>
          </div>
        </div>
        <div class="home-banner-right">
          <img
            src="../assets/Illustration.png"
            alt="banner"
            class="home-banner-right-img"
          />
        </div>
      </div>
      <div class="home-wrap-dot">
        <div class="home-dot"></div>
        <div class="home-dot"></div>
        <div class="home-dot"></div>
      </div>
    </div>
    <div class="home-our-client">
      <div class="home-our-client-wrap">
        <h3 class="home-our-client-title">Our Clients</h3>
        <span class="home-our-client-sub"
          >We have been working with some Fortune 500+ clients</span
        >
      </div>
      <div class="home-our-client-logo-box container">
        <ul class="home-our-client-logo-list">
          <li class="home-our-client-logo-list-item">
            <img
              src="../assets/Logo1.png"
              alt="Logo"
              class="home-our-client-logo-img"
            />
          </li>
          <li class="home-our-client-logo-list-item">
            <img
              src="../assets/Logo2.png"
              alt="Logo"
              class="home-our-client-logo-img"
            />
          </li>
          <li class="home-our-client-logo-list-item">
            <img
              src="../assets/Logo3.png"
              alt="Logo"
              class="home-our-client-logo-img"
            />
          </li>

          <li class="home-our-client-logo-list-item">
            <img
              src="../assets/Logo4.png"
              alt="Logo"
              class="home-our-client-logo-img"
            />
          </li>
          <li class="home-our-client-logo-list-item">
            <img
              src="../assets/Logo5.png"
              alt="Logo"
              class="home-our-client-logo-img"
            />
          </li>
          <li class="home-our-client-logo-list-item">
            <img
              src="../assets/Logo6.png"
              alt="Logo"
              class="home-our-client-logo-img"
            />
          </li>
          <li class="home-our-client-logo-list-item">
            <img
              src="../assets/Logo7.png"
              alt="Logo"
              class="home-our-client-logo-img"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.home {
  width: 100%;

  background-color: #f5f7fa;
}
.home-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.home-banner {
  height: 599px;
}
.home-banner-left-title {
  font-size: 64px;
  color: #4d4d4d;
  font-weight: 600;
}
.home-banner-left-sub {
  font-size: 64px;
  color: #28cb8b;
  font-weight: 600;
}
.home-our-client-logo-list {
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.home-banner-left-span {
  margin-top: 10px;
  font-size: 16px;
  color: #89939e;
}
.home-banner-left-register {
  width: 128px;
  height: 52px;
  background-color: #28cb8b;
  margin-top: 40px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-banner-left-register-link {
  color: white;
  text-decoration: none;
}

.home-wrap-dot {
  top: 660px;
  height: 10px;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
}

.home-dot {
  height: 10px;
  width: 10px;
  background-color: #c8e6c9;
  border-radius: 10px;
  margin: 0 2px;
}
.home-dot:first-child {
  background-color: #28cb8b;
}
.home-our-client {
  background-color: white;
}
.home-our-client-wrap {
  width: 100%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.home-our-client-title {
  color: #717171;
  font-size: 36px;
}
.home-our-client-sub {
  font-size: 16px;
  color: #717171;
}

.home-our-client-logo-box {
  margin-top: 70px;
  height: 98px;
}

@media only screen and (max-width: 1200px) {
  .home-banner-left {
    display: none;
  }
  .home-banner-right {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .home-our-client-logo-list {
    flex-wrap: wrap;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
    padding-right: 0;
    padding-left: 0;
  }
}
</style>
<script setup lang="ts"></script>
