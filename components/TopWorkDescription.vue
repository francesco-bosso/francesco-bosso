/* ############################## START COMPONENT DESCRIPTION
############################## */ /* this component is used for the creation of
the top part of the event page. It aggregates two different components
(StaticCardComponent and TitleDescription) in a single one in order to create a
big row containing: - An image (not clickable, not interactive) wich is
evocative the specific event [StaticCardComponent] ; - A "Title + Description"
section, plus the "go to project" call to action, in order to describe the event
and let visitors reach it [TitleDescritpion] The required parameters are: - The
image of the specific event; - The Name and Description of the specific event;
Optional parameters: - url: link to the live project, used by the call to action
when finished == 1; - finished: 1/0 flag controlling whether the call to action
is active or shown as "in progress";*/ /* ############################## END
COMPONENT DESCRIPTION ############################### */
<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-xxl-6 order-xxl-1 order-2">
        <!-- here the image is passed inside the StaticCardComponent in order to be displayed -->
        <StaticCardComponent :image="image" />
      </div>
      <div class="col-xxl-6 order-xxl-2 order-1">
        <!-- here Title and Description are passed inside TitleDescription in order to create the
        descriptive section of the top part of the Event Page. Both columns keep their natural
        top alignment (title lines up with the top of the image); the CTA below reads as a
        continuation of the copy rather than a UI block bolted underneath it -->
        <TitleDescription :name="name" :description="description" />
        <div class="cta-row">
          <a
            v-if="finished == 1"
            :href="resolvedUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="cta-link"
          >
            Have a look
            <svg
              class="cta-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -960 960 960"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"
              />
            </svg>
          </a>
          <span v-else class="cta-link cta-link--disabled">
            Still in progress &mdash; check back soon
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { resolveWorkUrl } from '~/utils/mobileFallbackLinks'

export default {
  name: 'TopWorkDescriptionComponent',
  props: {
    image: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, default: '' },
    finished: { type: [Number, Boolean], default: 0 },
  },
  data() {
    return {
      // touch-only devices can't drive keyboard-controlled artifacts (e.g. Manim
      // slides), so some urls get swapped for a fallback on those devices
      isTouchOnly: false,
    }
  },
  computed: {
    resolvedUrl() {
      return resolveWorkUrl(this.url, this.isTouchOnly)
    },
  },
  mounted() {
    this.isTouchOnly = window.matchMedia(
      '(hover: none) and (pointer: coarse)'
    ).matches
  },
}
</script>

<style scoped>
.cta-row {
  margin-top: 1rem;
}

/* a small tinted chip rather than a full-strength button or a bare underline: the soft
background gives it a distinct, tappable shape (so it doesn't read as body text) while staying
light enough to feel like part of the page instead of a UI block bolted underneath the copy */
.cta-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem 0.5rem 0.9rem;
  border-radius: 100rem;
  background-color: rgba(166, 90, 58, 0.1);
  color: rgb(166, 90, 58);
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s ease, gap 0.2s ease;
}

.cta-link:hover {
  background-color: rgba(166, 90, 58, 0.18);
  gap: 0.55rem;
}

.cta-icon {
  width: 0.9rem;
  height: 0.9rem;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.cta-link:hover .cta-icon {
  transform: translate(2px, -2px);
}

.cta-link--disabled {
  background-color: rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  cursor: default;
}

/* below 768px the site already centers the description (see .snippet in main.css); centering
the CTA row to match keeps the button sitting under the text it belongs to rather than breaking
away to the left edge on its own. The chip also grows a bit to clear Apple's ~44pt minimum touch
target, since the desktop sizing is tuned for a mouse pointer, not a fingertip */
@media screen and (max-width: 768px) {
  .cta-row {
    margin-top: 1.25rem;
    text-align: center;
  }

  .cta-link {
    padding: 0.75rem 1.2rem 0.75rem 1.1rem;
    font-size: 1rem;
  }

  .cta-icon {
    width: 1rem;
    height: 1rem;
  }
}
</style>
