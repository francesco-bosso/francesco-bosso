<template>
    <div class="container mt-5">

        <TopPageGeneric :name="header.name" :description="header.description" :tags="tags"
            :src_lottie="animation.src_lottie" :src_lottie_player="animation.src_lottie_player" />
        <hr />

        <div class="row">
            <CardComponentLink v-for="item in items" :key="item.id" :name="item.name" :image="item.image"
                :link="item.link" class="col-md-6 p-2" />
        </div>
    </div>
</template>

<script>
export default {
    name: "PortoflioPage",
    data() {
        return {
            items: {
                item1: {
                    id: 0,
                    name: 'Curriculum',
                    image: '/portfolio/cv.png',
                    link: '/portfolio/files/cv.pdf'
                },
                item2: {
                    id: 1,
                    name: 'Letter of recommendation',
                    image: '/portfolio/polimi.png',
                    link: '/portfolio/files/polimi.pdf'
                },
                item3: {
                    id: 2,
                    name: 'Letter of recommendation',
                    image: '/portfolio/mite.png',
                    link: '/portfolio/files/mite.pdf'
                },
                item4: {
                    id: 3,
                    name: 'Letter of recommendation',
                    image: '/portfolio/ec.png',
                    link: '/portfolio/files/EuropeanCommission.pdf'
                },
            },
            header: {
                name: 'Portfolio',
                description:
                    'Welcome to the Portfolio section! Here, you\'ll find my CV, as well as letters of recommendation and feedback from others about my previous experiences. These resources provide insight into my professional background and abilities and can help you get to know me better.',
            },
            pathToGeospatial: 'geospatial',
            animation: {
                src_lottie: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
                src_lottie_player: "https://assets10.lottiefiles.com/private_files/lf30_9ligey5f.json"
            },
            tags: ['CV','Letters','Opinions']
        }
    },
    head() {
    return {
      title: 'Francesco Bosso | Portfolio',
      meta: [
        {
          hid: 'descriptionPortfolio',
          name: 'description',
          content: 'in the current page it is possible find my CV, some letters of recommendation and third parties opinions about my previous experiences.',
        },
        {
          hid: 'keywordsPortfolio',
          name: 'keywords',
          content: ['CV', 'Curriculum', 'Letters of recommendation', 'MiTE', 'polimi'],
        },
      ],
    }
  },
}
</script>

<style scoped>
.item {
    border: solid 2px rgb(66, 66, 66);
    border-radius: 5px;
    text-align: center;
    margin: 10px;
}

.logo {
    margin: 10px;
    border-radius: 5px;
}

.text {
    margin: auto;
    font-weight: 600;
    font-size: larger;
}
</style>