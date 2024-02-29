import { TagLabel } from "./styles"

export interface TagProps {
    text: string;
}

export const Tag = ({ text }: TagProps) => {
    return (
        <TagLabel>{text}</TagLabel>
    )
}