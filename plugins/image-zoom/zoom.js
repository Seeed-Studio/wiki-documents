import siteConfig from '@generated/docusaurus.config';
import mediumZoom from 'medium-zoom';

const {themeConfig} = siteConfig;

const MAX_ZOOM_SCALE = 1.8;

function getBackgroundColor(zoom) {
  const isDarkMode = document.querySelector('html[data-theme="dark"]');

  return isDarkMode
    ? zoom.background?.dark || 'rgb(50, 50, 50)'
    : zoom.background?.light || 'rgb(255, 255, 255)';
}

function getNavbarBottom() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return 0;

  const navbarStyle = window.getComputedStyle(navbar);
  if (navbarStyle.display === 'none' || navbarStyle.visibility === 'hidden') {
    return 0;
  }

  return Math.max(0, Math.ceil(navbar.getBoundingClientRect().bottom));
}

function getSafeZoomContainer(target) {
  const viewportWidth = document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight;
  const navbarBottom = getNavbarBottom();
  const horizontalPadding = Math.max(24, Math.round(viewportWidth * 0.04));
  const verticalPadding = Math.max(20, Math.round(viewportHeight * 0.04));
  const fullWidth = Math.max(0, viewportWidth - horizontalPadding * 2);
  const safeHeight = Math.max(
    0,
    viewportHeight - navbarBottom - verticalPadding * 2,
  );

  const {width: renderedWidth = 0, height: renderedHeight = 0} =
    target.getBoundingClientRect();
  const zoomWidth = Math.min(
    fullWidth,
    Math.max(renderedWidth, renderedWidth * MAX_ZOOM_SCALE),
  );
  const zoomHeight = Math.min(
    safeHeight,
    Math.max(renderedHeight, renderedHeight * MAX_ZOOM_SCALE),
  );

  const left = Math.max(0, Math.floor((viewportWidth - zoomWidth) / 2));
  const right = Math.max(0, viewportWidth - left - zoomWidth);
  const top =
    navbarBottom +
    verticalPadding +
    Math.max(0, Math.floor((safeHeight - zoomHeight) / 2));
  const bottom = Math.max(0, viewportHeight - top - zoomHeight);

  return {
    width: viewportWidth,
    height: viewportHeight,
    left,
    top,
    right,
    bottom,
  };
}

export default (function imageZoomClientModule() {
  if (typeof window === 'undefined') {
    return null;
  }

  const {zoom} = themeConfig;
  if (!zoom) {
    return null;
  }

  const {selector = '.markdown img', config = {}} = zoom;
  let zoomObject;
  let detailsImages = [];

  config.background = getBackgroundColor(zoom);

  // Docusaurus Details stops click events before they bubble to document,
  // while medium-zoom normally listens at document level. A listener directly
  // on images inside Details keeps the fix scoped to this incompatibility.
  function openDetailsImage(event) {
    zoomObject?.open({target: event.currentTarget});
  }

  function constrainZoomToNavbar(event) {
    if (!(event.target instanceof HTMLImageElement)) return;

    zoomObject?.update({
      margin: 0,
      container: getSafeZoomContainer(event.target),
    });
  }

  function detachDetailsImageListeners() {
    detailsImages.forEach((image) => {
      image.removeEventListener('click', openDetailsImage);
    });
    detailsImages = [];
  }

  function attachZoom() {
    detachDetailsImageListeners();

    if (zoomObject) {
      zoomObject.off('open', constrainZoomToNavbar);
      zoomObject.detach();
    }

    zoomObject = mediumZoom(selector, config);
    zoomObject.on('open', constrainZoomToNavbar);
    detailsImages = zoomObject
      .getImages()
      .filter((image) => image.closest('details'));

    detailsImages.forEach((image) => {
      image.addEventListener('click', openDetailsImage);
    });
  }

  const observer = new MutationObserver(() => {
    zoomObject?.update({background: getBackgroundColor(zoom)});
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });

  setTimeout(attachZoom, 1000);

  return {
    onRouteUpdate() {
      setTimeout(attachZoom, 1000);
    },
  };
})();
