// blog.js – leser data.js og rendrer alt på siden

document.addEventListener('DOMContentLoaded', () => {
  renderStatus();
  renderRouteStrip();
  renderMap();
  renderPosts();
  renderPhotos();
});

// ── STATUS BAR ───────────────────────────────────────────────
function renderStatus() {
  const s = TRIP_DATA.status;
  const dot = document.querySelector('.live-dot');
  if (!s.isLive) {
    dot.style.background = '#888';
    dot.style.animation = 'none';
  }
  setText('statusText',    s.text);
  setText('currentLocation', s.location);
  setText('currentDay',    s.day);
  setText('nextStop',      s.nextStop);
  setText('kmDriven',      s.kmDriven ? s.kmDriven + ' km' : '0 km');
}

// ── ROUTE STRIP ──────────────────────────────────────────────
function renderRouteStrip() {
  const container = document.getElementById('routeStops');
  const stops = TRIP_DATA.routeStops;
  container.innerHTML = '';

  stops.forEach((stop, i) => {
    // Dot
    const dot = document.createElement('div');
    dot.className = 'rs-stop';
    const dotEl = document.createElement('div');
    dotEl.className = 'rs-dot' + (stop.state ? ' ' + stop.state : '');
    const label = document.createElement('div');
    label.className = 'rs-label' + (stop.state ? ' ' + stop.state : '');
    label.textContent = stop.label;
    dot.appendChild(dotEl);
    dot.appendChild(label);
    container.appendChild(dot);

    // Line between stops
    if (i < stops.length - 1) {
      const line = document.createElement('div');
      line.className = 'rs-line' + (stop.state === 'done' ? ' done' : '');
      container.appendChild(line);
    }
  });
}

