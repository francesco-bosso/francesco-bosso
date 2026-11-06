export default async (models) => {

    const listaWork = [
        {
            codeWork: 1,
            name: "Accuracy assessment of world population raster data",
            shortName: "Accuracy assessment",
            image: "/geospatial/miniature_work_1.png",
            description: "A WebGIS presenting an analysis that tests the accuracy of two world population data maps: the GHSL and the WorldPop layer, against high-resolution satellite imagery, with an additional intercomparison of the two. (slow to load)",
            category: 1,
            url: "http://mapflap.herokuapp.com/summary",
            finished: 1
        },
        {
            codeWork: 2,
            name: "NDVI computation from satellite imagery",
            shortName: "NDVI computation",
            image: "/geospatial/miniature_work_2.png",
            description: "A little step into the remote sensing world through the computation of the NDVI (Normalized Difference Vegetation Index) based on Sentinel-2 satellite data. The aim of this index is to assess whether or not the target being observed contains live green vegetation. (NOTE: it may take a while to load)",
            category: 1,
            url: "http://mapflap.herokuapp.com/summary_work_2_geo",
            finished: 1
        },
        {
            codeWork: 3,
            name: "NDBI and ML classification",
            shortName: "NDBI and ML",
            image: "/geospatial/miniature_work_3.png",
            description: "Computation of the NDBI (Normalized Difference Built-up Index) based on Sentinel-2 satellite data and comparison of the thematic map, extracted starting from the results of this index, with the one created through the application of a Machine Learning classification algorithm: k-NN.",
            category: 1,
            url: "",
            finished: 0
        },
        {
            codeWork: 4,
            name: "Locus: Website for an art town - Bergamo",
            shortName: "Bergamo's WebApp",
            image: "/just_because/Bergamo.jpg",
            description: "The aim of this project is to provide an immersive and wonderful experience in visiting one of the most beautiful cities of northern Italy: Bergamo. The history of Bergamo is full of art, nature and adventures and the vision of that project is to spread it all over the world, making it accessible with an interactive website!",
            category: 3,
            url: "https://locusbergamo.github.io/",
            finished: 1
        },
        {
            codeWork: 5,
            name: "CNN for IVT postprocessing",
            shortName: "CNN-IVT",
            image: "/machine_learning/cnn_ivt.png",
            description: "Re-implementation of the notebook referred to in the 2019 paper by Chapman et al. The purpose is to build a Convolutional Neural Network able to postprocess IVT (Integrated Vapor Transport) images derived from NWP model forecasts, correcting them against a set of ground-truth IVT values derived from direct measurements, in order to reduce forecast bias.",
            category: 2,
            url: "https://github.com/FBosso/CNN_IVT",
            finished: 1
        },
        
        {
            codeWork: 6,
            name: "Drought forecasting: ML & climate indices",
            shortName: "ML4Drought",
            image: "/hidden/NIPA.webp",
            description: "Slides of my presentation of 03-11-2022 at IHE Delft. Droughts remain challenging to predict, especially for sub-seasonal lead-times. This work combines a statistical framework and a Machine Learning model to link large-scale climate variables with local precipitation, predicting monthly cumulative precipitation with a Neural Network.",
            category: 2,
            url: "/hidden/Bosso_Francesco_presentation.pdf",
            finished: 1
        },
        {
            codeWork: 7,
            name: "Drought forecasting: ML & climate indices",
            shortName: "ML4Drought",
            image: "/hidden/pearson_image_borders.webp",
            description: "Slides of my presentation of 08-12-2022 at IHE Delft. Droughts remain challenging to predict, especially for sub-seasonal lead-times. This work combines a statistical framework and a Machine Learning model to link large-scale climate variables with local precipitation, predicting monthly cumulative precipitation with a Neural Network.",
            category: 2,
            url: "/hidden/Bosso_Francesco_presentation_08-12-2022.pdf",
            finished: 1
        },
        {
            codeWork: 8,
            name: "ML-based sub-seasonal drought forecasting",
            shortName: "ELM-NN-CNN",
            image: "/hidden/EGU23.jpg",
            description: "This is the official abstract of the research work that I will present at EGU General Assembly 2023. The research examines the forecasting and management of droughts, one of the most severe natural disasters that afflict societies.",
            category: 2,
            url: "https://meetingorganizer.copernicus.org/EGU23/EGU23-6685.html",
            finished: 1
        },
        {
            codeWork: 9,
            name: "Niño Index Phase Analysis (NIPA) readaptation",
            shortName: "NewNIPA",
            image: "/geospatial/miniature_work_4.jpg",
            description: "Readaptation of the Niño Index Phase Analysis (NIPA) by Zimmerman et al. (2016) and Giuliani et al. (2019), modified for sub-seasonal lead-times. NIPA searches for links between Global and Local variables via the phases of climate indices.",
            category: 1,
            url: "https://github.com/FBosso/newNIPA",
            finished: 1
        },
        {
            codeWork: 19,
            name: "Reinforcement Learning: DQN plays Snake",
            shortName: "Q-Snake",
            image: "/machine_learning/q_snake.webp",
            description: "A small neural network that teaches itself to play Snake from scratch with Deep Q-Learning. No rules or hand-written strategy: the agent sees 11 binary features (danger, heading, food direction), picks one of three moves, and learns from rewards and an experience replay buffer until it chases food on purpose.",
            category: 2,
            url: "https://github.com/FBosso/Q-snake",
            finished: 1
        },
        {
            codeWork: 10,
            name: "Reinforcement Learning: DQN for temperature control",
            shortName: "DQN-Shower",
            image: "/machine_learning/reward.png",
            description: "An intelligent agent trained with Deep Q-Learning to regulate water temperature, adapting to external disturbances such as sudden flow changes in the supply line. Its initial state is randomized within 38 ± 3 °C to introduce variability.",
            category: 2,
            url: "https://github.com/FBosso/DQN_shower",
            finished: 1
        },
        {
            codeWork: 11,
            name: "LLMs for location detection of terrorist events",
            shortName: "LLMs4Security",
            image: "/machine_learning/LLMs-location.png",
            description: "This technical report discusses using Large Language Models for location detection in the JRC Terrorism and Extremism Database. It highlights inaccuracies in the database's location algorithm, especially with context and translated names.",
            category: 2,
            url: "https://publications.jrc.ec.europa.eu/repository/handle/JRC134961",
            finished: 1
        },
        {
            codeWork: 12,
            name: "Satellite Orbit computation",
            shortName: "Orbit",
            image: "/geospatial/orbit_computation.png",
            description: "This repository contains Python code to analyze the almanac of a satellite from the Block IIR constellation. The analysis includes computing clock offsets, satellite positions in both Orbital Reference System (ORS) and International Terrestrial Reference Frame (ITRF), converting coordinates to geodetic form, plotting the results, and saving them to a text file.",
            category: 1,
            url: "https://github.com/FBosso/orbit_computation",
            finished: 1
        },
        {
            codeWork: 13,
            name: "Geodetic coordinates transformation",
            shortName: "ReferenceFrame",
            image: "/geospatial/reference_frame.jpg",
            description: "This repository contains Python code to transform geocentric ITRS Cartesian coordinates of COMO PS to geodetic coordinates in the ETRF reference frame, via ITRF baselines, local surveys, and conversion to the Local Level system. Output includes geodetic coordinates for points BRUN, 0001, 0002, and 0003, with standard deviations.",
            category: 1,
            url: "https://github.com/FBosso/reference_frame_transformation",
            finished: 1
        },
        {
            codeWork: 14,
            name: "JRC Terrorism DB: ML Data Quality",
            shortName: "TerrorismDatabase",
            image: "/machine_learning/JRC_terrorism_database.png",
            description: "Co-authored technical report presenting research on improving the data quality of the JRC Terrorism and Extremism Database using machine-learning models. It refines earlier work on the database's automatic event categorisation, aiming to support more reliable event monitoring, trend detection, and threat assessments.",
            category: 2,
            url: "https://publications.jrc.ec.europa.eu/repository/handle/JRC135160",
            finished: 1
        },
        {
            codeWork: 15,
            name: "Ontology Learning for Hybrid Threats",
            shortName: "HYBOLT",
            image: "/machine_learning/onto_learning.webp",
            description: "This report explores using advanced AI for mining Open Source Information in Hybrid Threat analysis. Large Language Models show promise but suffer from hallucinations and biases. We propose using formal knowledge bases to correct these issues, reducing human effort and improving Open Source Intelligence reliability.",
            category: 2,
            url: "https://publications.jrc.ec.europa.eu/repository/handle/JRC140863",
            finished: 1
        },
        {
            codeWork: 16,
            name: "DL-Based Modulation Classification",
            shortName: "DL-AMC",
            image: "/machine_learning/AMC_project.png",
            description: "Reimplementation and extension of a deep learning framework for automatic modulation classification, inspired by the paper Toward Next-Generation Signal Intelligence. The original architecture fuses a CNN for raw IQ samples with an MLP for handcrafted features. This project replaces that fusion mechanism with self-attention and cross-attention modules.",
            category: 2,
            url: "https://github.com/FBosso/AMC",
            finished: 1
        },
        {
            codeWork: 17,
            name: "Multi Layer Perceptron in JAX",
            shortName: "MLP-JAX",
            image: "/machine_learning/MLP_JAX.png",
            description: "This project provides a minimal implementation of a Multi-Layer Perceptron (MLP) classifier built from scratch in JAX and trained on the Iris dataset. It demonstrates the core components of a supervised learning workflow: model definition, forward pass, loss computation, optimization, and accuracy evaluation, using JAX’s functional API.",
            category: 2,
            url: "https://github.com/FBosso/jax_mlp",
            finished: 1
        },
        {
            codeWork: 18,
            name: "AlphaStar with manim",
            shortName: "AlphaStar",
            image: "/machine_learning/alphastar_manim.webp",
            description: "This project is an animated presentation, built with Manim, that explains AlphaStar, DeepMind's StarCraft II agent, and how it is trained: why StarCraft is a hard RL problem, the agent's policy, and its training pipeline of supervised and reinforcement learning. To change slides, use ← →. For full screen, press F.",
            category: 2,
            url: "/machine_learning/artifacts/AlphaStar.html",
            finished: 1
        },
        
        
        

    ]
    await models.Work.bulkCreate(listaWork)

    const listaCategory = [
        {
            category: 1,
            name: "Geospatial",
        },
        {
            category: 2,
            name: "Artificial Intelligence",
        },
        {
            category: 3,
            name: "Just Because",
        },
    ]
    await models.Category.bulkCreate(listaCategory)

    const listaTechnology = [
        {
            codeTech: 1,
            name: "QGIS",
            image: "/technologies/qgis.png",
            url:"https://qgis.org/it/site/",
        },
        {
            codeTech: 2,
            name: "Geoserver",
            image: "/technologies/geoserver.png",
            url: "https://geoserver.org/",
        },
        {
            codeTech: 3,
            name: "OpenLayers",
            image: "/technologies/openlayers.png",
            url: "https://openlayers.org/",
        },
        {
            codeTech: 4,
            name: "Javascript",
            image: "/technologies/javascript.png",
            url: "https://it.wikipedia.org/wiki/JavaScript",
        },
        {
            codeTech: 5,
            name: "SK Learn",
            image: "/technologies/scikit_learn.png",
            url: "https://scikit-learn.org/stable/",
        },
        {
            codeTech: 6,
            name: "mapillary",
            image: "/technologies/mapillary.png",
            url: "https://www.mapillary.com/?locale=it_IT",
        },
        {
            codeTech: 7,
            name: "nodejs",
            image: "/technologies/nodejs.png",
            url: "https://nodejs.org/en",
        },
        {
            codeTech: 8,
            name: "Nuxt",
            image: "/technologies/nuxt.png",
            url: "https://nuxt.com/",
        },
        {
            codeTech: 9,
            name: "Openstreetmap",
            image: "/technologies/openstreetmap.png",
            url: "https://www.openstreetmap.org/#map=6/42.088/12.564",
        },
        {
            codeTech: 10,
            name: "Postgresql",
            image: "/technologies/postgresql.png",
            url: "https://www.postgresql.org/",
        },
        {
            codeTech: 11,
            name: "Matplotlib",
            image: "/technologies/matplotlib.png",
            url: "https://matplotlib.org/",
        },
        {
            codeTech: 12,
            name: "Pandas",
            image: "/technologies/pandas.png",
            url: "https://pandas.pydata.org/",
        },
        {
            codeTech: 13,
            name: "Tensorflow",
            image: "/technologies/tensorflow.png",
            url: "https://www.tensorflow.org/?hl=it",
        },
        {
            codeTech: 14,
            name: "Xarray",
            image: "/technologies/xarray.png",
            url: "https://docs.xarray.dev/en/stable/",
        },
        {
            codeTech: 15,
            name: "Bokeh",
            image: "/technologies/bokeh.png",
            url: "https://bokeh.org/",
        },
        {
            codeTech: 16,
            name: "Numpy",
            image: "/technologies/numpy.png",
            url: "https://numpy.org/",
        },
        {
            codeTech: 17,
            name: "Gym",
            image: "/technologies/gym.png",
            url: "https://www.gymlibrary.dev/index.html",
        },
        {
            codeTech: 18,
            name: "PyTorch",
            image: "/technologies/PyTorch.png",
            url: "https://pytorch.org/",
        },
        {
            codeTech: 19,
            name: "Transformers",
            image: "/technologies/transformers.png",
            url: "https://huggingface.co/docs/transformers/index",
        },
        {
            codeTech: 20,
            name: "JAX",
            image: "/technologies/jax.png",
            url: "https://docs.jax.dev/en/latest/",
        },
        {
            codeTech: 21,
            name: "Neo4j",
            image: "/technologies/neo4j.png",
            url: "https://neo4j.com/",
        },
        {
            codeTech: 22,
            name: "Manim",
            image: "/technologies/manim.png",
            url: "https://www.manim.community/",
        },
        {
            codeTech: 23,
            name: "LaTex",
            image: "/technologies/latex.png",
            url: "https://www.latex-project.org/",
        },
        {
            codeTech: 24,
            name: "Pygame",
            image: "/technologies/pygame.png",
            url: "https://www.pygame.org/",
        },

    ]
    await models.Technology.bulkCreate(listaTechnology)

    const listaWorkTechnology = [
        {
            codeWork: 1,
            codeTech: 1, 
        },
        {
            codeWork: 1,
            codeTech: 2, 
        },
        {
            codeWork: 1,
            codeTech: 3, 
        },
        {
            codeWork: 1,
            codeTech: 4, 
        },
        {
            codeWork: 2,
            codeTech: 1, 
        },
        {
            codeWork: 2,
            codeTech: 2, 
        },
        {
            codeWork: 2,
            codeTech: 3, 
        },
        {
            codeWork: 2,
            codeTech: 4, 
        },
        {
            codeWork: 3,
            codeTech: 1, 
        },
        {
            codeWork: 3,
            codeTech: 2, 
        },
        {
            codeWork: 3,
            codeTech: 3, 
        },
        {
            codeWork: 3,
            codeTech: 4, 
        },
        {
            codeWork: 3,
            codeTech: 5, 
        },
        {
            codeWork: 4,
            codeTech: 6, 
        },
        {
            codeWork: 4,
            codeTech: 7, 
        },
        {
            codeWork: 4,
            codeTech: 8, 
        },
        {
            codeWork: 4,
            codeTech: 9, 
        },
        {
            codeWork: 4,
            codeTech: 10, 
        },
        {
            codeWork: 5,
            codeTech: 11, 
        },
        {
            codeWork: 5,
            codeTech: 12, 
        },
        {
            codeWork: 5,
            codeTech: 13, 
        },
        {
            codeWork: 5,
            codeTech: 14, 
        },
        {
            codeWork: 6,
            codeTech: 11, 
        },
        {
            codeWork: 6,
            codeTech: 12, 
        },
        {
            codeWork: 6,
            codeTech: 13, 
        },
        {
            codeWork: 6,
            codeTech: 14, 
        },
        {
            codeWork: 6,
            codeTech: 15, 
        },
        {
            codeWork: 7,
            codeTech: 11, 
        },
        {
            codeWork: 7,
            codeTech: 12, 
        },
        {
            codeWork: 7,
            codeTech: 13, 
        },
        {
            codeWork: 7,
            codeTech: 14, 
        },
        {
            codeWork: 7,
            codeTech: 5, 
        },
        {
            codeWork: 7,
            codeTech: 15, 
        },
        {
            codeWork: 8,
            codeTech: 12, 
        },
        {
            codeWork: 8,
            codeTech: 13, 
        },
        {
            codeWork: 8,
            codeTech: 14, 
        },
        {
            codeWork: 8,
            codeTech: 5, 
        },
        {
            codeWork: 9,
            codeTech: 12, 
        },
        {
            codeWork: 9,
            codeTech: 11, 
        },
        {
            codeWork: 9,
            codeTech: 14, 
        },
        {
            codeWork: 9,
            codeTech: 16, 
        },
        {
            codeWork: 10,
            codeTech: 16, 
        },
        {
            codeWork: 10,
            codeTech: 17, 
        },
        {
            codeWork: 10,
            codeTech: 18, 
        },
        {
            codeWork: 10,
            codeTech: 11, 
        },
        {
            codeWork: 11,
            codeTech: 12, 
        },
        {
            codeWork: 11,
            codeTech: 16, 
        },
        {
            codeWork: 11,
            codeTech: 18, 
        },
        {
            codeWork: 11,
            codeTech: 19, 
        },
        {
            codeWork: 11,
            codeTech: 5, 
        },
        {
            codeWork: 11,
            codeTech: 11, 
        },
        {
            codeWork: 12,
            codeTech: 11, 
        },
        {
            codeWork: 12,
            codeTech: 16, 
        },
        {
            codeWork: 12,
            codeTech: 12, 
        },
        {
            codeWork: 13,
            codeTech: 11, 
        },
        {
            codeWork: 13,
            codeTech: 16, 
        },

        {
            codeWork: 14,
            codeTech: 12, 
        },
        {
            codeWork: 14,
            codeTech: 16, 
        },
        {
            codeWork: 14,
            codeTech: 18, 
        },
        {
            codeWork: 14,
            codeTech: 19, 
        },
        {
            codeWork: 14,
            codeTech: 5, 
        },
        {
            codeWork: 14,
            codeTech: 11, 
        },

        {
            codeWork: 16,
            codeTech: 11, 
        },
        {
            codeWork: 16,
            codeTech: 12, 
        },
        {
            codeWork: 16,
            codeTech: 16, 
        },
        {
            codeWork: 16,
            codeTech: 18, 
        },

        {
            codeWork: 15,
            codeTech: 21, 
        },
        {
            codeWork: 15,
            codeTech: 19, 
        },
        {
            codeWork: 15,
            codeTech: 12, 
        },
        {
            codeWork: 15,
            codeTech: 11, 
        },

        {
            codeWork: 17,
            codeTech: 20, 
        },
        {
            codeWork: 17,
            codeTech: 16, 
        },
        {
            codeWork: 17,
            codeTech: 11, 
        },
        {
            codeWork: 17,
            codeTech: 5, 
        },

        {
            codeWork: 18,
            codeTech: 22, 
        },
        {
            codeWork: 18,
            codeTech: 23,
        },

        {
            codeWork: 19,
            codeTech: 18,
        },
        {
            codeWork: 19,
            codeTech: 16,
        },
        {
            codeWork: 19,
            codeTech: 24,
        },
        {
            codeWork: 19,
            codeTech: 11,
        },

        
        
    ]
    await models.WorkTechnology.bulkCreate(listaWorkTechnology)

}
