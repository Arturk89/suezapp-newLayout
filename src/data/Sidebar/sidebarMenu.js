import BuildIcon from '@material-ui/icons/Build';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';

export const showMore = [
    {
        id: 1,
        title: "Strona główna",
        icon: <HomeIcon />
    }
]


export const topSidebarMenu = [
    {
        id: 1,
        title: "Magazyn",
        icon: <LocalGroceryStoreIcon />,
        to: "/magazyn"
    },
    {
        id: 2,
        title: "Warsztat",
        icon: <BuildIcon />,
        to: "/warsztat"
    },
    {
        id: 3,
        title: "Pojazdy",
        icon: <LocalShippingIcon />,
        to: "/pojazdy"
    },
    {
        id: 4,
        title: "Ustawienia",
        icon: <SettingsIcon />,
        to: "/ustawienia"
    }
]

export const bottomSidebarMenu = [
    {
        id: 1,
        title: "Wyloguj",
        icon: <MeetingRoomIcon />
    }
]