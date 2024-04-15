import { MapPin } from '@phosphor-icons/react';
import logo from '../../assets/logo.png';
import { HeaderBar, HeaderLine, Location } from './styles';
import { HeaderCard } from '../HeaderCart';

export const Header = () => {
    return (
        <HeaderBar>
            <img src={logo} />
            <HeaderLine>
                <Location>
                    <MapPin size={22} weight="fill" />
                    <span>Foz do Iguaçu, PR</span>
                </Location>
                <HeaderCard />
            </HeaderLine>
        </HeaderBar>
    );
}
