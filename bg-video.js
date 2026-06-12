/* Injects the looping space-video background on capable devices.
   Falls back to the static bg.jpg (body::before in glass.css) when
   skipped: reduced-motion preference, data saver, or small screens. */
(function(){
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (navigator.connection && navigator.connection.saveData) return;
  if (matchMedia('(max-width: 768px)').matches) return;
  var v = document.createElement('video');
  v.className = 'bg-video';
  v.autoplay = true;
  v.muted = true;
  v.loop = true;
  v.playsInline = true;
  v.setAttribute('muted', '');
  v.setAttribute('playsinline', '');
  v.src = 'images/bg.mp4';
  v.addEventListener('canplay', function(){ v.classList.add('on'); }, {once:true});
  document.body.prepend(v);
})();
