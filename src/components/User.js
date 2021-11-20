import './user.css'

const User = () => {
    return (
        <div className='user' >
            <div className='user__infos' >
                <h3 className='user__infos__name' >Name : name</h3>
                <h3 className='user__infos__username'>Username : username</h3>
                <h3 className='user__infos__email'>User email : email</h3>
                <h3 className='user__infos__phone'>User phone : phone</h3>
            </div>

            <div className='user__image' >
                <img alt='user__photo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png' />
            </div>
        </div>
    )
}

export default User