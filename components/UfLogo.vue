<template>
  <svg
    v-bind:style="[dim, inl]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 441.22 481.28"
  >
    <g data-name="2">
      <g>
        <path
          class="ufLogo"
          d="M335.43,244.23c37.45,0,57.69,6.53,105.79,57.9L387.68,199.82c-8.93,24.38-16.55,35.26-63.13,35.26H257.07c-21.77,0-34.61-9.36-34.61-36.56V92.08c0-43.32,23.29-46.15,89.68-61.6h-89.9C208.1,43.75,199,47.23,185.89,37.65,162.16,20.24,153.9,14.59,133.43,0c49.63,53.11,56.82,56.38,56.82,89.46v57c0,39.4-25.91,66.39-64.44,66.39H98.61c-29.39,0-35.49-20.67-30.91-53.33,5.44-39,31.34-79.88,73.36-129.07H54L0,98.61c9.15-6.32,50.94-42,68.79-47.68,10.66-3.26,21.76-2.83,26.77,7.62,5.44,11.1-3.92,29.39-22,25-16.32,18.5-37.87,49.19-43.32,83.15-5.21,33.08,4.58,77.49,60.52,77.49h78.58s-5-8.06-3-21.56C168,211.14,176.1,202,183.72,202c7,0,7.61,7,7.61,12.63v92.51H63.12c-11.31,0-21.55,2-32.64,4.56,11.09,2.62,21.33,4.57,32.64,4.57H191.33v42.89c2.24-16.27,4.19-30.49,6.22-42.89h85.64v65.31c0,31.34-8.71,30.91-30.47,38.74,35.91,2.83,50.5,13.93,62.69,61v-165h10.67c26.55,0,30.91,20.69,50.71,64.65V272.31c-7,23.07-17.85,34.83-39,34.83H315.41V263.6C315.41,248.58,322.37,244.23,335.43,244.23Zm-52.24,62.91H199.14c8.36-45.72,19.54-62.91,57.28-62.91h18.06c5.66,0,8.71,2.82,8.71,8.49Z"
        />
      </g>
    </g>
  </svg>
</template>
<script>
export default {
  props: {
    inline: {
      type: Boolean,
      required: false,
    },
    size: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    dim: {
      default: function () {
        return {
          width: this.size,
          height: this.size,
        }
      },
    },
    inl: {
      default: function () {
        if (this.inline) {
          return {
            display: 'inline',
          }
        }
      },
    },
    col: {
      default: function () {
        return {
          fill: this.color,
        }
      },
    },
  },
}
</script>

<style scoped>
img {
  z-index: -1;
  position: relative;
}

.active {
  transform: scale(0.5);
}
</style>
