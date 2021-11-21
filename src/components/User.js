import './user.css'

const User = ({user}) => {
    return (
        <div className='user' >
            <div className='user__infos' >
                <h3 className='user__infos__name' >Name : {user.name.first} {user.name.last}</h3>
                <h3 className='user__infos__email'>User email : {user.email}</h3>
                <h3 className='user__infos__phone'>User phone : {user.phone}</h3>
            </div>

            <div className='user__image' >
                <img alt='user__photo' src={user.picture.large} />
                <button>More infos</button>
            </div>

        </div>
    )
}

export default User