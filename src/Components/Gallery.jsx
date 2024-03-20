import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export default function Gallery({ view_data }) {
    const img = [
        'https://picsum.photos/400/300',
        'https://picsum.photos/300/200',
        'https://picsum.photos/500/1000',
        'https://picsum.photos/700/700',
        'https://picsum.photos/800/900',
        'https://picsum.photos/900/1000',
        'https://picsum.photos/800/800',
    ];
    const [data, setData] = useState({ img: '', i: 0 })

    const viewImg = (img, i) => {
        setData({ img, i })
    }
    const imgAction = (action) => {
        let i = data.i;
        if (action === 'next-img') {
            setData({ img: img[i + 1], i: i + 1 })
        }
        if (action === 'pre-img') {
            setData({ img: img[i - 1], i: i - 1 })
        }
        if (!action) { setData({ img: '', i: 0 }) }
    }

    return (
        <div className='mt-5'>
            {data?.img &&
                <div style={{
                    width: '100%',
                    background: 'black',
                    position: "fixed",
                    top: '8%',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                }}>
                    <button className='btn btn-danger' onClick={() => imgAction()} style={{ position: 'absolute', top: '10px', right: '10px' }}>X</button>
                    <i class="bi bi-arrow-left-circle-fill text-light fs-2" onClick={() => imgAction('pre-img')}></i>
                    <div className='image-view-div'>
                    <img src={data?.img} style={{ width: 'auto', maxWidth: '90%', maxHeight: "90%", margin:"auto" }} alt='dddddd' />
                    </div>
                    <i class="bi bi-arrow-right-circle-fill text-light fs-2" onClick={() => imgAction('next-img')}></i>

                </div>}
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
                <Masonry gutter='10px'>
                    {img?.map((item, key) => (
                        <img key={key} onClick={() => viewImg(item, key)} src={item} style={{ gap: '4', width: '100%', display: 'block' }} alt='ttt' />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
}
