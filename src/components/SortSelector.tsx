import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props {
    onSelect: (value: string) => void
    selectedSort: string
}
const SortSelector = ({ onSelect, selectedSort }: Props) => {
    const sortOrder = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average rating' },
    ]
    const currentOrder = sortOrder.find(order => order.value === selectedSort)
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by:{currentOrder?.label || 'Relevance'}</MenuButton>
            <MenuList>
                {sortOrder.map((order) => <MenuItem onClick={() => onSelect(order.value)} value={order.value} key={order.value}>{order.label}</MenuItem>)}

            </MenuList>
        </Menu>
    )
}

export default SortSelector
