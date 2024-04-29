import { TextL } from "../../components/Text";
import { ConfirmTitle, ConfirmationPanel, DeliveryInfoCard } from "./styles";
import deliveryImgSrc from '../../assets/delivery.png';
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

export const Confirm = () => {
    const address = 'Rua João Daniel Martinelli, 102';
    const city = 'Farrapos - Porto Alegre, RS';

    return (
        <div>
            <h2>
                <ConfirmTitle>Uhu! Pedido confirmado</ConfirmTitle>
            </h2>
            <p>
                <TextL>Agora é só aguardar que logo o café chegará até você</TextL>
            </p>
            <ConfirmationPanel>
                <DeliveryInfoCard>
                    <div>
                        <MapPin size={22} weight="fill" />
                        Entrega em <b>{address}</b>
                        <p>{city}</p>
                    </div>
                    <div>
                        <Timer size={22} weight="fill" />
                        Previsão de entrega
                        <p><b>20 min - 30 min</b></p>
                    </div>
                    <div>
                        <CurrencyDollar size={32} />
                        Pagamento an entrega
                        <p><b>Cartão de Crédito</b></p>
                    </div>
                </DeliveryInfoCard>
                <img src={deliveryImgSrc} />
            </ConfirmationPanel>
        </div>
    );
}