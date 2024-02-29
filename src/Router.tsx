import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout';
import { List } from './pages/List';
import { Checkout } from './pages/Checkout';
import { Confirm } from './pages/Confirm';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<List />}></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
                <Route path="/confirm" element={<Confirm />}></Route>
            </Route>
        </Routes>
    )
}