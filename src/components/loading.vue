<template>
    <div class="boxContent">
        <!-- <p>等待中...</p> -->
        <div class="loader">
            <div class="loader-inner ball-pulse">
                <div></div>
                <div></div>
                <div></div>
<!--                 <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped lang="scss">
.boxContent {
    width: 3rem;
    // background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 4px;
    z-index: 100;
}
.loader {
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 25%;
    // max-width: 25%;
    // height: 200px;
    align-items: center;
    justify-content: center;
}
@-webkit-keyframes ball-spin-fade-loader {
    50% {
        opacity: 0.3;
        -webkit-transform: scale(0.4);
        transform: scale(0.4);
    }
    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

@keyframes ball-spin-fade-loader {
    50% {
        opacity: 0.3;
        -webkit-transform: scale(0.4);
        transform: scale(0.4);
    }
    100% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}

.ball-spin-fade-loader {
    position: relative;
}

.ball-spin-fade-loader > div:nth-child(1) {
    top: 25px;
    left: 0;
    -webkit-animation: ball-spin-fade-loader 1s 0s infinite linear;
    animation: ball-spin-fade-loader 1s 0s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(2) {
    top: 17.04545px;
    left: 17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.12s infinite linear;
    animation: ball-spin-fade-loader 1s 0.12s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(3) {
    top: 0;
    left: 25px;
    -webkit-animation: ball-spin-fade-loader 1s 0.24s infinite linear;
    animation: ball-spin-fade-loader 1s 0.24s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(4) {
    top: -17.04545px;
    left: 17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.36s infinite linear;
    animation: ball-spin-fade-loader 1s 0.36s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(5) {
    top: -25px;
    left: 0;
    -webkit-animation: ball-spin-fade-loader 1s 0.48s infinite linear;
    animation: ball-spin-fade-loader 1s 0.48s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(6) {
    top: -17.04545px;
    left: -17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.6s infinite linear;
    animation: ball-spin-fade-loader 1s 0.6s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(7) {
    top: 0;
    left: -25px;
    -webkit-animation: ball-spin-fade-loader 1s 0.72s infinite linear;
    animation: ball-spin-fade-loader 1s 0.72s infinite linear;
}

.ball-spin-fade-loader > div:nth-child(8) {
    top: 17.04545px;
    left: -17.04545px;
    -webkit-animation: ball-spin-fade-loader 1s 0.84s infinite linear;
    animation: ball-spin-fade-loader 1s 0.84s infinite linear;
}

.ball-spin-fade-loader > div {
    background-color: #20D0F0;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    position: absolute;
}

@-webkit-keyframes ball-scale-ripple {
  0% {
    -webkit-transform: scale(0.1);
            transform: scale(0.1);
    opacity: 1; }

  70% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 0.7; }

  100% {
    opacity: 0.0; } }

@keyframes ball-scale-ripple {
  0% {
    -webkit-transform: scale(0.1);
            transform: scale(0.1);
    opacity: 1; }

  70% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 0.7; }

  100% {
    opacity: 0.0; } }

.ball-scale-ripple > div {
    color: #20D0F0;

  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  border: 2px solid #20D0F0;
  -webkit-animation: ball-scale-ripple 1s 0s infinite cubic-bezier(.21, .53, .56, .8);
          animation: ball-scale-ripple 1s 0s infinite cubic-bezier(.21, .53, .56, .8); }


          .ball-pulse > div:nth-child(0) {
  -webkit-animation: scale 0.75s 0s infinite cubic-bezier(.2, .68, .18, 1.08);
          animation: scale 0.75s 0s infinite cubic-bezier(.2, .68, .18, 1.08); }
.ball-pulse > div:nth-child(1) {
  -webkit-animation: scale 0.75s 0.12s infinite cubic-bezier(.2, .68, .18, 1.08);
          animation: scale 0.75s 0.12s infinite cubic-bezier(.2, .68, .18, 1.08); }
.ball-pulse > div:nth-child(2) {
  -webkit-animation: scale 0.75s 0.24s infinite cubic-bezier(.2, .68, .18, 1.08);
          animation: scale 0.75s 0.24s infinite cubic-bezier(.2, .68, .18, 1.08); }
.ball-pulse > div:nth-child(3) {
  -webkit-animation: scale 0.75s 0.36s infinite cubic-bezier(.2, .68, .18, 1.08);
          animation: scale 0.75s 0.36s infinite cubic-bezier(.2, .68, .18, 1.08); }
.ball-pulse > div {
  background-color: #20D0F0;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  display: inline-block; }

  @keyframes scale {
  30% {
    -webkit-transform: scale(0.3);
            transform: scale(0.3); }

  100% {
    -webkit-transform: scale(1);
            transform: scale(1); } }
</style>
