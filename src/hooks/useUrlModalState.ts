import { useState, useEffect, useCallback } from 'react';
import { RoomCategory } from '../data/types';

export interface UrlModalState {
  isPhotoTourOpen: boolean;
  activeRoomSection?: RoomCategory;
  activePhotoId?: string;
  activeLightboxPhotoIndex?: number;
  openPhotoTour: (options?: { sectionId?: RoomCategory; photoId?: string }) => void;
  openLightbox: (photoIndex: number) => void;
  closeModal: () => void;
  closeLightbox: () => void;
}

export function useUrlModalState(): UrlModalState {
  const parseParams = useCallback(() => {
    if (typeof window === 'undefined') {
      return {
        isPhotoTour: false,
        room: undefined as RoomCategory | undefined,
        photo: undefined as string | undefined,
        modalItem: undefined as number | undefined,
      };
    }

    const params = new URLSearchParams(window.location.search);
    const modal = params.get('modal');
    const room = (params.get('room') as RoomCategory) || undefined;
    const photo = params.get('photo') || undefined;
    const modalItem = params.get('modalItem');

    return {
      isPhotoTour: modal === 'PHOTO_TOUR_SCROLLABLE',
      room,
      photo,
      modalItem: modalItem !== null ? parseInt(modalItem, 10) : undefined,
    };
  }, []);

  const [state, setState] = useState(parseParams);

  useEffect(() => {
    const handlePopState = (): void => {
      setState(parseParams());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [parseParams]);

  const updateUrl = useCallback((newParams: URLSearchParams): void => {
    const search = newParams.toString();
    const newUrl = search ? `${window.location.pathname}?${search}` : window.location.pathname;
    window.history.pushState(null, '', newUrl);
    window.dispatchEvent(new Event('popstate'));
  }, []);

  const openPhotoTour = useCallback(
    (options?: { sectionId?: RoomCategory; photoId?: string }) => {
      const params = new URLSearchParams(window.location.search);
      params.set('modal', 'PHOTO_TOUR_SCROLLABLE');
      if (options?.sectionId) {
        params.set('room', options.sectionId);
      } else {
        params.delete('room');
      }
      if (options?.photoId) {
        params.set('photo', options.photoId);
      } else {
        params.delete('photo');
      }
      params.delete('modalItem');
      updateUrl(params);
    },
    [updateUrl]
  );

  const openLightbox = useCallback(
    (photoIndex: number) => {
      const params = new URLSearchParams(window.location.search);
      params.set('modal', 'PHOTO_TOUR_SCROLLABLE');
      params.set('modalItem', photoIndex.toString());
      updateUrl(params);
    },
    [updateUrl]
  );

  const closeModal = useCallback(() => {
    const params = new URLSearchParams(window.location.search);
    params.delete('modal');
    params.delete('modalItem');
    params.delete('room');
    params.delete('photo');
    updateUrl(params);
  }, [updateUrl]);

  const closeLightbox = useCallback(() => {
    const params = new URLSearchParams(window.location.search);
    params.delete('modalItem');
    params.set('modal', 'PHOTO_TOUR_SCROLLABLE');
    updateUrl(params);
  }, [updateUrl]);

  return {
    isPhotoTourOpen: state.isPhotoTour,
    activeRoomSection: state.room,
    activePhotoId: state.photo,
    activeLightboxPhotoIndex: state.modalItem,
    openPhotoTour,
    openLightbox,
    closeModal,
    closeLightbox,
  };
}

export default useUrlModalState;
