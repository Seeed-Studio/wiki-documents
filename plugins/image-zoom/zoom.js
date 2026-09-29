import siteConfig from '@generated/docusaurus.config';
import mediumZoom from 'medium-zoom';

const {themeConfig} = siteConfig;

function getBackgroundColor(zoom) {
  const isDarkMode = document.querySelector('html[data-theme="dark"]');

  return isDarkMode
    ? zoom.background?.dark || 'rgb(50, 50, 50)'
    : zoom.background?.light || 'rgb(255, 255, 255)';
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

  function detachDetailsImageListeners() {
    detailsImages.forEach((image) => {
      image.removeEventListener('click', openDetailsImage);
    });
    detailsImages = [];
  }

  function attachZoom() {
    detachDetailsImageListeners();

    if (zoomObject) {
      zoomObject.detach();
    }

    zoomObject = mediumZoom(selector, config);
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
