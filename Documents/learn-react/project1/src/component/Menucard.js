import React from 'react';

const Menucard = ({ menuData }) => {

    return (
        <>
            <div className='main-section'>
                {menuData.map((curElem) => {
                    const { id, Name, category, image } = curElem


                    return (
                        <>
                            <div className="box" key={id}>
                                <span className='count'>{id}</span>
                                <h5> {category}</h5>
                                <h1>{Name} </h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, eos recusandae illum voluptates voluptatem eligendi magnam magni omnis id cum atque qui, laborum suscipit minus maxime cumque voluptatum? Beatae sit cumque quia totam, suscipit officia ab ullam explicabo ipsam dignissimos!</p>
                                <hr />
                                <div className="read">READ</div>

                                <div className="card">
                                    <img src={image} alt="" />
                                </div>

                                <button className='orderNow'>order now</button>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Menucard;
