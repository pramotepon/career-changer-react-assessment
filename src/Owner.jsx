import React from 'react'
import HomeLayout from './layouts/HomeLayout'


const Owner = () => {
    return (
        <HomeLayout>
            <div className='container text-center'>
                <h1>Pramote - Group G - 35</h1>
                <img src='https://scontent.fbkk29-1.fna.fbcdn.net/v/t1.6435-9/132439550_1279437285752601_7625251461487554971_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Hg-IJjleqP8AX-SU_Z3&_nc_ht=scontent.fbkk29-1.fna&oh=00_AfBUoo3Cxx1Yf7A1MfAPdZvAUBSPbjtht-7xGZvvUQvywg&oe=6465601A' width='270px' />
                <p><b>Short Biography:</b></p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </HomeLayout>
    )
}

export default Owner