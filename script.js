function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
       Images/ezgif-frame-001.png
       Images/ezgif-frame-002.png
       Images/ezgif-frame-003.png  
       Images/ezgif-frame-004.png
       Images/ezgif-frame-005.png
       Images/ezgif-frame-006.png
       Images/ezgif-frame-007.png
       Images/ezgif-frame-008.png
       Images/ezgif-frame-009.png
       Images/ezgif-frame-010.png
       Images/ezgif-frame-011.png
       Images/ezgif-frame-012.png
       Images/ezgif-frame-013.png
       Images/ezgif-frame-014.png
       Images/ezgif-frame-015.png
       Images/ezgif-frame-016.png
       Images/ezgif-frame-017.png
       Images/ezgif-frame-018.png
       Images/ezgif-frame-019.png
       Images/ezgif-frame-020.png
       Images/ezgif-frame-021.png
       Images/ezgif-frame-022.png
       Images/ezgif-frame-023.png
       Images/ezgif-frame-024.png
       Images/ezgif-frame-025.png
       Images/ezgif-frame-026.png
       Images/ezgif-frame-027.png
       Images/ezgif-frame-028.png
       Images/ezgif-frame-029.png
       Images/ezgif-frame-030.png
       Images/ezgif-frame-031.png
       Images/ezgif-frame-032.png
       Images/ezgif-frame-033.png
       Images/ezgif-frame-034.png
       Images/ezgif-frame-035.png
       Images/ezgif-frame-036.png
       Images/ezgif-frame-037.png
       Images/ezgif-frame-038.png
       Images/ezgif-frame-039.png
       Images/ezgif-frame-040.png
       Images/ezgif-frame-041.png
       Images/ezgif-frame-042.png
       Images/ezgif-frame-043.png
       Images/ezgif-frame-044.png
       Images/ezgif-frame-045.png
       Images/ezgif-frame-046.png
       Images/ezgif-frame-047.png
       Images/ezgif-frame-048.png
       Images/ezgif-frame-049.png
       Images/ezgif-frame-050.png
       Images/ezgif-frame-051.png
       Images/ezgif-frame-052.png
       Images/ezgif-frame-053.png
       Images/ezgif-frame-054.png
       Images/ezgif-frame-055.png
       Images/ezgif-frame-056.png
       Images/ezgif-frame-057.png
       Images/ezgif-frame-058.png
       Images/ezgif-frame-059.png
       Images/ezgif-frame-060.png
       Images/ezgif-frame-061.png
       Images/ezgif-frame-062.png
       Images/ezgif-frame-063.png
       Images/ezgif-frame-064.png
       Images/ezgif-frame-065.png
       Images/ezgif-frame-066.png
       Images/ezgif-frame-067.png
       Images/ezgif-frame-068.png
       Images/ezgif-frame-069.png
       Images/ezgif-frame-070.png
       Images/ezgif-frame-071.png
       Images/ezgif-frame-072.png
       Images/ezgif-frame-073.png
       Images/ezgif-frame-074.png
       Images/ezgif-frame-075.png
       Images/ezgif-frame-076.png
       Images/ezgif-frame-077.png
       Images/ezgif-frame-078.png
       Images/ezgif-frame-079.png
       Images/ezgif-frame-080.png
       Images/ezgif-frame-081.png
       Images/ezgif-frame-082.png
       Images/ezgif-frame-083.png
       Images/ezgif-frame-084.png
       Images/ezgif-frame-085.png
       Images/ezgif-frame-086.png
       Images/ezgif-frame-087.png
       Images/ezgif-frame-088.png
       Images/ezgif-frame-089.png
       Images/ezgif-frame-090.png
       Images/ezgif-frame-091.png
       Images/ezgif-frame-092.png
       Images/ezgif-frame-093.png
       Images/ezgif-frame-094.png
       Images/ezgif-frame-095.png
       Images/ezgif-frame-096.png
       Images/ezgif-frame-097.png
       Images/ezgif-frame-098.png
       Images/ezgif-frame-099.png
       Images/ezgif-frame-100.png
       Images/ezgif-frame-101.png
       Images/ezgif-frame-102.png
       Images/ezgif-frame-103.png
       Images/ezgif-frame-104.png
       Images/ezgif-frame-105.png
       Images/ezgif-frame-106.png
       Images/ezgif-frame-107.png
       Images/ezgif-frame-108.png
       Images/ezgif-frame-109.png
       Images/ezgif-frame-110.png
       Images/ezgif-frame-111.png
       Images/ezgif-frame-112.png
       Images/ezgif-frame-113.png
       Images/ezgif-frame-114.png
       Images/ezgif-frame-115.png
       Images/ezgif-frame-116.png
       Images/ezgif-frame-117.png
       Images/ezgif-frame-118.png

 `;
  return data.split("\n")[index];
}

const frameCount = 118;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);

  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
