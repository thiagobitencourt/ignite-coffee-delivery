import { Card } from "../../../../components/Card"
import { Tag } from "../Tag"

export const CoffeCard = () => {
    return (
        <Card>
            <div>
                image
            </div>
            <div>
                <Tag text='Tradicional'></Tag>
            </div>
            <div>
                <span>Expresso tradicional</span>
                <p>O tradicional café feito com água quente e grãos moídos</p>
            </div>
            <div>
                <div>
                    <span>R$</span>
                    <span>9,90</span>
                </div>
                <div>
                    <span> - 1 + </span>
                    <span>cart</span>
                </div>
            </div>
        </Card>
    )
}