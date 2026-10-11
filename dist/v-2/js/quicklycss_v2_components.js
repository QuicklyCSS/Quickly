(function (window, document) {
  'use strict';

  /**
   * Inicializa cada grupo de pestañas y mantiene sincronizados los activadores,
   * los paneles, aria-selected y la navegación con flechas del teclado.
   */
  function initTabs(root) {
    root.querySelectorAll('[data-qy-tabs]').forEach(function (tabs) {
      if (tabs.dataset.qyTabsReady === 'true') return;
      const triggers = Array.from(tabs.querySelectorAll('[data-qy-tab]'));
      const panels = Array.from(tabs.querySelectorAll('[data-qy-panel]'));
      if (!triggers.length) return;
      tabs.dataset.qyTabsReady = 'true';
      // Activa una pestaña y oculta todos los paneles que no le pertenecen.
      function select(trigger) {
        const target = trigger.getAttribute('aria-controls');
        triggers.forEach(function (item) {
          const active = item === trigger;
          item.setAttribute('aria-selected', String(active));
          item.setAttribute('tabindex', active ? '0' : '-1');
        });
        panels.forEach(function (panel) { panel.hidden = panel.id !== target; });
      }
      triggers.forEach(function (trigger, index) {
        trigger.addEventListener('click', function () { select(trigger); });
        trigger.addEventListener('keydown', function (event) {
          const supportedKeys = ['ArrowLeft', 'ArrowRight', 'Home', 'End'];
          if (!supportedKeys.includes(event.key)) return;
          event.preventDefault();

          // Home y End saltan a los extremos; las flechas recorren la lista
          // horizontalmente y continúan desde el extremo contrario.
          let next;
          if (event.key === 'Home') next = triggers[0];
          else if (event.key === 'End') next = triggers[triggers.length - 1];
          else {
            const offset = event.key === 'ArrowRight' ? 1 : -1;
            next = triggers[(index + offset + triggers.length) % triggers.length];
          }

          next.focus();
          select(next);
        });
      });
      const current = triggers.find(function (item) { return item.getAttribute('aria-selected') === 'true'; }) || triggers[0];
      if (current) select(current);
    });
  }

  /**
   * Mejora cada Accordion nativo con una apertura y un cierre progresivos.
   * Sin JavaScript, details/summary conserva íntegramente su función accesible.
   */
  function initAccordions(root) {
    const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    root.querySelectorAll('.q-accordion__item').forEach(function (item) {
      if (item.dataset.qyAccordionReady === 'true') return;
      const trigger = item.querySelector(':scope > .q-accordion__trigger');
      const panel = item.querySelector(':scope > .q-accordion__panel');
      if (!trigger || !panel) return;

      item.dataset.qyAccordionReady = 'true';
      let animation = null;

      trigger.addEventListener('click', function (event) {
        event.preventDefault();
        if (animation) return;

        const opening = !item.open;
        if (reducedMotion || typeof panel.animate !== 'function') {
          item.open = opening;
          return;
        }

        // Al abrir, details debe exponer primero el panel para poder medirlo.
        if (opening) item.open = true;
        else item.classList.add('is-closing');

        const expandedHeight = panel.scrollHeight;
        const startHeight = opening ? 0 : expandedHeight;
        const endHeight = opening ? expandedHeight : 0;

        // La altura mueve el layout suavemente; opacity y translate suavizan
        // la aparición del contenido sin cambiar su tamaño final.
        animation = panel.animate([
          { height: startHeight + 'px', opacity: opening ? 0 : 1, transform: opening ? 'translateY(-4px)' : 'translateY(0)' },
          { height: endHeight + 'px', opacity: opening ? 1 : 0, transform: opening ? 'translateY(0)' : 'translateY(-4px)' }
        ], {
          duration: 280,
          easing: 'cubic-bezier(.2,.7,.2,1)',
          fill: 'both'
        });

        const currentAnimation = animation;
        animation.addEventListener('finish', function () {
          if (!opening) item.open = false;
          item.classList.remove('is-closing');
          currentAnimation.cancel();
          animation = null;
        }, { once: true });
      });
    });
  }

  /**
   * Conecta los controles data-qy-modal-open y data-qy-modal-close con el
   * elemento dialog correspondiente, conservando el comportamiento modal nativo.
   */
  function initModals(root) {
    root.querySelectorAll('[data-qy-modal-open]').forEach(function (trigger) {
      if (trigger.dataset.qyModalOpenReady === 'true') return;
      trigger.dataset.qyModalOpenReady = 'true';
      trigger.addEventListener('click', function () {
        const modal = document.getElementById(trigger.dataset.qyModalOpen);
        if (modal && typeof modal.showModal === 'function') modal.showModal();
      });
    });
    root.querySelectorAll('[data-qy-modal-close]').forEach(function (trigger) {
      if (trigger.dataset.qyModalCloseReady === 'true') return;
      trigger.dataset.qyModalCloseReady = 'true';
      trigger.addEventListener('click', function () {
        const modal = trigger.closest('dialog');
        if (modal) modal.close();
      });
    });
  }

  /**
   * Habilita acciones genéricas para descartar Alert/Toast y volver a mostrar
   * elementos identificados mediante data-qy-show.
   */
  function initDismiss(root) {
    root.querySelectorAll('[data-qy-dismiss]').forEach(function (trigger) {
      if (trigger.dataset.qyDismissReady === 'true') return;
      trigger.dataset.qyDismissReady = 'true';
      trigger.addEventListener('click', function () {
        const target = trigger.closest('.q-alert, .q-toast');
        if (target) target.remove();
      });
    });
    root.querySelectorAll('[data-qy-show]').forEach(function (trigger) {
      if (trigger.dataset.qyShowReady === 'true') return;
      trigger.dataset.qyShowReady = 'true';
      trigger.addEventListener('click', function () {
        const target = document.getElementById(trigger.dataset.qyShow);
        if (target) target.hidden = false;
      });
    });
  }

  /**
   * Controla la apertura y cierre de paneles Offcanvas construidos con dialog.
   * También permite cerrarlos al pulsar directamente sobre su backdrop.
   */
  function initOffcanvas(root) {
    root.querySelectorAll('[data-qy-offcanvas-open]').forEach(function (trigger) {
      if (trigger.dataset.qyOffcanvasOpenReady === 'true') return;
      trigger.dataset.qyOffcanvasOpenReady = 'true';
      trigger.addEventListener('click', function () {
        const panel = document.getElementById(trigger.dataset.qyOffcanvasOpen);
        if (panel && typeof panel.showModal === 'function') panel.showModal();
      });
    });
    root.querySelectorAll('[data-qy-offcanvas-close]').forEach(function (trigger) {
      if (trigger.dataset.qyOffcanvasCloseReady === 'true') return;
      trigger.dataset.qyOffcanvasCloseReady = 'true';
      trigger.addEventListener('click', function () {
        const panel = trigger.closest('dialog');
        if (panel) panel.close();
      });
    });
    root.querySelectorAll('.q-offcanvas').forEach(function (panel) {
      if (panel.dataset.qyOffcanvasReady === 'true') return;
      panel.dataset.qyOffcanvasReady = 'true';
      panel.addEventListener('click', function (event) {
        if (event.target === panel) panel.close();
      });
    });
  }

  /**
   * Inicializa los carruseles, sus controles, indicadores y navegación por
   * teclado. Respeta prefers-reduced-motion y evita animaciones simultáneas.
   */
  function initCarousels(root) {
    root.querySelectorAll('[data-qy-carousel]').forEach(function (carousel) {
      if (carousel.dataset.qyCarouselReady === 'true') return;
      carousel.dataset.qyCarouselReady = 'true';
      const slides = Array.from(carousel.querySelectorAll('[data-qy-carousel-slide]'));
      const indicators = Array.from(carousel.querySelectorAll('[data-qy-carousel-indicator]'));
      const previous = carousel.querySelector('[data-qy-carousel-prev]');
      const next = carousel.querySelector('[data-qy-carousel-next]');
      const autoplayControl = carousel.querySelector('[data-qy-carousel-toggle]');
      const autoplayValue = carousel.getAttribute('data-qy-carousel-autoplay');
      const autoplayEnabled = carousel.hasAttribute('data-qy-carousel-autoplay') && autoplayValue !== 'false';
      const requestedInterval = Number.parseFloat(autoplayValue || '5000');
      const autoplayInterval = Number.isFinite(requestedInterval) && requestedInterval >= 1000 ? requestedInterval : 5000;
      let current = Math.max(0, slides.findIndex(function (slide) { return !slide.hidden; }));
      let animating = false;
      const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      let autoplayPaused = reducedMotion;
      let autoplayTimer = null;
      const animationClasses = [
        'q-carousel__slide--enter-next', 'q-carousel__slide--exit-next',
        'q-carousel__slide--enter-prev', 'q-carousel__slide--exit-prev'
      ];

      // Refleja en aria-current cuál indicador corresponde al slide visible.
      function syncIndicators() {
        indicators.forEach(function (indicator, indicatorIndex) {
          indicator.setAttribute('aria-current', String(indicatorIndex === current));
        });
      }

      // Detiene el temporizador activo antes de crear uno nuevo.
      function stopAutoplay() {
        if (autoplayTimer === null) return;
        window.clearTimeout(autoplayTimer);
        autoplayTimer = null;
      }

      // Refleja el estado de reproducción en el texto y atributos del control.
      function syncAutoplayControl() {
        if (!autoplayControl) return;
        autoplayControl.hidden = !autoplayEnabled;
        if (!autoplayEnabled) return;
        const actionLabel = autoplayPaused ? 'Reanudar reproducción automática' : 'Pausar reproducción automática';
        autoplayControl.textContent = autoplayPaused ? '▶' : '⏸';
        autoplayControl.setAttribute('aria-pressed', String(autoplayPaused));
        autoplayControl.setAttribute('aria-label', actionLabel);
        autoplayControl.setAttribute('title', actionLabel);
      }

      // Programa el siguiente avance sólo cuando el modo automático está activo.
      function scheduleAutoplay() {
        stopAutoplay();
        if (!autoplayEnabled || autoplayPaused || document.hidden || slides.length < 2) return;
        autoplayTimer = window.setTimeout(function () {
          show(current + 1, 1, true);
          scheduleAutoplay();
        }, autoplayInterval);
      }

      // Pausa o reanuda el modo automático por decisión del usuario.
      function setAutoplayPaused(paused) {
        autoplayPaused = paused;
        syncAutoplayControl();
        scheduleAutoplay();
      }

      // Las acciones manuales conservan el destino solicitado y detienen el autoplay.
      function showManually(index, direction) {
        if (autoplayEnabled) setAutoplayPaused(true);
        show(index, direction, true);
      }

      // Muestra un slide, calcula el recorrido circular y aplica la animación direccional.
      function show(index, direction, animate) {
        if (!slides.length) return;
        const target = (index + slides.length) % slides.length;

        if (animate !== true || reducedMotion || target === current) {
          current = target;
          slides.forEach(function (slide, slideIndex) {
            const active = slideIndex === current;
            animationClasses.forEach(function (className) { slide.classList.remove(className); });
            slide.hidden = !active;
            slide.setAttribute('aria-hidden', String(!active));
          });
          syncIndicators();
          return;
        }

        if (animating) return;
        animating = true;

        const outgoing = slides[current];
        const incoming = slides[target];
        const motion = direction < 0 ? 'prev' : 'next';

        incoming.hidden = false;
        incoming.setAttribute('aria-hidden', 'false');
        outgoing.setAttribute('aria-hidden', 'true');
        outgoing.classList.add('q-carousel__slide--exit-' + motion);
        incoming.classList.add('q-carousel__slide--enter-' + motion);
        current = target;
        syncIndicators();

        let finished = false;
        // Limpia las clases temporales y restablece el carrusel al terminar el movimiento.
        function finish() {
          if (finished) return;
          finished = true;
          outgoing.hidden = true;
          animationClasses.forEach(function (className) {
            outgoing.classList.remove(className);
            incoming.classList.remove(className);
          });
          animating = false;
        }

        incoming.addEventListener('animationend', finish, { once: true });
        window.setTimeout(finish, 520);
      }

      slides.forEach(function (slide, slideIndex) {
        const active = slideIndex === current;
        slide.hidden = !active;
        slide.setAttribute('aria-hidden', String(!active));
      });
      syncIndicators();
      syncAutoplayControl();

      if (previous) previous.addEventListener('click', function () { showManually(current - 1, -1); });
      if (next) next.addEventListener('click', function () { showManually(current + 1, 1); });
      indicators.forEach(function (indicator, index) {
        indicator.addEventListener('click', function () {
          if (index === current) return;
          showManually(index, index > current ? 1 : -1);
        });
      });
      carousel.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') { event.preventDefault(); showManually(current - 1, -1); }
        if (event.key === 'ArrowRight') { event.preventDefault(); showManually(current + 1, 1); }
      });

      if (autoplayControl) {
        autoplayControl.addEventListener('click', function () {
          setAutoplayPaused(!autoplayPaused);
        });
      }

      document.addEventListener('visibilitychange', scheduleAutoplay);
      scheduleAutoplay();
    });
  }

  /**
   * Inicializa Navbar responsive. Lee el breakpoint desde la clase
   * q-navbar-{breakpoint}-collapse o desde data-qy-navbar-breakpoint, controla
   * el colapso principal y coordina los submenús por hover, foco o clic.
   */
  function initNavbars(root) {
    root.querySelectorAll('[data-qy-navbar]').forEach(function (navbar) {
      if (navbar.dataset.qyNavbarReady === 'true') return;
      const toggle = navbar.querySelector('[data-qy-navbar-toggle]');
      const menu = navbar.querySelector('[data-qy-navbar-menu]');
      if (!toggle || !menu) return;
      const dropdowns = Array.from(navbar.querySelectorAll('.q-navbar__dropdown, .q-navbar__submenu-dropdown'));

      navbar.dataset.qyNavbarReady = 'true';
      const breakpointClass = Array.from(navbar.classList).find(function (className) {
        return /^q-navbar-\d+-collapse$/.test(className);
      });
      const classBreakpoint = breakpointClass ? breakpointClass.match(/q-navbar-(\d+)-collapse/)[1] : '';
      const requestedBreakpoint = Number.parseFloat(navbar.dataset.qyNavbarBreakpoint || classBreakpoint || '640');
      const breakpoint = Number.isFinite(requestedBreakpoint) && requestedBreakpoint > 0 ? requestedBreakpoint : 640;
      const collapseQuery = window.matchMedia('(max-width: ' + breakpoint + 'px)');

      // Abre o cierra la navegación colapsada y mantiene aria-expanded actualizado.
      function setMobileState(expanded) {
        toggle.setAttribute('aria-expanded', String(expanded));
        navbar.classList.toggle('is-open', expanded);
        menu.hidden = !expanded;
      }

      // Cierra un nivel desplegable y cualquier nivel descendiente que siga abierto.
      function closeDropdown(dropdown) {
        dropdown.open = false;
        dropdown.querySelectorAll('details[open]').forEach(function (nested) { nested.open = false; });
      }

      // En escritorio abre por hover/foco y cierra al abandonar el área completa.
      // En modo colapsado conserva el comportamiento nativo por clic de details/summary.
      dropdowns.forEach(function (dropdown) {
        const summary = dropdown.querySelector(':scope > summary');
        dropdown.addEventListener('mouseenter', function () {
          if (!navbar.classList.contains('is-collapsible')) dropdown.open = true;
        });
        dropdown.addEventListener('mouseleave', function () {
          if (!navbar.classList.contains('is-collapsible')) closeDropdown(dropdown);
        });
        dropdown.addEventListener('focusin', function () {
          if (!navbar.classList.contains('is-collapsible')) dropdown.open = true;
        });
        dropdown.addEventListener('focusout', function () {
          window.setTimeout(function () {
            if (!navbar.classList.contains('is-collapsible') && !dropdown.contains(document.activeElement)) closeDropdown(dropdown);
          }, 0);
        });
        if (summary) {
          summary.addEventListener('click', function (event) {
            if (!navbar.classList.contains('is-collapsible')) {
              event.preventDefault();
              dropdown.open = true;
            }
          });
        }
      });

      // Recalcula el modo del Navbar cuando el viewport cruza el breakpoint elegido.
      function syncViewport() {
        navbar.classList.toggle('is-collapsible', collapseQuery.matches);
        dropdowns.forEach(closeDropdown);
        if (collapseQuery.matches) setMobileState(false);
        else {
          toggle.setAttribute('aria-expanded', 'false');
          navbar.classList.remove('is-open');
          menu.hidden = false;
        }
      }

      // Alterna el menú principal desde el botón visible en modo colapsado.
      toggle.addEventListener('click', function () {
        setMobileState(toggle.getAttribute('aria-expanded') !== 'true');
      });

      // Después de navegar, cierra el menú móvil para devolver espacio al contenido.
      menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          if (collapseQuery.matches) setMobileState(false);
        });
      });

      if (typeof collapseQuery.addEventListener === 'function') collapseQuery.addEventListener('change', syncViewport);
      else if (typeof collapseQuery.addListener === 'function') collapseQuery.addListener(syncViewport);
      syncViewport();
    });
  }

  /**
   * Punto de entrada público: inicializa todos los componentes interactivos
   * encontrados dentro del documento o del contenedor recibido.
   */
  function init(root) {
    root = root || document;
    initNavbars(root);
    initTabs(root);
    initAccordions(root);
    initModals(root);
    initDismiss(root);
    initOffcanvas(root);
    initCarousels(root);
  }

  // Espera a que exista el DOM cuando el script se carga antes del contenido.
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { init(document); });
  else init(document);

  // Expone init para inicializar componentes insertados dinámicamente.
  window.QuicklyComponents = { version: '2.0.0-alpha.1', init: init };
})(window, document);
