<template>
  <div class="container mt-5 homepage-container">
    <!-- TOP SECTION -->
    <div class="row top-section">
      <div class="col-md margin-top">
        <h1 class="header-index mb-4">Francesco Bosso</h1>
        <p class="snippet mb-4">Machine Learning Researcher</p>
      </div>
      <div class="col-md center-div">
        <img class="rotate rounded-circle responsive-img" src="/homepage/me.webp" alt="Francesco image">
      </div>
    </div>

    <!-- BELOW-THE-FOLD SECTION -->
    <div class="row mt-4 g-3 below-fold">
      <h1 class="style: italic">Categories</h1>
      <div v-for="section in sections" :key="section.id" class="col-12 col-md-6 col-lg-3">
        <NuxtLink :to="section.path" class="image menu d-block">
          <img :src="section.image" :alt="section.alt" class="card-image img-fluid" />
          <div class="middle">{{ section.name }}</div>
        </NuxtLink>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    // Home Page data never changes
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
    }
  },
  head() {
    return {
      title: `Francesco Bosso | Machine Learning`,
      meta: [
        {
          hid: 'descriptionHomepage',
          name: 'description',
          content: `Homepage showing all sections of the site`,
        },
        {
          hid: 'keywordsHomepage',
          name: 'keywords',
          content: [
            'Homepage',
            'Geospatial',
            'Artificial Intelligence',
            'Just Because',
            'Francesco Bosso',
            'Defence',
            'Aerospace',
            'Machine Learning',
            'ML',
            'Francesco Bosso',
            'Francesco Bosso AI',
            'Francesco Bosso researcher',
            'Francesco Bosso defence',
            'Francesco Bosso machine learning',
            'Francesco Bosso artificial intelligence',
            'Francesco Bosso aerospace',
            'Francesco Bosso data science',
            'Francesco Bosso reinforcement learning',
            'Francesco Bosso European Commission',
            'AI researcher in defence and security',
            'Machine learning for aerospace systems',
            'Reinforcement learning energy optimization',
            'Cognitive radar and sensor optimization',
            'AI innovation in defence technology',
            'European Commission Joint Research Centre AI',
            'intelligent sensing',
            'situational awareness',
            'cognitive radar',
            'autonomous systems',
            'energy optimization with AI',
            'simulation and reinforcement learning',
            'AI for policy-making',
            'GCAP project AI',
            'Francesco Bosso AI researcher profile',
            'AI in defence and aerospace by Francesco Bosso',
            'Reinforcement learning for energy optimization – Francesco Bosso',
            'Cognitive radar research by Francesco Bosso',
            'European Commission AI projects Francesco Bosso'
          ]
          ,
        },
      ],
    }
  },
}
</script>


<style scoped>
/* GENERAL LAYOUT */
.homepage-container {
  overflow: hidden;
}

/* TOP SECTION */
.top-section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
  /* allow wrapping on mobile */
  height: 100vh;
  /* always fill the viewport height */
}

@media (max-width: 991px) {
  .top-section {
    flex-direction: column;
    /* stack text and image vertically */
    justify-content: flex-start;
    padding-top: 40px;
  }

  .margin-top {
    margin-top: 0;
    /* reduce vertical spacing on mobile */
  }

  .center-div {
    margin-top: 20px;
    /* small gap between text and image */
  }
}

.header-index {
  font-weight: 300;
  font-size: 5vw;
  text-align: left;
  margin: 0;
}

@media (max-width: 768px) {
  .header-index {
    text-align: center;
  }
}

.center-div {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.margin-top {
  margin-top: 80px;
}

@media (max-width: 991px) {
  .margin-top {
    margin-top: 0;
  }
}

.responsive-img {
  width: 80%;
  max-width: 500px;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
}

@media (max-width: 375px) {
  .header-index {
    font-size: 12vw;
  }
}

@media (min-width: 769px) {
  .rotate {
    transition: transform .8s ease-in-out;
  }

  .rotate:hover {
    transform: rotate(5deg);
  }
}


/* BELOW-THE-FOLD CARDS */
.below-fold {
  margin-top: 100vh;
  perspective: 1000px;
  /* enable 3D tilt */
  height: 100vh;
}

.image {
  padding: 0;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  height: 250px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.menu:hover .card-image {
  opacity: 0.7;
}

.middle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.menu:hover .middle {
  opacity: 1;
}

@media (max-width: 768px) {
  .middle {
    font-size: 1.2rem;
    opacity: 1;
  }

  .card-image {
    opacity: 0.8;
  }
}
</style>
