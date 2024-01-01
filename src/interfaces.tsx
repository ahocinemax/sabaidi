export interface MenuItemProps {
    imageUrl: string;
    linkTo: string;
    title: string;
    description: string;
}

export interface SushiItemProps {
    imageUrl: string;
    title: string;
    description: string;
    price: number;
}

export interface TopbarProps {
    isActive: boolean;
    toggleActive: () => void;
}

export interface ThaiItemProps {
    name: string;
    description: string;
    image1: string;
    image2: string;
}
