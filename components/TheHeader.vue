/* ############################## START COMPONENT DESCRIPTION
############################## */ /* this component is used to create the navbar
of the website. Even if this component is only used in the default.vue layout we
decided to implement it separately in order to maintain a certain order and do
not act directly on the layout for future modifications*/ /*
############################## END COMPONENT DESCRIPTION
############################### */
<template>
  <nav class="navbar navbar-expand-xl navbar-light px-3 header">
    <!-- <div class="container"> -->
    <a class="navbar-brand" href="/"
      ><img
        class="logo"
        src="/header/logo.webp"
        alt="logo"
        width="70"
        height="70"
    /></a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarToggler" class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
        <li
          v-for="(navItem, navItemIndex) of headerList"
          :key="`navItem${navItemIndex}`"
          style="color: black"
        >
          <div class="cont">
            <NuxtLink :to="navItem.path" style="color: black" class="nav-link">
              {{ navItem.name }}
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
    <!-- </div> -->
  </nav>
</template>

<script scoped>
export default {
  name: 'TheHeader',
  data() {
    return {
      headerList: [
        {
          name: 'Artificial Intelligence',
          path: '/artificial-intelligence',
        },
        {
          name: 'Geospatial',
          path: '/geospatial',
        },
        // {
        //   name: 'Just Because',
        //   path: '/just-because',
        // },

        // {
        //   name: 'Portfolio',
        //   path: '/portfolio',
        // },
        {
          name: 'About Me',
          path: '/about-me',
        },
      ],
    }
  },
  mounted() {
    // Hand-rolled replacement for Bootstrap's Collapse JS: the only Bootstrap
    // JS feature this site uses is the navbar toggler, so loading the full
    // bootstrap.bundle.min.js (Popper.js + every component, ~78KB) for it is
    // pure waste. This drives the same .collapse/.collapsing/.show classes
    // Bootstrap's CSS already animates, so the CSS bundle didn't need to change.
    const toggler = this.$el.querySelector('.navbar-toggler')
    const target = document.getElementById('navbarToggler')
    toggler.addEventListener('click', () => {
      const isShown = target.classList.contains('show')
      target.classList.remove('collapse')
      target.classList.add('collapsing')
      if (isShown) {
        target.style.height = `${target.scrollHeight}px`
        // eslint-disable-next-line no-unused-expressions
        target.offsetHeight // force reflow so the transition below runs
        target.style.height = '0px'
      } else {
        target.style.height = '0px'
        // eslint-disable-next-line no-unused-expressions
        target.offsetHeight
        target.style.height = `${target.scrollHeight}px`
      }
      target.addEventListener(
        'transitionend',
        () => {
          target.classList.remove('collapsing')
          target.classList.toggle('show', !isShown)
          target.classList.add('collapse')
          target.style.height = ''
        },
        { once: true }
      )
      toggler.setAttribute('aria-expanded', String(!isShown))
    })
  },
}
</script>
<style scoped>
a {
  font-size: 25px;
  font-weight: 300;
}

.nav-link {
  margin: 0 10px 5px 10px;
  border-radius: 10px;
  position: relative;
  z-index: 1;
}

/* ===== Calm Light Hover Effect ===== */
.cont {
  position: relative;
  display: inline-block;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.cont::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: radial-gradient(
    circle at center,
    rgba(166, 90, 58, 0.25) 60%,
    rgba(166, 90, 58, 0.05) 70%,
    transparent 100%
  );
  opacity: 0;
  transform: scale(0.95);
  filter: blur(12px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out,
    filter 0.5s ease-in-out;
  z-index: -1;
}

.cont:hover::before {
  opacity: 1;
  transform: scale(1);
  filter: blur(15px);
}

/* ===== Desktop Hover (no solid background) ===== */
.nav-link:hover {
  background: none;
}

/* ===== Mobile View ===== */
@media screen and (max-width: 992px) {
  .nav-link:hover {
    background: none;
    color: black;
  }

  .cont:hover::before {
    background: rgba(166, 90, 58, 0.4);
    filter: none;
    opacity: 1;
    transform: none;
    transition: opacity 0.3s ease-in-out;
  }
}
</style>
