import {create} from 'zustand';

export const useThemeStore = create((set)=> (
    {
        theme : localStorage.getItem('pern-theme') || 'forest',
        setTheme : (theme) =>{
            localStorage.setItem('pern-theme', theme);
            set({theme})
        }
    }
))