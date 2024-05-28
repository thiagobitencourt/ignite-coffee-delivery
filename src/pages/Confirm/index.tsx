import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { TextL } from "../../components/Text";
import { ColoredIcon, ConfirmTitle, ConfirmationPanel, DeliveryInfoCard, DeliveryInfoItem, PageContainer } from "./styles";
import { defaultTheme } from '../../styles/themes/default';
import deliveryImgSrc from '../../assets/delivery.png';

export const Confirm = () => {
    const iconSize = 16;
    const address = 'Rua João Daniel Martinelli, 102';
    const city = 'Farrapos - Porto Alegre, RS';

    return (
        <PageContainer>
            <h2>
                <ConfirmTitle>Uhu! Pedido confirmado</ConfirmTitle>
            </h2>
            <p>
                <TextL>Agora é só aguardar que logo o café chegará até você</TextL>
            </p>
            <ConfirmationPanel>
                <DeliveryInfoCard>
                    <DeliveryInfoItem>
                        <ColoredIcon color={defaultTheme.purple}>
                            <MapPin size={iconSize} weight="fill" />
                        </ColoredIcon>
                        <div>
                            Entrega em <b>{address}</b>
                            <p>{city}</p>
                        </div>
                    </DeliveryInfoItem>
                    <DeliveryInfoItem>
                        <ColoredIcon color={defaultTheme.yellow}>
                            <Timer size={iconSize} weight="fill" />
                        </ColoredIcon>
                        <div>
                            Previsão de entrega
                            <p><b>20 min - 30 min</b></p>
                        </div>
                    </DeliveryInfoItem>
                    <DeliveryInfoItem>
                        <ColoredIcon color={defaultTheme['yellow-dark']}>
                            <CurrencyDollar size={iconSize} />
                        </ColoredIcon>
                        <div>
                            Pagamento an entrega
                            <p><b>Cartão de Crédito</b></p>
                        </div>
                    </DeliveryInfoItem>
                </DeliveryInfoCard>
                <img src={deliveryImgSrc} />
            </ConfirmationPanel>
        </PageContainer>
    );
}