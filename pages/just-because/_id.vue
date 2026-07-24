/* Page for the individual EVENT */
<template>
    <!-- class container in order to center the contend -->
    <!-- class mt-5 in order to heva a margin top of 5 units -->
    <div class="container mt-5">
        <!-- this component will include the breadcrumps in the page -->
        <BreadCrump :items="breadcrumps" />
        <!-- this component creates the entire "first row" of the page 
    composed of Title, Description and Image related to the selected event -->
        <TopWorkDescription :image="work.image" :name="work.name" :description="work.description" />
        <hr />
        <div class="row">
            <div class="col center">
                <p class="subtitle">Technologies</p>
                <div class="row justify-content-center">
                    <TechnologyComponent class="col m-2" v-for="technology in work.technologies"
                        :key="technology.id" :image="technology.image" :name="technology.name" />
                </div>
            </div>
            <div class="col center">
                <p class="subtitle">Project</p>

                <div v-if="work.finished == 1" class="center">
                    <a :href="work.url">
                        <div class="button btn mt-3 typing" id="demo">Have a look!</div>
                    </a>
                </div>

                <div v-if="work.finished == 0" class="center">
                    <div class="button-deactivated btn mt-3">Still working on it ...</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import BreadCrump from '~/components/BreadCrump.vue'
import TechnologyComponent from '~/components/TechnologyComponent.vue'
export default {
    name: 'SingleGeospatialWork',
    components: {
        BreadCrump,
        TechnologyComponent
    },

    async asyncData({ route, $axios }) {
        // Get the id of the event to show from route
        const { id } = route.params
        // Make api call for data
        const { data } = await $axios.get('/api/justBecause-work/' + id)

        const icons = []
        for (let i = 0; i < data.technologies.length; i++) {
            const code = data.technologies[i].codeTech
            const nome = data.technologies[i].name
            const element = data.technologies[i].image;
            icons.push({ id: code, name: nome, image: element })
        }

        return {
            // parse received data (event data and season name for readable bredcrumbs)
            work: {
                id: data.codeWork,
                name: data.name,
                image: data.image,
                description: data.description,
                technologies: icons,
                url: data.url,
                finished: data.finished,
                short: data.shortName
            },
        }
    },
    data() {
        return {
            // its used to reroute when a card is pressed
            path: 'all-places',
        }
    },
    head() {
        return {
            title: ` ${this.work.short} | Just Because`,
            meta: [
                {
                    hid: 'descriptionSingleJB',
                    name: 'description',
                    content: 'specific Just Because work and its related info: Name, description, image, technologies and related link',
                },
                {
                    hid: 'keywordsSingleJB',
                    name: 'keywords',
                    content: ["Just Because", "Data analysis", "Mapflap", this.work.short, this.work.technologies],
                },
            ],
        }
    },
    computed: {
        // define breadcrumbs routes
        breadcrumps() {
            return [
                {
                    label: 'Just Because',
                    url: '/just-because',
                },
            ]
        },
    },
    // mounted() {
    //     const text = "Have a look!";
    //     let i = 0;

    //     function typeWriter() {
    //         if (i < text.length) {
    //             document.getElementById("demo").innerHTML += text.charAt(i);
    //             i++;
    //             setTimeout(typeWriter, 70);
    //         } else {
    //             // Wait before showing the symbol
    //             setTimeout(() => {
    //                 const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white" style="vertical-align: middle; margin-left: 8px;"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>`;
    //                 document.getElementById("demo").innerHTML += svg;
    //             }, 150); // 400ms delay before appending the symbol
    //         }
    //     }

    //     typeWriter();
    // },
}
</script>

<style scoped>
.sub-sub-title {
    font-weight: 600;
}

.button {
    padding: 1rem 4rem;
    border-radius: 100rem;
    background-color: rgb(166, 90, 58);
    color: white;
    width: 22rem;
    font-weight: 600;
    transition: 0.5s;
}

.button-deactivated {
    padding: 1rem 4rem;
    border-radius: 100rem;
    background-color: rgb(184, 172, 190);
    color: rgb(0, 0, 0);
    width: 24rem;
    font-weight: 600;
}

.button:hover {
    width: 25.5rem;
}

.center {
    text-align: center;
}
</style>