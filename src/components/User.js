import { Button, Modal } from 'antd'
import { useState } from 'react';
import './user.css'

const User = ({ user }) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className='user' >
            <div className='user__infos' >
                <h3 className='user__infos__name' >Name : {user.name.first} {user.name.last}</h3>
                <h3 className='user__infos__email'>User email : {user.email}</h3>
                <h3 className='user__infos__phone'>User phone : {user.phone}</h3>
            </div>

            <div className='user__image' >
                <img alt='user__photo' src={user.picture.large} />
                <Button type='primary' onClick={() => setVisible(true)}>More infos</Button>
                <Modal
                    title="More infos about this user"
                    centered
                    visible={visible}
                    onOk={() => setVisible(false)}
                    onCancel={() => setVisible(false)}
                >
                    <p>Street : {user.location.street.name}</p>
                    <p>City : {user.location.city}</p>
                    <p>Country : {user.location.country} </p>
                </Modal>
            </div>

        </div>
    )
}

export default User