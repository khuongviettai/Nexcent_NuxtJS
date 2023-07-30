<template>
  <footer class="footer">
    <div class="footer-wrap">
      <div class="footer-top">
        <div class="footer-top-box">
          <h3 class="footer-top-title">
            Pellentesque suscipit fringilla libero eu.
          </h3>
        </div>
        <div class="footer-top-box-demo">
          <a class="footer-top-link-demo"> Get a Demo </a>
          <img
            src="../assets/Right.png"
            alt="right"
            class="footer-top-link-demo-img"
          />
        </div>
      </div>
      <div class="footer-bottom">
        .
        <div class="container">
          <div class="footer-bottom-wrap">
            <img
              src="../assets/CompanyInfo.png"
              alt="company"
              class="footer-bottom-company"
            />
            <img
              src="../assets/Links.png"
              alt="link"
              class="footer-bottom-link"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.footer-top {
  padding: 80px 0;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  background-color: #f5f7fa;
}

.footer-top-title {
  text-align: center;
  width: 850px;
  font-size: 64px;
  color: #263238;
}
.footer-top-box-demo {
  width: 178px;
  height: 52px;
  background-color: #28cb8b;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}
.footer-top-link-demo {
  color: white;
}
.footer-top-link-demo-img {
  margin-left: 5px;
  margin-top: 3px;
}
.footer-bottom {
  padding: 80px 0;
  background-color: #263238;
}
.footer-bottom-wrap {
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 1200px) {
  .footer-top-title {
    width: 100%;
  }
  .footer-bottom-wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .footer-bottom-company {
    width: 100%;
  }
  .footer-bottom-link {
    width: 100%;
  }
  .footer-top-title {
    margin-block-start: 0;
    margin-block-end: 0;
  }
}
</style>
<script setup lang="ts"></script>
