/* ############################## INIZIO DESCRIZIONE COMPONENT ############################## */

questa component implementa il footer che viene inserito all'interno del default layout

/* ############################## FINE DESCRIZIONE COMPONENT ############################### */
<template>
  <!-- this footer is composed by 4 main columns -->
  <div class="footer">
    <footer>
      <div class="container">
        <!-- this is the row containint all the 4 main columnes -->
        <div class="row">
          <!-- Column 1 - It contains the logo of our website and some generic info -->
          <div class="col-xl space">
            <NuxtLink to="/">
              <div class="logo">
                <!--
                <img
                  class="logo-img"
                  src="/favicon.ico"
                  alt="Logo"
                />
                -->
              </div>
            </NuxtLink>
            <div class="paragraph-sx">
              <span class="subtitle-footer"></span> Francesco Bosso
              <br>
              <hr class="line">
              <span class="subtitle-footer">e-mail:</span> francesco_bosso@outlook.com
              <br />
              <span class="subtitle-footer">Phone:</span> +39 3469601901
              
              


            </div>
          </div>
          <!-- Column 2 - It contains the vision that we want to accomplish with our website -->
          <!-- <div class="col-xl space">
            <h1 class="title-footer">Vision</h1>
            <p class="paragraph">
              La "vision" di questo progetto è quella di fornire, a studenti,
              professionisti e analisti, una via d'accesso preferenziale e
              strutturata nei confronti di dati di Land Cover e Land Use su
              scala nazionale.
            </p>
          </div> -->
          <!-- Column 3 - It contains the links to all the sections of the website -->
          <div class="col-xl space">
            <NuxtLink class="section" to="/artificial-intelligence">Artificial Intelligence</NuxtLink>
            <hr class="line" />
            <NuxtLink class="section" to="/geospatial">Geospatial</NuxtLink>
            <hr class="line" />
            <NuxtLink class="section" to="/about-me">About Me</NuxtLink>

            <!-- <hr class="line" />
            <NuxtLink class="section" to="/portfolio">Portfolio</NuxtLink>
            <hr class="line" />
            <NuxtLink class="section" to="/about-mapflap">About Mapflap</NuxtLink> -->
          </div>
          <!-- Column 4 - It contains the icons of all social media pages of our site -->
          <div class="col-xl space">
            <div class="row">
              <div class="social col">
                <nuxt-link to="/portfolio">
                  <img class="icons" src="/footer/references.webp" alt="CV_icon" /></nuxt-link>
              </div>
              <div class="social col">
                <a href="https://www.linkedin.com/in/francesco-bosso-614814130/"><img class="icons"
                    src="/footer/linkedin.webp" alt="linkedin_icon" /></a>
              </div>
              <div class="social col">
                <a href="https://github.com/FBosso"><img class="icons" src="/footer/github.webp"
                    alt="github_icon" /></a>
              </div>
              <div id="hidden-visitor-map" style="display:none; visibility:hidden; width:0; height:0; overflow:hidden;">
                <script type="text/javascript" id="mapmyvisitors"
                  src="//mapmyvisitors.com/map.js?d=a_pBFm5ryIE_oEF30RpDE0V7_5FjjszEy2fUpnff9Kw&cl=ffffff&w=a"></script>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style scoped>
.footer {
  margin-top: 200px;
  background: rgb(255, 255, 255);
  width: 100%;
}

.row {
  text-align: center;
}


.section {
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-size: 1.2em;
  font-weight: 400;
  transition: all 0.3s ease;
  padding: 5px 10px;
  border-radius: 10px;
  z-index: 0;
}

/* Create the calm light effect behind the link */
.section::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: radial-gradient(circle at center,
      rgba(115, 59, 59, 0.25) 60%,
      rgba(115, 59, 59, 0.05) 70%,
      transparent 100%);
  opacity: 0;
  transform: scale(0.95);
  filter: blur(10px);
  transition: all 0.4s ease;
  z-index: -1;
}

/* When hovering, the soft light appears behind */
.section:hover::before {
  opacity: 1;
  transform: scale(1);
}

/* Keep the text color steady on hover */
.section:hover {
  color: black;
}



.icons {
  height: 50px;
  transition: 0.4s ease;
  /* filter: invert(); */
  padding: 5px;
  border-radius: 10px;
}

.icons:hover {
  filter: none;
  background: rgba(255, 255, 255, 0.728);
}

.social {
  padding: 0%;
  padding-top: 30px;
}

.title-footer {
  font-weight: 700;
  font-size: 180%;
  text-align: left;
  color: white;
}

.logo {
  text-align: center;
}

.logo-img {
  height: 60px;
  margin-bottom: 5px;
}

.subtitle-footer {
  font-weight: 600;
}

.paragraph {
  text-align: justify;
  font-size: 0.95rem;
  color: white;
}

@media screen and (max-width: 500px) {
  .paragraph {
    text-align: left;
  }
}

.paragraph-sx {
  text-align: center;
  font-size: 0.95rem;
  color: rgb(0, 0, 0);
}

.space {
  padding: 40px;
}

.line {
  border: solid 1px rgb(0, 0, 0);
  background: rgb(0, 0, 0);

}

/* footer{
  zoom:90%
} */


#mapmyvisitors * {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  width: 0 !important;
  height: 0 !important;
  overflow: hidden !important;
}
</style>