/* Page behaviour: owned by Full-Stack */
/* Timeline: add decade filter buttons (the full list shows without JavaScript) */
(function () {
  var list = document.getElementById('timeline');
  var bar = document.getElementById('decade-filters');
  if (!list || !bar) return;
  var items = Array.prototype.slice.call(list.children);
  var decades = [];
  items.forEach(function (li) {
    var d = li.getAttribute('data-decade');
    if (decades.indexOf(d) < 0) decades.push(d);
  });
  function show(decade, btn) {
    items.forEach(function (li) { li.hidden = decade !== 'All' && li.getAttribute('data-decade') !== decade; });
    Array.prototype.forEach.call(bar.children, function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
  }
  ['All'].concat(decades).forEach(function (d, i) {
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = d;
    b.setAttribute('aria-pressed', String(i === 0));
    b.addEventListener('click', function () { show(d, b); });
    bar.appendChild(b);
  });
  bar.hidden = false;
})();
