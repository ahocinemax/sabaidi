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
    price: string;
    customize?: boolean;
}

export interface ComposeItemProps {
    name: string;
    items: { name: string, price?: string; imageURL?: string }[];
}

export interface TopbarProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export interface ThaiItemProps {
    name: string;
    description: string;
    image1: string;
    image2: string;
    price: string;
}

export interface BestSellerItem {
    title: string;
    description: string;
    imageURL: string;
    altText?: string;
    price: string
    likes?: number;
}

export interface BestSellersProps {
    items: BestSellerItem[];
}

export interface SidebarProps {
    titles: string[];
    activeTitle: string;
    onTitleClick: (title: string) => void;
}

export interface SidebarContextProps {
    activeTitle: string;
    setActiveTitle: (title: string) => void;
}

export interface DynamicContainerProps {
    children?: React.ReactNode;
    props?: ComposeItemProps[];
    className?: string;
}
