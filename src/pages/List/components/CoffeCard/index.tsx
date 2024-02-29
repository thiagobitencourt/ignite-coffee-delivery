import { Card } from "../../../../components/Card"
import { InputQuantity } from "../../../../components/Quantity"
import { TextS, TitleM, TitleS } from "../../../../components/Text"
import { Tag } from "../Tag"
import { CoffeImage, PurchaseItem } from "./styles"
import expresso from '../../../../assets/coffe/expresso.png';

export const CoffeCard = () => {
    return (
        <Card>
            <CoffeImage><img src={expresso} /></CoffeImage>
            <div>
                <Tag text='Tradicional'></Tag>
            </div>
            <div>
                <TitleS>Expresso tradicional</TitleS>
                <p>
                    <TextS>
                        O tradicional café feito com água quente e grãos moídos
                    </TextS>
                </p>
            </div>
            <PurchaseItem>
                <div>
                    <TextS>R$</TextS>
                    <TitleM>9,90</TitleM>
                </div>
                <InputQuantity></InputQuantity>
                <span>cart</span>
            </PurchaseItem>
        </Card>
    )
}