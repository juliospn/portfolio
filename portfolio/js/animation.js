var animationFile = '../assets/business-team.json';
var animData = {
  renderer: 'svg/canvas/html',
  loop: true,
  autoplay: true,
  animationData: animationFile
};
var anim = bodymovin.loadAnimation(animData);
