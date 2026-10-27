import { useEffect, RefObject } from 'react';

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Traps Tab / Shift+Tab keyboard focus inside the referenced container
 * while active, and automatically focuses the initial element.
 */
export function useFocusTrap(
  active: boolean,
  containerRef: RefObject<HTMLElement | null>,
  initialFocusSelector?: string
): void {
  useEffect(() => {
    if (!active) return;

    // Capture element that had focus before modal was opened to restore it later
    const previousActiveElement = document.activeElement as HTMLElement | null;

    if (!containerRef.current) return;

    const container = containerRef.current;

    // Focus initial element or container
    const initialElement = initialFocusSelector
      ? (container.querySelector(initialFocusSelector) as HTMLElement | null)
      : (container.querySelector(FOCUSABLE_SELECTOR) as HTMLElement | null);

    if (initialElement) {
      initialElement.focus();
    } else if (container.getAttribute('tabindex') !== null) {
      container.focus();
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key !== 'Tab') return;

      const focusableElements = Array.from(
        container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter((el) => el.offsetParent !== null); // Ensure element is visible

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstElement || document.activeElement === container) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      // Restore focus to triggering element
      if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
        previousActiveElement.focus();
      }
    };
  }, [active, containerRef, initialFocusSelector]);
}

export default useFocusTrap;

