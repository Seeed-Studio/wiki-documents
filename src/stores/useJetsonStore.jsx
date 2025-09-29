import { create } from 'zustand';

export const useJetsonStore = create((set) => ({
    // Below are default values
    product: 'j4012s',
    l4t: '36.4.3',
    mainlink: 'https://example.com/j4012s/36.4.3',
    mirrorlink: '',
    sha256: 'abc123',
    filename: 'j4012s-36.4.3.tar.gz ',
    foldername: 'j4012s-36.4.3',
    setFilename: (filename) => set({ filename }),
    setFoldername: (foldername) => set({ foldername }),
    setProduct: (product) => set({ product, l4t: null }),
    setL4T: (l4t) => set({ l4t }),
    setMainLink: (mainlink) => set({ mainlink }),
    setMirrorLink: (mirrorlink) => set({ mirrorlink }),
    setFilename: (filename) => set({ filename }),
    setSHA256: (sha256) => set({ sha256 }),
    setFoldername: (foldername) => set = ({ foldername })
}));

export const useThemeStore = create((set) => ({
    theme: 'light',
    setTheme: (theme) => set({ theme }),
}));