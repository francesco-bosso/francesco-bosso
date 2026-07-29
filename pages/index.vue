<template>
  <div class="container mt-5 homepage-container">
    <!-- TOP SECTION -->
    <div class="row top-section">
      <div class="col-md margin-top">
        <h1 class="header-index mb-4">Francesco Bosso</h1>
        <p class="snippet mb-4">Machine Learning Researcher</p>
      </div>
      <div class="col-md center-div">
        <img
          class="rotate rounded-circle responsive-img"
          src="/homepage/me.webp"
          alt="Francesco image"
        />
      </div>
      <button
        type="button"
        class="scroll-cue"
        aria-label="Scroll to categories"
        @click="scrollToCategories"
      >
        <span class="scroll-cue-line"></span>
        <svg
          class="scroll-cue-chevron"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            d="M4 8 L12 16 L20 8"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>

    <!-- BELOW-THE-FOLD SECTION -->
    <div ref="belowFold" class="below-fold">
      <div class="section-heading">
        <h2 class="section-title">Categories</h2>
      </div>
      <div class="row g-3">
        <div
          v-for="(section, index) in sectionsList"
          :key="section.id"
          class="col-12 col-md-6 col-lg-3"
        >
          <NuxtLink
            ref="cards"
            :to="section.path"
            class="image menu d-block"
            :style="{
              transitionDelay: index * 80 + 'ms',
              '--card-bg': section.bg,
              '--card-accent': section.accent,
              '--card-accent-soft': section.accentSoft,
            }"
          >
            <span
              class="card-icon"
              aria-hidden="true"
              :style="{
                WebkitMaskImage: `url(${section.image})`,
                maskImage: `url(${section.image})`,
              }"
            ></span>
            <div class="middle">
              <span class="middle-label">{{ section.name }}</span>
              <span class="middle-arrow" aria-hidden="true">&#8599;</span>
            </div>
          </NuxtLink>
        </div>
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
          image: '/homepage/geospatial-icon.svg',
          col: 7,
          path: 'geospatial',
          bg: '#DCEEF2',
          accent: '#2E6E7C',
          accentSoft: 'rgba(46, 110, 124, 0.28)',
        },
        s2: {
          id: 1,
          name: 'Artificial Intelligence',
          image: '/homepage/artificialIntelligence-icon.svg',
          col: 5,
          path: 'artificial-intelligence',
          bg: '#E6E2F7',
          accent: '#5B4B8A',
          accentSoft: 'rgba(91, 75, 138, 0.28)',
        },
        s3: {
          id: 2,
          name: 'Just Because',
          image: '/homepage/justBecause-icon.svg',
          col: 5,
          path: 'just-because',
          bg: '#FBE6D8',
          accent: '#B5622F',
          accentSoft: 'rgba(181, 98, 47, 0.28)',
        },
        s4: {
          id: 3,
          name: 'About Me',
          image: '/homepage/aboutMe-icon.svg',
          col: 7,
          path: 'about-me',
          bg: '#EDEFDD',
          accent: '#6B7A4F',
          accentSoft: 'rgba(107, 122, 79, 0.28)',
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
            'European Commission AI projects Francesco Bosso',
          ],
        },
      ],
    }
  },
  computed: {
    sectionsList() {
      return Object.values(this.sections)
    },
  },
  mounted() {
    this.setupScrollReveal()
  },
  methods: {
    scrollToCategories() {
      if (this.$refs.belowFold) {
        this.$refs.belowFold.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    },
    setupScrollReveal() {
      const root = this.$refs.belowFold
      const cards = (this.$refs.cards || []).map((card) => card.$el || card)
      const reduceMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      if (
        !root ||
        !cards.length ||
        reduceMotion ||
        !('IntersectionObserver' in window)
      ) {
        return
      }

      root.classList.add('reveal-ready')

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.2 }
      )

      cards.forEach((el) => observer.observe(el))
    },
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
    transition: transform 0.8s ease-in-out;
  }

  .rotate:hover {
    transform: rotate(5deg);
  }
}

/* SCROLL CUE */
.scroll-cue {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  padding: 8px;
  margin: 0;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.32);
  transition: color 0.3s ease;
}

.scroll-cue-line {
  width: 1px;
  height: 28px;
  background: currentColor;
}

.scroll-cue-chevron {
  animation: scrollCueBounce 1.8s ease-in-out infinite;
}

.scroll-cue:hover,
.scroll-cue:focus-visible {
  color: rgba(166, 90, 58, 0.85);
}

@keyframes scrollCueBounce {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.6;
  }
  50% {
    transform: translateY(5px);
    opacity: 1;
  }
}

@media (max-width: 991px) {
  .scroll-cue {
    display: none;
  }
}

/* BELOW-THE-FOLD SECTION */
.below-fold {
  padding: 140px 0 160px;
}

.section-heading {
  margin-bottom: 48px;
}

.section-title {
  font-weight: 300;
  font-size: 2.75rem;
  margin: 0;
}

.section-title::after {
  content: '';
  display: block;
  width: 56px;
  height: 3px;
  background: #1a1a1a;
  margin-top: 18px;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .below-fold {
    padding: 90px 0 110px;
  }

  .section-title {
    font-size: 2.1rem;
  }
}

/* CATEGORY CARDS */
.image {
  padding: 28px 24px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 14px;
  background: var(--card-bg, #ffffff);
  border: 1px solid rgba(0, 0, 0, 0.04);
  height: 250px;
  cursor: pointer;
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.35s ease, opacity 0.7s ease;
}

.below-fold.reveal-ready .image {
  opacity: 0;
  transform: translateY(28px);
}

.below-fold.reveal-ready .image.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.menu:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 32px var(--card-accent-soft, rgba(0, 0, 0, 0.12));
}

.menu:focus-visible {
  outline: 2px solid #1a1a1a;
  outline-offset: 3px;
}

.card-icon {
  display: block;
  width: 52px;
  height: 52px;
  background-color: var(--card-accent, #1a1a1a);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.menu:hover .card-icon {
  transform: translateY(-2px);
}

.middle {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  color: #1a1a1a;
  font-weight: 500;
  font-size: 1.15rem;
}

.middle-label::after {
  content: '';
  display: block;
  width: 26px;
  height: 2px;
  margin-top: 8px;
  background: var(--card-accent, #1a1a1a);
  transition: width 0.4s ease;
}

.middle-arrow {
  font-size: 1.1rem;
  color: var(--card-accent, rgba(0, 0, 0, 0.3));
  opacity: 0.65;
  display: inline-block;
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.menu:hover .middle-label::after {
  width: 46px;
}

.menu:hover .middle-arrow {
  opacity: 1;
  transform: translate(3px, -3px);
}

@media (max-width: 768px) {
  .middle {
    font-size: 1.05rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .scroll-cue-chevron {
    animation: none;
  }

  .menu,
  .card-icon,
  .middle-label::after,
  .middle-arrow {
    transition: none;
  }
}
</style>
