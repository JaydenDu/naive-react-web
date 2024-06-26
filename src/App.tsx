import { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from './store';
import { toggleAnimation, toggleLayout, toggleLocale, toggleNavbar, toggleSemidark, toggleTheme } from './store/theme';

function App({ children }: PropsWithChildren) {
    const mainTheme = useSelector((state: IRootState) => state.theme);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleTheme(localStorage.getItem('theme') || mainTheme.theme));
        dispatch(toggleLayout(localStorage.getItem('layout') || mainTheme.layout));
        dispatch(toggleAnimation(localStorage.getItem('animation') || mainTheme.animation));
        dispatch(toggleNavbar(localStorage.getItem('navbar') || mainTheme.navbar));
        dispatch(toggleLocale(localStorage.getItem('i18nextLng') || mainTheme.locale));
        dispatch(toggleSemidark(localStorage.getItem('semidark') || mainTheme.semidark));
    }, [dispatch, mainTheme.theme, mainTheme.layout, mainTheme.animation, mainTheme.navbar, mainTheme.locale, mainTheme.semidark]);

    return <div className={` ${mainTheme.layout}  main-section antialiased relative font-nunito text-sm font-normal`}>{children}</div>;
}

export default App;
