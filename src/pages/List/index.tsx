import { TitleL } from "../../components/Text";
import { CoffeCard } from "./components/CoffeCard";
import { ItemList } from "./styles";

export const List = () => {
    return (
        <section>
            <TitleL>Nossos cafés</TitleL>
            <ItemList role="list">
                <CoffeCard />
                <CoffeCard />
                <CoffeCard />
                <CoffeCard />
            </ItemList>
        </section>
    );
}