import { useState } from "react";
import { TextM } from "../Text";
import { QuantityAction, QuantitySelector } from "./styles";
import { Minus, Plus } from "@phosphor-icons/react";

export const InputQuantity = () => {
    const [ quantity, setQuantity ] = useState(1);

    const handleMinus = () => {
        setQuantity(state => {
            const newValue = state - 1;
            return newValue < 1 ? 1 : newValue;
        });
    }

    const handlePlus = () => {
        setQuantity(state => state + 1);
    }

    return (
        <QuantitySelector>
            <QuantityAction onClick={handleMinus}><Minus size={16} /></QuantityAction>
            <TextM>{ quantity }</TextM>
            <QuantityAction onClick={handlePlus}><Plus size={16} /></QuantityAction>
        </QuantitySelector>
    );
}
