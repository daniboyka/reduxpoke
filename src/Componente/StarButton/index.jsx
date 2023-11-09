import { Button } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';

export const StarButton = ({ isFavorito, onClick }) => {
const Icon = isFavorito ? <StarFilled/> : <StarOutlined/>

    return(
        <Button icon={Icon} onClick={onClick}></Button>
    )
}