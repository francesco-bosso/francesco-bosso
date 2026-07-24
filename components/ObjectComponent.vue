<template>
<div>
  <ul class="social-list">
    <li v-for="(item, index) in sections" :key="index">
        <NuxtLink 
          :to="item.path" 
          class="" 
        >
          <img :src="item.image" :alt="item.alt" />
          <div class="">{{ item.name }}</div>
        </NuxtLink>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  name: "ObjectComponent",
  data() {
    return {
         sections: {
        s1: {
          id: 0,
          name: 'Geospatial',
          image: '/homepage/geospatial.webp',
          col: 7,
          path: 'geospatial',
          alt: 'Cover of the geospatial section of the website',
        },
        s2: {
          id: 1,
          name: 'Artificial Intelligence',
          image: '/homepage/artificialIntelligence.webp',
          col: 5,
          path: 'artificial-intelligence',
          alt: 'Cover of the artificial intelligenxe section of the website',
        },
        s3: {
          id: 2,
          name: 'Just Because',
          image: '/homepage/justBecause.webp',
          col: 5,
          path: 'just-because',
          alt: 'Cover of the just because section of the website',
        },
        s4: {
          id: 3,
          name: 'About Me',
          image: '/homepage/surrogatoMapflap.webp',
          col: 7,
          path: 'about-me',
          alt: 'Cover of the about me section of the website'
        },
      },
      socialLinks: [
        { name: "Facebook", icon: "fa fa-facebook", url: "#" },
        { name: "Twitter", icon: "fa fa-twitter", url: "#" },
        { name: "Google", icon: "fa fa-google-plus", url: "#" },
        { name: "Instagram", icon: "fa fa-instagram", url: "#" },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400");

body {
  margin: 0;
  padding: 0;
  background: #ccc;
  font-family: "Roboto Condensed", sans-serif;
}

.social-list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  margin: 0;
  padding: 0;
  padding-bottom: 50px;
}

.social-list li {
  list-style: none;
  margin: 0 5px;
}

.social-list li a .fa {
  font-size: 40px;
  color: #262626;
  line-height: 80px;
  transition: 0.5s;
  padding-right: 14px;
}

.social-list li a span {
  padding: 0;
  margin: 0;
  position: absolute;
  top: 30px;
  color: #262626;
  letter-spacing: 4px;
  transition: 0.5s;
}

.social-list li a {
  text-decoration: none;
  display: block;
  width: 210px;
  height: 80px;
  background: #fff;
  text-align: left;
  padding-left: 20px;
  transform: rotate(-30deg) skew(25deg) translate(0, 0);
  transition: 0.5s;
  box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);
  position: relative;
}

.social-list li a:before {
  content: "";
  position: absolute;
  top: 10px;
  left: -20px;
  height: 100%;
  width: 20px;
  background: #b1b1b1;
  transform: rotate(0deg) skewY(-45deg);
  transition: 0.5s;
}

.social-list li a:after {
  content: "";
  position: absolute;
  bottom: -20px;
  left: -10px;
  height: 20px;
  width: 100%;
  background: #b1b1b1;
  transform: rotate(0deg) skewX(-45deg);
  transition: 0.5s;
}

.social-list li a:hover {
  transform: rotate(-30deg) skew(25deg) translate(20px, -15px);
  box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5);
}

.social-list li:hover .fa {
  color: #fff;
}

.social-list li:hover span {
  color: #fff;
}

.social-list li:nth-child(1):hover a {
  background: #3b5998;
}
.social-list li:nth-child(1):hover a:before {
  background: #365492;
}
.social-list li:nth-child(1):hover a:after {
  background: #4a69ad;
}

.social-list li:nth-child(2):hover a {
  background: #00aced;
}
.social-list li:nth-child(2):hover a:before {
  background: #097aa5;
}
.social-list li:nth-child(2):hover a:after {
  background: #53b9e0;
}

.social-list li:nth-child(3):hover a {
  background: #dd4b39;
}
.social-list li:nth-child(3):hover a:before {
  background: #b33a2b;
}
.social-list li:nth-child(3):hover a:after {
  background: #e66a5a;
}

.social-list li:nth-child(4):hover a {
  background: #e4405f;
}
.social-list li:nth-child(4):hover a:before {
  background: #d81c3f;
}
.social-list li:nth-child(4):hover a:after {
  background: #e46880;
}
</style>
