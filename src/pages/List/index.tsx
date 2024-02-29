import { CoffeCard } from "./components/CoffeCard";

export const List = () => {
    return (
        <section>
            <h2>Nossos cafés</h2>
            <ul>
                <li>
                    <CoffeCard />
                </li>
            </ul>
        </section>
    );
}