// ── MAP ──────────────────────────────────────────────────────
function renderMap() {
  const pos = TRIP_DATA.currentPosition;
  const coords = TRIP_DATA.routeCoords;

  const map = L.map('map', { zoomControl: true, scrollWheelZoom: false });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap, © CARTO',
    maxZoom: 19,
  }).addTo(map);

  // Route line
  const routeLine = L.polyline(coords, {
    color: '#2E4057',
    weight: 2.5,
    opacity: 0.5,
    dashArray: '6 4',
  }).addTo(map);

  // Driven portion (up to current position)
  const currentIdx = TRIP_DATA.routeStops.findIndex(s => s.state === 'current');
  if (currentIdx > 0) {
    const drivenCoords = coords.slice(0, currentIdx + 1);
    L.polyline(drivenCoords, {
      color: '#EE6C4D',
      weight: 3,
      opacity: 0.9,
    }).addTo(map);
  }

  // Route stop markers
  TRIP_DATA.routeStops.forEach((stop, i) => {
    if (!coords[i]) return;
    const isDone    = stop.state === 'done';
    const isCurrent = stop.state === 'current';

    const icon = L.divIcon({
      className: '',
      html: `<div style="
        width:${isCurrent ? 14 : 9}px;
        height:${isCurrent ? 14 : 9}px;
        border-radius:50%;
        background:${isCurrent ? '#EE6C4D' : isDone ? '#2E4057' : '#CCC'};
        border:2px solid ${isCurrent ? '#EE6C4D' : isDone ? '#2E4057' : '#AAA'};
        box-shadow:${isCurrent ? '0 0 0 4px rgba(238,108,77,0.25)' : 'none'};
      "></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });

    L.marker(coords[i], { icon })
      .bindPopup(`<strong>${stop.label}</strong>`)
      .addTo(map);
  });

  // Current position pulse marker
  const pulseIcon = L.divIcon({
    className: '',
    html: `<div style="
      width:16px; height:16px; border-radius:50%;
      background:#EE6C4D;
      border:3px solid white;
      box-shadow:0 0 0 3px rgba(238,108,77,0.3), 0 2px 8px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });

  L.marker([pos.lat, pos.lng], { icon: pulseIcon })
    .bindPopup(`<strong>📍 Vi er her</strong><br>${pos.label}`)
    .addTo(map)
    .openPopup();

  map.fitBounds(routeLine.getBounds(), { padding: [30, 30] });
}

// ── POSTS ────────────────────────────────────────────────────
function renderPosts() {
  const grid = document.getElementById('postsGrid');
  const posts = TRIP_DATA.posts;

  setText('postCount', posts.length + (posts.length === 1 ? ' innlegg' : ' innlegg'));

  if (posts.length === 0) {
    grid.innerHTML = `<div class="empty-state">
      <div class="empty-icon">🚗</div>
      <div class="empty-text">Turen starter 26. juni</div>
      <div class="empty-sub">Første innlegg kommer når vi ruller ut fra Nannestad</div>
    </div>`;
    return;
  }

  grid.innerHTML = '';

  posts.forEach((post, i) => {
    const card = document.createElement('div');
    card.className = 'post-card' + (i === 0 ? ' featured' : '');

    const imgSrc = post.image || '';
    const hasImg = imgSrc.length > 0;

    if (i === 0 && hasImg) {
      card.innerHTML = `
        <img class="post-image" src="${imgSrc}" alt="${post.title}" onerror="this.style.display='none'">
        <div class="post-meta">
          <span class="post-date">${post.date}</span>
          <span class="post-location-tag">📍 ${post.location}</span>
        </div>
        <h2 class="post-title">${post.title}</h2>
        <p class="post-excerpt">${post.excerpt}</p>
        <span class="post-read-more" onclick="openPost(${i})">Les mer →</span>
      `;
    } else if (i === 0) {
      card.innerHTML = `
        <div class="post-meta">
          <span class="post-date">${post.date}</span>
          <span class="post-location-tag">📍 ${post.location}</span>
        </div>
        <h2 class="post-title">${post.title}</h2>
        <p class="post-excerpt">${post.excerpt}</p>
        <span class="post-read-more" onclick="openPost(${i})">Les mer →</span>
      `;
    } else {
      card.innerHTML = `
        <div>
          <div class="post-meta">
            <span class="post-date">${post.date}</span>
            <span class="post-location-tag">📍 ${post.location}</span>
          </div>
          <h3 class="post-title" style="font-size:17px">${post.title}</h3>
          <p class="post-excerpt" style="-webkit-line-clamp:2">${post.excerpt}</p>
          <span class="post-read-more" onclick="openPost(${i})">Les mer →</span>
        </div>
        ${hasImg ? `<img class="post-image-thumb" src="${imgSrc}" alt="${post.title}" onerror="this.style.display='none'">` : ''}
      `;
    }

    grid.appendChild(card);
  });
}

// ── PHOTOS ───────────────────────────────────────────────────
function renderPhotos() {
  const grid    = document.getElementById('photoGrid');
  const empty   = document.getElementById('photoEmpty');
  const photos  = TRIP_DATA.photos;

  setText('photoCount', photos.length + ' bilder');

  if (photos.length === 0) {
    grid.style.display = 'none';
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';
  grid.style.display  = 'grid';
  grid.innerHTML = '';

  photos.forEach(photo => {
    const item = document.createElement('div');
    item.className = 'photo-grid-item';
    item.innerHTML = `
      <img src="${photo.src}" alt="${photo.caption || ''}" loading="lazy"
           onerror="this.parentElement.style.display='none'">
      ${photo.caption ? `<div class="photo-caption">${photo.caption}</div>` : ''}
    `;
    item.onclick = () => openPhoto(photo);
    grid.appendChild(item);
  });
}

// ── MODAL ────────────────────────────────────────────────────
function openPost(idx) {
  const post = TRIP_DATA.posts[idx];
  if (!post) return;

  const body = document.getElementById('modalBody');
  body.innerHTML = `
    ${post.image ? `<img class="modal-hero-img" src="${post.image}" alt="${post.title}" onerror="this.style.display='none'">` : ''}
    <div class="post-meta">
      <span class="post-date">${post.date}</span>
      <span class="post-location-tag">📍 ${post.location}</span>
    </div>
    <h2 class="post-title">${post.title}</h2>
    <div class="post-full-text">${post.fullText || post.excerpt}</div>
  `;

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openPhoto(photo) {
  const body = document.getElementById('modalBody');
  body.innerHTML = `
    <img style="width:100%;border-radius:8px;display:block;margin-bottom:12px" src="${photo.src}" alt="${photo.caption || ''}">
    ${photo.caption ? `<p style="font-size:14px;color:#666;text-align:center">${photo.caption}</p>` : ''}
  `;
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modalOverlay') && !e.target.closest('button')) return;
  if (!e) {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
    return;
  }
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── UTIL ─────────────────────────────────────────────────────
function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}
